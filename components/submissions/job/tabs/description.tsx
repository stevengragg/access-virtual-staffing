import React from "react";

type JobDisplayProps = {
  title: string;
  pay: string;
  location: string;
  description: string;
};

const ApplicationDescription = ({
  title,
  pay,
  location,
  description,
}: JobDisplayProps) => {
  return (
    <section className="px-[5%] py-4 md:py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-zinc-700 mt-2">
              <strong>Rate:</strong> {pay}
            </p>
            <p className="text-zinc-700 mt-2">
              <strong>Location:</strong> {location}
            </p>
          </div>
          <div className="mt-4">
            <div className="prose">
              <div dangerouslySetInnerHTML={{ __html: description || "" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationDescription;
