"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@relume_io/relume-ui";
import LinkButton, { LinkButtonProps } from "@/components/ui/link-button";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

import { ImageProps } from "@/types/general";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowRight, Search, Phone } from "lucide-react";
import { MEDIA_QUERIES } from "@/lib/breakpoints";
import { is } from "drizzle-orm";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  // Handle scroll detection for sticky behavior on desktop only
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      id="navigation"
      className={cn(
        "z-40 flex w-full items-center lg:min-h-18 lg:px-[5%] lg:h-30 bg-white transition-all duration-300 ",
        !isMobile && "fixed top-0 left-0 right-0",
        !isMobile && isScrolled && "shadow-lg backdrop-blur-lg bg-white/90"
      )}
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          {logo && (
            <a href={logo.url} className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt || "AVS Logo"}
                width={logo.width}
                height={logo.height}
                priority
              />
            </a>
          )}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Search Link for Mobile */}
            <Link
              href="/search"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-robinsEggBlue hover:bg-neutralZinc/20 transition-colors duration-200"
              title="Search"
            >
              <Search className="w-5 h-5 text-neutralDarker" />
            </Link>

            {/* Mobile Book a Call - Phone Icon Only */}
            <Link
              href="/book-a-meeting"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primaryBlue hover:bg-primaryBlue/90 transition-colors duration-200"
              title="Book a Call"
            >
              <Phone className="w-5 h-5 text-white" />
            </Link>

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
          {/* Search Link for Mobile Menu */}
          <Link
            href="/search"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 text-md font-semibold text-neutralDarker hover:text-neutralDark transition-colors duration-200 pt-7 lg:hidden"
          >
            <Search className="w-5 h-5" />
            Search
          </Link>

          {(navLinks ?? []).map((navLink, index) =>
            navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
              <SubMenu
                key={index}
                navLink={navLink}
                isMobile={isMobile}
                pathname={url}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ) : (
              <Link
                key={index}
                target={navLink.follow ? "_blank" : ""}
                href={navLink.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-3 text-md lg:px-4 lg:py-2 lg:text-base lg:pt-2  font-semibold text-neutralDarker hover:text-neutralDark transition-colors duration-200",
                  url === navLink.url ? "underline" : ""
                )}
              >
                {navLink.title}
              </Link>
            )
          )}
        </motion.div>
        <div className="hidden justify-self-end lg:flex lg:items-center lg:gap-4">
          {/* Search Link */}
          <Link
            href="/search"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutralLightZinc hover:bg-neutralZinc/20 transition-colors duration-200"
            title="Search"
          >
            <Search className="w-5 h-5 text-neutralDarker" />
          </Link>

          {/* Buttons */}
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
  setIsMobileMenuOpen,
}: {
  navLink: NavLink;
  isMobile: boolean;
  pathname: string;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base font-semibold text-neutralDarker hover:text-neutralDark transition-colors duration-200"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {navLink.title}
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown className="font-semibold" />
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
                onClick={() => setIsMobileMenuOpen(false)}
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
    alt: "Access Virtual Staffing Logo",
    width: 200,
    height: 200,
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Success Stories", url: "/success-stories" },
    {
      title: "Services",
      url: "#",
      subMenuLinks: [
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
          title: "The AVS Blog",
          url: "/posts",
        },
        { title: "FAQs", url: "/faq" },
        { title: "Contact Us", url: "/contact-us" },
      ],
    },
  ],
  buttons: [
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
