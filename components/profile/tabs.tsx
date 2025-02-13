// components/Tabs.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface Tab {
  name: string;
  path: string;
}

const tabs: Tab[] = [
  { name: "Overview", path: "/app/profile" },
  { name: "Profile", path: "/app/profile/edit" },
  { name: "Files", path: "/app/profile/files" },
];

const ProfileTabs: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <Button
          variant="ghost"
          key={tab.path}
          onClick={() => router.push(tab.path)}
          className={`mr-8 text-md py-2 ${
            pathname === tab.path ? "font-bold" : ""
          }`}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  );
};

export default ProfileTabs;
