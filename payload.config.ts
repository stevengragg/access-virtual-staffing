// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
// import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
// import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type {
  HandleUpload,
  HandleDelete,
  StaticHandler,
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
    collection: _collection,
    data: _data,
    req: _req,
    clientUploadContext: _clientUploadContext,
  }: Parameters<HandleUpload>[0]) {
    try {
      // Check if this is a metadata-only update (no new file being uploaded)
      const isMetadataUpdate = !file.buffer || file.buffer.length === 0;
      
      if (isMetadataUpdate) {
        console.log("Metadata-only update detected - preserving existing file data");
        // For metadata updates, don't modify the file object
        // Payload will handle the metadata fields (alt, caption) separately
        return;
      }

      // Ensure we have a valid filename for new uploads
      if (!file.filename) {
        throw new Error("No filename provided for upload");
      }

      // Sanitize the filename to prevent any unsafe characters
      const sanitizedFilename = file.filename
        .replace(/[^a-zA-Z0-9.-_]/g, '') // Remove any non-alphanumeric characters except dots, dashes, and underscores
        .replace(/\.+/g, '.') // Replace multiple dots with single dot
        .replace(/^\.+|\.+$/g, ''); // Remove leading/trailing dots

      if (!sanitizedFilename) {
        throw new Error("Invalid filename after sanitization");
      }

      console.log("Uploading new file to Cloudinary:", sanitizedFilename);

      // Upload new file to Cloudinary
      const uploadResult = await new Promise<UploadApiResponse>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: "auto", // auto-detect file type (image, video, etc.)
              public_id: `media/${sanitizedFilename.replace(/\.[^/.]+$/, "")}`, // Use sanitized filename without extension
              overwrite: false, // Do not overwrite if a file with the same name exists
              use_filename: false, // Don't use original filename to avoid conflicts
              unique_filename: true, // Generate unique filename if needed
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
      
      console.log("Successfully uploaded to Cloudinary:", uploadResult.public_id);
      
      file.filename = uploadResult.public_id; // Use Cloudinary's public_id as the file's unique name
      file.mimeType = `${uploadResult.format}`; // Set MIME type based on Cloudinary's format (e.g., image/png)
      file.filesize = uploadResult.bytes; // Set the actual file size in bytes, for admin display and validations
    } catch (err) {
      console.error("Upload Error", err);
      throw err; // Re-throw to let Payload handle the error properly
    }
  },

  async handleDelete({
    collection: _collection,
    doc: _doc,
    filename,
    req: _req,
  }: Parameters<HandleDelete>[0]) {
    console.log("handleDelete has been called");

    // if filename is present then we will look for that file
    if (!filename) {
      console.log("No filename provided for deletion");
      return;
    }

    try {
      // Sanitize filename for security
      const sanitizedFilename = filename.replace(/\.\./g, "").replace(/\\/g, "/");
      
      // We remove the file extension from the filename and then target the file
      // inside the "media/" folder on Cloudinary (which we used as the upload path)
      const publicId = sanitizedFilename.startsWith("media/") 
        ? sanitizedFilename.replace(/\.[^/.]+$/, "")
        : `media/${sanitizedFilename.replace(/\.[^/.]+$/, "")}`;
        
      await cloudinary.uploader.destroy(publicId);
      console.log(`Successfully deleted ${publicId} from Cloudinary`);
    } catch (error) {
      // if something error occured we will catch the error and respond the error in console
      console.error("Cloudinary Delete Error:", error);
    }
  },

  staticHandler: ((req, { params }) => {
    // Redirect to the Cloudinary URL instead of serving locally
    const cloudinaryUrl = cloudinary.url(`media/${params.filename}`, {
      secure: true,
    });
    return Response.redirect(cloudinaryUrl, 302);
  }) satisfies StaticHandler,
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
            // Simplified URL generation without extra parameters that might cause security issues
            if (!filename) return "";
            
            // Basic sanitization
            const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-_/]/g, '');
            
            return cloudinary.url(`media/${sanitizedFilename}`, { 
              secure: true
            });
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
