import { FileText } from "lucide-react"

type JobContentProps = {
    resume: string;
    status: StatusType;
}

type StatusType = "Pending" | "Not Accepted" | "Accepted" | "Failed";

const ApplicationContent = ({ resume, status }: JobContentProps) => {
    const statusConfig: Record<StatusType, { bgColor: string; dotColor: string; textColor: string; message: string }> = {
        "Pending": {
            bgColor: "bg-yellow-50",
            dotColor: "bg-yellow-400",
            textColor: "text-yellow-700",
            message: "Your application is awaiting review by Cloud Scale®. We’ll notify you when they make a decision."
        },
        "Not Accepted": {
            bgColor: "bg-gray-50",
            dotColor: "bg-gray-400",
            textColor: "text-gray-700",
            message: "Unfortunately, your application was not accepted. You can apply to other opportunities."
        },
        "Accepted": {
            bgColor: "bg-green-50",
            dotColor: "bg-green-400",
            textColor: "text-green-700",
            message: "Congratulations! Your application has been accepted. Expect further communication soon."
        },
        "Failed": {
            bgColor: "bg-red-50",
            dotColor: "bg-red-400",
            textColor: "text-red-700",
            message: "Your application process was unsuccessful. Consider applying again in the future."
        }
    };
    return (
        <>
        {/* TODO: make this a downloadable file onClick, Resume Attachment */}
            <div className="mt-4 flex items-center p-3 border rounded-lg bg-gray-50 cursor-pointer" onClick={() => window.open('/path-to-resume.pdf', '_blank')}>
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="ml-2 text-sm text-gray-800">{resume}</span>
            </div>

            {/* Application Status */}
            <div className={`mt-6 p-4 border rounded-lg ${statusConfig[status].bgColor} flex items-center`}>
                <div className={`h-4 w-4 ${statusConfig[status].dotColor} rounded-full mr-3`}></div>
                <div>
                    <p className={`font-semibold ${statusConfig[status].textColor}`}>{status}</p>
                    <p className="text-sm text-gray-800">
                        {statusConfig[status].message}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ApplicationContent