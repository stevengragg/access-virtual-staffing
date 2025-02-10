import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View Job - Access Virtual Staffing",
};

export default withPageAuthRequired(
  async function ViewJob() {
    return (
      <div className="h-[calc(100vh-4.5rem)] overflow-auto">
        <div className="py-6 text-center text-zinc-800">
          <h1>View Job</h1>
        </div>
        <div className="container px-6 py-8 md:px-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 gap-12">
            <div className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
              <h2>Click and paste Main Content</h2>
            </div>
          </div>
        </div>
      </div>
    );
  },
  { returnTo: "/app/jobs" }
);
