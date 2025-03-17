"use client";

import { useState } from "react";

import {
  BiArchive,
  BiBarChartAlt2,
  BiBell,
  BiCog,
  BiFile,
  BiHelpCircle,
  BiHome,
  BiLayer,
  BiPieChartAlt2,
  BiSearch,
  BiStar,
} from "react-icons/bi";
import {
  Button,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Input,
  SheetClose,
  SheetOverlay,
  SheetPortal,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
  useMediaQuery,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import LinkButton, { LinkButtonProps } from "@/components/ui/link-button";
import { ImageProps } from "@/types/general";

type NavLink = {
  url: string;
  title: string;
  follow?: boolean;
  subMenuLinks?: NavLink[];
};

export type SiteNavbarDefaultProps = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: LinkButtonProps[];
};

export type SiteNavbarProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<SiteNavbarDefaultProps>;

export const SiteNavbar = (props: SiteNavbarProps) => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const url = usePathname();
  const { user, error, isLoading } = useUser();

  const { logo, navLinks, buttons } = url.includes("talent")
    ? SiteNavbarDefaultsForTalents
    : SiteNavbarDefaults;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <div className="lg:hidden flex">
            {" "}
            {user && !isLoading ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full p-0">
                  <Image
                    src={user.picture || ""}
                    alt="Avatar"
                    className="size-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={0}
                  className="mt-1.5 px-0 py-2 rounded-md"
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <a href="/app/overview">Go to Applicant Portal</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="mx-4" />
                    <DropdownMenuItem>
                      <a href="/api/auth/logout">Log Out</a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}{" "}
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
                    url === navLink.url
                      ? "underline"
                      : navLink.title === "For Talents" &&
                        url.includes("/talent")
                      ? "underline"
                      : ""
                  )}
                >
                  {navLink.title}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((button, index) => (
              <div key={index}>
                {button.navLink.title === "Login" &&
                user &&
                !isLoading ? null : (
                  <LinkButton {...button} className="w-full" />
                )}{" "}
              </div>
            ))}
            {user && !isLoading && !isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full p-0">
                  <Image
                    src={user.picture || ""}
                    alt="Avatar"
                    className="size-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={0}
                  className="mt-1.5 px-0 py-2 rounded-md"
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <a href="/app/overview">Go to Applicant Portal</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="mx-4" />
                    <DropdownMenuItem>
                      <a href="/api/auth/logout">Log Out</a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
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
        className=" flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:underline"
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
            className="bg-white lg:absolute lg:z-50 lg:border lg:border-deepBlue rounded-md lg:p-2 lg:[--y-close:25%]"
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

const SiteNavbarDefaults: SiteNavbarDefaultProps = {
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
    // { title: "For Employers", url: "/recruit" },
    { title: "For Talents", url: "/talent" },

    {
      title: "Services",
      url: "/services",
      subMenuLinks: [
        {
          title: "Our Services",
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
        title: "Free Strategy Call",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "secondary",
      size: "default",
    },
  ],
};

const SiteNavbarDefaultsForTalents: SiteNavbarDefaultProps = {
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
    // { title: "For Employers", url: "/recruit" },
    { title: "For Talents", url: "/talent" },

    {
      title: "For Employers",
      url: "/services",
      subMenuLinks: [
        {
          title: "Our Services",
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
    {
      navLink: {
        title: "Applicant Portal",
        url: "/talent/portal",
        follow: false,
      },
      variant: "link2",
      size: "default",
    },
    {
      navLink: {
        title: "Find Work",
        url: "/talent/find-work",
        follow: false,
      },
      variant: "outline",
      size: "default",
    },
    {
      navLink: {
        title: "Looking to hire?",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "secondary",
      size: "default",
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
