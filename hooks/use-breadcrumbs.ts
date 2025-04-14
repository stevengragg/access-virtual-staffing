"use client";
import { NextRouter, useRouter } from "next/router";
import { useMemo } from "react";

export const useBreadcrumbs = ({ router }: { router: NextRouter }) => {
  const path = router.pathname;

  const breadcrumbs = useMemo(() => {
    const pathArray = path.split("/").filter((x) => x);
    return [
      "Applicant Portal",
      ...pathArray.map((segment) => segment.replace(/-/g, " ")),
    ];
  }, [path]);

  return breadcrumbs;
};
