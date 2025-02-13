import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {FileUploadProps} from "@/types/file-upload";

const FileUpload: React.FC<FileUploadProps> = ({
  fieldName,
  label,
  acceptedTypes = [],
  maxSizeMB,
  onChange,
  value,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (!selectedFile) return;

    if (acceptedTypes.length > 0 && !acceptedTypes.includes(selectedFile.type)) {
      alert(`Invalid file type. Allowed: ${acceptedTypes.join(", ")}`);
      return;
    }
    if (selectedFile.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must be under ${maxSizeMB}MB`);
      return;
    }

    onChange(selectedFile);
  };

  return (
    <div className="flex flex-col space-y-1 px-4">
      <Label htmlFor={fieldName} className="text-gray-600">
        {label}
      </Label>

      <div className="relative flex items-center gap-4">
        <Input
          id={fieldName}
          type="file"
          accept={acceptedTypes.join(",")}
          onChange={handleFileChange}
          className="hidden"
        />
        <Button
          onClick={() => document.getElementById(fieldName)?.click()}
          className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 transition rounded-md"
        >
          {value ? "Change File" : "Upload File"}
        </Button>

        {value && (
          <div className="flex items-center space-x-2 text-xs text-gray-600 truncate">
            <span className="max-w-[500px] truncate">{value.name}</span>
            <button
              onClick={() => onChange(null)}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <X size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
