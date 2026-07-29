import type { ComponentProps } from "react";
import { cn } from "tailwind-variants";

const Input = ({ className, ...props }: ComponentProps<"input">) => (
  <input
    className={cn(
      "py-4 lg:py-5 px-5 bg-white rounded-lg outline-1 outline-border font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[130%] tracking-normal placeholder:text-gray",
      className,
    )}
    {...props}
  />
);

export { Input };
