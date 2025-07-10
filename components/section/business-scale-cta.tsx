import { CalendlyForm } from "../form/calendly-form";
import { LinkButtonProps } from "../ui/link-button";

type BusinessScalingCTAProps = {
  heading: string;
  subheading: string;
  agenda: { title: string; description: string }[];

  footerText?: string;
  additionalInfo?: React.ReactNode;
};
export const BusinessScalingCTA = (props: Partial<BusinessScalingCTAProps>) => {
  const { heading, subheading, agenda, footerText, additionalInfo } = {
    ...props,
  } as BusinessScalingCTAProps;

  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-zinc-100"
      id="calendly"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-x-6 md:gap-x-10 ">
        {/* Left Pane */}
        <div className="md:w-1/2 text-center md:text-left max-w-[512px]">
          {/* Heading & Subheading */}
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
            {heading}
          </h2>
          <p className="text-lg font-semibold text-deepBlue mt-2">
            {subheading}
          </p>

          {/* Agenda Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-zinc-900">
              What We&apos;ll Cover:
            </h3>
            <ul className="mt-4 space-y-4">
              {agenda.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-deepBlue">✔</span>
                  <div>
                    <p className="font-semibold text-zinc-900">{item.title}</p>
                    <p className="text-zinc-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Text */}
          {footerText && <p className="mt-6 text-zinc-700">{footerText}</p>}

          {/* Additional Info with Links */}
          {additionalInfo}
        </div>

        {/* Right Pane - Calendly Form */}
        <div className="w-full mx-auto md:w-1/2 mt-8 md:mt-0">
          <CalendlyForm />
        </div>
      </div>
    </section>
  );
};
