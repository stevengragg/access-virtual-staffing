import { Card, CardContent } from "@/components/ui/card";
import { Headphones, ArrowRight, TrendingUp } from "lucide-react";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

export type HowItWorksStep = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type HowItWorks3Props = {
  heading: string;
  highlight: string;
  description: string;
  steps: HowItWorksStep[];
  button: LinkButtonProps;
};

export default function HowItWorks3(props: Partial<HowItWorks3Props>) {
  const { heading, highlight, description, steps, button } = {
    ...HowItWorks3Defaults,
    ...props,
  };
  return (
    <section id="how-it-works" className="bg-neutralDarker py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl text-white">
            {heading} <span className="text-robinsEggBlue">{highlight}</span>
          </h2>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className="bg-zinc-800 border-zinc-700 text-center p-8 shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-robinsEggBlue rounded-full flex items-center justify-center mx-auto">
                  <p className="text-2xl md:text-4xl font-extrabold text-zinc-900">
                    {idx + 1}
                  </p>
                </div>
                <h3 className="text-md md:text-2xl lg:text-3xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-4 flex items-center justify-center">
                  {step.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div
          className="mt-12 flex items-center justify-center gap-4 md:mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <LinkButton {...button} />
        </div>
      </div>
    </section>
  );
}

export const HowItWorks3Defaults: HowItWorks3Props = {
  heading: "How It ",
  highlight: "Works",
  description:
    "Our streamlined process ensures you're matched with the perfect virtual assistant to elevate your business operations.",
  steps: [
    {
      title: "Discovery Call",
      description:
        "We analyze your needs, challenges, and goals to understand exactly what support will drive your success.",
      icon: <Headphones className="w-8 h-8 text-robinsEggBlue" />,
    },
    {
      title: "Strategic Matching",
      description:
        "We pair you with a VA whose skills, experience, and personality align perfectly with your business needs.",
      icon: (
        <div className="flex items-center justify-center space-x-4">
          <div className="w-8 h-8 border-2 border-robinsEggBlue rounded-full"></div>
          <ArrowRight className="w-6 h-6 text-robinsEggBlue" />
          <div className="w-8 h-8 border-2 border-robinsEggBlue rounded-full"></div>
        </div>
      ),
    },
    {
      title: "Ongoing Optimization",
      description:
        "We continuously refine processes, provide training, and ensure your VA delivers exceptional results.",
      icon: <TrendingUp className="w-8 h-8 text-robinsEggBlue" />,
    },
  ],
  button: {
    navLink: {
      title: "Start Your Journey",
      url: "/book-a-meeting",
      follow: false,
    },
    size: "xl",
    variant: "cta1",
    icon: () => <ArrowRight className="text-deepZinc w-6 h-6" />,
  },
};
