"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import LinkButton, { LinkButtonProps } from "@/components/ui/link-button";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

import { ImageProps } from "@/types/general";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

type NavLink = {
  url: string;
  title: string;
  follow?: boolean;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: LinkButtonProps[];
};

export type SiteNavigation2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SiteNavigation2 = (props: SiteNavigation2Props) => {
  const { logo, navLinks, buttons } = {
    ...SiteNavigation2Defaults,
    ...props,
  };
  const url = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section
      id="navigation"
      className="z-[999] flex w-full items-center bg-neutralDarker lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          {logo && (
            <a href={logo.url} className="block lg:hidden">
              <Image
                src={isMobile ? "/avs_logo_5.png" : logo.src}
                alt={logo.alt || "AVS Logo"}
                width={isMobile ? 60 : logo.width}
                height={isMobile ? 60 : logo.height}
              />
            </a>
          )}
          <div className="flex items-center gap-2 lg:hidden">
            <div>
              {(buttons ?? []).map((button, index) => (
                <LinkButton key={index} {...button} />
              ))}
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] "
        >
          {(navLinks ?? []).map((navLink, index) =>
            navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
              <SubMenu
                key={index}
                navLink={navLink}
                isMobile={isMobile}
                pathname={url}
              />
            ) : (
              <Link
                key={index}
                target={navLink.follow ? "_blank" : ""}
                href={navLink.url}
                className={cn(
                  "block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 font-medium text-white",
                  url === navLink.url ? "underline" : ""
                )}
              >
                {navLink.title}
              </Link>
            )
          )}
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          {(buttons ?? []).map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  pathname,
}: {
  navLink: NavLink;
  isMobile: boolean;
  pathname: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base text-white font-medium"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.2 }}
            className="bg-background-primary lg:absolute lg:z-50 lg:p-2 lg:[--y-close:25%] lg:border lg:border-deepBlue rounded-md"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <Link
                key={index}
                href={subMenuLink.url}
                target={subMenuLink.follow ? "_blank" : ""}
                className={cn(
                  "block py-3 text-center lg:px-4 lg:py-2 lg:text-left font-medium ",
                  pathname === navLink.url ? "underline" : ""
                )}
              >
                {subMenuLink.title}
              </Link>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </section>
  );
};

const SiteNavigation2Defaults: SiteNavigation2Props = {
  logo: {
    url: "/",
    src: "/avs_logo_4.png",
    alt: "Access Virtual Staffing Logo 2",
    width: 175,
    height: 50,
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Success Stories", url: "/success-stories" },
    {
      title: "Services",
      url: "/services",
      // subMenuLinks: [
      //   { title: "Basic Plan", url: "/services/basic-plan" },
      //   { title: "Standard Plan", url: "/services/standard-plan" },
      //   {
      //     title: "Specialized Services",
      //     url: "/services/specialized-services",
      //   },
      // ],
    },
    {
      title: "Resources",
      url: "#",
      subMenuLinks: [
        {
          title: "The AVS Blog",
          url: "/posts",
        },
        { title: "FAQs", url: "/faq" },
        { title: "Contact Us", url: "/contact-us" },
        {
          title: "Fiverr with AVS",
          url: "https://go.fiverr.com/visit/?bta=1040143&brand=fp",
          follow: true,
        },
      ],
    },
    // {
    //   title: "For Talents",
    //   url: "https://www.accessvirtualjobs.com",
    //   follow: true,
    // },
  ],
  buttons: [
    // {
    //   navLink: {
    //     title: "Login",
    //     url: "/auth",
    //     follow: false,
    //   },
    //   variant: "link2",
    //   size: "default",
    // },
    // {
    //   navLink: {
    //     title: "Find Work",
    //     url: "/talent",
    //     follow: false,
    //   },
    //   variant: "outline",
    //   size: "default",
    // },
    {
      navLink: {
        title: "Book a Call",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
