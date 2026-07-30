import type { ComponentProps } from "react";
import { cn, tv } from "tailwind-variants";
import { TextMenu } from "./typography";
import { landingConfig } from "../config";

const button = tv({
  base: "cursor-pointer font-medium text-white w-full sm:w-fit text-nowrap rounded-lg py-4 px-6 lg:py-5 lg:px-7.5 text-[14px] md:text-[15px] lg:text-[16px] leading-[130%] tracking-normal",
  variants: {
    variant: {
      primary:
        "bg-linear-to-r from-[#494BF6] to-[#7A49F6] hover:from-[#5D5FFF] hover:to-[#8E5DFF] active:from-[#3537E2] to:from-[#6635E2] active:text-blue",
      secondary:
        "bg-linear-to-r from-[#FA1993] to-[#FA2046]  hover:from-[#FF2DA7] hover:to-[#FF345A] active:from-[#E6057F] to:from-[#E60C32] active:text-pink",
      tertiary: "bg-background text-black",
      white: "bg-white text-black",
      icon: "bg-white p-0! aspect-square flex items-center justify-center",
      "tier-free":
        "py-2.75 lg:py-3.5 bg-background hover:bg-brand-gradient-blue active:bg-linear-90 active:from-[#3537E2] active:to-[#6635E2] text-[#494BF6] hover:text-white active:text-blue",
      "tier-start":
        "py-2.75 lg:py-3.5 bg-background hover:bg-blue active:bg-[#2169CD] text-blue hover:text-white active:text-blue",
      "tier-business":
        "py-2.75 lg:py-3.5 bg-background hover:bg-pink active:bg-[#D72E82] text-pink hover:text-white active:text-pink",
      "tier-pro":
        "py-2.75 lg:py-3.5 bg-background hover:bg-purple active:bg-[#793CD4] text-purple hover:text-white active:text-purple",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = ({
  variant,
  className,
  ...props
}: ComponentProps<"button"> & {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "white"
    | "icon"
    | "tier-free"
    | "tier-start"
    | "tier-business"
    | "tier-pro";
}) => <button className={cn(button({ variant }), className)} {...props}></button>;

const LabeledCreateButton = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex max-sm:flex-wrap max-sm:justify-center items-center gap-5 sm:gap-y-2.5 lg:gap-x-7.5 lg:gap-y-3.75",
        className,
      )}
      {...props}
    >
      <a href={landingConfig().registerUrl}>
        <Button type="button">Создать приложение</Button>
      </a>
      <div className="flex gap-1.25 sm:gap-2.5 items-center text-balance">
        <img src="/icons/lightning.png" className="w-6 h-6 lg:w-7.5 lg:h-7.5" />
        <TextMenu>Будет готово за 1 минуту</TextMenu>
      </div>
    </div>
  );
};

const SocialButton = ({ href, label, icon, iconClassName, ...props }: ComponentProps<"button"> & { href?: string; label: string; icon: string; iconClassName?: string }) => {
  const buttonElement = (
    <Button variant="icon" {...props}>
      <img className={cn("object-contain", iconClassName)} src={icon} alt={label} />
    </Button>
  );

  if (!href) return buttonElement;

  return (
    <a className="cursor-pointer" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {buttonElement}
    </a>
  );
};

const VKButton = (props: ComponentProps<"button">) => (
  <SocialButton href={landingConfig().vkUrl} label="vk" icon="/icons/vk.svg" iconClassName="w-6 md:w-7.5" {...props} />
);

const MAXButton = (props: ComponentProps<"button">) => (
  <SocialButton href={landingConfig().maxUrl} label="max" icon="/icons/max.svg" iconClassName="h-6 w-6 md:h-7.5 md:w-7.5" {...props} />
);

export { Button, LabeledCreateButton, VKButton, MAXButton };
