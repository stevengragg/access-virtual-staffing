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
  pointers?: string[];
  footer?: string;
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
          {questions.map((question: QuestionsProps, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer}
                <br />
                {question.pointers && question.pointers?.length
                  ? question.pointers.map(
                      (pointerItem: string, idx: number) => (
                        <p key={idx}>
                          {idx + 1}. {pointerItem}
                        </p>
                      )
                    )
                  : null}
                <br />
                {question.footer}
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
    "Find answers to common questions about Access Virtual Staffing and our services.",
  questions: [
    {
      title: "Why choose Access Virtual Staffing?",
      answer:
        "Choosing Access Virtual Staffing means partnering with a team dedicated to delivering top-notch virtual staffing solutions tailored to your needs. We provide highly skilled professionals who are proficient in English and, in some cases, bilingual in Spanish. Our transparent and efficient process ensures you find the best fit for your business while benefiting from our commitment to quality, integrity, and personalized support. Additionally, our flexible services and advanced technology support help streamline your operations, allowing you to focus on what matters most—growing your business.",
    },
    {
      title: "How do I request for a Virtual Staff?",
      answer:
        "To request a Virtual Staff, simply fill out our web form (www.accessvirtualstaffing.com/start-hiring) with the necessary details about your staffing needs. Once we receive your submission, our team will evaluate your request and then reach out to you for a quick verification call. This ensures that we fully understand your requirements and are aligned on the expectations before moving forward.",
    },
    {
      title: "How much does it cost?",
      answer:
        "The cost of our virtual staffing services depends on factors such as the type of tasks, the level of expertise required, and the number of hours needed. For more information, please contact us at support@accessvirtualstaffing.com",
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
