import { useState, type ComponentProps } from "react";
import { cn } from "tailwind-variants";
import { useIsMobile } from "../hooks/useIsMobile";
import { H4 } from "./typography";

type Templates = "shop" | "cafe" | "bodyshop" | "beauty" | "clinic" | "delivery" | "gym";

const TEMPLATES: Array<{
  template: Templates;
  text: string;
}> = [
  { template: "shop", text: "Магазины" },
  { template: "cafe", text: "Кафе и рестораны" },
  { template: "bodyshop", text: "Автосервис" },
  { template: "beauty", text: "Салоны красоты" },
  { template: "clinic", text: "Медцентры" },
  { template: "delivery", text: "Служба доставки" },
  { template: "gym", text: "Спортзалы" },
];

const TemplateSelect = ({
  className,
  value,
  ...props
}: ComponentProps<"select"> & { value: Templates }) => (
  <div className="relative w-full">
    <img
      src={`/icons/template-${value}.png`}
      className="absolute left-2.5 top-1/2 -translate-y-1/2 size-7.5 pointer-events-none"
    />
    <select
      className={cn("p-2.5 pl-12.5 bg-purple/20 rounded-[10px] w-full h-12.5", className)}
      value={value}
      {...props}
    >
      {TEMPLATES.map((item) => (
        <option key={item.template} value={item.template}>
          {item.text}
        </option>
      ))}
    </select>
  </div>
);
const TemplateButton = ({ className, ...props }: ComponentProps<"button">) => (
  <button
    className={cn(
      "bg-white flex gap-3.5 px-2.5 items-center justify-center md:justify-start w-15 h-17.5 md:w-55 lg:w-75 rounded-[10px]",
      className,
    )}
    {...props}
  ></button>
);

const Templates = ({ className, ...props }: ComponentProps<"div">) => {
  const isMobile = useIsMobile();
  const [currentTemplate, setCurrentTemplate] = useState<Templates>("shop");

  return (
    <div className={cn("flex max-sm:flex-col gap-2.5 md:gap-7.5 lg:gap-20", className)} {...props}>
      {isMobile ? (
        <TemplateSelect
          value={currentTemplate}
          onChange={(e) => setCurrentTemplate(e.target.value as Templates)}
        />
      ) : (
        <div className={cn("flex flex-col gap-1.75 md:gap-2 lg:gap-3", className)} {...props}>
          {TEMPLATES.map((item, index) => (
            <TemplateButton
              onClick={() => setCurrentTemplate(item.template)}
              className={item.template === currentTemplate ? "bg-purple/20" : undefined}
              key={index}
            >
              <img
                className="size-9 md:size-10 lg:size-15 shrink-0"
                src={`/icons/template-${item.template}.png`}
              />
              <H4 className="max-md:hidden">{item.text}</H4>
            </TemplateButton>
          ))}
        </div>
      )}
      <img
        key={currentTemplate}
        src={`/template-${currentTemplate}.png`}
        className="w-72.5 h-148.25 sm:w-70 sm:h-142.5 md:w-69.75 lg:w-88.75 lg:h-181.25 sm:-mt-5 md:-mt-6.25 lg:-mt-7.5 animate-slide-up"
      />
    </div>
  );
};

export { Templates };
