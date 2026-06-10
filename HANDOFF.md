# Airport Survey — Handoff Document

**Date:** 2026-06-10  
**Project:** Airport Survey — VPN / Proxy Service Comparison Page  
**Source Folder:** `/Users/nicholas/Library/CloudStorage/GoogleDrive-nicholasjgowan@gmail.com/My Drive/toys/airport-survey/`
**GitHub:** https://github.com/GowangInc/airport-survey
**Live Site:** https://gowanginc.github.io/airport-survey/

---

## Current Phase: Service Expansion (2026-06-10)

### Goal
Expand the comparison by signing up for services that lack pricing data. Many services require login to view plans, so we're creating accounts to capture real pricing.

### Method
- **Email routing:** Cloudflare catch-all on `entropydrivenmindset.win` domain
- **Signup email:** `vpn@entropydrivenmindset.win` (catch-all forwards to main inbox)
- **Tracking:** `signup-tracker.html` — local HTML file with localStorage persistence for tracking signup status and notes

### Source Data
Scraped from https://9.234456.xyz/abc.html — a Chinese airport directory page with ~60 services. Links were base64-encoded in JavaScript onclick handlers. Extracted, decoded, and cleaned (removed affiliate `?code=` params, filtered out VPN mentions to avoid content flags).

### New Services to Add
~50 services extracted from the scrape. Priority given to:
1. Services marked "老牌" (established/old-brand) — more likely to be stable
2. Services with IEPL/IPLC badges — premium dedicated lines
3. Services offering free trials — easier to verify

### Files Added
- `signup-tracker.html` — Private tracking file (gitignored, never upload to GitHub)

### Notes
- Many services use V2Board/SSPanel — similar UI, often require login to see pricing
- Captcha/OTP expected on signup flows
- Some sites may have Cloudflare protection or be blocked in certain regions
- URL shorteners (s.yam.com) used for some services — resolve to actual domains

---

---

## What Was Built

A self-contained, single-page HTML app for comparing VPN and proxy ("airport") services popular in China. It runs entirely in the browser with zero build step, zero dependencies, and zero external assets. Designed to be hosted on GitHub Pages.

### Key Features
- **45 services** catalogued across three groups
- **Real-time search** across names, descriptions, protocols, tags
- **Sort by:** Price (↑), Traffic (↓), Speed (↓), Value Score (↓)
- **Range filters:** Min/max traffic (GB/mo), min speed (Mbps)
- **Standardized metrics:** Auto-computed ¥/GB and Value Score (GB per ¥) for direct comparison
- **Smart filtering:** Non-matching cards get a red border, dimmed, and pushed to the bottom
- **Defunct marking:** Dead / seized services are clearly flagged

---

## File Structure

```
airport-survey/
├── index.html      # 23 KB — All UI, CSS, rendering, search/filter/sort logic
├── data.js         # 41 KB — All service data + numeric parsers + value scoring
├── README.md       # Project docs for public repo
└── .gitignore      # Ignores .DS_Store, editor files, build dirs, etc.
```

**Design decision:** Data is split into `data.js` so updates are isolated from the UI code. Just edit `data.js` and reload the page.

---

## Service Coverage

| Group | Count | Pricing Filled? |
|-------|-------|-----------------|
| Top-Tier (top8) | 8 | ✅ Full pricing tables |
| Legacy (legacy) | 21 | ✅ Full pricing tables |
| New / Testing (testing) | 60 | ⚠️ Partial — 20 services have pricing, others have descriptive info only. |
| **Total** | **89** | **49 with pricing** |

### Notable Inclusions
- **WannaFlix** — Commercial VPN (not an airport), USD pricing, included for completeness
- **Defunct services marked:** Cyber Guard (ran away Jan 2026), FatCat Cloud (domain seized by 江苏反诈网), YkkCloud (ran away Sept 2025)

---

## How to Use Locally

1. Open `index.html` in any modern browser (Chrome, Safari, Firefox, Edge)
2. The page loads `data.js` automatically via `<script src="data.js">`
3. No server required — works from `file://`

---

## How to Update Data

### Option A: Edit `data.js` directly

Each service is a JavaScript object in one of three arrays: `top8`, `legacy`, or `testing`.

