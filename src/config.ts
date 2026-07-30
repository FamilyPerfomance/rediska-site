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

const landingConfig = () => {
  const config = runtimeConfig();

  return {
    vkUrl: config.vkUrl || '',
    maxUrl: config.maxUrl || '',
    loginUrl: config.loginUrl || `${panelUrl}/login`,
    registerUrl: config.registerUrl || `${panelUrl}/register`,
    tariffsApiUrl: config.tariffsApiUrl || `${publicApiUrl}/tariffs`,
    leadsApiUrl: config.leadsApiUrl || `${publicApiUrl}/leads`,
  };
};

export { landingConfig };
export type { LandingConfig };
