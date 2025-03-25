"use client";

import { InlineWidget } from "react-calendly";

type Props = {};

export const CalendlyForm = () => {
  return (
    <div className="bg-white shadow-2xl rounded-lg shadow-[0px_5px_30px_rgba(0,0,0,0.5)] pt-2 w-full max-w-[512px]">
      <InlineWidget
        url={
          process.env.NEXT_PUBLIC_CALENDLY_LINK ||
          "https://calendly.com/themorningrush/access-virtual-staffing-strategy-session-1?preview_source=et_card&month=2025-03"
        }
        styles={{ height: "1100px", width: "100%" }}
      />
    </div>
  );
};
