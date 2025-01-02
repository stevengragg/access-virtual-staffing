"use client";

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
import { MdTrendingUp } from "react-icons/md";
import {
  RxChevronDown,
  RxChevronRight,
  RxCross2,
  RxHamburgerMenu,
} from "react-icons/rx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const ApplicationShell4 = () => {
  const [isSearchIconClicked, setIsSearchIconClicked] =
    useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section>
      {/* Topbar */}
      <div className="sticky top-0 flex min-h-svh w-full items-center border-b border-border-primary bg-white px-4 md:min-h-18 md:px-8">
        <div className="mx-auto grid size-full grid-cols-2 items-center justify-between gap-4 lg:grid-cols-[1fr_1.5fr_1fr]">
          <a href="#" className="ml-14 justify-self-start lg:ml-0">
            <Image
              src="/avs_logo_4.png"
              alt="AVS Logo"
              width={175}
              height={50}
            />
          </a>

          <div className="hidden lg:block lg:w-full lg:max-w-md lg:justify-self-center">
            <Input
              className="w-full"
              placeholder="Search"
              icon={<BiSearch className="size-6" />}
            />
          </div>

          <div className="flex items-center gap-2 justify-self-end md:gap-4">
            <button
              onClick={() => setIsSearchIconClicked(!isSearchIconClicked)}
              className="p-2 lg:hidden"
            >
              <BiSearch className="size-6" />
            </button>
            <AnimatePresence>
              {isSearchIconClicked && (
                <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial="hidden"
                  exit="hidden"
                  animate={isSearchIconClicked ? "visible" : "hidden"}
                  className="absolute bottom-0 left-0 right-0 top-16 flex min-h-16 max-w-md items-center justify-center border-b border-border-primary bg-white px-6 lg:hidden"
                >
                  <Input
                    className="h-fit w-full"
                    placeholder="Search"
                    icon={<BiSearch className="size-6" />}
                  />
                  <button
                    onClick={() => setIsSearchIconClicked(!isSearchIconClicked)}
                  >
                    <RxCross2 className="ml-4 size-6" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center p-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
                  alt="Avatar"
                  className="size-10 rounded-full object-cover"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={0}
                className="mt-1.5 px-0 py-2"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <a href="/app/profile">My Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/app/profile">Profile Settings</a>
                  </DropdownMenuItem>
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

      {/* Shell Wrapper*/}
      <div className="relative flex flex-col items-stretch lg:flex-row lg:items-start h-screen">
        {/* Sidebar Wrapper */}
        <div className="absolute -top-16 flex h-full flex-col md:top-18 md:h-auto lg:sticky lg:h-[calc(100vh-4.5rem)]">
          <div className="sticky top-0 flex min-h-16 flex-col py-0 pl-6 md:min-h-18 md:bg-white md:pl-8 lg:h-screen lg:min-h-[auto] lg:w-[19.5rem] lg:border-r lg:border-border-primary lg:py-6 lg:pl-0">
            <div className="flex flex-1 flex-row items-center lg:flex-col lg:items-stretch">
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
                      <Navigation />
                    </SheetContent>
                  </SheetPortal>
                </Sheet>
              ) : (
                <Navigation />
              )}
            </div>
          </div>
        </div>

        {/* Shell Main wrapper */}
        <main className="relative -z-10 flex-1 bg-background-secondary">
          <div className="] py-6 text-center text-black/50">
            <h1></h1>
          </div>
          <div className="container px-6 py-8 md:px-8 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 gap-12">
              <div className="flex h-screen items-center justify-center  py-6 text-center text-black/50">
                <h2></h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

const Navigation = () => {
  return (
    <nav className="absolute left-0 right-auto top-0 float-right h-full w-[80vw] max-w-[none] md:w-full md:max-w-[19.5rem] lg:relative lg:inset-auto lg:w-auto lg:max-w-[auto]">
      <div className="absolute flex size-full flex-col gap-4 border-r border-border-primary bg-white py-6 lg:gap-6 lg:border-none lg:py-0">
        <div className="flex size-full flex-col overflow-auto px-4">
          <a href="#" className="flex items-center gap-x-2 p-2 text-center">
            <span className="flex w-full items-center gap-3">
              <BiHome className="size-6 shrink-0" />
              <span>Home</span>
            </span>
          </a>
          <a href="#" className="flex items-center gap-x-2 p-2 text-center">
            <span className="flex w-full items-center gap-3">
              <BiStar className="size-6 shrink-0" />
              <p>Saved</p>
            </span>
            <span className="rounded-full border border-border-primary px-2">
              <p className="text-sm">24</p>
            </span>
          </a>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger
                className="p-2 font-normal"
                icon={
                  <RxChevronDown className="shrink-0 text-text-primary transition-transform duration-300" />
                }
              >
                <span className="flex items-center gap-3">
                  <BiPieChartAlt2 className="size-6 shrink-0" />
                  <p>Dashboard</p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex items-center gap-x-2 p-2 pl-[2.75rem] text-center">
                <a href="#" className="flex w-full items-center gap-3">
                  <MdTrendingUp className="size-6 shrink-0" />
                  <p>Trends</p>
                </a>
              </AccordionContent>
              <AccordionContent className="flex items-center gap-x-2 p-2 pl-[2.75rem] text-center">
                <a href="#" className="flex w-full items-center gap-3">
                  <BiBarChartAlt2 className="size-6 shrink-0" />
                  <p>Analytics</p>
                </a>
              </AccordionContent>
              <AccordionContent className="flex items-center gap-x-2 p-2 pl-[2.75rem] text-center">
                <a href="#" className="flex w-full items-center gap-3">
                  <BiArchive className="size-6 shrink-0" />
                  <p>Historical</p>
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a href="#" className="flex items-center gap-x-2 p-2 text-center">
            <span className="flex w-full items-center gap-3">
              <BiLayer className="size-6 shrink-0" />
              <p>Projects</p>
            </span>
          </a>
          <a href="#" className="flex items-center gap-x-2 p-2 text-center">
            <span className="flex w-full items-center gap-3">
              <BiFile className="size-6 shrink-0" />
              <p>Documents</p>
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-4 px-4 lg:gap-6">
          <div className="flex flex-col">
            <a href="#" className="flex items-center gap-x-2 p-2 text-center">
              <span className="flex w-full items-center gap-3">
                <BiHelpCircle className="size-6 shrink-0" />
                <p>Support</p>
              </span>
            </a>
            <a href="#" className="flex items-center gap-x-2 p-2 text-center">
              <span className="flex w-full items-center gap-3">
                <BiCog className="size-6 shrink-0" />
                <p>Settings</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const ApplicationShell4Defaults = {};
