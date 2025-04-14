import { getProgressReadableText, getProgressColor } from "@/lib/get-progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Progress, Status } from "@/types/jobs";
import { Hand } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type JobContentProps = {
  status: Status;
  progress: Progress;
};

const ApplicationContent = ({ status, progress }: JobContentProps) => {
  const progressConfig: Record<
    Progress,
    { bgColor: string; dotColor: string; textColor: string; message: string }
  > = {
    in_review: {
      bgColor: "bg-blue-50",
      dotColor: "bg-blue-400",
      textColor: "text-blue-700",
      message: "Your application is currently under review.",
    },
    reviewed: {
      bgColor: "bg-green-50",
      dotColor: "bg-green-400",
      textColor: "text-green-700",
      message: "Your application has been reviewed. Await further updates.",
    },
    declined_initial_interview: {
      bgColor: "bg-red-50",
      dotColor: "bg-red-400",
      textColor: "text-red-700",
      message: "Your application was declined during the initial interview.",
    },
    initial_interview: {
      bgColor: "bg-yellow-50",
      dotColor: "bg-yellow-500",
      textColor: "text-yellow-800",
      message: "You have been scheduled for an initial interview.",
    },
    for_client_interview: {
      bgColor: "bg-purple-50",
      dotColor: "bg-purple-400",
      textColor: "text-purple-700",
      message: "You are being considered for a client interview.",
    },
    declined_after_interview: {
      bgColor: "bg-red-50",
      dotColor: "bg-red-400",
      textColor: "text-red-700",
      message: "Your application was declined after the interview.",
    },
    make_offer: {
      bgColor: "bg-green-100",
      dotColor: "bg-green-500",
      textColor: "text-green-800",
      message: "An offer is being prepared for you.",
    },
    hired_signed: {
      bgColor: "bg-green-100",
      dotColor: "bg-green-600",
      textColor: "text-green-900",
      message: "Congratulations! You have been hired and signed the contract.",
    },
    endorsed: {
      bgColor: "bg-blue-100",
      dotColor: "bg-blue-500",
      textColor: "text-blue-800",
      message: "You have been endorsed for this position.",
    },
    reserved_for_future_opening: {
      bgColor: "bg-gray-50",
      dotColor: "bg-gray-400",
      textColor: "text-gray-700",
      message: "Your application is reserved for future openings.",
    },
  };

  return (
    <>
      <div className="my-2">
        <Badge variant={status === "on_going" ? "warning" : "archived"}>
          {status === "on_going" ? "Ongoing" : "Archived"}
        </Badge>
      </div>
      {/* TODO: make this a downloadable file onClick, Resume Attachment */}
      <Alert>
        <Hand className="h-4 w-4" />
        <AlertTitle className="font-semibold">Heads up!</AlertTitle>
        <AlertDescription>
          You shared your profile details and file attachments to the recruiter.
        </AlertDescription>
      </Alert>

      {/* Application Progress */}
      <Alert
        className={cn(
          `mt-6 p-4 border rounded-lg ${progressConfig[progress].bgColor} flex items-center`
        )}
      >
        <div
          className={`h-4 w-4 ${progressConfig[progress].dotColor} rounded-full mr-3`}
        ></div>
        <div>
          <AlertTitle
            className={cn("font-semibold", progressConfig[progress].textColor)}
          >
            {getProgressReadableText(progress)}
          </AlertTitle>
          <AlertDescription className="text-sm text-zinc-800">
            {progressConfig[progress].message}
          </AlertDescription>
        </div>
      </Alert>
    </>
  );
};

export default ApplicationContent;
