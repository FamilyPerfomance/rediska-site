import { Container } from "./components/container";
import { Hero, HeroButtons, HeroContent, HeroImage, HeroTitle } from "./components/hero";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  SectionHead,
  SectionContent,
  SectionImage,
} from "./components/section";
import { H1, H3, H4, Subtitle, Text, TextAccent, TextSmall } from "./components/typography";
import { FeatureItem } from "./components/feature-item";
import { Button, LabeledCreateButton } from "./components/button";
import { Card } from "./components/card";
import { Preview } from "./components/preview";
import { Navbar } from "./components/navbar";
import { ContactForm } from "./components/contact-form";
import { Carousel, CarouselContainer } from "./components/carousel";
import { Footer, FooterMobile } from "./components/footer";
import { SubscriptionPlans } from "./components/plan-section";
import { useIsMobile } from "./hooks/useIsMobile";
import { Templates } from "./components/template-section";
import { PopoverOverlay } from "./components/contact-popover";
import { PopoverProvider, usePopover } from "./hooks/usePopover";
import { landingConfig } from "./config";

const AppContent = () => {
  const isMobile = useIsMobile();
  const { openContact } = usePopover();
  const config = landingConfig();

  return (
    <>
      <PopoverOverlay />
      <div className="flex flex-col pb-15 md:pb-20 lg:pb-28 bg-[url('/page-bg-mobile.svg')] sm:bg-[url('/page-bg.svg')] bg-no-repeat bg-cover sm:bg-size-[auto_100%] bg-center overflow-x-hidden">
        {/* navbar */}
        <Navbar className="mt-5 sm:mt-6.25 md:mt-5 lg:mt-6.25" />
        {/* hero */}
        <Container className="mt-7.5 sm:mt-10 md:mt-12.5 lg:mt-22.5">
          <Hero>
            <HeroContent>
              <HeroTitle>
                <H1>
                  <TextAccent>Верните</TextAccent>
                  <br />
                  клиентов которых ваш бизнес теряет ежедневно
                </H1>
                <Subtitle>
                  Создавайте приложения внутри Макс и других мессенджеров, возращайте клиентов и
                  увеличивайте прибыль
                </Subtitle>
              </HeroTitle>
              <HeroButtons></HeroButtons>
            </HeroContent>
            <div className="shrink-0 relative">
              <HeroImage
                src="/hero-lg.png"
                alt="hero"
                srcSet="/hero-sm.png 290w, /hero-md.png 380w, /hero-lg.png 520w"
                sizes="(width >= 48.125rem) 290px, (width >= 63.75rem) 380px, (width >= 88.125rem) 520px"
                className="max-sm:object-cover"
              />
              <div className="absolute bottom-0 sm:hidden bg-linear-to-b from-transparent to-background h-25 w-full"></div>
            </div>
          </Hero>
        </Container>
        {/* features */}
        <Container className="mt-15 md:mt-12.5 lg:mt-22.5">
          <section id="features" className="flex flex-col sm:flex-row gap-2.5 md:gap-5 lg:gap-7.5">
            {[
              {
                icon: "/image-875.png",
                title: "Больше продаж",
                description: "За счёт удержания и повторных покупок",
              },
              {
                icon: "/image-876.png",
                title: "Автоматизация",
                description: "Общения с клиентом и задач без лишних затрат",
              },
              {
                icon: "/image-877.png",
                title: "Лояльные клиенты",
                description: "Возращаются сами и рекомендуют вас",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="flex gap-1.25 sm:max-md:flex-col sm:max-md:items-start md:gap-2.5 lg:gap-5 items-center"
              >
                <img
                  className="w-15 h-15 md:w-17.5 md:h-17.5 lg:w-25 lg:h-25"
                  src={item.icon}
                  alt={item.title}
                />
                <div className="flex gap-1.25 flex-col ">
                  <H3>{item.title}</H3>
                  <Text className="text-gray">{item.description}</Text>
                </div>
              </Card>
            ))}
          </section>
        </Container>
        {/* create app */}
        <Container className="mt-15 md:mt-20 lg:mt-30">
          <Section id="how-does-it-work">
            <SectionContent className="max-w-none!">
              <SectionHead className="text-center">
                <SectionTitle>
                  Создайте приложение за несколько минут и начните{" "}
                  <TextAccent>получать клиентов</TextAccent>
                </SectionTitle>
                <SectionSubtitle>
                  От выбора шаблона до первых клиентов — всего 4 простых шага
                </SectionSubtitle>
              </SectionHead>
              <Carousel>
                <CarouselContainer className="sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2.5 md:gap-5 lg:gap-7.5">
                  {[
                    {
                      icon: "/section-create-app-1.png",
                      title: "Выберите шаблон",
                      description: "Подберите готовое решение для вашего бизнеса",
                    },
                    {
                      icon: "/section-create-app-2.png",
                      title: "Добавьте свои товары или услуги",
                      description: "Заполните информацию о компании. ",
                    },
                    {
                      icon: "/section-create-app-3.png",
                      title: "Подключите Макс и запускайте",
                      description: "Приложение доступно в этот же день",
                    },
                    {
                      icon: "/section-create-app-4.png",
                      title: "Обрабазывайте заказы",
                      description: "из админки приложения или вашей CRM",
                    },
                  ].map((item, index) => (
                    <div
                      className="relative bg-white rounded-[20px] flex max-sm:flex-col md:flex-col gap-2.5 p-3.75 sm:p-5 lg:p-7.5 items-center max-sm:text-center md:text-center max-sm:w-47.5 shrink-0"
                      key={index}
                    >
                      <img
                        className="absolute top-0 left-4 h-11.5 md:left-6.25 md:h-15 lg:left-11.25 lg:h-17.5"
                        src={`/icons/number-${index + 1}.png`}
                        alt={String(index + 1)}
                      />
                      <img
                        className="z-10 w-20 h-20 lg:w-25 lg:h-25 lg:mt-3"
                        src={item.icon}
                        alt={item.title}
                      />
                      <div className="flex flex-col gap-1.25 sm:gap-2.5">
                        <H4>{item.title}</H4>
                        <TextSmall className="text-gray">{item.description}</TextSmall>
                      </div>
                    </div>
                  ))}
                </CarouselContainer>
              </Carousel>
            </SectionContent>
          </Section>
        </Container>
        {/* template */}
        <Container className="mt-7.5 sm:mt-15 md:mt-20 lg:mt-30">
          <Section className="gap-5 sm:gap-10 lg:gap-15">
            <SectionHead className="text-center">
              <SectionTitle>
                Выберите <TextAccent>готовый</TextAccent> шаблон
              </SectionTitle>
              <SectionSubtitle>
                Более 50 готовых решений для разных ниш. Не создавайте приложение с нуля — просто
                выберите то, что подходит вашему бизнесу.
              </SectionSubtitle>
            </SectionHead>
            <div className="flex max-sm:flex-col gap-5 sm:justify-between ">
              <Templates />
              <Card className="h-fit">
                <SectionContent className="sm:max-w-77.5 md:max-w-85 lg:max-w-115">
                  <H3 className="text-center">
                    Все необходимое
                    <br />
                    для старта
                  </H3>
                  <div className="flex flex-col gap-2.5">
                    {[
                      {
                        icon: "/icons/bag-purple.png",
                        title: "Каталог товаров",
                        description: "Удобный каталог с фильтрами и поиском",
                      },
                      {
                        icon: "/icons/cart.png",
                        title: "Корзина и заказы",
                        description: "Быстрое оформление и история заказов",
                      },
                      {
                        icon: "/icons/group-purple.png",
                        title: "CRM и клиенты",
                        description: "Клиенты, заказы и история покупок",
                      },
                      {
                        icon: "/icons/bell-pink.png",
                        title: "Статусы заказа",
                        description: "Информирование клиента",
                      },
                      {
                        icon: "/icons/gift.png",
                        title: "Акции",
                        description: "Скидки и персональные предложения.",
                      },
                      {
                        icon: "/icons/message.png",
                        title: "Чат с клиентами",
                        description: "Поддержка в одном окне (мессенджеры)",
                      },
                      {
                        icon: "/icons/chart.png",
                        title: "Аналитика",
                        description: "Продажи, заказы и клиенты в реальном времени",
                      },
                    ].map((item, index) => (
                      <FeatureItem key={index}>
                        <img className="w-9 h-9 lg:w-11 lg:h-11" src={item.icon} alt={item.title} />
                        <div className="flex flex-col gap-1.25">
                          <H4>{item.title}</H4>
                          <TextSmall className="text-gray">{item.description}</TextSmall>
                        </div>
                      </FeatureItem>
                    ))}
                  </div>
                  <a href={config.registerUrl} className="place-self-center">
                    <Button type="button">
                      Создать приложение
                    </Button>
                  </a>
                </SectionContent>
              </Card>
            </div>
          </Section>
        </Container>
        {/* catalog */}
        <Container size="lg" className="mt-12.5 sm:mt-15 md:mt-20 lg:mt-30 max-sm:h-222.5">
          <Card variant="lg" className="bg-light-gray relative">
            <Section>
              <SectionContent>
                <SectionHead>
                  <SectionTitle>
                    Каталог <TextAccent>товаров и услуг</TextAccent>
                  </SectionTitle>
                  <SectionSubtitle>
                    Создайте красивый каталог с фотографиями, категориями, фильтрами и поиском.
                    Добавляйте товары за несколько секунд.
                  </SectionSubtitle>
                </SectionHead>
                <div className="flex flex-col gap-2.5 lg:gap-3.75">
                  {[
                    {
                      icon: "/icons/search.png",
                      title: "Удобный поиск и фильтры",
                      description: "Пользователи быстро находят нужные товары и услуги",
                    },
                    {
                      icon: "/icons/catalog.png",
                      title: "Категории и подкатегории",
                      description: "Структурируйте товары так, как удобно вашему бизнесу",
                    },
                    {
                      icon: "/icons/photo.png",
                      title: "Качественные фото",
                      description: "Красивые карточки товаров повышают продажи",
                    },
                    {
                      icon: "/icons/plus.png",
                      title: "Быстрое добавление",
                      description: "Загружайте товары и услуги за несколько секунд",
                    },
                  ].map((item, index) => (
                    <FeatureItem key={index}>
                      <img className="w-9 h-9 lg:w-11 lg:h-11" src={item.icon} alt={item.title} />
                      <div className="flex flex-col gap-1.25">
                        <H4>{item.title}</H4>
                        <TextSmall className="text-gray">{item.description}</TextSmall>
                      </div>
                    </FeatureItem>
                  ))}
                </div>
                <LabeledCreateButton />
              </SectionContent>
              <SectionImage
                className="absolute right-0 bottom-0"
                src="/section-catalog.png"
                alt="Каталог товаров и услуг"
              />
            </Section>
          </Card>
        </Container>
        {/* service */}
        <Container size="lg" className="mt-10 sm:mt-7.5 md:mt-10 lg:mt-15 max-sm:h-265">
          <Card variant="lg" className="relative">
            <Section className="flex-row-reverse">
              <SectionContent>
                <SectionHead>
                  <SectionTitle>
                    <TextAccent>Удобный сервис</TextAccent>
                    <br />
                    после покупки
                  </SectionTitle>
                  <SectionSubtitle>
                    Клиент всегда может быстро получить нужную информацию и воспользоваться сервисом
                    повторно
                  </SectionSubtitle>
                </SectionHead>
                <div className="flex flex-col gap-3.75">
                  {[
                    {
                      icon: "/icons/bag.png",
                      title: "История заказов",
                      description: "Все оформленные заказы и услуги доступны в личном кабинете",
                    },
                    {
                      icon: "/icons/reload.png",
                      title: "Повторить заказ",
                      description: "Занимает всего несколько секунд без заполнения данных",
                    },
                    {
                      icon: "/icons/search.png",
                      title: "Статусы выполнения",
                      description: "Клиент видит, на каком этапе находится его заказ или заявка",
                    },
                    {
                      icon: "/icons/message.png",
                      title: "Отзывы после получения",
                      description: "Повышайте доверие новых клиентов и улучшайте качество сервиса",
                    },
                    {
                      icon: "/icons/group.png",
                      title: "Быстрая поддержка",
                      description: "Обращение прямо из приложения без поиска контактов",
                    },
                  ].map((item, index) => (
                    <FeatureItem className="gap-3.75" key={index}>
                      <img className="w-9 h-9 lg:w-11 lg:h-11" src={item.icon} alt={item.title} />
                      <div className="flex flex-col gap-1.25">
                        <H4>{item.title}</H4>
                        <TextSmall className="text-gray">{item.description}</TextSmall>
                      </div>
                    </FeatureItem>
                  ))}
                </div>
                <LabeledCreateButton />
              </SectionContent>
              <SectionImage
                className="absolute left-0 bottom-0"
                src="/section-service.png"
                alt="Удобный сервис после покупки"
              />
            </Section>
          </Card>
        </Container>
        {/* online check in */}
        <Container size="lg" className="mt-7.5 md:mt-10 lg:mt-15 max-sm:h-247">
          <Card variant="lg" className="relative">
            <Section>
              <SectionContent>
                <SectionHead>
                  <SectionTitle>
                    <TextAccent>Онлайн-запись</TextAccent> на услуги
                  </SectionTitle>
                  <SectionSubtitle>
                    Клиенты записываются в пару кликов, а система напоминает о визите и снижает
                    количество отмен.
                  </SectionSubtitle>
                </SectionHead>
                <div className="flex flex-col gap-2.5 lg:gap-3.75">
                  {[
                    {
                      icon: "/icons/calendar.png",
                      title: "Удобная запись 24/7",
                      description: "Клиент выбирает услугу, мастера, дату и время.",
                    },
                    {
                      icon: "/icons/bell.png",
                      title: "Напоминание о визите",
                      description: "Клиент получает напоминания вовремя, а вы снижаете неявки.",
                    },
                    {
                      icon: "/icons/reload-pink.png",
                      title: "Повторная запись в 1 клик",
                      description: "Клиент легко записывается снова на любимую услугу.",
                    },
                    {
                      icon: "/icons/percentage.png",
                      title: "Акции и специальные предложения",
                      description: "Продвигайте услуги и заполняйте график мастеров.",
                    },
                    {
                      icon: "/icons/robot.png",
                      title: "Система работает за вас 24/7",
                      description: "Заботится о клиентах и помогает вашему бизнесу расти.",
                    },
                  ].map((item, index) => (
                    <FeatureItem key={index}>
                      <img className="w-9 h-9 lg:w-11 lg:h-11" src={item.icon} alt={item.title} />
                      <div className="flex flex-col gap-1.25">
                        <H4>{item.title}</H4>
                        <TextSmall className="text-gray">{item.description}</TextSmall>
                      </div>
                    </FeatureItem>
                  ))}
                </div>
                <LabeledCreateButton />
              </SectionContent>
              <SectionImage
                className="absolute right-0 bottom-0"
                src="/section-check-in.png"
                alt="Онлайн-запись на услуги"
              />
            </Section>
          </Card>
        </Container>
        {/* tools */}
        <Container size="lg" className="mt-7.5 md:mt-10 lg:mt-15 max-sm:h-271.5">
          <Card variant="lg" className="relative">
            <Section className="flex-row-reverse">
              <SectionContent>
                <SectionHead>
                  <SectionTitle>
                    Все инструменты для <TextAccent>роста бизнеса</TextAccent>
                  </SectionTitle>
                  <SectionSubtitle>
                    Освободите сотрудников от рутины и сосредоточьтесь на развитии компании
                  </SectionSubtitle>
                </SectionHead>
                <div className="flex flex-col gap-3.5">
                  {[
                    {
                      icon: "/icons/robot.png",
                      title: "CRM и клиенты",
                      description:
                        "Вся информация о клиентах, заказах и обращениях в одной системе",
                    },
                    {
                      icon: "/icons/bag.png",
                      title: "Онлайн-оплата",
                      description: "Принимайте оплату товаров и услуг прямо внутри Mini App",
                    },
                    {
                      icon: "/icons/target.png",
                      title: "Интеграции",
                      description:
                        "Подключайте CRM, платежные системы и другие сервисы без сложной разработки",
                    },
                    {
                      icon: "/icons/chart.png",
                      title: "Автоматизация процессов",
                      description:
                        "Рутинные действия выполняются автоматически, освобождая время сотрудников",
                    },
                    {
                      icon: "/icons/diagram.png",
                      title: "Аналитика",
                      description:
                        "Следите за ключевыми показателями бизнеса и принимайте решения на основе данных",
                    },
                  ].map((item, index) => (
                    <FeatureItem className="gap-3.75" key={index}>
                      <img className="w-9 h-9 lg:w-11 lg:h-11" src={item.icon} alt={item.title} />
                      <div className="flex flex-col gap-1.25">
                        <H4>{item.title}</H4>
                        <TextSmall className="text-gray">{item.description}</TextSmall>
                      </div>
                    </FeatureItem>
                  ))}
                </div>
                <LabeledCreateButton />
              </SectionContent>
              <SectionImage
                className="absolute left-0 bottom-0"
                src="/section-tools.png"
                alt="Все инструменты для роста бизнеса"
              />
            </Section>
          </Card>
        </Container>
        {/* control center */}
        <Container className="mt-15 md:mt-20 lg:mt-15">
          <Section>
            <SectionContent className="max-w-none!">
              <SectionHead className="text-center">
                <SectionTitle>
                  <TextAccent>Центр управления</TextAccent> вашим бизнесом
                </SectionTitle>
                <SectionSubtitle>
                  Принимайте стратегические решения на основе чистой аналитики
                </SectionSubtitle>
              </SectionHead>
              <div className="content flex max-sm:flex-col gap-2.5 md:gap-5 lg:gap-7.5">
                <Card className="flex-1 max-md:items-center max-sm:contents md:contents">
                  <Preview
                    src="/section-control-center.png?v=2"
                    alt="Изображение интерфейса центра управления"
                  />
                </Card>
                <Card className="flex-1">
                  <SectionContent>
                    <div className="text-center flex flex-col gap-1.25 lg:gap-2.5">
                      <H3>Единая панель управления</H3>
                      <Text className="text-gray">заказами, клиентами, записями, товарами</Text>
                    </div>
                    <div className="flex flex-col gap-2.5 lg:gap-3.75">
                      {[
                        {
                          icon: "/icons/plus.png",
                          text: "Все заказы и записи в одном месте",
                        },
                        {
                          icon: "/icons/bag-purple.png",
                          text: "Товары, услуги и остатки",
                        },
                        {
                          icon: "/icons/group.png",
                          text: "Клиенты и история взаимодействий",
                        },
                        {
                          icon: "/icons/message.png",
                          text: "Автоматизация статусов заказов",
                        },
                        {
                          icon: "/icons/rocket.png",
                          text: "Настройки и интеграции",
                        },
                        {
                          icon: "/icons/chart.png",
                          text: "Аналитика и отчёты по бизнесу",
                        },
                      ].map((item, index) => (
                        <FeatureItem key={index}>
                          <img
                            className="w-9 h-9 lg:w-11 lg:h-11"
                            src={item.icon}
                            alt={item.text}
                          />
                          <Text>{item.text}</Text>
                        </FeatureItem>
                      ))}
                    </div>
                    <LabeledCreateButton className="flex-wrap" />
                  </SectionContent>
                </Card>
              </div>
            </SectionContent>
          </Section>
        </Container>
        {/* analytics */}
        <Container className="mt-15 md:mt-20 lg:mt-30">
          <Section>
            <SectionContent className="max-w-none!">
              <SectionHead className="text-center">
                <SectionTitle>
                  <TextAccent>Аналитика,</TextAccent> которая помогает принимать решения
                </SectionTitle>
                <SectionSubtitle>
                  Все ключевые показатели бизнеса в понятных графиках и дашбордах
                </SectionSubtitle>
              </SectionHead>
              <div className="content flex max-sm:flex-col-reverse gap-2.5 md:gap-5 lg:gap-7.5">
                <Card className="flex-1">
                  <SectionContent>
                    <H3 className="text-center">
                      Следите за ростом и находите точки для развития.
                    </H3>
                    <div className="flex flex-col gap-2.5 lg:gap-3.75">
                      {[
                        {
                          icon: "/icons/chart-purple.png",
                          title: "Выручка и заказы",
                          description: "Динамика продаж, средний чек и количество заказов",
                        },
                        {
                          icon: "/icons/bag-green.png",
                          title: "Товары и категории",
                          description: "Что продаётся лучше всего и приносит больше прибыли",
                        },
                        {
                          icon: "/icons/group.png",
                          title: "Клиенты и повторные покупки",
                          description: "Возвраты клиентов, частота повторных заказов и активность.",
                        },
                        {
                          icon: "/icons/calendar-pink.png",
                          title: "Записи и услуги",
                          description: "Анализ записей, загруженность и популярные услуги",
                        },
                        {
                          icon: "/icons/diagram.png",
                          title: "Статусы и эффективность",
                          description: "Контроль процессов и ключевые показатели в одном взгляде.",
                        },
                      ].map((item, index) => (
                        <FeatureItem key={index}>
                          <img
                            className="w-9 h-9 lg:w-11 lg:h-11"
                            src={item.icon}
                            alt={item.title}
                          />
                          <div className="flex flex-col gap-1.25">
                            <H4>{item.title}</H4>
                            <TextSmall className="text-gray">{item.description}</TextSmall>
                          </div>
                        </FeatureItem>
                      ))}
                    </div>
                    <a href={config.registerUrl}>
                      <Button type="button">Создать приложение</Button>
                    </a>
                  </SectionContent>
                </Card>
                <Card className="flex-1 max-sm:contents md:contents max-md:items-center">
                  <Preview
                    src="/section-analytics.png?v=2"
                    alt="Изображение интерфейса панели аналитики"
                  />
                </Card>
              </div>
            </SectionContent>
          </Section>
        </Container>
        {/* app */}
        <Container className="mt-15 sm:mt-17.5 md:mt-20 lg:mt-30 max-sm:h-138">
          <Card variant="lg" className="relative">
            <Section>
              <SectionContent className="md:gap-5">
                <SectionHead>
                  <SectionTitle>
                    Приложение <TextAccent>за 5 минут</TextAccent>
                  </SectionTitle>
                  <SectionSubtitle>Никакого кода и сложных настроек</SectionSubtitle>
                </SectionHead>
                <div className="flex max-lg:flex-col gap-2.5 sm:gap-5 lg:gap-10">
                  {[
                    {
                      icon: "/icons/bag-green.png",
                      title: "Надежно и безопасно",
                      description: "Ваши данные под защитой",
                    },
                    {
                      icon: "/icons/message-purple.png",
                      title: "Автоматизация",
                      description: "Коммуникация с клиентом в админке приложения",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <FeatureItem>
                        <img className="w-9 h-9 lg:w-11 lg:h-11" src={item.icon} alt={item.title} />
                        <div className="flex flex-col gap-1.25">
                          <H4>{item.title}</H4>
                          <TextSmall className="text-gray">{item.description}</TextSmall>
                        </div>
                      </FeatureItem>
                    </div>
                  ))}
                </div>
                <a href={config.registerUrl}>
                  <Button type="button">Создать приложение</Button>
                </a>
              </SectionContent>
              <SectionImage
                className="absolute right-0 bottom-0"
                src="/section-app.png"
                alt="Приложение за 5 минут"
              />
            </Section>
          </Card>
        </Container>
        {/* choose plan */}
        <Container className="bg-light-gray mt-15 md:mt-20 lg:mt-30">
          <section id="pricing" className="flex flex-col pt-15 pb-7.5 gap-2.5 sm:pt-20 sm:pb-12.5 sm:gap-5 lg:gap-7.5 lg:py-30">
            <SectionHead className="text-center">
              <SectionTitle>
                Выберите тариф <TextAccent>для вашего бизнеса</TextAccent>
              </SectionTitle>
              <SectionSubtitle>
                Все тарифы включают доступ ко всем основным функциям сервиса
              </SectionSubtitle>
            </SectionHead>
            <SubscriptionPlans />
          </section>
        </Container>
        {/* bots */}
        <Container className="mt-15 md:mt-20 lg:mt-30">
          <Section className="rounded-[20px] overflow-hidden">
            <div className="bg-white p-5 sm:p-7.5 md:p-10 lg:p-15 flex flex-col gap-2.5 sm:gap-5 md:gap-7.5 lg:gap-10 relative ">
              <SectionHead className="sm:max-w-117.5 md:max-w-200">
                <SectionTitle>
                  Делаем не только Mini App но и <TextAccent>ботов для Макс</TextAccent>
                </SectionTitle>
                <SectionSubtitle>
                  Разрабатываем ботов любой сложности под ваши задачи и бизнес-процессы
                </SectionSubtitle>
              </SectionHead>
              <div className="flex max-md:flex-col gap-1.25 md:gap-5 lg:gap-10 sm:max-w-117.5 md:max-w-159.25 lg:max-w-193.75">
                {[
                  {
                    icon: "/icons/target.png",
                    title: "Продажи и лидогенерация",
                  },
                  {
                    icon: "/icons/message.png",
                    title: "Поддержка клиентов",
                  },
                  {
                    icon: "/icons/bell-pink.png",
                    title: "Уведомления клиентам",
                  },
                  {
                    icon: "/icons/rocket.png",
                    title: "CRM и работа с данными",
                  },
                  {
                    icon: "/icons/catalog.png",
                    title: "Интеграции и автоматизация",
                  },
                ].map((item, index) => (
                  <FeatureItem className="md:flex-col md:items-start" key={index}>
                    <img
                      className="w-6 h-6 md:w-9 md:h-9 lg:w-11 lg:h-11"
                      src={item.icon}
                      alt={item.title}
                    />
                    <H4>{item.title}</H4>
                  </FeatureItem>
                ))}
              </div>
              <img
                className="max-sm:hidden w-45 lg:w-52.5 absolute right-7.5 md:right-10 lg:right-15 bottom-0"
                src="/section-bots.png"
                alt="Делаем не только Mini App но и ботов для Макс"
              />
            </div>
            <div className="bg-blue p-5 sm:p-7.5 md:p-10 lg:p-15 flex max-sm:flex-col max-sm:gap-5 sm:justify-between items-start">
              <div className="flex max-sm:flex-col gap-5">
                <img
                  className="w-12.5 h-12.5 lg:w-15 lg:h-15"
                  src="/icons/robot.png"
                  alt="Оставить заявку"
                />
                <div className="flex flex-col gap-1.25">
                  <H3 className="text-white">Решение под ваш бизнес</H3>
                  <Text className="text-light-gray">Обсудим задачу и предложим лучшее решение</Text>
                </div>
              </div>
              <Button onClick={openContact} variant="secondary">
                Оставить заявку
              </Button>
            </div>
          </Section>
        </Container>
        {/* contact */}
        <Container className="mt-15 md:mt-20 lg:mt-30 max-sm:h-155.75">
          <Card variant="lg" className="relative overflow-visible">
            <Section>
              <SectionContent className="sm:gap-2.5 md:gap-5 lg:gap-7.5 sm:max-w-122.5 md:max-w-130 lg:max-w-170">
                <SectionHead>
                  <SectionTitle>Остались вопросы</SectionTitle>
                  <SectionSubtitle>
                    Расскажем все на понятном языке, подберем то что вам нужно
                  </SectionSubtitle>
                </SectionHead>
                <ContactForm />
              </SectionContent>
              <img
                className="absolute right-0 bottom-0 w-72.5 sm:w-63.75 md:w-82.5 lg:w-102.5"
                src="/section-contact.png"
                alt="Остались вопросы"
              />
            </Section>
          </Card>
        </Container>
      </div>
      <Container className="bg-light-gray">{isMobile ? <FooterMobile /> : <Footer />}</Container>
    </>
  );
};

const App = () => (
  <PopoverProvider>
    <AppContent />
  </PopoverProvider>
);

export default App;
