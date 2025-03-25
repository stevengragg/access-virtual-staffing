import { CalendlyForm } from "../form/calendly-form";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type BusinessScalingCTAProps = {
  heading: string;
  subheading: string;
  agenda: { title: string; description: string }[];
  buttons: LinkButtonProps[];
  footerText?: string; // Main paragraph text
  additionalInfo?: string; // New additional text (from the image)
};
export const BusinessScalingCTA = (props: Partial<BusinessScalingCTAProps>) => {
  const { heading, subheading, agenda, buttons, footerText, additionalInfo } = {
    ...props,
  } as BusinessScalingCTAProps;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-x-6 md:gap-x-10 ">
        {/* Left Pane */}
        <div className="md:w-1/2 text-center md:text-left max-w-[512px]">
          {/* Heading & Subheading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {heading}
          </h2>
          <p className="text-lg font-semibold text-primaryBrightAqua mt-2">
            {subheading}
          </p>

          {/* Agenda Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900">
              What We&apos;ll Cover:
            </h3>
            <ul className="mt-4 space-y-4">
              {agenda.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primaryBrightAqua">✔</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Text */}
          {footerText && <p className="mt-6 text-gray-700">{footerText}</p>}

          {/* Additional Info with Links */}
          {additionalInfo && (
            <p className="mt-4 text-gray-700">
              {additionalInfo}{" "}
              <a
                href="mailto:test@accessvirtualstaffing.com"
                className="text-primaryBrightAqua underline"
              >
                contact us
              </a>
              , and we’ll arrange a suitable time for you.
              <br />
              Are you applying as a Virtual Assistant?{" "}
              <a href="/apply" className="text-primaryBrightAqua underline">
                Submit your application here.
              </a>
            </p>
          )}
        </div>

        {/* Right Pane - Calendly Form */}
        <div className="md:w-1/2">
          <CalendlyForm />
        </div>
      </div>
    </section>
  );
};
