import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { ImageProps } from "@/types/general";
import GoogleMapLink from "../ui/googlemap-link";

type Links = {
  title: string;
  url: string;
  follow?: boolean;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  icon: () => React.JSX.Element;
  value: string;
};

type Contact = {
  icon: () => React.JSX.Element;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer11Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer = (props: Footer11Props) => {
  const {
    logo,
    address,
    contact,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer11Defaults,
    ...props,
  } as Props;
  return (
    <footer id="footer" className="px-[5%] py-12 md:py-18 lg:py-20 bg-deepBlue">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12  border border-neutralLightZinc rounded-lg p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8  ">
              <a href={logo.url} className="w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="p-4 rounded-xl bg-white w-full lg:w-auto "
                  width={logo.width}
                  height={logo.height}
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8 text-white">
              <div className="space-x-2 flex flex-row items-start">
                <span>{address.icon()}</span>
                <GoogleMapLink address={address.value} />
                {/* <p className="mb-5 text-sm md:mb-6">{address.value}</p> */}
              </div>
              <div className="space-x-2 flex flex-row items-start">
                <span>{contact.icon()}</span>
                <a
                  className="mb-5 text-sm md:mb-6 hover:underline"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-3 md:gap-x-8 md:gap-y-4 text-white">
            {columnLinks.map((column, index) => (
              <ul key={index}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm font-semibold">
                    <a
                      href={link.url}
                      className="hover:underline"
                      target={link.follow ? "_blank" : ""}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0 text-white">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0 text-white">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline">
                <a href={link.url} className="hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer11Defaults: Footer11Props = {
  logo: {
    url: "/",
    src: "/avs_logo_4.png",
    alt: "Logo image",
    width: 250,
    height: 65,
  },
  address: {
    icon: () => <MapPin className="text-white w-6 h-6" />,
    value: "105 S. Narcissus Ave. Suite 512 West Palm Beach, FL 33401",
  },
  contact: {
    icon: () => <Mail className="text-white w-6 h-6" />,

    email: "support@accessvirtualstaffing.com",
  },
  columnLinks: [
    {
      links: [
        { title: "About Us", url: "/about-us" },
        { title: "Hire Virtual Staff", url: "/book-a-meeting" },
        // { title: "Book A Discovery Call", url: "/book-a-meeting" },
        { title: "Contact Us", url: "/contact-us" },
        { title: "FAQs", url: "/faq" },
        {
          title: "Blog",
          url: "https://accessvirtualstaffing.blogspot.com/",
          follow: true,
        },
        {
          title: "Fiverr with AVS",
          url: process.env.NEXT_PUBLIC_FIVERR_AFFILIATE_URL || "#",
          follow: true,
        },
      ],
    },
    {
      links: [
        { title: "Services", url: "/services" },
        { title: "Basic Plan", url: "/services/basic-plan" },
        { title: "Standard Plan", url: "/services/standard-plan" },
        {
          title: "Specialized Services",
          url: "/services/specialized-services",
        },
      ],
    },
    {
      links: [
        { title: "For Talents", url: "/talent" },
        { title: "Remote Jobs", url: "/talent/find-work" },
        { title: "Applicant Portal", url: "/talent/portal" },
      ],
    },
  ],
  // socialMediaLinks: [
  //   { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
  //   { url: "#", icon: <BiLogoInstagram className="size-6" /> },
  //   { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
  //   { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
  //   { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  // ],
  footerText: `© 2024 - ${new Date().getFullYear()} Access Virtual Staffing. All rights reserved.`,
  footerLinks: [
    { title: "Privacy Policy", url: "/privacy-policy" },
    { title: "Terms of Service", url: "/terms-of-service" },
    // { title: "Cookies Settings", url: "#" },
  ],
};
