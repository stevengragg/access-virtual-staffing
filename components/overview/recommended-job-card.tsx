import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type JobCardProps = {
    company: string;
    logo: string;
    position: string;
    location: string;
    salary: string;
    isActivelyHiring: boolean;
    postedDaysAgo: number;
};

const RecommendedJobCard = ({
    company,
    logo,
    position,
    location,
    salary,
    isActivelyHiring,
    postedDaysAgo,
}: JobCardProps) => {
    return (
        <Card className="w-full p-5 border border-gray-300 rounded-lg shadow-sm flex flex-col gap-4">
            {/* Company & Logo */}
            <div className="flex items-center gap-4">
                <Image src={logo} alt={`${company} logo`} width={48} height={48} className="rounded-md" />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-gray-900">
                        {company}
                        {isActivelyHiring && <span className="ml-2 text-green-600 text-sm">• Actively Hiring</span>}
                    </h3>
                    <p className="text-sm text-gray-600">{position}</p>
                </div>
            </div>

            <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-700">{location} • {salary}</p>
                <p className="text-xs text-green-600 mt-1">
                    Recruiter recently active • Posted {postedDaysAgo} days ago
                </p>
            </div>

            <div className="flex gap-3 mt-3 justify-start">
                <Button variant="outline">Save Job</Button>
                <Button>View Details</Button>
            </div>
        </Card>
    );
};

export default RecommendedJobCard;
