type FooterLink = {
  label: string;
  href: string;
};

type LandingLegal = {
  offer?: string;
  policy?: string;
  requisites?: string;
};

type LandingSeo = {
  title?: string;
  description?: string;
  robots?: string;
};

type PublicSitePageSummary = {
  title: string;
  slug: string;
  url: string;
  showInFooter: boolean;
  sortOrder: number;
};

type LandingConfig = {
  vkUrl?: string;
  maxUrl?: string;
  loginUrl?: string;
  registerUrl?: string;
  tariffsApiUrl?: string;
  leadsApiUrl?: string;
  sitePagesApiUrl?: string;
  footerLinks?: FooterLink[];
  legal?: LandingLegal;
  seo?: LandingSeo;
  analyticsHeadHtml?: string;
};

const panelUrl = (import.meta.env.VITE_PANEL_URL || 'https://panels.rediska-app.ru').replace(/\/$/, '');
const publicApiUrl = (import.meta.env.VITE_PANEL_PUBLIC_API_URL || `${panelUrl}/api/public`).replace(/\/$/, '');

const runtimeConfig = () =>
  typeof window === 'undefined' ? {} : ((window as Window & { REDIS_LANDING_CONFIG?: LandingConfig }).REDIS_LANDING_CONFIG ?? {});

const referralCode = () => {
  if (typeof window === 'undefined') return '';

  const ref = new URLSearchParams(window.location.search).get('ref')?.trim() || '';
  if (ref) window.localStorage.setItem('rediska_ref', ref);

  return ref || window.localStorage.getItem('rediska_ref') || '';
};

const withReferral = (url: string) => {
  const ref = referralCode();
  if (!ref) return url;

  const parsedUrl = new URL(url, window.location.origin);
  parsedUrl.searchParams.set('ref', ref);

  return parsedUrl.toString();
};

const landingConfig = () => {
  const config = runtimeConfig();

  return {
    vkUrl: config.vkUrl || '',
    maxUrl: config.maxUrl || '',
    loginUrl: config.loginUrl || `${panelUrl}/login`,
    registerUrl: withReferral(config.registerUrl || `${panelUrl}/register`),
    tariffsApiUrl: config.tariffsApiUrl || `${publicApiUrl}/tariffs`,
    leadsApiUrl: config.leadsApiUrl || `${publicApiUrl}/leads`,
    landingSettingsApiUrl: `${publicApiUrl}/landing-settings`,
    sitePagesApiUrl: config.sitePagesApiUrl || `${publicApiUrl}/site-pages`,
    footerLinks: config.footerLinks || [
      { label: 'Политика конфиденциальности', href: '/privacy' },
      { label: 'Лицензионное соглашение', href: '/license' },
      { label: 'Согласие на обработку ПДН', href: '/personal-data' },
      { label: 'Пользовательское соглашение', href: '/user-agreement' },
    ],
    legal: config.legal || {},
    seo: config.seo || {},
    analyticsHeadHtml: config.analyticsHeadHtml || '',
  };
};

export { landingConfig, referralCode };
export type { FooterLink, LandingConfig, LandingLegal, LandingSeo, PublicSitePageSummary };
