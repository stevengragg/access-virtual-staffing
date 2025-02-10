import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { JobListing } from "@/types/general";
import { JobListItemPosition } from "./joblist-item-position";

export const JobListContainerAdvanced = (
  props: React.ComponentPropsWithoutRef<"section">
) => {
  const { children } = {
    ...props,
  };
  return (
    <section id="joblist_container" className="px-[5%] py-4 md:py-8 ">
      <div className="container">{children}</div>
    </section>
  );
};
