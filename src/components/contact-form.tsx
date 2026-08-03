import { useState, type ComponentProps } from "react";
import { cn } from "tailwind-variants";
import { Button } from "./button";
import { TextMenu, TextSmall } from "./typography";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { submitLead } from "../api/leads";

const ContactForm = ({ className, ...props }: ComponentProps<"form">) => {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  return (
    <form
      className={cn("flex flex-col gap-3.75 lg:gap-5", className)}
      onSubmit={async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
          await submitLead({ phone, source: "contact" });
          setPhone("");
          setIsSent(true);
        } finally {
          setIsSubmitting(false);
        }
      }}
      {...props}
    >
      <div className="flex max-sm:flex-col gap-5 sm:gap-2.5 md:gap-5">
        <Input type="tel" inputMode="numeric" pattern="[0-9]*" className="w-full sm:max-md:w-60" placeholder="Телефон" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))} required />
        <Button type="submit" disabled={isSubmitting}>
          <TextMenu>{isSubmitting ? "Отправляем..." : "Оставить заявку"}</TextMenu>
        </Button>
      </div>
      <label className="flex gap-2.5">
        <Checkbox className="shrink-0" required />
        <TextSmall className="text-gray">
          {"Даю свое согласие на "}
          <a href="/personal-data" className="text-orange">
            обработку персональных данных
          </a>
        </TextSmall>
      </label>
      {isSent && <TextSmall className="text-primary">Заявка отправлена, мы скоро свяжемся с вами.</TextSmall>}
    </form>
  );
};

export { ContactForm };
