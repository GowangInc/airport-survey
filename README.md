# Airport Survey

A searchable, sortable comparison page for VPN and proxy ("airport") services. Built as a single-page HTML app that works on GitHub Pages with zero dependencies.

## Live Demo

Open `index.html` in any modern browser, or host on GitHub Pages / any static file server.

## Features

- **Real-time search** — Filter by name, protocol, price, traffic limit, or speed
- **Sort controls** — Sort by price (ascending), traffic, speed, or value score (descending)
- **Range filters** — Filter by min/max traffic (GB/mo) and min speed (Mbps)
- **Standardized values** — Automatic ¥/GB and value score (GB per ¥) for easy apples-to-apples comparison
- **Smart filtering** — Non-matching cards get a red border, dimmed, and pushed to the bottom so matches are easy to scan
- **Full pricing tables** — Every plan with monthly price, traffic, and notes
- **Defunct detection** — Services that have shut down or been seized are clearly marked

## Project Structure

```
airport-survey/
├── index.html      # UI, CSS, rendering, search/filter/sort logic
├── data.js         # Service data + parsers + standardized value functions
└── README.md       # This file
```

## How to Update Data

1. **Edit `data.js`** — Modify the `top8`, `legacy`, or `testing` arrays.

   Each service object:
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

2. **Test locally** — Open `index.html` in your browser (loads `data.js` via `<script src>`).

3. **Commit & push** — Push to GitHub and enable GitHub Pages from the repo root.

## Adding a New Service

Add the service object to the appropriate array in `data.js`:
- `top8` — Well-known, highly recommended services
- `legacy` — Established services with track records
- `testing` — New or untested services

## Data Sources

- [guatizi.com](https://guatizi.com) — Airport review and comparison site
- Official service websites (when accessible)
- API endpoints (for services using V2Board/SSPanel variants)

## Notes

- Prices are approximate and may change. Always verify on the official site before purchasing.
- `¥/GB` and value scores are computed automatically from the pricing data.
- USD prices are converted to CNY at an approximate rate (×7.2) for comparison.
- Services marked **DEFUNCT** or **SEIZED** have shut down or been taken offline — do not purchase.

## License

Public domain / MIT — feel free to fork and adapt.
