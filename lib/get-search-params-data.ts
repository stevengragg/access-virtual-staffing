import { ReadonlyURLSearchParams } from "next/navigation";

export const getSearchTextFromSearchParams = (
  params: ReadonlyURLSearchParams
): string => {
  const searchParam = params.get("search");

  let search = "";
  if (params.has("search") && searchParam) {
    search = searchParam;
  }
  return search;
};

export const getCurrentPageFromSearchParams = (
  params: ReadonlyURLSearchParams
): number => {
  const page = params.get("page");
  const pageNumber = parseInt(page || "", 10);

  return Number.isInteger(pageNumber) && pageNumber > 0 ? pageNumber : 1;
};
