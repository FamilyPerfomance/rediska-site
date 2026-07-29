import type { ComponentProps } from "react";
import { cn, tv } from "tailwind-variants";

const container = tv({
  base: "grid grid-cols-[[page-start]_1fr_[content-start]_var(--content-width,18.125rem)_[content-end]_1fr_[page-end]] *:col-[content]",
  variants: {
    size: {
      md: "[--content-width:18.125rem] sm:[--content-width:44.375rem] md:[--content-width:58.75rem] lg:[--content-width:80.625rem]",
      lg: "[--content-width:20.625rem] sm:[--content-width:48.125rem] md:[--content-width:63.75rem] lg:[--content-width:88.125rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Container = ({
  size,
  className,
  children,
}: ComponentProps<"div"> & { size?: "md" | "lg" }) => {
  return <div className={cn(container({ size }), className)}>{children}</div>;
};

export { Container };
