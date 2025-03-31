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
import {
  Briefcase,
  FileText,
  House,
  LucideIcon,
  UserPen,
  Cog,
} from "lucide-react";
import { useUserInfo } from "@/hooks/use-user-info";
import { INotification } from "@/types/notification";

import { ImageProps } from "@/types/general";
import { getNotificationIcon } from "@/lib/get-icon-type";
import { useNotifications } from "@/hooks/use-notifications";

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
  const { userInfo: user, isLoading } = useUserInfo(); // Added isLoading
  const { logo, navLinks, dropdown, children } = {
    ...ApplicationShellDefaults,
    ...props,
  };
  const [isSearchIconClicked, setIsSearchIconClicked] =
    useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] =
    useState<boolean>(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const { notifications } = useNotifications({
    page: 1,
    filter: "all",
  });

  return (
    <section id="header" className="relative flex flex-col lg:flex-row">
      <div className="bg-white absolute top-0 z-10 flex min-h-16 flex-col px-6 md:min-h-18 md:px-8 lg:sticky lg:h-screen lg:min-h-[auto] lg:w-[19.5rem] lg:min-w-[19.5rem] border-b lg:border-r border-zinc-300 lg:px-0 lg:py-6">
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
      <main className="relative flex-1 bg-white">
        <div className="sticky top-0 flex h-auto min-h-16 w-full items-center border-b border-zinc-300 bg-white px-6 md:min-h-18 lg:px-8">
          <div className="mx-auto grid size-full grid-cols-1 items-center justify-end justify-items-end gap-4 lg:grid-cols-[1fr_max-content] lg:justify-between lg:justify-items-stretch">
            <div className="hidden w-full max-w-md lg:block">
              <h3 className="font-bold">Applicant Portal</h3>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <DropdownMenu
                onOpenChange={(open) => setIsNotificationsOpen(open)}
              >
                <DropdownMenuTrigger className="relative">
                  <div className="absolute bottom-auto left-auto right-2 top-2 size-2 rounded-full bg-black outline outline-[3px] outline-offset-0 outline-white" />
                  <div
                    className={clsx(
                      "transition-all p-2 rounded-full",
                      isNotificationsOpen ? "bg-deepBlue" : "bg-white"
                    )}
                  >
                    <BiBell
                      className={`size-6 ${
                        isNotificationsOpen && "text-white"
                      }`}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="max-w-[24rem] px-0 bg-white rounded-lg  border border-gray-300"
                  align="end"
                  sideOffset={0}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2">
                      <DropdownMenuLabel className="p-0 text-sm font-medium">
                        Recent Notifications
                      </DropdownMenuLabel>
                      <a href="#" className="text-xs">
                        Mark all as read
                      </a>
                    </div>
                    <div className="w-full max-w-[50rem] max-h-[24rem] overflow-y-auto overflow-x-hidden px-2 py-1 scrollbar-hide">
                      {notifications?.map((notification: INotification) => (
                        <DropdownMenuItem
                          key={notification.id}
                          className="p-0 w-full"
                        >
                          <a
                            href={notification.link}
                            className="flex w-full items-start justify-start gap-4 p-3 hover:bg-gray-100 rounded-lg"
                          >
                            <div className="flex items-center gap-2">
                              <div>
                                {getNotificationIcon(notification.type)}
                              </div>
                            </div>
                            <div className="flex-1 break-words">
                              <p className="font-semibold text-base break-words">
                                {notification.title}
                              </p>
                              <p className="mt-1 text-sm text-gray-600 break-words">
                                {notification.message}
                              </p>
                              <div className="mt-2 flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  {notification.date}
                                </span>
                              </div>
                            </div>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-end px-4 py-2">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      asChild
                    >
                      <a
                        href="/app/notifications"
                        className="text-sm hover:text-deepBlue px-2 rounded-md"
                      >
                        View All
                      </a>
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              {isLoading ? ( // Display loading state
                <div className="animate-pulse rounded-full bg-gray-300 size-10"></div>
              ) : (
                <DropdownMenu
                  onOpenChange={(open) => setIsUserDropdownOpen(open)}
                >
                  <DropdownMenuTrigger className="flex items-center p-0">
                    <Image
                      src={user?.profileImage || "/icons/default_avatar.png"}
                      alt="Avatar"
                      className="size-10 rounded-full object-cover"
                      width={40}
                      height={40}
                    />

                    <div className="ml-3 hidden md:flex md:items-center md:gap-2">
                      <p>
                        {user?.firstName && user?.lastName
                          ? `${user?.firstName} ${user?.lastName}`
                          : user?.username}
                      </p>

                      <RxChevronDown
                        className={clsx(
                          "shrink-0 text-text-primary transition-transform duration-300",
                          {
                            "rotate-180": isUserDropdownOpen,
                            "rotate-0": !isUserDropdownOpen,
                          }
                        )}
                      />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    sideOffset={0}
                    className="mt-1.5 min-w-32 px-0 py-2 md:min-w-48 bg-white rounded-md  border border-zinc-300 "
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
                        <a
                          href="/api/auth/logout"
                          className="text-deepBlue font-bold"
                        >
                          Log Out
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
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
      <div className="absolute flex size-full flex-col gap-4  bg-white py-6 lg:gap-6 lg:border-none lg:py-0">
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
    url: "/app/overview",
    src: "/avs_logo_4.png",
    alt: "Access Virtual Staffing Logo 2",
    width: 175,
    height: 50,
  },
  navLinks: [
    { title: "Overview", url: "/app/overview", icon: House },
    { title: "Profile", url: "/app/profile", icon: UserPen },
    { title: "Jobs", url: "/app/jobs", icon: Briefcase },
    { title: "Settings", url: "/app/settings/general", icon: Cog },
    { title: "Submissions", url: "/app/submissions", icon: FileText },
  ],
  dropdown: [
    { title: "Contact Us", url: "/contact-us" },
    {
      title: "Blog",
      url: "https://accessvirtualstaffing.blogspot.com",
      follow: true,
    },
    { title: "FAQs", url: "/faq" },
  ],
};
