"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React from "react";

type MapProps = {
  embedUrl: string;
  title?: string;
};

type Address = {
  line1: string;
  line2: string;
};

type Location = {
  map: MapProps;
  title: string;
  address: Address;
};

type Tab = {
  value: string;
  content: Location;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: Tab[];
};

export type GlobalOfficesProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const GlobalOffices = (props: GlobalOfficesProps) => {
  const { tagline, heading, description, tabs } = {
    ...GlobalOfficesDefaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 flex max-w-lg flex-col justify-start md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 text-robinsEggBlueDark">
            {tagline}
          </p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-neutralDarker">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Tabs
          defaultValue={tabs[0].value}
          orientation="vertical"
          className="relative grid auto-cols-fr grid-cols-1 gap-12 md:grid-cols-[.5fr_1fr] md:gap-y-16 lg:gap-x-20 lg:gap-y-16"
        >
          <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="items-start justify-start border-0 border-l-2 border-primaryBlue border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
              >
                <div className="text-left">
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    {tab.content.title}
                  </h3>
                  <div className="inline-block whitespace-normal">
                    <span className="block">{tab.content.address.line1}</span>
                    <span className="block">{tab.content.address.line2}</span>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:animate-tabs"
            >
              <div className="relative size-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                <iframe
                  src={tab.content.map.embedUrl}
                  title={
                    tab.content.map.title || `Map for ${tab.content.title}`
                  }
                  className="size-full border-0 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export const GlobalOfficesDefaults: Props = {
  tagline: "Access Virtual Staffing",
  heading: "Headquarters",
  description: "",
  tabs: [
    {
      value: "tab-1",
      content: {
        map: {
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.983277772455!2d-80.05081229999999!3d26.712981199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d6899f919fb9%3A0x6480ed02e7a85d25!2s105%20S%20Narcissus%20Ave%20%23%20512%2C%20West%20Palm%20Beach%2C%20FL%2033401%2C%20USA!5e0!3m2!1sen!2sph!4v1751877260486!5m2!1sen!2sph",
          title: "West Palm Beach Office Location",
        },
        title: "West Palm Beach, Florida",
        address: {
          line1: "105 S. Narcissus Ave. Suite 512 ",
          line2: "West Palm Beach, FL 33401",
        },
      },
    },
  ],
};

export default GlobalOffices;
