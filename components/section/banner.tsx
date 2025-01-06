"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxCross2 } from "react-icons/rx";
import { ImageProps } from "@/types/general";
import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  heading: string;
  description: string;
  logo: string;
  button: LinkButtonProps;
};

export type Banner2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Banner2 = (props: Banner2Props) => {
  const { heading, description, logo, button } = {
    ...Banner2Defaults,
    ...props,
  } as Props;

  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Loading state to handle the initial flash
  useEffect(() => {
    // Check if the banner has been closed before using cookies
    const isBannerClosed = Cookies.get("bannerClosed");
    if (isBannerClosed) {
      setIsBannerVisible(false);
    }
    setIsLoading(false); // Set loading to false after the check
  }, []);

  const handleCloseBanner = () => {
    // Set a cookie when the user closes the banner
    Cookies.set("bannerClosed", "true", { expires: 30 }); // Expires in 30 days
    setIsBannerVisible(false);
  };
  // While loading, do not render the component
  if (isLoading) return null;
  if (!isBannerVisible) return null; // Don't render the banner if it's closed
  return (
    <section id="banner" className="">
      <div className="w-full relative flex flex-col items-stretch justify-start border border-black bg-white p-4 md:flex-row md:items-center md:px-4 md:py-3">
        <div className="rb-4 mb-4 mr-7 flex flex-col lg:flex-row flex-1 items-start md:mb-0 md:mr-8 lg:items-center">
          <a href={logo} target="_blank" className="lg:px-4">
            <svg
              width="139"
              height="34"
              viewBox="0 0 139 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#222325">
                <path d="M81.6463 13.1117H78.4949C76.4661 13.1117 75.3797 14.6592 75.3797 17.2363V26.5544H69.4034V13.1117H66.8677C64.839 13.1117 63.7526 14.6592 63.7526 17.2363V26.5544H57.7763V8.13963H63.7526V10.9393C64.7301 8.76575 66.0705 8.13963 68.063 8.13963H75.3797V10.9393C76.3572 8.76575 77.6976 8.13963 79.6901 8.13963H81.6463V13.1117ZM56.4721 18.7838H44.0103C44.3358 20.8466 45.6036 22.0251 47.7413 22.0251C49.3345 22.0251 50.4584 21.3621 50.8201 20.1836L56.1092 21.6942C54.8051 24.8986 51.5811 26.8508 47.7413 26.8508C41.2569 26.8508 38.2869 21.7311 38.2869 17.3482C38.2869 13.0391 40.8952 7.88251 47.3784 7.88251C54.2607 7.88251 56.5424 13.1129 56.5424 16.9804C56.5436 17.8267 56.5073 18.379 56.4721 18.7838ZM50.6761 15.2115C50.531 13.6283 49.4083 12.1547 47.3795 12.1547C45.4959 12.1547 44.3732 13.0022 44.0103 15.2115H50.6761ZM27.855 26.5556H33.1078L39.6636 8.13963H33.651L30.4633 18.8576L27.203 8.13963H21.2267L27.855 26.5556ZM3.3692 26.5556H9.3092V13.1117H14.96V26.5556H20.8649V8.13963H9.31037V6.99808C9.31037 5.74583 10.1802 4.9721 11.5557 4.9721H14.9612V0H10.577C6.26662 0 3.3692 2.689 3.3692 6.63026V8.14082H0V13.1129H3.3692V26.5556Z"></path>
                <path d="M86.9869 34V8.15269H90.4697V10.8905C91.5467 9.06569 93.7371 7.85986 96.2505 7.85986C101.708 7.85986 104.832 11.8749 104.832 17.3517C104.832 22.8273 101.564 26.8436 96.0714 26.8436C93.6657 26.8436 91.5116 25.7116 90.4709 23.9594V33.9988H86.9869V34ZM101.313 17.3529C101.313 13.52 99.0871 10.9643 95.7471 10.9643C92.3721 10.9643 90.1817 13.52 90.1817 17.3529C90.1817 21.1859 92.3721 23.7415 95.7471 23.7415C99.0871 23.7415 101.313 21.1859 101.313 17.3529Z"></path>
                <path d="M116.757 11.2189H114.136C110.834 11.2189 109.755 14.2127 109.755 18.2277V26.5519H106.274V8.15259H109.757V11.6939C110.582 9.24771 112.018 8.15259 114.568 8.15259H116.758V11.2189H116.757Z"></path>
                <path d="M115.91 17.3529C115.91 11.8404 119.823 7.86108 125.245 7.86108C130.666 7.86108 134.543 11.8404 134.543 17.3529C134.543 22.8655 130.666 26.8448 125.245 26.8448C119.823 26.8436 115.91 22.8643 115.91 17.3529ZM130.988 17.3529C130.988 13.5926 128.655 10.9643 125.243 10.9643C121.797 10.9643 119.463 13.5926 119.463 17.3529C119.463 21.1133 121.796 23.7416 125.243 23.7416C128.655 23.7416 130.988 21.1121 130.988 17.3529Z"></path>
                <path d="M139 24.5201V24.5629C139 25.814 138.003 26.8294 136.771 26.8294C135.541 26.8294 134.542 25.8152 134.542 24.5629V24.5201C134.542 23.269 135.539 22.2537 136.771 22.2537C138.001 22.2537 139 23.269 139 24.5201Z"></path>
              </g>
            </svg>
          </a>
          <div>
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-xs lg:text-sm">{description}</p>
          </div>
        </div>
        <div>
          <LinkButton {...button} />
        </div>
        <button className="absolute right-2 top-2 ml-4 md:static">
          <RxCross2 className="size-8 p-1" onClick={handleCloseBanner} />
        </button>
      </div>
    </section>
  );
};

export const Banner2Defaults: Banner2Props = {
  heading: "Unlock Top Talent on Fiverr with AVS",
  description:
    "Find Freelance Experts for Any Project – Start Here and Save More!",
  button: {
    navLink: {
      title: "Learn more",
      url: "https://go.fiverr.com/visit/?bta=1040143&brand=fp",
      follow: true,
    },
    variant: "default",
    size: "sm",
  },
  logo: "https://go.fiverr.com/visit/?bta=1040143&brand=fp",
};