```javascript
{
  name: "Service Name",
  nameZh: "中文名",
  slug: "unique-id",
  desc: "English description",
  descZh: "中文描述",
  protocols: ["Shadowsocks", "Trojan"],
  tags: ["dedicated line", "high-end"],
  payment: "Alipay, WeChat",
  pricing: [
    { name: "Plan A", monthly: "¥25", traffic: "150G/mo", notes: "Quarterly available" }
  ],
  speed: "1000Mbps",
  nodes: "HK, JP, US",
  restrictions: "Annual only"
}
```

**Pricing notes:**
- `monthly` supports `¥` (yuan) and `$` (USD, auto-converted at ×7.2)
- `traffic` supports: `100G/mo`, `1000G/yr total`, `400G one-time`, `Unlimited`
- One-time / PAYG plans work but score lower in value sorting since they have no recurring monthly equivalent

### Option B: Source from guatizi.com

The primary data source is [guatizi.com](https://guatizi.com). Service pages embed pricing screenshots (`.webp`/`.png`). To extract pricing:

1. Visit `https://guatizi.com/airport/{slug}.html` or follow `https://guatizi.com/go/{slug}/`
2. Look for embedded pricing images in the article
3. Read the image manually (or use OCR) to extract plans
4. Add the extracted data to `data.js`

Many newer services do not have dedicated guatizi pages — they only appear as links in the homepage listing.

---

## Data Source Strategy

| Approach | Success Rate | Notes |
|----------|-------------|-------|
| guatizi.com article pages | High for top/legacy | Pricing screenshots embedded as webp/png |
| Service official APIs (V2Board/SSPanel) | Low | Most block curl; SPAs serve `index.html` for all routes including `/api/*` |
| Browser automation (Kimi WebBridge) | Mixed | Login walls, Cloudflare challenges, SPA routing |
| Direct service sites | Very low | Heavily protected, domains change frequently |

**Recommendation:** For services without pricing in `data.js`, check guatizi.com first. If no article exists, the service is likely too new or too niche to have extractable public pricing.

---

## Known Limitations

1. **Prices are approximate** — Screenshot-based extraction has inherent lag. Services change prices frequently.
2. **No real-time price fetching** — Everything is static JS data. No API calls at runtime.
3. **Testing section is sparse** — 15 of 16 testing services lack pricing. They need manual updates as info becomes available.
4. **No affiliate links** — This is intentionally a neutral comparison tool.
5. **Mobile experience is functional but not optimized** — Cards stack vertically; controls wrap. Usable but not polished.

---

## Deploying to GitHub Pages

1. `cd` into the `airport-survey` folder
2. `git init`
3. `git add index.html data.js README.md .gitignore`
4. `git commit -m "Initial commit"`
5. Create a new repo on GitHub, push to it
6. Go to repo Settings → Pages → Source: Deploy from branch → `main` / `root`
7. Site will be live at `https://yourusername.github.io/airport-survey/`

---

## Code Architecture

### `index.html`
- Pure vanilla JS, no frameworks
- CSS uses CSS custom properties (variables) for theming
- All rendering is DOM-based string concatenation (fast enough for 45 items)
- `render()` rebuilds the DOM on every sort/filter change — simple and reliable

### `data.js`
- `parsePriceMonthly()` — Extracts ¥ or $ price, converts USD→CNY
- `parseTrafficMonthly()` — Normalizes traffic strings to GB/mo numeric
- `parseSpeed()` — Extracts highest Mbps value from speed descriptions
- `getBestPlan()` — Selects the highest-traffic plan with a numeric price per service
- `getPricePerGb()` / `getValueScore()` — Standardized comparison metrics

---

## Next Steps (If You Want to Extend)

- [ ] Fill in pricing for remaining 15 testing services
- [ ] Add more services as they emerge on guatizi.com
- [ ] Consider adding a `lastUpdated` timestamp per service
- [ ] Consider a "favorites" or shortlist feature (localStorage)
- [ ] Add a simple CSV/JSON export of the comparison table
- [ ] Periodically re-scrape guatizi to detect price changes

---

## Contact / Context

This was built from a scrape of guatizi.com (homepage + 20 legacy service pages + 1 testing service API). Pricing data was manually extracted from embedded screenshots and, in one case (FliggyCloud), from a public API endpoint. The HTML page was iteratively refined with sorting, filtering, standardized values, and a combined top+legacy view.
