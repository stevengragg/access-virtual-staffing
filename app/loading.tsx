import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-[640px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-full rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
