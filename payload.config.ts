// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
// import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
// import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type {
  HandleUpload,
  HandleDelete,
} from "@payloadcms/plugin-cloud-storage/types";
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import type { UploadApiResponse } from "cloudinary";
import path from "path";
import { buildConfig, PayloadRequest } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { resendAdapter } from "@payloadcms/email-resend";
import { v2 as cloudinary } from "cloudinary";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Categories } from "./collections/Categories";
import { Posts } from "./collections/Posts";
import { Footer } from "./Footer/config";
import { Header } from "./Header/config";
import { plugins } from "./plugins";
import { defaultLexical } from "@/fields/defaultLexical";
import { getServerSideURL } from "./utils/getURL";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryAdapter = () => ({
  name: "cloudinary-adapter",
  async handleUpload({
    file,
    collection,
    data,
    req,
    clientUploadContext,
  }: Parameters<HandleUpload>[0]) {
    try {
      // createing a function that will upload your file in cloudinary
      // Uploading the file to Cloudinary using upload_stream.
      // Since Cloudinary's upload_stream is callback-based, we wrap it in a Promise
      // so we can use async/await syntax for cleaner, easier handling.
      // It uploads the file with a specific public_id under "media/", without overwriting existing files.
      const uploadResult = await new Promise<UploadApiResponse>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: "auto", // auto-detect file type (image, video, etc.)
              public_id: `media/${file.filename.replace(/\.[^/.]+$/, "")}`, // Set custom file name without extension, and it also previxed the cleaned filename with media/
              overwrite: false, // Do not overwrite if a file with the same name exists
              use_filename: true, // Use original filename
            },
            (error, result) => {
              if (error) return reject(error);
              if (!result)
                return reject(new Error("No result returned from Cloudinary"));
              resolve(result); // hanlde result
            }
          );
          uploadStream.end(file.buffer); // this line send the file to cloudinary it means entire file is already in memory and will be send whole thing at once not in chunk
        }
      );
      file.filename = uploadResult.public_id; // Use Cloudinary's public_id as the file's unique name
      file.mimeType = `${uploadResult.format}`; // Set MIME type based on Cloudinary's format (e.g., image/png)
      file.filesize = uploadResult.bytes; // Set the actual file size in bytes, for admin display and validations
    } catch (err) {
      console.error("Upload Error", err);
    }
  },

  async handleDelete({
    collection,
    doc,
    filename,
    req,
  }: Parameters<HandleDelete>[0]) {
    console.log("handleDelete has been called");

    // if filename is present then we will look for that file
    try {
      // We remove the file extension from the filename and then target the file
      // inside the "media/" folder on Cloudinary (which we used as the upload path)
      await cloudinary.uploader.destroy(
        `media/${filename.replace(/\.[^/.]+$/, "")}`
      );
    } catch (error) {
      // if something error occured we will catch the error and respond the error in console
      console.error("Cloudinary Delete Error:", error);
    }
  },
  staticHandler() {
    return new Response("Not implemented", { status: 501 });
  },
});

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ["@/components/cms/BeforeLogin"],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ["@/components/cms/BeforeDashboard"],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [Users, Media, Categories, Posts, Pages],
  cors: [getServerSideURL()].filter(Boolean),
  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: cloudinaryAdapter,

          disableLocalStorage: true, // Prevent Payload from saving files to disk

          generateFileURL: ({ filename }) => {
            return cloudinary.url(`media/${filename}`, { secure: true });
          },
        },
      },
    }),
  ],
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true;

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get("authorization");
        return authHeader === `Bearer ${process.env.CRON_SECRET}`;
      },
    },
    tasks: [],
  },
  email: resendAdapter({
    defaultFromAddress: "no-reply@accessvirtualstaffing.com",
    defaultFromName: `Access Virtual Staffing <${
      process.env.NEXT_NO_REPLY_EMAIL || "no-reply@accessvirtualstaffing.com"
    }>`,
    apiKey: process.env.RESEND_API_KEY || "",
  }),
});
