import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  footerHeading: string;
  footerDescription: string;
  button: LinkButtonProps;
  questions: QuestionsProps[];
};

export type Faq1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FaqContent = (props: Faq1Props) => {
  const { questions, footerHeading, footerDescription, button } = {
    ...Faq1Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg">
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
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <LinkButton {...button} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq1Defaults: Faq1Props = {
  questions: [
    {
      title: "What is virtual staffing?",
      answer:
        "Virtual staffing is the practice of hiring remote workers to perform tasks and projects for your business. It allows you to access top-tier talent from anywhere in the world, saving you time and money on traditional in-house hiring.",
    },
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
      title: "What services do you offer?",
      answer:
        "Access Virtual Staffing offers a wide range of virtual staffing solutions, including administrative support, customer service, marketing, and more. Our talented virtual assistants are skilled in various areas to meet your specific business needs.",
    },
    {
      title: "How much does it cost?",
      answer:
        "The cost of our virtual staffing services depends on factors such as the type of tasks, the level of expertise required, and the number of hours needed. We offer flexible pricing options to accommodate different budgets.",
    },
    {
      title: "What is the onboarding process?",
      answer:
        "Our onboarding process is designed to be seamless and efficient. Once you sign up with us, we will guide you through the necessary steps to get started, including understanding your requirements, matching you with a suitable virtual assistant, and providing training if needed.",
    },
    {
      title: "Do you offer client support?",
      answer:
        "Yes, we provide dedicated client support to ensure your satisfaction. Our team is available to address any concerns or questions you may have throughout your engagement with us.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Contact us for more information.",
  button: {
    navLink: {
      title: "Contact Us",
      url: "/contact-us",
      follow: false,
    },
    variant: "secondary",
    size: "lg",
  },
};
