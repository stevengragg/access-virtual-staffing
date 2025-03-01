import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import SubmissionPages from "@/components/submissions/tab-holder";

export default withPageAuthRequired(
  async function Submissions() {
    return (
      <div className="h-[calc(100vh-4.5rem)] overflow-auto">
        <SubmissionPages />
      </div>
    );
  },
  { returnTo: "/app/submissions" }
);
