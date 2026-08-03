import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { landingConfig } from "./config";

const renderApp = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

fetch(landingConfig().landingSettingsApiUrl)
  .then((response) => (response.ok ? response.json() : Promise.reject()))
  .then((config) => {
    window.REDIS_LANDING_CONFIG = {
      ...window.REDIS_LANDING_CONFIG,
      ...config,
    };
  })
  .catch(() => undefined)
  .finally(renderApp);
