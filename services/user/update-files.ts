import * as z from "zod";

const fileSchema = (allowedTypes: string[], maxSizeMB: number) =>
  z.array(
    z.object({
      file: z
        .instanceof(File)
        .nullable()
        .refine(
          (file) => !file || allowedTypes.includes(file.type),
          {
            message: `Invalid file type. Allowed types: ${allowedTypes.join(", ")}`,
          }
        )
        .refine(
          (file) => !file || file.size <= maxSizeMB * 1024 * 1024,
          {
            message: `File size must be under ${maxSizeMB}MB`,
          }
        ),
    })
  );

export const fileUploadSchema = z.object({
  resume: fileSchema(["application/pdf"], 5),
  pfp: fileSchema(["image/jpeg", "image/png", "image/webp"], 2),
  internetScreenshot: fileSchema(["image/jpeg", "image/png", "image/webp"], 5),
  computerSpecsScreenshot: fileSchema(["image/jpeg", "image/png", "image/webp"], 5),
  workstationPhoto: fileSchema(["image/jpeg", "image/png", "image/webp"], 5),
  attachments: z.array(z.object({ file: z.instanceof(File).nullable() })).optional(),
});

export type FileUploadSchema = z.infer<typeof fileUploadSchema>;

//Sample request body
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

export const onSubmit = (data: FileUploadSchema) => {
  console.log("📤 Data before FormData conversion:", JSON.stringify(data, null, 2));

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
      value instanceof File ? `(File: ${value.name}, Size: ${value.size} bytes)` : value
    );
  });
};
