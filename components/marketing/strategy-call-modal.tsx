"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import LinkButton from "../ui/link-button";
import { XIcon } from "lucide-react";
import { NoCloseDialogContent } from "../ui/no-close-dialog-content";

// type Props = {
//   heading: string;
//   description: string;
//   button: ButtonProps;
// };

// export type StrategyCallModalProps = React.ComponentPropsWithoutRef<"section"> &
//   Partial<Props>;

export const StrategyCallModal = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state to handle the initial flash
  useEffect(() => {
    // Check if the banner has been closed before using cookies
    const isBannerClosed = Cookies.get("bannerClosed");
    if (isBannerClosed && isBannerClosed === "true") {
      setIsBannerVisible(false);
    } else {
      setTimeout(() => {
        setIsBannerVisible(true);
      }, 3000);
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
