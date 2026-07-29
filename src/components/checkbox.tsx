import type { ComponentProps } from "react";
import { cn } from "tailwind-variants";

const Checkbox = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("grid grid-cols-1 group place-items-center", className)} {...props}>
    <input
      className="appearance-none bg-white aspect-square box-border row-start-1 col-start-1 outline-1 outline-border rounded-[3px] checked:bg-brand-gradient-blue checked:outline-0 size-5"
      type="checkbox"
    />
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className="size-5 row-start-1 col-start-1 pointer-events-none  stroke-white"
    >
      <path
        d="M3 8L6 11L11 3.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-0 group-has-checked:opacity-100"
      ></path>
    </svg>
  </div>
);

export { Checkbox };
