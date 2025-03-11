"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hooks/use-pagination";
import { useFilter } from "../../hooks/use-filter";

type JobListPaginationContainerProps = {
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
};

export const JobListPaginationContainer = (
  props: JobListPaginationContainerProps
) => {
  const { totalCount, siblingCount = 1, pageSize } = props;
  const { currentPage, handlePaginate } = useFilter();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onPageChange = (pageNumber: number) => {
    handlePaginate(pageNumber);
  };

  return (
    <section id="paginate" className="px-[5%] pb-4 md:pb-8 lg:pb-16">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 && (
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage - 1)}
              />
            )}
          </PaginationItem>
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === "DOTS") {
              return (
                <PaginationItem key={index}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => onPageChange(pageNumber as number)}
                  isActive={pageNumber === currentPage}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            {currentPage !== paginationRange[paginationRange.length - 1] ? (
              <PaginationNext
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage + 1)}
              />
            ) : (
              <PaginationNext
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage + 1)}
                isActive={false}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
