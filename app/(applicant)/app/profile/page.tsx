import EditProfile from "@/components/profile/edit/page";
import FileUploadForm from "@/components/profile/files/page";
import ProfileCard from "@/components/profile/profile-overview-card";
import ProfileOverviewDialog from "@/components/profile/profile-overview-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getUser } from "@/database/queries/users";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

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

export default withPageAuthRequired(
  async function ProfilePage() {
    const result = await getUser(2);

    return (
      <div className="flex flex-col items-center mb-12 w-full">
          <Tabs className="w-full max-w-2xl" defaultValue="Overview">
            <TabsList className="flex justify-start mb-12 w-full" >
              <TabsTrigger value="Overview" className="text-md text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2">Overview</TabsTrigger>
              <TabsTrigger value="Profile" className="text-md text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2">Profile</TabsTrigger>
              <TabsTrigger value="Files" className="text-md text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2">Files</TabsTrigger>
            </TabsList>
            <TabsContent value="Overview">
              <ProfileCard profile={profileData}/>
            </TabsContent>
            <TabsContent value="Profile">
              <EditProfile />
            </TabsContent>
            <TabsContent value="Files">
              <FileUploadForm />
            </TabsContent>

          </Tabs>
      </div>
    );
  },
  {
    returnTo: "/app/profile",
  }
);
 