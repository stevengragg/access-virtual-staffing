import { ImageProps } from "@/types/general";
import Image from "next/image";

type Card = {
  heading: string;
  description: string;
  image: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  cards: Card[];
};

export type ServicesBenefitsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesBenefits = (props: ServicesBenefitsProps) => {
  const { heading, description, cards } = {
    // ...ServicesBenefitsDefaults,
    ...props,
  } as Props;
  return (
    <section id="services_benefits" className="px-[5%] py-6 md:py-8 lg:py-12">
      <div className="container-xl">
        <div className="mx-auto mb-12 w-full max-w-xl text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = (card: Card) => {
  return (
    <div className="flex flex-col border border-deepZinc rounded-b-lg">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          width={card.image.width}
          height={card.image.height}
        />
      </div>
      <div className="flex flex-1 flex-col justify-start p-6 md:p-8">
        <div>
          <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {card.heading}
          </h2>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

// export const ServicesBenefitsDefaults: ServicesBenefitsProps = {
//   tagline: "Bridging Talent and Business Success, Crafted to Perfection",
//   heading: "Why Choose Access Virtual Staffing?",
//   description:
//     "With our straightforward, efficient process, Access Virtual Staffing takes the hassle out of hiring and managing virtual staff. From initial request to seamless integration, we’re committed to delivering a smooth experience and ensuring that your business operates at its best. Partner with us today and experience the ease of building a skilled virtual team that perfectly fits your needs.",
//   cards: [
//     {
//       heading: "Transparent Talent Sourcing",
//       description:
//         "We handle every step of the talent sourcing process with complete transparency. From identifying and sourcing top candidates to matching their skills with your specific requirements, we ensure a seamless fit through thorough screening and skill validation. Our commitment is to provide you with the best talent, fully aligned with your business needs.",
//       image: {
//         src: "/img/transparent_talent_sourcing_illu.webp",
//         alt: "Transparent talent sourcing",
//         width: 304,
//         height: 160,
//       },
//     },
//     {
//       heading: "Diverse Skill Sets",
//       description:
//         "Our virtual support staff are not only highly proficient in English but also possess a broad range of skills tailored to meet your unique needs. Additionally, we have a pool of bilingual virtual staff fluent in both Spanish and English, ready to effectively serve your diverse client base.",
//       image: {
//         src: "/img/diverse_skill_sets_illu.webp",
//         alt: "Diverse Skill Sets",
//         width: 304,
//         height: 160,
//       },
//     },
//     {
//       heading: "Customized Solutions",
//       description:
//         "We offer tiered recruiting services to match your unique needs, from basic administrative support to high-level professional services. Our tiers include Basic Recruiting Service, Tier 1 General Virtual Staff, Tier 2 Skilled Virtual Staff, and Tier 3 High-Level Professional Services.",
//       image: {
//         src: "/img/customized_solutions_illu.webp",
//         alt: "Customized Solutions",
//         width: 304,
//         height: 160,
//       },
//     },
//     {
//       heading: "All-Inclusive Talent Management",
//       description:
//         "We offer more than just recruitment; we provide a complete suite of services to ensure your operations run seamlessly. From the initial recruitment phase through to ongoing management, our all-inclusive support covers everything from payroll administration and timekeeping to detailed performance monitoring. This comprehensive approach guarantees smooth operations, optimal efficiency, and peace of mind for you.",
//       image: {
//         src: "/img/all_inclusive_talent_management_illu.webp",
//         alt: "All-Inclusive Talent Management",
//         width: 304,
//         height: 160,
//       },
//     },
//   ],
// };
