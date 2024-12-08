import { Suspense } from "react";
type Props = {};

export const PodioForm = (props: Props) => {
  return (
    <section
      id="podio_form_container"
      className="lg:px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-xl h-[1820px] overflow-hidden">
        <Suspense fallback={<p>Loading form...</p>}>
          <iframe
            src={
              process.env.NEXT_PUBLIC_PODIO_WEB_FORM ||
              "https://podio.com/webforms/29979527/2496589"
            }
            frameBorder="0"
            className="w-full h-full"
          />
        </Suspense>
      </div>
    </section>
  );
};
