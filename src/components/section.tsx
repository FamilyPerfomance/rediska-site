import { type ComponentProps } from "react";
import { H2, Subtitle } from "./typography";
import { cn } from "tailwind-variants";

const SectionTitle = (props: ComponentProps<"div">) => <H2 {...props} />;
const SectionSubtitle = (props: ComponentProps<"div">) => <Subtitle {...props} />;
const SectionHead = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col gap-2.5 lg:gap-5 text-balance", className)} {...props}>
      {children}
    </div>
  );
};
const SectionContent = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "sm:max-w-102.5 md:max-w-140 lg:max-w-192.5 flex flex-col gap-5 md:gap-7.5 lg:gap-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
const SectionImage = ({ className, ...props }: ComponentProps<"img">) => {
  return <img className={cn("w-82.5 md:w-105 lg:w-145", className)} {...props} />;
};

const Section = ({ children, className, ...props }: ComponentProps<"section">) => {
  return (
    <section className={cn("flex flex-col w-full", className)} {...props}>
      {children}
    </section>
  );
};

export { SectionTitle, SectionSubtitle, SectionHead, SectionContent, SectionImage, Section };
