import { NextPage } from "next";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ApplicationShell4 } from "@/components/layout/app-shell";

export default withPageAuthRequired(
  async function Overview() {
    return (
      <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden h-screen">
        <ApplicationShell4 />
      </main>
    );
  },
  { returnTo: "/app/overview" }
);
