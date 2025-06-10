"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  inputPlaceholder: string;
  termsAndConditions: string;
};

export type CtaNewsLetterProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CtaNewsLetter = (props: CtaNewsLetterProps) => {
  const { heading, description, inputPlaceholder, termsAndConditions } = {
    ...CtaNewsLetterDefaults,
    ...props,
  };

  return (
    <section
      id="newsletter"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-softGray"
    >
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20">
        <div className="w-full max-w-lg">
          <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-deepBlue md:mb-4 md:text-5xl lg:text-6xl text-center lg:text-left">
            {heading}
          </h2>
          <p className="text-zinc-800 md:text-md text-center lg:text-left">
            {description}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form
            action="https://accessvirtualstaffing.us7.list-manage.com/subscribe/post?u=8af96849d97864dc4fc3babe7&amp;id=3dab04282a&amp;f_id=00d1ace4f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate flex flex-row items-center gap-4"
            target="_blank"
          >
            <div className="flex-1">
              <Label
                htmlFor="mce-EMAIL"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                placeholder={inputPlaceholder}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primaryBlue focus:ring-primaryBlue sm:text-sm"
              />
              <div
                className="hidden"
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_8af96849d97864dc4fc3babe7_3dab04282a"
                  tabIndex={-1}
                />
              </div>
              <Button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="bg-deepBlue text-white py-2 px-6 rounded-md hover:bg-oceanBlue mt-5"
              >
                Subscribe
              </Button>
            </div>
          </form>
          <div
            className="mt-4 text-center"
            dangerouslySetInnerHTML={{ __html: termsAndConditions }}
          />
        </div>
      </div>
    </section>
  );
};

export const CtaNewsLetterDefaults: Props = {
  heading: "AVS Newsletter",
  description:
    "Subscribe to our newsletter to get the latest updates and offers in Hiring Virtual Staff",
  inputPlaceholder: "Enter your email",
  termsAndConditions: `
    <p class='text-xs'>
      By clicking "Subscribe" you're confirming that you agree with our
      <a href='/terms-of-service' class='underline'>Terms and Conditions</a>.
    </p>
  `,
};
