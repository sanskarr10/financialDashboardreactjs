# Financial Dashboard – Next.js 14 (App Router)

A responsive financial dashboard built with **Next.js 14**, **Tailwind CSS**, and **Recharts**.
Includes:
- Dashboard UI with AUM/SIP, stats, and charts
- Time-range filters (3/7/10/30 days) with dynamic API fetch
- **Download PDF** (same design, client-side capture)
- Dark mode toggle
- Loading skeleton animations
- **Capacitor** config to package for Android/iOS from the same codebase

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- Recharts
- next-themes (dark mode)
- html2canvas + jsPDF (PDF)
- Capacitor 6

## Getting Started
```bash
# 1) Install deps
npm install

# 2) Run dev
npm run dev

# 3) Open
http://localhost:3000
```

## Build PDF Button
The "Download PDF" button captures the main stats+charts container and generates `financial-dashboard.pdf`.

## Responsive
The layout is responsive for mobile, tablet, desktop.

## Mock API
All charts and stats are served from Next.js API routes with the `range` query param:
- `/api/summary?range=30`
- `/api/charts/clients?range=30`
- `/api/charts/sip-business?range=30`
- `/api/charts/monthly-mis?range=30`

## Capacitor – Android/iOS
This project is already configured for Capacitor.

### 1) Build the web app
```bash
npm run build
npm run start # optional to test locally
```

For static export (recommended for Capacitor web assets):
```bash
# Add an export script if you like:
# "export": "next build && next export"
# Then run:
# npm run export
```
Next.js will emit static files into `out/`.

### 2) Initialize Capacitor (first time only)
```bash
npm run cap:init
```

### 3) Sync web assets
If you used `next export`, ensure `out/` exists, then:
```bash
npm run cap:sync
```

### 4) Open native projects
```bash
# Android (requires Android Studio):
npm run cap:android

# iOS (requires Xcode/macOS):
npm run cap:ios
```

> Tip: For development with live reload on device, run `npm run dev` and use a LAN
> accessible URL. You can set `server.url` in `capacitor.config.ts` accordingly.

## Screenshots
Add your final UI screenshot in the repo root as `screenshot.png`.

## Notes
- If you see SSR warnings from chart libs, we’re dynamically importing Recharts in client components.
- Tailwind is already configured with class-based dark mode.
- For A4 PDF fit, we auto-scale the captured container to the page.
