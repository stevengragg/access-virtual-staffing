export const JobListContainerAdvanced = (
  props: React.ComponentPropsWithoutRef<"section">
) => {
  const { children } = {
    ...props,
  };
  return (
    <section id="joblist_container" className="px-[5%] py-4 md:py-8">
      <div className="container">{children}</div>
    </section>
  );
};
