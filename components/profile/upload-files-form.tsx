"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploadSchema } from "@/services/user/update-files";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import FileUpload from "@/components/profile/file-upload";
import { useProfileFiles } from "@/context/profile-files-context";

const UploadFilesForm = () => {
  const { handleSubmit, control, watch, formState } = useProfileFiles();
  // Define useFieldArray for each file field
  const resumeArray = useFieldArray({ control, name: "resume" });
  const pfpArray = useFieldArray({ control, name: "pfp" });
  const internetScreenshotArray = useFieldArray({
    control,
    name: "internetScreenshot",
  });
  const computerSpecsArray = useFieldArray({
    control,
    name: "computerSpecsScreenshot",
  });
  const workstationPhotoArray = useFieldArray({
    control,
    name: "workstationPhoto",
  });
  const attachmentsArray = useFieldArray({ control, name: "attachments" });

  //Sample request body that is sent
  /*
    "resume": [
      {
        "file": {}
      }
    ],
    "pfp": [],
    "internetScreenshot": [],
    "computerSpecsScreenshot": [],
    "workstationPhoto": [],
    "attachments": []
  }
  */

  const onSubmit = (data: FileUploadSchema) => {
    console.log(
      "📤 Data before FormData conversion:",
      JSON.stringify(data, null, 2)
    );

    const formData = new FormData();

    Object.entries(data).forEach(([key, files]) => {
      if (Array.isArray(files)) {
        files.forEach(({ file }) => {
          if (file) formData.append(key, file);
        });
      }
    });

    console.log("📤 FormData Contents:");
    Array.from(formData.entries()).forEach(([key, value]) => {
      console.log(
        `${key}:`,
        value instanceof File
          ? `(File: ${value.name}, Size: ${value.size} bytes)`
          : value
      );
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 mb-24 p-4 w-full"
    >
      <div className="space-y-4">
        {[
          {
            label: "Resume",
            field: resumeArray,
            name: "resume",
            types: ["application/pdf"],
            maxSize: 5,
          },
          {
            label: "1x1 Picture",
            field: pfpArray,
            name: "pfp",
            types: ["image/jpeg", "image/png", "image/webp"],
            maxSize: 2,
          },
          {
            label: "Internet Screenshot",
            field: internetScreenshotArray,
            name: "internetScreenshot",
            types: ["image/jpeg", "image/png", "image/webp"],
            maxSize: 5,
          },
          {
            label: "Computer Specs Screenshot",
            field: computerSpecsArray,
            name: "computerSpecsScreenshot",
            types: ["image/jpeg", "image/png", "image/webp"],
            maxSize: 5,
          },
          {
            label: "Workstation Photo",
            field: workstationPhotoArray,
            name: "workstationPhoto",
            types: ["image/jpeg", "image/png", "image/webp"],
            maxSize: 5,
          },
          {
            label: "Attachments",
            field: attachmentsArray,
            name: "attachments",
            types: [],
            maxSize: 10,
          },
        ].map(({ label, field, name, types, maxSize }) => (
          <div
            key={name}
            className="grid grid-cols-4 items-start gap-4 border-b pb-8"
          >
            <label className="text-gray-700 font-medium text-sm">{label}</label>

            <div className="col-span-3 space-y-2">
              {field.fields.map((file, index) => (
                <FileUpload
                  key={file.id}
                  fieldName={`${name}.${index}.file`}
                  label={`File ${index + 1}`}
                  acceptedTypes={types}
                  maxSizeMB={maxSize}
                  value={
                    watch(`${name as keyof FileUploadSchema}.${index}.file`) ||
                    null
                  }
                  onChange={(newFile) => {
                    if (newFile) {
                      field.update(index, { file: newFile });
                    } else {
                      field.remove(index);
                    }
                  }}
                />
              ))}

              <Button
                type="button"
                variant="secondary"
                onClick={() => field.append({ file: null })}
                className="text-sm"
              >
                + Add More
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button
        type="submit"
        className="bg-deepBlue rounded-lg px-4 py-2 w-full xl:w-[300px] self-end mt-12 mb-20 text-white"
      >
        Submit
      </Button>
    </form>
  );
};

export default UploadFilesForm;
