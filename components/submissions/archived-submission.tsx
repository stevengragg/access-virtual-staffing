"use client";

import JobApplicationCard from "@/components/submissions/job-application-card";
import { useJobSubmissions } from "@/hooks/use-job-submissions";
import { Button } from "../ui/button";

const ArchivedSubmissions = () => {
  const { jobApplications, loading, hasMore, loadMore } = useJobSubmissions({
    filter: "archived",
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      {jobApplications.map((j) => (
        <JobApplicationCard jobApplication={j} key={j.applicationPublicId} />
      ))}
      {jobApplications.length === 0 && !loading && (
        <p className="text-center text-gray-500">No archived submissions</p>
      )}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
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

export default ArchivedSubmissions;
