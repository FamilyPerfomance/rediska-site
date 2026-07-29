# Rediska Site

Public marketing website for `https://rediska-app.ru`.

## Architecture

- Site: `https://rediska-app.ru`
- Panel/API: `https://panels.rediska-app.ru`
- Auth links point to the panel domain.
- Tariffs and public landing settings are loaded from the panel public API with local fallback.

## Local development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

The production build is generated in `dist/`.

## Environment

Copy `.env.example` to `.env` if you need to override panel URLs.

```env
VITE_PANEL_URL=https://panels.rediska-app.ru
VITE_PANEL_PUBLIC_API_URL=https://panels.rediska-app.ru/api/public
```

## Deploy target

Nginx should serve `dist/` for `rediska-app.ru`.

The Laravel panel remains a separate application and should be served from `https://panels.rediska-app.ru`.
