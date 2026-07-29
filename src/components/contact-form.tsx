import type { ComponentProps } from "react";
import { cn } from "tailwind-variants";
import { Button } from "./button";
import { TextMenu, TextSmall } from "./typography";
import { Checkbox } from "./checkbox";
import { Input } from "./input";

const ContactForm = ({ className, ...props }: ComponentProps<"form">) => (
  <form className={cn("flex flex-col gap-3.75 lg:gap-5", className)} {...props}>
    <div className="flex max-sm:flex-col gap-5 sm:gap-2.5 md:gap-5">
      <Input type="tel" className="w-full sm:max-md:w-60" placeholder="Телефон" />
      <Button>
        <TextMenu>Оставить заявку</TextMenu>
      </Button>
    </div>
    <label className="flex gap-2.5">
      <Checkbox className="shrink-0" />
      <TextSmall className="text-gray">
        {"Даю свое согласие на "}
        <a href="/terms" className="text-orange">
          обработку персональных данных
        </a>
      </TextSmall>
    </label>
  </form>
);

export { ContactForm };
