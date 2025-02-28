"use client";

import { Button } from "@/components/ui/button";
import { MdModeEditOutline, MdOutlineDone } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import { useProfileTabContext } from "@/context/profile-tab-context";

const tabs = [
  { name: "Profile", icon: MdModeEditOutline, path: "/app/profile" },
  { name: "Files", icon: BsFiles, path: "/app/profile/files" },
  { name: "Finish", icon: MdOutlineDone, path: "/app/profile/finish" },
];

const ProfileTabs = () => {
  const { currentTab, setCurrentTab } = useProfileTabContext();

  return (
    <div className="flex items-center justify-center my-4">
      {tabs.map((tab, index) => {
        const isActive = currentTab === tab.name;
        return (
          <div key={tab.path} className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => {
                setCurrentTab(tab.name);
              }}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-black" : "text-gray-500"
              }`}
            >
              <div
                className={`rounded-full p-2 ${
                  isActive ? "bg-primaryBrightAqua text-white" : "bg-gray-300 text-gray-700"
                }`}
              >
                <tab.icon className="w-6 h-6" /> {/* ✅ Fixed icon size */}
              </div>
              <span>{tab.name}</span>
            </Button>
            {index < tabs.length - 1 && <div className="w-16 h-[2px] bg-gray-400"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default ProfileTabs;
