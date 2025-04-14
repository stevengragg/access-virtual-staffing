"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const mockCompanies = [
    {
        name: "Cloud Scale®",
        website: "cloudscaleinc.com",
        location: "Chandigarh",
        totalRaised: "$0",
        companySize: "1-10 people",
        markets: ["Cloud Computing", "Cloud Management", "Cloud Data Services"],
        description:
            "Cloud Scale® is on a mission to simplify the development, deployment, and scaling of complex applications.",
        images: [
            "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
    },
];

const CompanyDisplay = () => {
    return (
        <Card className="p-6 shadow-md border-none rounded-lg w-full max-w-6xl mx-auto">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
                <Badge variant="destructive" className="shadow-medium">Top 5% of responders</Badge>
                <Badge variant="destructive" className="shadow-medium">Responds within a few days</Badge>
                <Badge variant="destructive" className="shadow-medium">Growing fast</Badge>
            </div>
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {/* Carousel */}
                <div className="md:col-span-2 relative">
                    <Carousel>
                        <CarouselContent>
                            {mockCompanies[0].images.map((image, index) => (
                                <CarouselItem key={index} className="flex justify-center">
                                    <Image
                                        src={image}
                                        alt="Company presentation"
                                        width={600}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute top-1/2 left-2 flex items-center justify-center">
                        <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                            </div>
                        <div className="absolute top-1/2 right-2 flex items-center justify-center">
                            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                        </div>
                    </Carousel>
                </div>

                {/* Company Details */}
                <CardContent className="p-4 rounded-lg border">
                    <h2 className="text-lg font-semibold">{mockCompanies[0].name}</h2>
                    <p className="text-blue-500 cursor-pointer">{mockCompanies[0].website}</p>
                    <p><strong>Location:</strong> {mockCompanies[0].location}</p>
                    <p><strong>Total Raised:</strong> {mockCompanies[0].totalRaised}</p>
                    <p><strong>Company Size:</strong> {mockCompanies[0].companySize}</p>
                    
                    <h3 className="font-semibold mt-4">Markets</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {mockCompanies[0].markets.map((market, index) => (
                            <Badge key={index} variant="outline" className="text-sm">
                                {market}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </div>
        </Card>
    );
};

export default CompanyDisplay;