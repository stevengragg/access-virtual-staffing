import Image from "next/image";

// import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      {/* <Skeleton className="h-[640px] w-full rounded-lg" /> */}

      <Image
        src={"/avs_logo_4.png"}
        alt={"AVS Logo"}
        width={350}
        height={100}
        className="animate-bounce"
      />
      {/* <Skeleton className="h-8 w-full rounded-lg" />
      <Skeleton className="h-8 w-full rounded-lg" /> */}
    </div>
  );
}
