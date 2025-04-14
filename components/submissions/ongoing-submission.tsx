"use client";

import JobApplicationCard from "@/components/submissions/job-application-card";
import { useJobSubmissions } from "@/hooks/use-job-submissions";
import { Button } from "../ui/button";

const OngoingSubmission = () => {
  const { jobApplications, loading, hasMore, loadMore } = useJobSubmissions({
    filter: "on_going",
  });

  if (loading) return <p className="text-center text-zinc-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {jobApplications.map((j) => (
        <JobApplicationCard jobApplication={j} key={j.applicationPublicId} />
      ))}
      {jobApplications.length === 0 && !loading && (
        <p className="text-center text-zinc-500">No ongoing submissions</p>
      )}

      {hasMore && !loading && (
        <div className="mt-4 flex justify-center">
          <Button variant="ghost" onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default OngoingSubmission;
