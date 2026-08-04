import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { landingConfig } from "./config";

const setMeta = (name: string, content: string) => {
  if (!content.trim()) return;

  let meta = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const applyHeadSettings = () => {
  const config = landingConfig();
  const title = config.seo.title?.trim();
  const description = config.seo.description?.trim();
  const robots = config.seo.robots?.trim();
  const analyticsHeadHtml = config.analyticsHeadHtml.trim();

  if (title) document.title = title;
  if (description) setMeta("description", description);
  if (robots) setMeta("robots", robots);

  if (analyticsHeadHtml && !document.head.querySelector('[data-rediska-analytics="true"]')) {
    const container = document.createElement("template");
    container.innerHTML = analyticsHeadHtml;
    container.content.childNodes.forEach((node) => {
      if (node.nodeName.toLowerCase() === "script") {
        const sourceScript = node as HTMLScriptElement;
        const script = document.createElement("script");
        Array.from(sourceScript.attributes).forEach((attribute) => script.setAttribute(attribute.name, attribute.value));
        script.text = sourceScript.text;
        script.dataset.rediskaAnalytics = "true";
        document.head.appendChild(script);
        return;
      }

      const insertedNode = node.cloneNode(true);
      if (insertedNode.nodeType === Node.ELEMENT_NODE) {
        (insertedNode as HTMLElement).dataset.rediskaAnalytics = "true";
      }
      document.head.appendChild(insertedNode);
    });
  }
};

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
  .finally(() => {
    applyHeadSettings();
    renderApp();
  });
