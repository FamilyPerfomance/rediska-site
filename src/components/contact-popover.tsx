import { useEffect, useState } from "react";
import { cn } from "tailwind-variants";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { SectionHead, SectionSubtitle, SectionTitle } from "./section";
import { TextAccent, TextMenu, TextSmall } from "./typography";
import { usePopover } from "../hooks/usePopover";
import { submitLead } from "../api/leads";

const ClosePopoverButton = () => {
  const { close } = usePopover();

  return (
    <button
      type="button"
      onClick={close}
      className="absolute top-2.5 right-2.5 bg-border size-9 flex items-center justify-center rounded-full"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 11L1 1M1 11L11 1"
          stroke="#7D8999"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

const ContactPopover = () => {
  const { showThankYou } = usePopover();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
          await submitLead({ phone, source: "popup" });
          showThankYou();
        } finally {
          setIsSubmitting(false);
        }
      }}
      className="flex flex-col gap-7.5 bg-white rounded-[20px] overflow-hidden relative"
    >
      <ClosePopoverButton />
      <div className="flex flex-col gap-7.5 p-5 sm:p-12.5 pb-0!">
        <SectionHead>
          <SectionTitle>
            <TextAccent>Создать</TextAccent> приложение
          </SectionTitle>
          <SectionSubtitle>Никакого кода и сложных настроек. Мы поможем!</SectionSubtitle>
        </SectionHead>
        <Input type="tel" inputMode="numeric" pattern="[0-9]*" className="w-full sm:max-md:w-60" placeholder="Телефон" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))} required />
        <div className="flex flex-col gap-5">
          <label className="flex gap-2.5">
            <Checkbox className="shrink-0" required />
            <TextSmall className="text-gray">
              {"Даю свое согласие на "}
              <a href="/personal-data" className="text-orange">
                обработку персональных данных
              </a>
            </TextSmall>
          </label>
          <Button type="submit" className="w-full!" disabled={isSubmitting}>
            <TextMenu>{isSubmitting ? "Отправляем..." : "Хочу создать приложение"}</TextMenu>
          </Button>
        </div>
      </div>
      <img className="w-full" src="/section-app.png" alt="Заявка отправлена" />
    </form>
  );
};

const ThankYouPopover = () => (
  <div className="flex flex-col gap-7.5 p-5 sm:p-12.5 pb-40 sm:pb-30.5 relative bg-white rounded-[20px] overflow-hidden">
    <ClosePopoverButton />
    <SectionHead>
      <SectionTitle>
        <TextAccent>Отлично!</TextAccent>
      </SectionTitle>
      <SectionSubtitle>Заявка отправлена, мы с вами свяжемся в течение 1 часа!</SectionSubtitle>
    </SectionHead>
    <img
      className="absolute bottom-0 right-2.5 w-36.25"
      src="/section-bots.png"
      alt="Заявка отправлена"
    />
  </div>
);

const PopoverOverlay = () => {
  const { view, close } = usePopover();
  const [activeView, setActiveView] = useState(view);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (view !== "closed") {
      setActiveView(view);
      setIsClosing(false);
      return;
    }

    if (activeView === "closed") return;

    setIsClosing(true);
    const timeout = setTimeout(() => setActiveView("closed"), 200);
    return () => clearTimeout(timeout);
  }, [view]);

  if (activeView === "closed") return null;

  return (
    <div data-popover-open className="fixed inset-0 z-50 flex items-center justify-center p-5">
      <button
        type="button"
        aria-label="Закрыть"
        onClick={close}
        className={cn(
          "absolute inset-0 bg-black/50",
          isClosing ? "animate-fade-out" : "animate-fade-in",
        )}
      />
      <div
        className={cn(
          "relative w-full max-w-125 max-h-full overflow-y-auto",
          isClosing ? "animate-scale-out" : "animate-scale-in",
        )}
      >
        {activeView === "contact" ? <ContactPopover /> : <ThankYouPopover />}
      </div>
    </div>
  );
};

export { ContactPopover, ThankYouPopover, PopoverOverlay };
