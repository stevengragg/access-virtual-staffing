import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppRouterWithNormalParamsWithId } from "@/types/general";
import { FileText } from "lucide-react";
import { IJobApplication } from "@/types/jobs";
import JobHeader from "@/components/submissions/job/job-header";
import JobContent from "@/components/submissions/job/job-contents";

const job : IJobApplication = {
  id: 1,
  company: "Cloud Scale®",
  position: "Transforming Cloud, Data Center Management & profitability with Integrated Data-Insights",
  date: "Applied on yesterday",
  status: "Pending",
  logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
  job: {
    id: 1,
    resume: "01-21-2025_Kobe_invoice_0001.pdf",
    salaryMin: 10000,
    salaryMax: 20000,
    salaryCurrency: "Php",
    location: "Bulacan, Ph",
    jobEquity: "",
    about: "Sample Data",
    responsibilities: "Sample Data",
    requirements: "Sample Requirements",
    relocation: false,
    experience: "2-3 years"
  }
}

export default withPageAuthRequired(
  async function ViewJobSubmission({
    params,
  }: AppRouterWithNormalParamsWithId) {
    return (
      <div className="h-fit overflow-auto p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <JobHeader jobData={job} />

        <JobContent jobData={job}/>
      </div>
    );
  },
  { returnTo: "/app/submissions/v/:id" }
);
