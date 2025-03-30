"usse client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProfileCard from "./profile-overview-card";

const profileData = {
  resume: "https://example.com/resume.pdf",
  fullName: "Kobe Brian Santos",
  email: "kobe@example.com",
  phoneNumber: "+1 234 567 8901",
  address: "Manila, Philippines",
  skypeID: "kobe.santos",
  whyFit: "I am a highly motivated developer...",
  whatStrengths: "Strong problem-solving skills...",
  whatNeedImprovement: "Need to work on public speaking...",
  dateOfBirth: "1995-06-15",
  hasPaypal: true,
  contentLinks: ["https://example.com/portfolio"],
  numberOfChildren: 2,
  videoLinks: ["https://youtube.com/demo", "facebook.com"],
  assessmentTests: ["https://example.com/assessment"],
  internetProvider: "PLDT Fiber",
  numberOfMonitors: "2",
  numberOfExperience: "5",
  salaryUnit: "PHP",
  desiredSalary: "100,000",
  workSamples: ["https://example.com/work-sample"],
};

function ProfileOverviewDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghostPrimary" size="sm" className="font-medium">
          Preview Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] h-[80vh] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <ProfileCard profile={profileData} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProfileOverviewDialog;
