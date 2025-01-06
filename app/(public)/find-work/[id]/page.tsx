import { ViewJobContent } from "@/components/jobs/view-job-content";
import { ViewJobHeader } from "@/components/jobs/view-job-header";

type Params = Promise<{ id: string }>;
export default async function ViewJob({ params }: { params: Params }) {
  // Fetch the job
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      <ViewJobHeader />
      <ViewJobContent />
    </main>
  );
}
