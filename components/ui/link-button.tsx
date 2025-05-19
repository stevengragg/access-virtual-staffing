import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   px-5 py-2 rounded-full font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primaryBlue text-neutralLightZinc hover:bg-primaryBlue/80",
        defaultOutline:
          "border border-primaryBlue bg-transparent hover:bg-primaryBrightAqua text-primaryBlue",
        primary:
          "bg-primaryBrightAqua text-deepZinc hover:bg-deepBlue hover:text-white",
        secondary: "bg-deepBlue text-neutralLightZinc hover:bg-oceanBlue",
        outline:
          "border border-deepZinc bg-neutralLightZinc hover:bg-zinc-300 text-deepZinc",
        link: "text-white underline-offset-4 hover:text-zinc-100 underline bg-transparent border-none",
        link2:
          "text-deepZinc underline-offset-4 hover:text-primaryBlue underline bg-transparent border-none",
        light: "bg-white text-deepZinc hover:bg-zinc-200 hover:text-deepBlue",
        destructive: "bg-red-500  destructive text-white hover:bg-red-400",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "h-11 rounded-full px-8 py-4",
        xl: "h-12 rounded-full px-6 py-4 text-lg lg:text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkButtonProps
  extends VariantProps<typeof linkButtonVariants> {
  navLink: {
    url: string;
    title: string;
    follow: boolean;
  };
  className?: string;
  icon?: () => React.JSX.Element;
}

const LinkButton = ({
  navLink,
  variant,
  size,
  className,
  icon,
}: LinkButtonProps) => {
  return (
    <Link
      href={navLink.url}
      className={cn(linkButtonVariants({ variant, size, className }))}
      target={navLink.follow ? "_blank" : ""}
    >
      {navLink.title} {icon ? <span>{icon()}</span> : null}
    </Link>
  );
};

export default LinkButton;
