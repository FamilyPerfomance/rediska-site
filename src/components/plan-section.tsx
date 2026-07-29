import { useEffect, useState, type ComponentProps } from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  IconColorSwatch,
  IconMark,
  IconNotification,
  IconOverline,
  IconProfileCircle,
  IconSimCard,
  IconUserOctagon,
} from "./icons";
import { H3, Text, TextSmall } from "./typography";
import { cn } from "tailwind-variants";
import { Carousel, CarouselContainer } from "./carousel";
import { landingConfig } from "../config";

type Period = "monthly" | "annual" | "triennial";
type ButtonVariant = ComponentProps<typeof Button>["variant"];

type Tier = {
  id: string;
  icon: string;
  title?: string;
  description?: string;
  accent?: string;
  features: string[];
  limits: string[];
  buttonVariant: ButtonVariant;
  buttonText: string;
  prices: Record<Period, string>;
};

type ApiPlan = {
  code?: string;
  name?: string;
  price?: number;
  description?: string;
  features?: string[];
  limits?: string[] | Record<string, string | number>;
  annualDiscountPercent?: number;
  isPopular?: boolean;
};

const LIMIT_ICONS = [
  IconSimCard,
  IconColorSwatch,
  IconProfileCircle,
  IconNotification,
  IconUserOctagon,
];

const TIERS: Tier[] = [
  {
    id: "free",
    icon: "/icons/tier-free.png",
    title: "Бесплатный",
    description: "Для знакомств с платформой Редис",
    features: ["Демо-режим", "Без уведомлений", "Логотип Редиска", "Для проверки идеи"],
    limits: [
      "1 приложение",
      "5 товаров / услуг",
      "10 клиентов",
      "10 уведомлений / мес",
      "1 сотрудник",
    ],
    buttonVariant: "tier-free",
    buttonText: "Выбрать",
    prices: { monthly: "0", annual: "0", triennial: "0" },
  },
  {
    id: "start",
    icon: "/icons/tier-start.png",
    title: "Старт",
    description: "Для первых заказов и клиентов",
    accent: "text-blue",
    features: [
      "Онлайн-заказы и запись",
      "Уведомления клиентам",
      "Свой логотип",
      "Базовая аналитика",
    ],
    limits: [
      "1 приложение",
      "100 товаров / услуг",
      "1 000 клиентов",
      "1 000 уведомлений / мес",
      "1 сотрудник",
    ],
    buttonVariant: "tier-start",
    buttonText: "Выбрать",
    prices: { monthly: "990", annual: "891", triennial: "0" },
  },
  {
    id: "business",
    icon: "/icons/tier-business.png",
    title: "Бизнес",
    description: "Для роста базы и повторных продаж",
    accent: "text-pink",
    features: ["Уведомления", "Бонусная система", "Свой логотип", "Команда до 5 сотрудников"],
    limits: [
      "5 приложений",
      "1 000 товаров / услуг",
      "10 000 клиентов",
      "10 000 уведомлений / мес",
      "5 сотрудников",
    ],
    buttonVariant: "tier-business",
    buttonText: "Выбрать",
    prices: { monthly: "2 990", annual: "2 691", triennial: "0" },
  },
  {
    id: "pro",
    icon: "/icons/tier-pro.png",
    title: "Профессиональный",
    description: "Для автоматизации, AI и масштабирования",
    accent: "text-purple",
    features: ["AI-рекомендации", "Интеграции и API", "Расширенные роли", "Приоритетная поддержка"],
    limits: [
      "20 приложений",
      "10 000 товаров / услуг",
      "100 000 клиентов",
      "100 000 уведомлений / мес",
      "20 сотрудников",
    ],
    buttonVariant: "tier-pro",
    buttonText: "Выбрать",
    prices: { monthly: "4 990", annual: "4 491", triennial: "0" },
  },
];

const PLAN_STYLE: Record<string, Pick<Tier, "icon" | "accent" | "buttonVariant">> = {
  free: { icon: "/icons/tier-free.png", buttonVariant: "tier-free" },
  start: { icon: "/icons/tier-start.png", accent: "text-blue", buttonVariant: "tier-start" },
  business: { icon: "/icons/tier-business.png", accent: "text-pink", buttonVariant: "tier-business" },
  pro: { icon: "/icons/tier-pro.png", accent: "text-purple", buttonVariant: "tier-pro" },
};

const formatPrice = (price: number) => new Intl.NumberFormat("ru-RU").format(price);

const normalizeLimits = (limits: ApiPlan["limits"]) => {
  if (Array.isArray(limits)) return limits.filter(Boolean).map(String);
  if (!limits || typeof limits !== "object") return [];

  return Object.values(limits).filter((value) => value !== null && value !== "").map(String);
};

