"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/profile/file-upload";
import { fileUploadSchema, onSubmit, FileUploadSchema } from "@/services/user/update-files";

const FileUploadForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FileUploadSchema>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: {
      resume: [],
      pfp: [],
      internetScreenshot: [],
      computerSpecsScreenshot: [],
      workstationPhoto: [],
      attachments: [],
    },
  });

  // Define useFieldArray for each file field
  const resumeArray = useFieldArray({ control, name: "resume" });
  const pfpArray = useFieldArray({ control, name: "pfp" });
  const internetScreenshotArray = useFieldArray({ control, name: "internetScreenshot" });
  const computerSpecsArray = useFieldArray({ control, name: "computerSpecsScreenshot" });
  const workstationPhotoArray = useFieldArray({ control, name: "workstationPhoto" });
  const attachmentsArray = useFieldArray({ control, name: "attachments" });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-24">
      <div className="space-y-4">
        {[
          { label: "Resume", field: resumeArray, name: "resume", types: ["application/pdf"], maxSize: 5 },
          { label: "1x1 Picture", field: pfpArray, name: "pfp", types: ["image/jpeg", "image/png", "image/webp"], maxSize: 2 },
          { label: "Internet Screenshot", field: internetScreenshotArray, name: "internetScreenshot", types: ["image/jpeg", "image/png", "image/webp"], maxSize: 5 },
          { label: "Computer Specs Screenshot", field: computerSpecsArray, name: "computerSpecsScreenshot", types: ["image/jpeg", "image/png", "image/webp"], maxSize: 5 },
          { label: "Workstation Photo", field: workstationPhotoArray, name: "workstationPhoto", types: ["image/jpeg", "image/png", "image/webp"], maxSize: 5 },
          { label: "Attachments", field: attachmentsArray, name: "attachments", types: [], maxSize: 10 },
        ].map(({ label, field, name, types, maxSize }) => (
          <div key={name} className="grid grid-cols-4 items-start gap-4 border-b pb-8">
            {/* Label (1/4) */}
            <label className="text-gray-700 font-medium text-sm">{label}</label>

            {/* File Upload Field (3/4) */}
            <div className="col-span-3 space-y-2">
              {field.fields.map((file, index) => (
                <FileUpload
                  key={file.id}
                  fieldName={`${name}.${index}.file`} // ✅ Correct field name
                  label={`File ${index + 1}`}
                  acceptedTypes={types}
                  maxSizeMB={maxSize}
                  value={watch(`${name as keyof FileUploadSchema}.${index}.file`) || null}
                  onChange={(newFile) => {
                    if (newFile) {
                      field.update(index, { file: newFile });
                    } else {
                      field.remove(index);
                    }
                  }}
                />
              ))}

              <Button type="button" variant="secondary" onClick={() => field.append({ file: null })} className="text-sm">
                + Add More
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button type="submit" className="bg-deepBlue rounded-lg px-4 py-2 w-full md:w-[300px] self-end mt-12 mb-20 text-white">
        Upload Files
      </Button>
    </form>
  );
};

export default FileUploadForm;
