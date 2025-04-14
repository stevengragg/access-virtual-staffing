import LinkButton from "../ui/link-button";

export const ViewJobApplyContainer = () => {
  return (
    <section className="px-[5%] py-2 md:py-4 lg:py-8 mb-24">
      <div className="container">
        <div className="w-full">
          <LinkButton
            size="xl"
            variant="primary"
            navLink={{
              title: "Apply Now",
              url:
                process.env.NEXT_PUBLIC_PODIO_JOB_APPLICATION_WEB_FORM ||
                "https://podio.com/webforms/29994876/2499223",
              follow: false,
            }}
          />
        </div>
      </div>
    </section>
  );
};
