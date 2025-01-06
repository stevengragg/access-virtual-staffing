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
  pointers?: string[];
  footer?: string;
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
    <section id="content" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg">
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
      title: "Why choose Access Virtual Staffing?",
      answer:
        "Choosing Access Virtual Staffing means partnering with a team dedicated to delivering top-notch virtual staffing solutions tailored to your needs. We provide highly skilled professionals who are proficient in English and, in some cases, bilingual in Spanish. Our transparent and efficient process ensures you find the best fit for your business while benefiting from our commitment to quality, integrity, and personalized support. Additionally, our flexible services and advanced technology support help streamline your operations, allowing you to focus on what matters most—growing your business.",
    },
    {
      title: "Why use someone offshore and not someone locally?",
      answer:
        "Hiring virtual assistants from the Philippines, Colombia, and other Latin American countries offers numerous advantages, including cost-effectiveness, high English proficiency, and a strong work ethic. The Philippines is renowned for its large pool of skilled professionals who excel in various fields and consistently deliver high-quality work remotely. For employers seeking bilingual talent, Colombia and other Latin American countries are ideal, as many professionals in these regions are fluent in both Spanish and English. This bilingual capability is particularly valuable for businesses looking to expand their reach in Spanish-speaking markets. Additionally, the cultural compatibility, adaptability, and dedication of workers from these regions make them an excellent choice for remote staffing solutions.",
    },
    {
      title: "What type of virtual staff can I hire?",
      answer:
        "You can hire a diverse range of virtual staff to meet virtually any business need. From administrative assistants who handle scheduling and email management to customer service representatives who provide exceptional support across various channels, the possibilities are extensive. Virtual staff also includes specialized roles such as data entry clerks, social media managers, graphic designers, and marketing specialists, all of whom can contribute significantly to your business operations. Essentially, any job that does not require an in-person presence can be effectively managed by skilled, reliable remote professionals. Whether you need IT support, project management, content creation, or even paralegal who can research and write legal documents. Almost any task can be efficiently performed by trained virtual staff, allowing you to focus on your core business while leveraging the expertise of a global talent pool.",
    },
    {
      title: "How do I request for a Virtual Staff?",
      answer:
        "To request a Virtual Staff, simply fill out our web form (www.accessvirtualstaffing.com/start-hiring) with the necessary details about your staffing needs. Once we receive your submission, our team will evaluate your request and then reach out to you for a quick verification call. This ensures that we fully understand your requirements and are aligned on the expectations before moving forward.",
    },
    {
      title: "What happens after I submit the webform?",
      answer:
        "After you submit the webform, we initiate our perfected intake process called PPE: Prepare, Plan, Execute.",
      pointers: [
        "Prepare: We start by contacting you—either through a call or an in-person visit—to ensure you're fully prepared to onboard a virtual staff member. We want to confirm that you have everything in place to make the hiring process a success.",
        "Plan: Together, we’ll develop a detailed plan outlining the tasks you’ll delegate to the virtual worker and how you’ll manage them. This step is crucial in setting up both the worker and your team for success.",
        "Execute: While we handle backend administrative tasks such as timekeeping, managing performance issues, and processing payroll, it's essential that you take an active role in preparing and guiding your virtual worker. On their first day, be sure to warmly welcome them and clearly communicate your rules, regulations, work hours, and expectations. Outline their deliverables and provide any necessary training. Remember, while they may be working virtually, they are real people, eager to contribute and shape their future through this opportunity.",
      ],
      footer:
        "Our goal is to ensure a smooth and successful integration of the virtual staff into your operations.",
    },
    {
      title: "What services do you offer?",
      answer:
        'Access Virtual Staffing offers a wide range of services: "Basic Plan:  Recruiting and Payroll", "Standard Plan:  Advance Recruiting Solutions", and "Specialized Services:  a tailored training program to elevate your team\'s capabilities".',
    },
    {
      title: "How much does it cost?",
      answer:
        "The cost of our virtual staffing services depends on factors such as the type of tasks, the level of expertise required, and the number of hours needed. For more information, please contact us at support@accessvirtualstaffing.com",
    },
    {
      title: "What is the selection process?",
      answer:
        "Once we have shortlisted candidates, we will endorse them to the requesting employer. You will then have the opportunity to interview the candidates and select the one who best fits your needs. After you've made your selection, we will handle the orientation process to ensure the worker is fully prepared and ready to start.",
    },
    {
      title:
        "What should I do if the contractor asks about their salary or benefits?",
      answer:
        "If the contractor inquires about their salary or benefits, kindly direct them to Access Virtual Staffing (AVS). Let them know that AVS manages all payroll and benefits-related matters to ensure they receive accurate and up-to-date information.",
    },
    {
      title: "Can we reward our virtual assistant for their efforts?",
      answer:
        "Yes, you can certainly reward your virtual assistant for their hard work. However, please notify Access Virtual Staffing so we can ensure the reward is properly added to the assistant's payroll and reflected in your monthly invoice.",
    },
    {
      title: "What is the process for payroll and timekeeping?",
      answer:
        "Access Virtual Staffing will track the contractor’s hours and provide you with a weekly report. This report will include the total hours worked and any noted performance issues. It is your responsibility to review the report and notify AVS of any discrepancies or time disputes so they can be addressed promptly.",
    },
    {
      title: "Are contractors expected to work on holidays?",
      answer:
        "If you need the contractor to work on certain holidays, please make sure to communicate this clearly during the onboarding process. Set expectations early on by informing them of your holiday schedule and any required work in advance.",
    },
    {
      title: "How does invoicing work?",
      answer:
        "Every two weeks, we will initiate an ACH debit from your bank account to pay your remote worker. To ensure timely payment, we require an advance deposit equivalent to two weeks of estimated payroll. After this initial escrow, we will bill you every two weeks based on the actual hours worked by your remote worker.",
    },
    {
      title: "Who is responsible for training the virtual assistant?",
      answer:
        'As the client, it is your responsibility to train the virtual assistant on all relevant tools, software, and work processes. However, Access Virtual Staffing offers Specialized Services programs if needed. For more information, feel free to contact us via our "Contact Us" page or through our support email address at support@accessvirtualstaffing.com.',
    },
    {
      title: "What if I need to end the contractor's service?",
      answer:
        "If you need to end the contractor’s service, please notify Access Virtual Staffing at least one week in advance. This gives us enough time to process any necessary claims and properly terminate their access. You can contact our HR team at support@accessvirtualstaffing.com  for assistance.",
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
