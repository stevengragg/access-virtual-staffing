"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

const menuItems = [
  { name: "General", href: "/app/settings/general" },
  { name: "Authentication", href: "/app/settings/authentication" },
  { name: "Notification", href: "/app/settings/notification" },
  {
    name: "Delete account",
    href: "/app/settings/delete-account",
    className: "text-red-500",
  },
];

export default function SettingsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <div className="lg:w-64 w-full lg:block flex justify-between items-center">
      <div className="container">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-bold md:text-3xl lg:hidden">Settings</h1>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md",
                    item.className,
                    pathname === item.href ? "font-bold" : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col space-y-2 w-64 border-r pr-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md",
              item.className,
              pathname === item.href ? "font-bold" : ""
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
