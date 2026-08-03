import { useEffect, useState } from "react";
import { Container } from "./container";
import { IconLogo } from "./icons";
import { landingConfig } from "../config";

type SitePageData = {
  title: string;
  slug: string;
  content: string;
};

const fallbackPages: Record<string, SitePageData> = {
  privacy: {
    title: "Политика конфиденциальности",
    slug: "privacy",
    content: "<p>Настоящая политика описывает порядок обработки персональных данных пользователей сайта и сервиса Редис.</p>",
  },
  license: {
    title: "Лицензионное соглашение",
    slug: "license",
    content: "<p>Настоящее лицензионное соглашение определяет условия использования сервиса Редис.</p>",
  },
  "personal-data": {
    title: "Согласие на обработку ПДН",
    slug: "personal-data",
    content: "<p>Пользователь дает согласие на обработку персональных данных в целях регистрации, оказания услуг и обратной связи.</p>",
  },
  "user-agreement": {
    title: "Пользовательское соглашение",
    slug: "user-agreement",
    content: "<p>Настоящее пользовательское соглашение регулирует порядок использования сайта и сервиса Редис.</p>",
  },
};

const SitePage = ({ slug }: { slug: string }) => {
  const [page, setPage] = useState<SitePageData | null>(fallbackPages[slug] ?? null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const apiUrl = `${landingConfig().sitePagesApiUrl}/${slug}`;

    fetch(apiUrl, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data: SitePageData) => setPage(data))
      .catch(() => undefined)
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [slug]);

  return (
    <Container className="min-h-screen bg-light-gray py-8 md:py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-[32px] bg-white p-6 shadow-sm md:p-10">
        <a href="/" className="inline-flex items-center gap-3">
          <IconLogo className="h-10 w-25.75 md:h-11.5 md:w-29.5" />
        </a>
        <article className="flex flex-col gap-5 text-[#111827]">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{page?.title || "Страница не найдена"}</h1>
          {page ? (
            <div className="flex flex-col gap-4 text-base leading-[160%] text-gray md:text-lg" dangerouslySetInnerHTML={{ __html: page.content }} />
          ) : (
            <p className="text-base leading-[160%] text-gray md:text-lg">{isLoading ? "Загрузка..." : "Такой страницы нет или она снята с публикации."}</p>
          )}
        </article>
        <a href="/" className="text-sm font-bold text-brand-pink">
          Вернуться на главную
        </a>
      </div>
    </Container>
  );
};

export { SitePage };
