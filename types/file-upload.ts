
export interface FileUploadProps {
    fieldName: string;
    label: string;
    acceptedTypes?: string[];
    maxSizeMB: number;
    onChange: (file: File | null) => void;
    value?: File | null;
}