const apiPlanToTier = (plan: ApiPlan): Tier => {
  const code = plan.code || "start";
  const style = PLAN_STYLE[code] ?? PLAN_STYLE.start;
  const monthly = Number(plan.price ?? 0);
  const discount = Number(plan.annualDiscountPercent ?? 0);
  const annualMonthly = monthly > 0 ? Math.round((monthly * (100 - discount)) / 100) : 0;

  return {
    id: code,
    icon: style.icon,
    title: plan.name || code,
    description: plan.description || "Для выбранного сценария работы приложения.",
    accent: style.accent,
    features: (plan.features ?? []).filter(Boolean).map(String),
    limits: normalizeLimits(plan.limits).slice(0, LIMIT_ICONS.length),
    buttonVariant: style.buttonVariant,
    buttonText: "Выбрать",
    prices: {
      monthly: formatPrice(monthly),
      annual: formatPrice(annualMonthly),
      triennial: "0",
    },
  };
};

const PERIODS: { id: Period; icon: string; label: string }[] = [
  { id: "monthly", icon: "/icons/plan-monthly.png", label: "месяц" },
  { id: "annual", icon: "/icons/plan-annual.png", label: "год" },
  { id: "triennial", icon: "/icons/plan-triennial.png", label: "3 года" },
];

const TierCard = ({ tier, period }: { tier: Tier; period: Period }) => {
  const config = landingConfig();

  return (
  <Card
    variant="sm"
    className="flex-col gap-2.5 lg:gap-5 justify-start bg-white shrink-0 w-55 md:w-75"
  >
    <img className="w-10 lg:w-15" src={tier.icon} />
    <div className="flex flex-col gap-2.5">
      {tier.title && <H3>{tier.title}</H3>}
      {tier.description && <Text className="text-wrap">{tier.description}</Text>}
      <div className="flex gap-1.25">
        {tier.id !== "free" && period !== "monthly" && (
          <H3 className="relative text-border">
            {tier.prices.monthly}
            <IconOverline className="absolute top-1/2 -translate-y-1/2 w-6.75 md:w-7.5 lg:w-8.75" />
          </H3>
        )}
        <H3 className={tier.accent ?? "text-gray"}>{tier.prices[period]} ₽</H3>
      </div>
    </div>
    <div className={cn("flex flex-col gap-1.25", tier.accent)}>
      {tier.features.map((item, index) => (
        <div key={index} className="flex gap-1.25 lg:gap-2.25 items-center">
          <IconMark />
          <TextSmall className="text-gray">{item}</TextSmall>
        </div>
      ))}
    </div>
    <div className={cn("flex flex-col gap-1.25 **:text-nowrap", tier.accent)}>
      {tier.limits.map((limit, index) => {
        const Icon = LIMIT_ICONS[index];
        return (
          <div key={index} className="flex gap-1.25 lg:gap-2.25 items-center">
            <Icon />
            <TextSmall className="text-gray">{limit}</TextSmall>
          </div>
        );
      })}
    </div>
    <a href={config.registerUrl} className="w-full">
      <Button type="button" variant={tier.buttonVariant} className="w-full!">
        {tier.buttonText}
      </Button>
    </a>
  </Card>
  );
};

const SubscriptionTab = ({ className, children, ...props }: ComponentProps<"button">) => (
  <button
    className={cn(
      "cursor-pointer p-2.5 sm:pr-5 flex gap-1.25 rounded-[20px] outline-1 outline-border justify-star items-center active:bg-border",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

const SubscriptionPlans = () => {
  const [period, setPeriod] = useState<Period>("monthly");
  const [tiers, setTiers] = useState<Tier[]>(TIERS);

  useEffect(() => {
    const config = landingConfig();
    const controller = new AbortController();

    fetch(config.tariffsApiUrl, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((payload: { plans?: ApiPlan[] }) => {
        if (Array.isArray(payload.plans) && payload.plans.length > 0) {
          setTiers(payload.plans.map(apiPlanToTier));
        }
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="flex gap-1.25 lg:gap-2.5 justify-center">
        {PERIODS.map((p) => (
          <SubscriptionTab
            key={p.id}
            className={period === p.id ? "bg-border" : ""}
            onClick={() => setPeriod(p.id)}
          >
            <img src={p.icon} alt={`на ${p.label}`} />
            <Text>
              <span className="max-sm:hidden">на </span>
              {p.label}
            </Text>
          </SubscriptionTab>
        ))}
      </div>
      <Carousel>
        <CarouselContainer>
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} period={period} />
          ))}
        </CarouselContainer>
      </Carousel>
    </>
  );
};

export { SubscriptionPlans };
