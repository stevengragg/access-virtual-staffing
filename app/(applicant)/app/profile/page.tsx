import ProfileCard from "@/components/profile/profile-overview-card";

export default function ProfilePage() {
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
  return (
    <div className="flex justify-center items-center mb-12">
      <ProfileCard profile={profileData} />
    </div>
  );
}
