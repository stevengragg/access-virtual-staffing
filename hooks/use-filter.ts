"use client";
import {
  getCurrentPageFromSearchParams,
  getSearchTextFromSearchParams,
} from "@/lib/get-search-params-data";
import { JobSearchFilter } from "@/types/jobs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useFilter() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = getCurrentPageFromSearchParams(params);
  const searchText = getSearchTextFromSearchParams(params);

  const handleSearch = ({ searchText }: JobSearchFilter) => {
    const newParams = new URLSearchParams(params.toString());

    if (!searchText) {
      newParams.delete("search");
    } else {
      newParams.set("search", searchText);
    }

    newParams.set("page", "1");

    router.push(`${pathname}?${newParams.toString()}`);
  };

  const clearFilters = () => {
    router.push(`${pathname}?page=1`);
  };

  const handlePaginate = (value: any) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", value.toString());
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const removeFilter = (filterNames: string[]) => {
    const newParams = new URLSearchParams(params.toString());
    filterNames.forEach((filter) => {
      newParams.delete(filter);
    });

    router.push(`${pathname}?${newParams.toString()}`);
  };

  return {
    searchText,
    handleSearch,
    currentPage,
    handlePaginate,
    removeFilter,
    clearFilters,
  };
}
