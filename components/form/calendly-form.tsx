"use client";

import { InlineWidget } from "react-calendly";

type Props = {};

export const CalendlyForm = (props: Props) => {
  return (
    <section
      id="calendly_form_container"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-xl h-full overflow-hidden">
        <InlineWidget
          url={
            process.env.NEXT_PUBLIC_CALENDLY_LINK ||
            "https://calendly.com/themorningrush/access-virtual-staffing-strategy-session"
          }
          styles={{ height: "700px" }}
        />
      </div>
    </section>
  );
};
