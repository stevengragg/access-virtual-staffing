import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Profile() {
    return (
      <section id="relume" className="px-[5%]">
        <h1>Profile</h1>
      </section>
    );
  },
  { returnTo: "/app/profile" }
);
