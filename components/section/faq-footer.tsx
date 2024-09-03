import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ChevronRight } from "lucide-react";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: LinkButtonProps;
  questions: QuestionsProps[];
};

export type FaqFooter1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FaqFooter = (props: FaqFooter1Props) => {
  const {
    questions,
    heading,
    description,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...FaqFooter1Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl mx-auto">
        <div className="rb-12 mb-12 text-left md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 flex flex-col lg:flex-row items-center gap-2 md:mt-8">
          <p className="md:text-md text-deepBlue">{footerDescription}</p>
          <LinkButton {...button} className="text-deepBlue font-medium" />
        </div>
        {/* <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footerHeading}
            </h4>
            <p className="md:text-md">{footerDescription}</p>
            <div className="mt-6 md:mt-8">
              <LinkButton {...button} />
            </div>
          </div> */}
      </div>
    </section>
  );
};

export const FaqFooter1Defaults: FaqFooter1Props = {
  heading: "FAQs",
  description:
    "Find answers to common questions about virtual staffing and our services.",
  questions: [
    {
      title: "How does it work?",
      answer:
        "Virtual staffing works by connecting businesses with skilled professionals who work remotely. You can communicate with your virtual staff through online platforms and manage their tasks and projects just like you would with an in-house team.",
    },
    {
      title: "Why choose virtual staffing?",
      answer:
        "Virtual staffing offers numerous benefits, including access to a global talent pool, cost savings, flexibility, and scalability. It allows you to focus on core business activities while leaving non-core tasks to skilled professionals.",
    },
    {
      title: "Do you offer client support?",
      answer:
        "Yes, we provide dedicated client support to ensure your satisfaction. Our team is available to address any concerns or questions you may have throughout your engagement with us.",
    },
  ],
  footerDescription: "You have other questions?",
  button: {
    navLink: {
      title: "See more",
      url: "/faq",
      follow: false,
    },
    variant: "link2",
    size: "lg",
    icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
  },
};
