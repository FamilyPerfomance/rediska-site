import { useState, type ComponentProps, type ReactNode } from "react";
import { Container } from "./container";
import { IconClose, IconDots, IconLogo } from "./icons";
import { TextAccent, TextMenu } from "./typography";
import { Button, MAXButton, VKButton } from "./button";
import { cn } from "tailwind-variants";
import { usePopover } from "../hooks/usePopover";
import { landingConfig } from "../config";

const Navigation = ({
  isMenuOpen,
  onToggleMenu,
  className,
  ...props
}: ComponentProps<"nav"> & { isMenuOpen: boolean; onToggleMenu: () => void }) => {
  const { openContact } = usePopover();
  const config = landingConfig();

  return (
    <nav className={cn("flex h-min w-full justify-between items-center", className)} {...props}>
      <a href="/">
        <IconLogo className="w-23.25 h-9 sm:w-25 sm:h-10 lg:w-29.5 lg:h-11.5" />
      </a>
      <div className="flex justify-between items-center sm:w-132.5 md:w-175 lg:w-267.5">
        <div className="flex gap-5 lg:gap-7.5">
          <a className="max-lg:hidden" href="#features">
            <TextMenu>Возможности</TextMenu>
          </a>
          <a className="max-lg:hidden" href="#how-does-it-work">
            <TextMenu>Как это работает</TextMenu>
          </a>
          <a className="max-sm:hidden" href="#pricing">
            <TextMenu>Тарифы</TextMenu>
          </a>
          <a className="max-lg:hidden" href="#partners">
            <TextMenu>Партнерам</TextMenu>
          </a>
          <a className="max-lg:hidden" href="#cases">
            <TextMenu>Кейсы</TextMenu>
          </a>
          <button type="button" onClick={openContact}>
            <TextMenu>
              <TextAccent>Демо</TextAccent>
            </TextMenu>
          </button>
          <div className="sm:flex gap-1.25 hidden lg:hidden">
            <TextMenu>Еще</TextMenu>
            <IconDots className="text-black w-2.25" />
          </div>
        </div>
        <div className="flex gap-2.5 items-center max-sm:hidden">
          <MAXButton className="h-9.5 lg:h-11.25" />
          <VKButton className="h-9.5 lg:h-11.25" />
        </div>
        <div className="flex gap-2.5 items-center max-sm:hidden">
          <a href={config.loginUrl}><Button className="py-2.5 px-3.5 md:py-3! md:px-4!" variant="white"><TextMenu>Войти</TextMenu></Button></a>
          <a href={config.registerUrl}><Button className="py-2.5 px-3.5 md:py-3! md:px-4!" variant="primary"><TextMenu>Регистрация</TextMenu></Button></a>
        </div>
      </div>
      <button
        onClick={onToggleMenu}
        className="bg-black text-white w-9 h-9 px-2.5 py-3.5 rounded-[10px] flex justify-center items-center sm:hidden"
      >
        {isMenuOpen ? <IconClose className="w-2.25" /> : <IconDots className="w-2.25" />}
      </button>
    </nav>
  );
};

const MobileMenu = ({ children }: { children?: ReactNode }) => {
  const { openContact } = usePopover();
  const config = landingConfig();

  return (
    <div
      data-mobile-menu
      className="fixed pt-5 top-0 left-0 w-full z-10 h-dvh overscroll-contain overflow-hidden bg-light-gray"
    >
    <Container>
      <div className="overflow-auto h-full">
        {children}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-0.75">
            <a href="#features"><Button variant="tertiary"><TextMenu>Возможности</TextMenu></Button></a>
            <a href="#how-does-it-work"><Button variant="tertiary"><TextMenu>Как это работает</TextMenu></Button></a>
            <a href="#pricing"><Button variant="tertiary"><TextMenu>Тарифы</TextMenu></Button></a>
            <a href="#partners"><Button variant="tertiary"><TextMenu>Партнерам</TextMenu></Button></a>
            <a href="#cases"><Button variant="tertiary"><TextMenu>Кейсы</TextMenu></Button></a>
            <Button type="button" onClick={openContact} variant="secondary"><TextMenu>Демо</TextMenu></Button>
          </div>
          <div className="flex gap-2.5 justify-center">
            <MAXButton />
            <VKButton />
          </div>
          <div className="flex flex-col gap-5">
            <a href={config.loginUrl}><Button variant="white"><TextMenu>Войти</TextMenu></Button></a>
            <a href={config.registerUrl}><Button variant="primary"><TextMenu>Регистрация</TextMenu></Button></a>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
};

const Navbar = (props: ComponentProps<"div">) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <>
      <Container {...props}>
        <Navigation isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      </Container>
      {isMenuOpen && (
        <MobileMenu>
          <Navigation isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} className="mb-5" />
        </MobileMenu>
      )}
    </>
  );
};

export { Navbar };
