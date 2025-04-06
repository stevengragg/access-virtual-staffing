"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import useSWR from "swr";
import { fetchApi } from "@/services/fetch-api";
import { X } from "lucide-react";
import { useState } from "react";

interface ProfileData {
  fileAttachments: {
    id: string;
    filename: string;
    link: string;
    type: string;
  }[];
}

const UploadFilesForm = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const { data, error, isLoading, mutate } = useSWR<ProfileData>(
    "/profile",
    fetchApi
  );

  const fileFields = [
    {
      label: "Resume",
      name: "resume",
      type: "resume",
      preset: "ProfileResume",
    },
    {
      label: "1x1 Picture",
      name: "pfp",
      type: "professional_picture",
      preset: "ProfessionalPicture",
    },
    {
      label: "Internet Screenshot",
      name: "internetScreenshot",
      type: "internet",
      preset: "ProfileInternetScreenshot",
    },
    {
      label: "Computer Specs Screenshot",
      name: "computerSpecsScreenshot",
      type: "computer_specs",
      preset: "ProfileComputerSpecs",
    },
    {
      label: "Workstation Photo",
      name: "workstationPhoto",
      type: "work_station",
      preset: "ProfileWorkStation",
    },
  ];

  const handleUploadSuccess = async (
    type: string,
    result: CloudinaryUploadWidgetResults
  ) => {
    const info = result.info as CloudinaryUploadWidgetResults["info"];
    if (info && typeof info !== "string") {
      const { public_id, secure_url, original_filename } = info;
      setUploading(true);
      try {
        const response = await fetchApi<any>("/profile/upload-file", {
          method: "POST",
          body: JSON.stringify({
            type,
            publicId: public_id,
            fileUrl: secure_url,
            filename: original_filename || "Unknown",
          }),
        });

        if (!response.ok) {
          toast({
            title: "Error",
            description: `Failed to upload file. Please try again.`,
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Success",
          description: `${type} uploaded successfully!`,
          variant: "success",
        });

        mutate(); // Refresh the data after successful upload
      } catch (error) {
        console.error("Error uploading file:", error);
        toast({
          title: "Error",
          description: `Failed to upload ${type}. Please try again.`,
          variant: "destructive",
        });
      } finally {
        setUploading(false);
      }
    }
  };

  const handleDeleteFile = async (fileId: string) => {
    try {
      const response = await fetchApi<any>("/profile/upload-file", {
        method: "DELETE",
        body: JSON.stringify({ fileId }),
      });

      if (!response.ok) throw new Error("Failed to delete file");

      toast({
        title: "Success",
        description: "File deleted successfully!",
        variant: "success",
      });

      mutate(); // Refresh the data after successful deletion
    } catch (error) {
      console.error("Error deleting file:", error);
      toast({
        title: "Error",
        description: "Failed to delete file. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading file attachments.</p>;

  return (
    <form className="space-y-6 mb-24 p-4 w-full">
      <div className="space-y-4">
        {fileFields.map(({ label, name, type, preset }) => (
          <div
            key={name}
            className="grid grid-cols-4 items-start gap-4 border-b pb-8"
          >
            <label className="text-gray-700 font-medium text-sm">{label}</label>
            <div className="col-span-3 space-y-2">
              <CldUploadWidget
                options={{
                  sources: ["local", "google_drive", "dropbox"],
                  resourceType: "auto",
                  clientAllowedFormats: ["png", "jpg", "jpeg", "pdf"],
                }}
                onSuccess={(result) => handleUploadSuccess(type, result)}
                uploadPreset={preset}
              >
                {({ open }) => (
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={() => open()}
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : `Upload ${label}`}
                  </Button>
                )}
              </CldUploadWidget>
              <ul className="mt-2 space-y-1">
                {data?.fileAttachments
                  ?.filter((file) => file.type === type)
                  .map((file) => (
                    <li
                      key={file.id}
                      className="flex items-center justify-between space-x-4 p-2 rounded-lg border border-zinc-300"
                    >
                      <div className="flex items-center space-x-2 text-xs lg:text-sm">
                        <span>{file.filename}</span>
                        <a
                          href={file.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteFile(file.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default UploadFilesForm;
