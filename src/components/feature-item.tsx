import { type ComponentProps } from "react";
import { cn } from "tailwind-variants";

const FeatureItem = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex gap-2.5 lg:gap-3.75 w-full items-center", className)} {...props}>
    {children}
  </div>
);

export { FeatureItem };
