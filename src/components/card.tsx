import { type ComponentProps } from "react";
import { cn, tv } from "tailwind-variants";

const card = tv({
  base: "flex justify-center shadow-card overflow-hidden rounded-[20px] bg-light-gray",
  variants: {
    variant: {
      sm: "p-3.75 lg:p-7.5",
      md: "p-5 lg:p-7.5",
      lg: "p-5 sm:p-7.5 md:p-10 lg:p-15 rounded-[30px]",
    },
  },
  defaultVariants: {
    variant: "md",
  },
});

const Card = ({
  variant,
  children,
  className,
  ...props
}: ComponentProps<"div"> & { variant?: "sm" | "md" | "lg" }) => {
  return (
    <div className={cn(card({ variant }), className)} {...props}>
      {children}
    </div>
  );
};

export { Card };
