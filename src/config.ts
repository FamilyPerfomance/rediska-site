type LandingConfig = {
  vkUrl?: string;
  maxUrl?: string;
  loginUrl?: string;
  registerUrl?: string;
  tariffsApiUrl?: string;
  leadsApiUrl?: string;
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
  };
};

export { landingConfig, referralCode };
export type { LandingConfig };
