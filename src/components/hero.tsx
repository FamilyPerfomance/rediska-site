import { type ComponentProps, type ReactNode } from "react";
import { Button } from "./button";
import { IconPlay } from "./icons";
import { cn } from "tailwind-variants";
import { TextMenu } from "./typography";
import { usePopover } from "../hooks/usePopover";

const HeroImage = ({ className, ...props }: ComponentProps<"img">) => (
  <img
    className={cn(
      "shrink-0 w-72.5 sm:justify-self-end h-55 sm:h-86.5 md:w-95 md:h-113.5 lg:w-130 lg:h-155.5 object-contain object-top max-sm:",
      className,
    )}
    {...props}
  />
);
const HeroContent = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-col gap-5 md:gap-7.5 lg:gap-10">{children}</div>
);
const HeroTitle = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-col gap-2.5 sm:gap-5 lg:gap-7.5">{children}</div>
);
const HeroButtons = () => {
  const { openContact } = usePopover();

  return (
    <div className="flex max-sm:items-center max-sm:flex-col gap-2.5 sm:gap-5 md:gap-7.5">
      <a href="https://max.ru/id434583104782_bot" target="_blank" rel="noopener noreferrer">
        <Button type="button">Открыть демо в MAX</Button>
      </a>
      <button type="button" onClick={openContact} className="cursor-pointer text-balance h-12.5 flex gap-2.5 items-center text-start">
        <IconPlay className="shrink-0" />
        <TextMenu>Посмотреть как это работает</TextMenu>
      </button>
    </div>
  );
};

const Hero = ({ children }: { children: ReactNode }) => (
  <section className="flex items-center flex-col-reverse sm:flex-row gap-2.5 md:gap-5 lg:gap-7.5">
    {children}
  </section>
);

export { HeroImage, HeroContent, HeroTitle, HeroButtons, Hero };
