"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import JobApplicationCard from "@/components/submissions/job-application-card";

import { useJobSubmissions } from "@/hooks/use-job-submissions";

const AppliedJobs = () => {
  const { jobApplications, loading, hasMore, loadMore } = useJobSubmissions({
    filter: "on_going",
  });

  if (loading) return <p className="text-center text-zinc-500">Loading...</p>;

  return (
    <Card className="w-full p-6 border border-gray-200 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-semibold">Applied Jobs</h2>
          <p className="text-gray-700 text-xs">Jobs you recently applied for</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-4">
        {jobApplications.map((j) => (
          <JobApplicationCard key={j.applicationPublicId} jobApplication={j} />
        ))}
        {jobApplications.length === 0 && !loading && (
          <p className="text-center text-zinc-500">No applied jobs</p>
        )}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center w-full">
          <Button
            variant="ghostBlue"
            size="sm"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "View All Applied Jobs"}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default AppliedJobs;
