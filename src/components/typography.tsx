import type { ComponentProps } from "react";
import { cn } from "tailwind-variants";

const H1 = ({ className, ...props }: ComponentProps<"h1">) => (
  <h1
    className={cn(
      "font-[Noto_Sans] font-extrabold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[110%] text-balance",
      className,
    )}
    {...props}
  />
);

const H2 = ({ className, ...props }: ComponentProps<"h2">) => (
  <h2
    className={cn(
      "font-[Noto_Sans] font-bold text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-[120%] tracking-normal text-balance",
      className,
    )}
    {...props}
  />
);

const H3 = ({ className, ...props }: ComponentProps<"h3">) => (
  <h3
    className={cn(
      "font-noto font-extrabold text-[15px] md:text-[17px] lg:text-[20px] leading-[130%] tracking-normal text-balance",
      className,
    )}
    {...props}
  />
);

const H4 = ({ className, ...props }: ComponentProps<"h4">) => (
  <h4
    className={cn(
      "font-noto font-extrabold text-[14px] lg:text-[16px] leading-[130%] tracking-normal text-balance ",
      className,
    )}
    {...props}
  />
);

const Subtitle = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "text-gray text-[16px] md:text-[18px] lg:text-[22px] leading-[140%] tracking-normal text-balance",
      className,
    )}
    {...props}
  />
);

const Text = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "text-[14px] lg:text-[16px] leading-[140%] tracking-normal text-pretty",
      className,
    )}
    {...props}
  />
);

const TextSmall = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "text-[13px] lg:text-[14px] leading-[140%] tracking-normal text-pretty",
      className,
    )}
    {...props}
  />
);

const TextMenu = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[130%] tracking-normal",
      className,
    )}
    {...props}
  />
);

const TextAccent = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn("bg-clip-text text-transparent bg-brand-gradient-pink", className)}
    {...props}
  />
);

export { H1, H2, H3, H4, Subtitle, Text, TextSmall, TextMenu, TextAccent };
