"use client";

import { useState } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { usePathname } from "next/navigation";
import { ImageProps } from "@/types/general";
import { MEDIA_QUERIES } from "@/lib/breakpoints";

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

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar = (props: Navbar1Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar1Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
  const url = usePathname();

  return (
    <nav
      id="main_nav"
      className="flex w-full items-center bg-background-primary lg:min-h-18 lg:px-[5%] "
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-18 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <Image
              src={logo.src}
              alt={logo.alt || "AVS Logo"}
              width={logo.width || 175}
              height={logo.height || 50}
            />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
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
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) => (
            <div key={index} className="first:pt-4 lg:first:pt-0">
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu navLink={navLink} isMobile={isMobile} pathname={url} />
              ) : (
                <Link
                  href={navLink.url}
                  className={cn(
                    "block py-3 text-md lg:px-4 lg:py-2 lg:text-base hover:underline",
                    url === navLink.url ? "underline" : ""
                  )}
                >
                  {navLink.title}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((button, index) => (
              <LinkButton key={index} {...button} className="w-full" />
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  pathname,
}: {
  pathname: string;
  navLink: NavLink;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:underline"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
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
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-deepBlue rounded-md lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.url}
                target={navLink.follow ? "_blank" : ""}
                className={cn(
                  "block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base hover:underline",

                  pathname === navLink.url ? "underline" : ""
                )}
              >
                {navLink.title}
              </Link>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar1Defaults: Navbar1Props = {
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
    {
      title: "Services",
      url: "/services",
      subMenuLinks: [
        {
          title: "All Services",
          url: "/services",
        },
        { title: "Basic Plan", url: "/services/basic-plan" },
        { title: "Standard Plan", url: "/services/standard-plan" },
        {
          title: "Specialized Services",
          url: "/services/specialized-services",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      subMenuLinks: [
        {
          title: "Blog",
          url: "https://accessvirtualstaffing.blogspot.com",
          follow: true,
        },
        { title: "FAQs", url: "/faq" },
        { title: "Contact Us", url: "/contact-us" },
        // {
        //   title: "Fiverr with AVS",
        //   url: "https://go.fiverr.com/visit/?bta=1040143&brand=fp",
        //   follow: true,
        // },
      ],
    },
  ],
  buttons: [
    // {
    //   navLink: {
    //     title: "Book a discovery call",
    //     url: "/book-a-meeting",
    //     follow: false,
    //   },
    //   variant: "defaultOutline",
    //   size: "lg",
    // },
    {
      navLink: {
        title: "Free Strategy Call",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "secondary",
      size: "lg",
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
