"use client";

import {
  Button,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  SheetClose,
  SheetOverlay,
  SheetPortal,
} from "@relume_io/relume-ui";
import { BiBell } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
  useMediaQuery,
} from "@relume_io/relume-ui";
import {
  RxChevronDown,
  RxChevronRight,
  RxCross2,
  RxHamburgerMenu,
} from "react-icons/rx";
import { useState, ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Briefcase, FileText, House, LucideIcon, UserPen } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";

import { ImageProps } from "@/types/general";

type NavLink = {
  url: string;
  title: string;
  follow?: boolean;
  subMenuLinks?: NavLink[];
  icon?: LucideIcon;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  dropdown: NavLink[];
};

export type ApplicationShellProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props> & {
    children: ReactNode;
  };

export const ApplicationShell = (props: ApplicationShellProps) => {
  const { user, error, isLoading } = useUser();
  const { logo, navLinks, dropdown, children } = {
    ...ApplicationShellDefaults,
    ...props,
  };
  const [isSearchIconClicked, setIsSearchIconClicked] =
    useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section id="relume" className="relative flex flex-col lg:flex-row">
      <div className="absolute top-0 z-10 flex min-h-16 flex-col px-6 md:min-h-18 md:px-8 lg:sticky lg:h-screen lg:min-h-[auto] lg:w-[19.5rem] lg:min-w-[19.5rem] lg:border-r lg:border-border-primary lg:px-0 lg:py-6">
        <div className="flex flex-1 flex-row items-center lg:flex-col lg:items-stretch">
          {logo && (
            <a
              href={logo.url || "#"}
              className="order-1 ml-6 hidden justify-start lg:order-none lg:mb-6 lg:ml-6 lg:block lg:self-start"
            >
              <Image
                src={logo.src}
                alt={logo.alt || "AVS Logo"}
                width={logo.width || 175}
                height={logo.height || 50}
                className="shrink-0"
              />
            </a>
          )}

          {isMobile ? (
            <Sheet>
              <SheetTrigger>
                <RxHamburgerMenu className="size-8" />
              </SheetTrigger>
              <SheetPortal>
                <SheetOverlay className="bg-black/60" />
                <SheetClose className="right-5 top-5 text-white">
                  <RxCross2 className="size-6" />
                </SheetClose>
                <SheetContent
                  side="left"
                  className="w-[80vw] overflow-hidden md:w-full md:max-w-[19.5rem]"
                >
                  <Navigation logo={logo} navLinks={navLinks} />
                </SheetContent>
              </SheetPortal>
            </Sheet>
          ) : (
            <Navigation navLinks={navLinks} />
          )}
        </div>
      </div>
      <main className="relative flex-1 bg-background-secondary">
        <div className="sticky top-0 flex h-auto min-h-16 w-full items-center border-b border-border-primary bg-white px-6 md:min-h-18 lg:px-8">
          <div className="mx-auto grid size-full grid-cols-1 items-center justify-end justify-items-end gap-4 lg:grid-cols-[1fr_max-content] lg:justify-between lg:justify-items-stretch">
            <div className="hidden w-full max-w-md lg:block">
              <h3 className="font-bold">Applicant Portal</h3>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="relative">
                  <div className="absolute bottom-auto left-auto right-2 top-2 size-2 rounded-full bg-black outline outline-[3px] outline-offset-0 outline-white" />
                  <BiBell className="size-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="max-w-[19rem] px-0"
                  align="end"
                  sideOffset={0}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2">
                      <DropdownMenuLabel className="p-0">
                        Notifications
                      </DropdownMenuLabel>
                      <a href="#">Mark as read</a>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="h-full max-h-[14rem] overflow-auto px-2 py-1">
                      <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                        <div className="flex size-full flex-col items-start justify-start">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Avatar"
                            className="size-6"
                          />
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <p className="mt-2 text-sm">11 Jan 2022</p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                        <div className="flex size-full flex-col items-start justify-start">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Avatar"
                            className="size-6"
                          />
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <p className="mt-2 text-sm">11 Jan 2022</p>
                        </div>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="flex w-full items-end justify-end px-4 py-2">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      asChild
                    >
                      <a href="#">View All</a>
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu
                onOpenChange={(isDropdownOpen) =>
                  setIsDropdownOpen(isDropdownOpen)
                }
              >
                <DropdownMenuTrigger className="flex items-center p-0">
                  <Image
                    src={user?.picture || ""}
                    alt="Avatar"
                    className="size-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />

                  <div className="ml-3 hidden md:flex md:items-center md:gap-2">
                    <p>{user?.name || user?.nickname}</p>
                    <RxChevronDown
                      className={clsx(
                        "shrink-0 text-text-primary transition-transform duration-300",
                        {
                          "rotate-180": isDropdownOpen,
                          "rotate-0": !isDropdownOpen,
                        }
                      )}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={0}
                  className="mt-1.5 min-w-32 px-0 py-2 md:min-w-48"
                >
                  <DropdownMenuGroup>
                    {dropdown &&
                      dropdown.map((dropdownItem, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          className="hover:bg-zinc-100 hover:rounded-lg x-2"
                        >
                          <a
                            target={dropdownItem.follow ? "_blank" : ""}
                            href={dropdownItem.url || "#"}
                          >
                            {dropdownItem.title}
                          </a>
                        </DropdownMenuItem>
                      ))}

                    <DropdownMenuSeparator className="mx-4" />
                    <DropdownMenuItem>
                      <a href="/api/auth/logout">Log Out</a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {children}
      </main>
    </section>
  );
};

const Navigation = ({
  logo,
  navLinks,
}: {
  logo?: ImageProps;
  navLinks?: NavLink[];
}) => {
  return (
    <nav className="absolute left-0 right-auto top-0 float-right h-full w-[80vw] max-w-[none] md:w-full md:max-w-[19.5rem] lg:relative lg:inset-auto lg:w-auto lg:max-w-[auto]">
      <div className="absolute flex size-full flex-col gap-4 border-r border-border-primary bg-white py-6 lg:gap-6 lg:border-none lg:py-0">
        <div className="flex size-full flex-col overflow-auto px-4">
          {logo && (
            <div>
              <Image
                src={logo.src}
                alt={logo.alt || "AVS Logo"}
                width={logo.width || 175}
                height={logo.height || 50}
                className="shrink-0"
              />
            </div>
          )}
          {navLinks &&
            navLinks.map((nav, idx) => (
              <a
                key={idx}
                target={nav.follow ? "_blank" : ""}
                href={nav.url || "#"}
                className="flex items-center gap-x-2 p-2 text-center cursor-pointer hover:bg-zinc-100 hover:rounded-lg"
              >
                <span className="flex w-full items-center gap-3">
                  {nav.icon && <nav.icon className="size-6 shrink-0" />}
                  <span>{nav.title}</span>
                </span>
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export const ApplicationShellDefaults = {
  logo: {
    url: "/",
    src: "/avs_logo_4.png",
    alt: "Access Virtual Staffing Logo 2",
    width: 175,
    height: 50,
  },
  navLinks: [
    { title: "Overview", url: "/app/overview", icon: House },
    { title: "Profile", url: "/app/profile", icon: UserPen },
    { title: "Jobs", url: "/app/jobs", icon: Briefcase },
    { title: "Submissions", url: "/app/submissions", icon: FileText },
  ],
  dropdown: [
    { title: "Go to Site", url: "/" },
    {
      title: "Blog",
      url: "https://accessvirtualstaffing.blogspot.com",
      follow: true,
    },
    { title: "FAQs", url: "/faq" },
    { title: "Contact Us", url: "/contact-us" },
  ],
};
