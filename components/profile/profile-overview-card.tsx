'use client'

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

type IProfileProps = {
  profile: {
    resume: string;
    fullName: string;
    email: string;
    address: string;
    phoneNumber: string;
    skypeID: string;
    whyFit: string;
    whatStrengths: string;
    whatNeedImprovement: string;
    dateOfBirth: string;
    hasPaypal: boolean;
    contentLinks: string[];
    numberOfChildren: number;
    videoLinks: string[];
    assessmentTests: string[];
    internetProvider: string;
    numberOfMonitors: string;
    numberOfExperience: string;
    salaryUnit: string;
    desiredSalary: string;
    workSamples: string[];
  };
}

const ProfileCard = ({ profile }: IProfileProps) => {
  const { user, error, isLoading } = useUser();
  return (
    <Card className="xl:w-2/3 w-full bg-gray-100 border border-gray-500 max-w-3xl mx-auto xl:px-12 py-12 xl:py-8 shadow-lg rounded-lg relative">
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-12 right-20"
      >
        <Badge variant="outline" className="text-blue-600 border-blue-600">
          Resume
        </Badge>
      </a>

      <CardContent>
        <Image
            src={user?.picture || ""}
            alt="Avatar"
            className="size-20 rounded-full object-cover"
            width={150}
            height={150}
          />
        <h2 className="text-2xl font-bold mt-4">{profile.fullName}</h2>
        <p className="text-gray-500">{profile.email}</p>
        <p className="text-gray-500">{profile.phoneNumber}</p>
        <p className="text-gray-500">{profile.address}</p>
        <p className="text-gray-500">Skype ID: {profile.skypeID}</p>

        <Separator className="my-4" />

        <h3 className="text-lg font-semibold">Why You&apos;re a Good Fit</h3>
        <p className="text-gray-700">{profile.whyFit}</p>

        <h3 className="text-lg font-semibold mt-4">Strengths</h3>
        <p className="text-gray-700">{profile.whatStrengths}</p>

        <h3 className="text-lg font-semibold mt-4">Areas for Improvement</h3>
        <p className="text-gray-700">{profile.whatNeedImprovement}</p>

        <Separator className="my-4" />

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 text-sm text-gray-700">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Date of Birth:</span>
              <span>{profile.dateOfBirth}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Has PayPal:</span>
              <span>{profile.hasPaypal ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Children:</span>
              <span>{profile.numberOfChildren}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Internet Provider:</span>
              <span>{profile.internetProvider}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Monitors:</span>
              <span>{profile.numberOfMonitors}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Experience:</span>
              <span>{profile.numberOfExperience} years</span>
            </div>
          </div>
        </div>


        <Separator className="my-4" />

        <h3 className="text-lg font-semibold">Salary Expectations</h3>
        <p className="text-gray-700">
          {profile.salaryUnit} {profile.desiredSalary}
        </p>

        <Separator className="my-4" />

        <h3 className="text-lg font-semibold">Links</h3>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {profile.contentLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className="flex items-center justify-between"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Content {index + 1} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          ))}
          {profile.videoLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className="flex items-center justify-between"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Video {index + 1} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          ))}
          {profile.assessmentTests.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className="flex items-center justify-between"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Test {index + 1} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          ))}
          {profile.workSamples.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className="flex items-center justify-between"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Work Sample {index + 1} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
