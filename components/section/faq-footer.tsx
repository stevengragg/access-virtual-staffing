import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

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
  buttons: LinkButtonProps[];
  questions: QuestionsProps[];
};

export type FaqFooter1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FaqFooter = (props: FaqFooter1Props) => {
  const {
    questions,
    heading,
    description,
    footerHeading: _footerHeading,
    footerDescription,
    buttons,
  } = {
    ...props,
  } as Props;
  return (
    <section
      id="faq_footer"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-robinsEggBlueLighter"
    >
      <div className="container mx-auto">
        <div className="rb-12 mb-12 text-left md:mb-18 lg:mb-20 text-neutralDarker">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple" defaultValue={["item-0"]}>
          {questions.map((question: QuestionsProps, index: number) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-neutralDarker"
            >
              <AccordionTrigger className="md:py-5 text-lg md:text-xl lg:text-2xl font-semibold text-neutralDarker">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-neutralDarker text-md md:text-lg lg:text-xl">
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
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-4 md:mt-8">
          <p className="text-md md:text-xl lg:text-2xl font-semibold text-robinsEggBlue">
            {footerDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {buttons?.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>
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
