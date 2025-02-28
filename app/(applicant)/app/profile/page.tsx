import ProfilePageClient from "@/components/profile/profile-page";
import { getUser } from "@/database/queries/users";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";


export default withPageAuthRequired(
  async function ProfilePage() {
    const result = await getUser(2);

    return <ProfilePageClient />;
  },
  {
    returnTo: "/app/profile",
  }
);
