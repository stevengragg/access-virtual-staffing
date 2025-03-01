"use client";
import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { RxChevronLeft } from "react-icons/rx";

interface LayoutProps {
  children: ReactNode;
}

export default function EditProfileLayout({ children }: LayoutProps) {
    const pathname = usePathname();
    const router = useRouter();
    const isViewingSubmission = pathname.startsWith("/app/submissions/v/");

    return (

            <div className="h-fit overflow-auto">
                <section id="joblist_header" className="relative px-[5%] pt-8 md:pt-12">
                    <div className="container">
                        <div className="w-full max-w-lg flex items-center space-x-4">
                            {isViewingSubmission && (
                                <button 
                                    onClick={() => router.back()} 
                                    className="text-gray-600 hover:underline flex items-center space-x-1"
                                >
                                    <RxChevronLeft />
                                    <span>Back</span>
                                </button>
                            )}
                            <h1 className="text-2xl font-bold md:text-3xl">Applications</h1>
                            
                        </div>
                    </div>
                </section>
                <section
                    id="joblist_header"
                    className="relative px-[5%] pt-8 md:pt-6"
                >  
                    <div className="container">
                        {children}
                    </div>
                </section>
            </div>
    );
}
