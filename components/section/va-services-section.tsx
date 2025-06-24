import {
  Briefcase,
  Calendar,
  UserPlus,
  Users,
  Hash,
  List,
  Lock,
  TrendingUp,
} from "lucide-react";

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

  return (
    <section
      id="va_services"
      className="bg-neutralDarker min-h-screen py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our VAs Are <span className="text-[#00C2CB]">Trained In</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
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
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight transition-all duration-300 ease-in-out transform cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-[#00C2CB]/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[#00C2CB]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
