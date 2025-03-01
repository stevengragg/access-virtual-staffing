import { IJobApplication } from "@/types/jobs"

type JobHeaderProps = {
    jobData: IJobApplication
}

const JobHeader = ({jobData}: JobHeaderProps) => {
    return (
        <div className="flex items-start justify-between">
            <div>
                <img src={jobData.logo} alt={jobData.company} className="w-12 h-12 mb-4 rounded-md object-contain" />
                <h2 className="text-xl font-semibold">{jobData.company}</h2>
                <p className="text-sm text-gray-600">
                    {jobData.position}
                </p>
                <p className="text-sm text-gray-500">{jobData.date}</p>
            </div>
        </div>
    )
}

export default JobHeader