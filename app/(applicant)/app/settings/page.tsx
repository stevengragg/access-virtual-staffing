import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function ProfilePage() {
    return (
      <div className="flex justify-center items-center mb-12">
        Profile Settings
      </div>
    );
  },
  {
    returnTo: "/app/settings",
  }
)
