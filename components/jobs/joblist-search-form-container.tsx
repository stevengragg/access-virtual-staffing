"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  searchFormSchema,
  SearchFormSchema,
} from "@/lib/validation/contact-form-validation";
import { useFilter } from "../../hooks/use-filter";

import { XIcon } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
  totalSearchResult: number;
  allJobs?: number;
  searchText: string;
};

export const JobListSearchFormContainer = ({
  totalSearchResult,
  searchText,
}: Props) => {
  const { handleSearch, clearFilters } = useFilter();

  const form = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchText: searchText || "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmitForm: SubmitHandler<SearchFormSchema> = (data) => {
    handleSearch({ searchText: data.searchText || "" });
  };

  return (
    <section id="search_container" className="px-[5%] pt-12 md:pt-24 ">
      <div className="container">
        <form
          id="search_form"
          className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className=" w-full items-center">
            <div className="flex items-center  rounded-lg px-2">
              <Input
                {...register("searchText")}
                placeholder="Search..."
                className="flex-1 p-2 h-14"
              />
              <button
                type="button"
                onClick={() => {
                  reset({ searchText: "" });
                  clearFilters();
                }}
                className="text-gray-500 hover:text-gray-700 ml-2"
              >
                <XIcon />
              </button>
            </div>

            {errors.searchText && (
              <p className="text-red-500 font-medium text-xs mt-2">
                {errors.searchText.message}
              </p>
            )}
          </div>
        </form>
        <div className="mt-2 md:mt-4">
          <p className="text-sm lg:text-md text-zinc-500 font-medium">
            There are {totalSearchResult || 0} job(s) found
          </p>
        </div>
      </div>
    </section>
  );
};
