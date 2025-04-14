"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import LinkButton from "../ui/link-button";
import { XIcon } from "lucide-react";
import { NoCloseDialogContent } from "../ui/no-close-dialog-content";

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
        className="fixed left-1/2 top-1/2 h-screen -translate-x-1/2 -translate-y-1/2 border-t bg-primaryBrightAqua px-[5%] pb-28 pt-16 transition ease-in-out data-[state=closed]:duration-700 data-[state=open]:duration-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-bottom data-[state=open]:slide-in-from-left-1/2 md:h-auto md:max-h-[80vh] md:w-[90%] md:px-12 md:py-16 lg:w-full lg:max-w-lg lg:p-16"
      >
        <DialogClose asChild>
          <button
            className="absolute right-4 top-4"
            onClick={handleCloseBanner}
          >
            <XIcon />
          </button>
        </DialogClose>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-8 text-center md:mb-10 lg:mb-12">
            <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Free Strategy Call
            </h2>
            <p className="md:text-md">
              Make an appointment now for us to know your virtual staffing
              requirements!
            </p>
            <div className="mt-4 md:mt-8">
              <LinkButton
                navLink={{
                  title: "Schedule a call with us",
                  url: "/book-a-meeting",
                  follow: false,
                }}
                variant="default"
                size="xl"
              />
            </div>
          </div>
        </div>
      </NoCloseDialogContent>
    </Dialog>
  );
};
