/// <reference types="vite/client" />

import type { LandingConfig } from './config';

declare global {
  interface Window {
    REDIS_LANDING_CONFIG?: LandingConfig;
  }
}
