"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import { useEffect } from "react";

type Props = {
  heading: string;
  description: string;
};

export type CtaNewsLetterProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CtaNewsLetter = (props: CtaNewsLetterProps) => {
  const { heading, description } = {
    ...CtaNewsLetterDefaults,
    ...props,
  };

  useEffect(() => {
    // Load GHL script dynamically
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="newsletter"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-robinsEggBlueLighter"
    >
      <div className="container flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 w-full">
        <div className="w-full lg:w-1/2 lg:max-w-2xl">
          <h2 className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl text-neutralDarker text-center lg:text-left">
            <span className="text-robinsEggBlueDark">AVS</span> {heading}
          </h2>
          <p className="text-neutralDarker text-lg md:text-xl lg:text-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
            {description}
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-white  rounded-lg shadow-md">
          <div className="w-full">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Ikj8NJttZRGcTHXKV5u6"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-Ikj8NJttZRGcTHXKV5u6"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AVS Newsletter Form"
              data-height="492"
              data-layout-iframe-id="inline-Ikj8NJttZRGcTHXKV5u6"
              data-form-id="Ikj8NJttZRGcTHXKV5u6"
              title="AVS Newsletter Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const CtaNewsLetterDefaults: Props = {
  heading: "Newsletter",
  description:
    "Subscribe to our newsletter to get the latest blogs and updates.",
};
