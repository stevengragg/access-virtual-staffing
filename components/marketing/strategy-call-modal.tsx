"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import LinkButton from "../ui/link-button";
import { XIcon } from "lucide-react";
import { NoCloseDialogContent } from "../ui/no-close-dialog-content";
import Image from "next/image";

export const StrategyCallModal = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const isBannerClosed = Cookies.get("bannerClosed");
    if (isBannerClosed && isBannerClosed === "true") {
      setIsBannerVisible(false);
    } else {
      setTimeout(() => {
        setIsBannerVisible(true);
      }, 3000);
    }
    setIsLoading(false);
  }, []);

  const handleCloseBanner = () => {
    Cookies.set("bannerClosed", "true", { expires: 30 });
    setIsBannerVisible(false);
  };

  if (isLoading) return null;
  if (!isBannerVisible) return null;
  return (
    <Dialog defaultOpen={isBannerVisible}>
      <NoCloseDialogContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          return;
        }}
        onPointerDownOutside={(e) => {
          e.preventDefault();
          return;
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-t bg-primaryBlue p-6 transition ease-in-out data-[state=closed]:duration-700 data-[state=open]:duration-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-bottom data-[state=open]:slide-in-from-left-1/2 md:max-h-[80vh] md:w-[90%] md:p-8 lg:w-full lg:max-w-2xl lg:p-12"
      >
        <DialogClose asChild>
          <button
            className="absolute right-4 top-4 z-10 text-white"
            onClick={handleCloseBanner}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </DialogClose>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full h-48 md:h-64 md:w-1/2 rounded-lg overflow-hidden">
            <Image
              src="/img/promote-strategy-call-image.webp"
              alt="Business team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl text-white">
              Ready to boost productivity and reduce costs?
            </h2>
            <p className="mb-6 text-sm md:text-base text-white">
              Book a free strategy call to discover how we can help you scale
              your business with Virtual Staffing solutions.
            </p>
            <LinkButton
              navLink={{
                title: "Book Your Free Strategy Call",
                url: "/book-a-meeting#calendly",
                follow: false,
              }}
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </NoCloseDialogContent>
    </Dialog>
  );
};
