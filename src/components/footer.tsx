import { MAXButton, VKButton } from "./button";
import { landingConfig } from "../config";
import { IconLogo } from "./icons";
import { TextAccent, TextMenu } from "./typography";

const FooterLinks = () => (
  <>
    {landingConfig().footerLinks.map((link) => (
      <a key={`${link.label}-${link.href}`} href={link.href}>
        <TextMenu>{link.label}</TextMenu>
      </a>
    ))}
  </>
);

const Footer = () => (
  <div className="flex flex-col gap-2.5 md:gap-7.5">
    <div className="flex justify-between py-5 lg:py-7.5">
      <IconLogo className="w-25.75 h-10 md:w-29.5 md:h-11.5" />
      <div className="flex gap-2.5">
        <MAXButton className="h-10 md:h-11.25" />
        <VKButton className="h-10 md:h-11.25" />
      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-2.5 md:gap-5 lg:gap-7.5">
        <div className="flex flex-col shrink-0 gap-2.5 w-42.5 md:w-35 lg:w-47.5">
          <TextMenu className="font-bold text-gray">Платформа</TextMenu>
          <a href="/">
            <TextMenu>Возможности</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Как это работает</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Тарифы</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Партнерам</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Кейсы</TextMenu>
          </a>
          <a href="/">
            <TextMenu>
              <TextAccent>Демо</TextAccent>
            </TextMenu>
          </a>
        </div>
        <div className="flex flex-col shrink-0 gap-2.5 w-42.5 md:w-35 lg:w-47.5">
          <TextMenu className="font-bold text-gray">Решения</TextMenu>
          <a href="/">
            <TextMenu>Магазины</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Кафе и рестораны</TextMenu>
          </a>{" "}
          <a href="/">
            <TextMenu>Автосервис</TextMenu>
          </a>{" "}
          <a href="/">
            <TextMenu>Салоны красоты</TextMenu>
          </a>{" "}
          <a href="/">
            <TextMenu>Медцентры</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Служба доставки</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Магазины</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Другие ниши</TextMenu>
          </a>
        </div>
      </div>
      <div className="flex gap-2.5 md:gap-5 lg:gap-7.5">
        <div className="flex flex-col shrink-0 gap-2.5 w-42.5 md:w-35 lg:w-47.5">
          <TextMenu className="font-bold text-gray">Инвестиции</TextMenu>
          <a href="/">
            <TextMenu>Для инвесторов</TextMenu>
          </a>
        </div>
        <div className="flex flex-col shrink-0 gap-2.5 w-42.5 md:w-35 lg:w-47.5">
          <TextMenu className="font-bold text-gray">Поддержка</TextMenu>
          <a href="/">
            <TextMenu>Помощь</TextMenu>
          </a>
          <a href="/">
            <TextMenu>Свяжитесь с нами</TextMenu>
          </a>
        </div>
      </div>
    </div>
    <div className="py-7.5 flex justify-between">
      <TextMenu className="shrink-0">© 2026 Редис</TextMenu>
      <div className="flex gap-2.5 lg:gap-7.5 flex-wrap max-lg:max-w-112.5 justify-end">
        <FooterLinks />
      </div>
    </div>
  </div>
);

const FooterMobile = () => (
  <div className="py-5 flex flex-col gap-10">
    <div className="flex justify-between">
      <IconLogo className="w-25.75 h-10" />
      <div className="flex gap-2.5">
        <MAXButton className="h-10" />
        <VKButton className="h-10" />
      </div>
    </div>
    <div className="flex flex-col gap-2.5 items-center">
      <FooterLinks />
      <TextMenu>© 2026 Редис</TextMenu>
    </div>
  </div>
);

export { Footer, FooterMobile };
