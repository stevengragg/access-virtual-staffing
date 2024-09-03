import { Suspense } from "react";
type Props = {};

export const PodioForm = (props: Props) => {
  return (
    <section
      id="podio_form_container"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-xl h-[1720px] overflow-hidden">
        <Suspense fallback={<p>Loading form...</p>}>
          <iframe
            src="https://podio.com/webforms/29746582/2461117"
            frameBorder="0"
            className="w-full h-full"
          />
        </Suspense>
      </div>
    </section>
  );
};
