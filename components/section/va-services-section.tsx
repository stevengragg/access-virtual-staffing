import {
  Briefcase,
  Calendar,
  UserPlus,
  Users,
  Hash,
  List,
  Lock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

export default function VaServices() {
  const services = [
    {
      icon: Briefcase,
      title: "Inbox Management",
      description:
        "Email organization, filtering, and priority response handling",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description:
        "Calendar optimization, meeting coordination, and time blocking",
    },
    {
      icon: UserPlus,
      title: "Lead Generation",
      description:
        "Prospect research, outreach campaigns, and lead qualification",
    },
    {
      icon: Users,
      title: "CRM Management",
      description: "Contact organization, pipeline management, and data entry",
    },
    {
      icon: Hash,
      title: "Social Media",
      description:
        "Content scheduling, engagement monitoring, and community management",
    },
    {
      icon: List,
      title: "Project Management",
      description: "Task tracking, team coordination, and deadline management",
    },
    {
      icon: Lock,
      title: "Content Creation",
      description:
        "Blog writing, newsletter drafting, and content calendar management",
    },
    {
      icon: TrendingUp,
      title: "Data Analysis",
      description: "Report generation, KPI tracking, and performance insights",
    },
  ];
  const buttons: LinkButtonProps[] = [
    {
      navLink: {
        title: "Find your perfect VA match",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ];

  return (
    <section
      id="va_services"
      className="bg-primaryBlue min-h-screen py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl text-white">
            Our VAs Are <span className="text-robinsEggBlue">Trained In</span>
          </h2>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            Access Virtual Staffing assistants are equipped with premium skills
            to handle your most critical business functions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-robinsEggBlueLighter border border-zinc-800 rounded-lg p-8 text-center hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight transition-all duration-300 ease-in-out transform cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-neutralBase/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-robinsEggBlue" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-neutralDarker text-xl md:text-4xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutralDarker text-md md:text-xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 flex items-center justify-center gap-4 md:mt-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
}
