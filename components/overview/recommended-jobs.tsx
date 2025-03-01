"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import RecommendedJobCard from "./recommended-job-card";

const mockJobData = [
    {
        company: "Web3Connector",
        logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Core Protocol Architect/Engineer",
        location: "Berlin • New York • Tokyo • Remote only",
        salary: "$220k – $300k • No equity",
        isActivelyHiring: true,
        postedDaysAgo: 3,
    },
    {
        company: "TechNova",
        logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Senior Frontend Engineer",
        location: "San Francisco • Remote",
        salary: "$180k – $250k • Equity available",
        isActivelyHiring: false,
        postedDaysAgo: 5,
    },
    {
        company: "NextGen AI",
        logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Machine Learning Engineer",
        location: "London • Hybrid",
        salary: "$200k – $280k • No equity",
        isActivelyHiring: true,
        postedDaysAgo: 7,
    }
];

const RecommendedJobs = () => {
    return (
        <Card className="w-full p-6 border border-gray-200 flex flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="font-semibold">Recommended Jobs</h2>
                    <p className="text-gray-700 text-xs">Jobs where you're a top applicant based on your profile job search</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 py-4">
                {
                    mockJobData.map((job, index) => (
                        <RecommendedJobCard key={index} {...job} />
                    ))
                }

                {
                    mockJobData.length === 0 && (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <p className="text-gray-500">No recommended jobs at the moment</p>
                            <Button variant="outline">Explore more jobs</Button>
                        </div>
                    )
                }
            </div>
        </Card>
    );
};

export default RecommendedJobs;