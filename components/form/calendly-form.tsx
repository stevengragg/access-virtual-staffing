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
          url="https://calendly.com/steven-gragg/discovery-call-test"
          styles={{ height: "700px" }}
        />
      </div>
    </section>
  );
};
