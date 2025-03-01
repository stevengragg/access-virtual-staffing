import React from "react";

type JobDisplayProps = {
    id: number;
    salaryMin: number;
    salaryMax: number;
    salaryCurrency: string;
    location: string;
    jobEquity: string;
    about: string;
    responsibilities: string[];
    requirements: string;
    relocation: boolean;
    experience: string;
    position: string;
};

const ApplicationDescription = ({
    id,
    salaryMin,
    salaryMax,
    salaryCurrency,
    location,
    jobEquity,
    about,
    responsibilities,
    requirements,
    position,
    relocation,
    experience,
}: JobDisplayProps) => {
    return (
        <div className="p-4 rounded-lg bg-white shadow-md">
            <h2 className="text-xl font-semibold">{position}</h2>
            <p className="text-gray-700">{salaryCurrency} {salaryMin} – {salaryMax} • {jobEquity || "No equity"}</p>
            
            <div className="mt-4">
                <h3 className="font-semibold">About the Job</h3>
                <p className="text-gray-600">{about}</p>
            </div>
            
            <div className="mt-4">
                <p className="text-gray-700 font-semibold">Mandatory Requirements:</p>
                <p className="text-gray-600">{requirements}</p>
            </div>
            
            <div className="mt-4">
                <p className="text-gray-700"><strong>Location:</strong> {location}</p>
            </div>
            
            <div className="mt-4">
                <h3 className="font-semibold">Responsibilities:</h3>
                <ul className=" text-gray-600">
                    {responsibilities}
                </ul>
            </div>
        </div>
    );
};

export default ApplicationDescription;
