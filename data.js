// Airport Survey — Service Data
// Edit this file to update pricing, add new services, or modify existing entries.
// Then commit and push to GitHub Pages.

const top8 = [
  {
    name: "WgetCloud",
    nameZh: "WgetCloud 全球加速",
    slug: "wgetcloud",
    desc: "Premium dedicated-line airport. Stable bypass choice. High-end dedicated line. 30,000+ paid users. 10,000 bandwidth.",
    descZh: "高端专线机场，稳定翻墙之选。30000+付费用户，线路带宽10000。",
    protocols: ["Trojan"],
    tags: ["dedicated line", "high-end", "stable", "custom client (deprecated)"],
    payment: "Alipay, WeChat, USDT",
    pricing: [
      { name: "Basic", monthly: "¥79", traffic: "160G/mo", notes: "Annual ¥758/280G | Quarterly ¥225/230G" },
      { name: "Premium", monthly: "¥89", traffic: "180G/mo", notes: "Annual ¥854/320G | Quarterly ¥253/250G" },
      { name: "Elite", monthly: "¥99", traffic: "200G/mo", notes: "Annual ¥950/360G | Quarterly ¥281/270G" }
    ],
    speed: "10Gbps+",
    nodes: "300+ international",
    restrictions: "Monthly/quarterly options removed in 2026. Annual payment only."
  },
  {
    name: "Boost Net",
    nameZh: "Boost Net",
    slug: "boostnet",
    desc: "Premium niche airport. All-node IEPL dedicated line. 30+ server locations worldwide. Full streaming unlock.",
    descZh: "小众精品向机场，全节点IEPL专线，30+服务器位置。",
    protocols: ["AnyTLS"],
    tags: ["IEPL", "major-factory", "high-end", "custom client"],
    payment: "Alipay",
    pricing: [
      { name: "200G Plan", monthly: "¥39", traffic: "200G/mo", notes: "Qtr ¥100 | 6mo ¥160 | Annual ¥300 | New user 20% off: boost" },
      { name: "400G Plan", monthly: "¥58", traffic: "400G/mo", notes: "Qtr ¥140 | 6mo ¥280 | Annual ¥400 | New user 20% off: boost" },
      { name: "1000G Plan", monthly: "¥108", traffic: "1000G/mo", notes: "Qtr ¥280 | 6mo ¥520 | Annual ¥1000 | New user 20% off: boost" },
      { name: "Team Plan", monthly: "¥500", traffic: "3000G/mo", notes: "20 devices | Multi-user" }
    ],
    speed: "High bandwidth (IEPL)",
    nodes: "30+ locations",
    restrictions: "New users: no monthly, minimum 6 months (20% price hike April 2026). Mainland China only."
  },
  {
    name: "Viking Links",
    nameZh: "Viking Links",
    slug: "vikinglinks",
    desc: "Premium dedicated line + optimized direct-connect. IPLC & IEPL nodes. Multiple China ingress points. Emby service included.",
    descZh: "高端专线，新增优化直连。IPLC/IEPL专线，国内多入口。",
    protocols: ["Trojan"],
    tags: ["dedicated line", "direct-connect", "high-end", "Emby"],
    payment: "Alipay",
    pricing: [
      { name: "Basic", monthly: "¥39", traffic: "250G/mo", notes: "Quarterly ¥118 | Annual available | 2 devices | 1000M bandwidth | Emby" },
      { name: "Standard", monthly: "¥72", traffic: "500G/mo", notes: "Monthly ¥72 | Quarterly/Annual available | 2 devices | 1000M bandwidth | Emby" },
      { name: "Premium", monthly: "¥139", traffic: "1200G/mo", notes: "Quarterly ¥418 | 6mo/Annual available | 5 devices | 2000M bandwidth | Large Emby library" }
    ],
    speed: "1000–2000M peak",
    nodes: "HK, JP, TW, SG, US, DE, UK, TR, FI",
    restrictions: "Prices have increased. 15% off code: DUANG-DUANG15OFF. Access site via HK/JP/SG/MY nodes."
  },
  {
    name: "E-IX",
    nameZh: "E-IX 机场",
    slug: "eix",
    desc: "BGP ingress premium dedicated line. Multiple IEPL cross-border lines (Shenzhen-HK, Shanghai-JP, Beijing-DE). Xinjiang-specific plans available.",
    descZh: "BGP入口高端专线。深港/沪日/京德IEPL专线。",
    protocols: ["Shadowsocks", "AnyTLS"],
    tags: ["dedicated line", "BGP", "high-end", "multi-region"],
    payment: "Alipay",
    pricing: [
      { name: "E-IX One Year", monthly: "¥16.6", traffic: "1024G/yr total", notes: "¥199/yr | 3 devices | 300Mbps limit | One-time allocation" },
      { name: "E-IX 256G", monthly: "¥33", traffic: "256G/mo", notes: "¥119/qtr | ¥219/6mo | ¥399/yr | 4 devices | 1000Mbps" },
      { name: "E-IX 512G", monthly: "¥58", traffic: "512G/mo", notes: "¥75/mo | ¥199/qtr | ¥359/6mo | ¥699/yr | 5 devices | 2000Mbps" }
    ],
    speed: "300–2000Mbps",
    nodes: "HK, JP, TW, SG, US",
    restrictions: "New site, monthly payment recommended. Phasing out Shadowsocks for AnyTLS."
  },
  {
    name: "SSRDOG",
    nameZh: "SSRDOG 机场",
    slug: "ssrdog",
    desc: "IEPL dedicated-line airport since 2022. Custom client. 10Gbps ultra-large bandwidth. Good streaming & ChatGPT unlock.",
    descZh: "IEPL专线机场，2022年运营。定制客户端。10Gbps超大带宽。",
    protocols: ["Shadowsocks", "AnyTLS"],
    tags: ["IEPL", "10Gbps", "custom client"],
    payment: "Alipay, WeChat",
    pricing: [
      { name: "Light 150G", monthly: "¥25", traffic: "150G/mo", notes: "Qtr ¥67.5 | 6mo ¥127.5 | Annual ¥205.7 (+2mo) | 36 nodes | 300Mbps" },
      { name: "Standard 300G", monthly: "¥35", traffic: "300G/mo", notes: "Qtr ¥94.5 | 6mo ¥168 | Annual ¥288 (+2mo) | 67 nodes | 500Mbps" },
      { name: "Enterprise 850G", monthly: "¥75", traffic: "850G/mo", notes: "Qtr ¥202.5 | 6mo ¥382.5 | Annual ¥617.2 (+2mo) | 67 nodes | 1000Mbps" }
    ],
    speed: "300–1000Mbps peak",
    nodes: "HK, JP, TW, SG, US, KR, CA, UK",
    restrictions: "Monthly payments removed, quarterly minimum (2026). PAYG traffic packs discontinued."
  },
  {
    name: "IPLC.VIP",
    nameZh: "IPLC.VIP",
    slug: "iplcvip",
    desc: "Legacy IPLC dedicated-line since 2019. Invite-code registration required. Limited quantity sales. Annual payment only.",
    descZh: "老牌IPLC专线，2019年或更早开业。邀请码注册，限量发售。",
    protocols: ["Shadowsocks"],
    tags: ["IPLC", "annual-only", "invite-code", "legacy"],
    payment: "Alipay",
    pricing: [
      { name: "IPLC Silver", monthly: "¥41", traffic: "2400G/yr", notes: "¥488/yr | 200G/mo equivalent | 4 devices | 100+ IEPL lines | 1x rate" },
      { name: "IPLC Diamond", monthly: "¥57", traffic: "4000G/yr", notes: "¥688/yr | 333G/mo equivalent | Unlimited devices | 100+ IEPL lines | 1x rate" }
    ],
    speed: "IEPL dedicated line",
    nodes: "HK, JP, TW, SG, US",
    restrictions: "Annual payment only. Invite code required. Limited quantity sales."
  },
  {
    name: "Coffee Cloud",
    nameZh: "Coffee Cloud 咖啡云",
    slug: "coffeecloud",
    desc: "Small relay airport operating for years. Public tunnel relay + some IEPL dedicated-line nodes. Custom V-Ninja client (Windows/Mac/Android/iOS).",
    descZh: "中转小机场，运营多年。公网隧道+少量IEPL专线。定制V-Ninja客户端。",
    protocols: ["Shadowsocks", "AnyTLS", "V-Ninja"],
    tags: ["relay", "IEPL", "custom client", "low-price"],
    payment: "Alipay, USDT",
    pricing: [
      { name: "Americano", monthly: "¥10", traffic: "130G/mo", notes: "Full streaming unlock | 99.99% SLA | 1Gbps bandwidth | Unlimited clients" },
      { name: "Latte", monthly: "¥20", traffic: "300G/mo", notes: "Full streaming unlock | 99.99% SLA | 1Gbps bandwidth | Unlimited clients" },
      { name: "Mocha", monthly: "¥40", traffic: "630G/mo", notes: "Full streaming unlock | 99.99% SLA | 1Gbps bandwidth | Unlimited clients" },
      { name: "Flat White", monthly: "¥60", traffic: "1024G/mo", notes: "Full streaming unlock | 99.99% SLA | 1Gbps bandwidth | Unlimited clients" }
    ],
    speed: "1Gbps guaranteed",
    nodes: "HK, JP, TW, US",
    restrictions: "Price excludes fees. Generic subscription experience is poor; custom client recommended."
  },
  {
    name: "YeSha Cloud",
    nameZh: "夜煞云",
    slug: "yesha",
    desc: "Low-key multi-protocol relay small airport. Also has IPLC dedicated-line nodes. Custom 3-platform client. Pay-as-you-go traffic packs available (no expiry).",
    descZh: "多协议中转小机场，也有IPLC专线节点。定制三端。提供不限时长按量付费流量包。",
    protocols: ["Shadowsocks", "Trojan", "AnyTLS"],
    tags: ["relay", "IPLC", "multi-protocol", "PAYG", "low-price"],
    payment: "Alipay",
    pricing: [
      { name: "Mini VIP", monthly: "¥4.8", traffic: "50G/30days", notes: "Annual ¥58 | China BGP relay | Up to 2000Mbps | Unlimited clients" },
      { name: "Medium VIP", monthly: "¥10", traffic: "138G/30days", notes: "Monthly | China BGP relay | IPLC support | Up to 2000Mbps" },
      { name: "Standard VIP", monthly: "¥19.8", traffic: "288G/30days", notes: "Monthly | China BGP relay | IPLC support | Up to 2000Mbps" },
      { name: "Large VIP", monthly: "¥29.8", traffic: "520G/30days", notes: "Monthly | China BGP relay | IPLC support | Up to 2000Mbps" },
      { name: "Pro VIP", monthly: "¥57", traffic: "1024G/30days", notes: "Monthly | China BGP relay | IPLC support | Up to 2000Mbps" },
      { name: "PAYG Large+", monthly: "—", traffic: "400G one-time", notes: "¥106 one-time | No expiry | China BGP relay | IPLC support" }
    ],
    speed: "Up to 2000Mbps",
    nodes: "HK, JP, TW, SG, US",
    restrictions: "Price adjustment expected in May. Frequent node domain changes recently."
  }
];

const legacy = [
  {
    name: "Nexitally", nameZh: "奶昔机场", slug: "nexitally",
    desc: "Famous NaiXi (milkshake) airport. Well-known name in the scene. China BGP relay. Smart access point allocation.",
    descZh: "鼎鼎大名的奶昔机场。", protocols: ["Shadowsocks", "Trojan", "AnyTLS"],
    tags: ["famous", "dedicated line", "stable"], payment: "Alipay, WeChat",
    pricing: [
      { name: "Smart Access 31d", monthly: "¥117.46", traffic: "500G/31days", notes: "2 devices | Up to 2000Mbps | Netflix 3 days" },
      { name: "Smart Access 186d", monthly: "¥99", traffic: "500G/31days", notes: "2 devices | Up to 2000Mbps | Netflix 7 days" },
      { name: "Smart Access 372d", monthly: "¥91.87", traffic: "500G/31days", notes: "2 devices | Up to 2000Mbps | Netflix 30 days" },
      { name: "Premium Access X12", monthly: "¥162", traffic: "500G/31days", notes: "JP/US/KR Anycast | China-US financial dedicated line | Netflix/Disney+/Spotify 360 days" },
      { name: "Group Access", monthly: "¥45.15", traffic: "—", notes: "5 devices | Requires base service" }
    ],
    speed: "Up to 2000Mbps", nodes: "HK, JP, TW, SG, US", restrictions: ""
  },
  {
    name: "Imm Telecom", nameZh: "Imm Telecom", slug: "immtelecom",
    desc: "Unlock support, stable nodes. Optimized for mainland China. 2.5Gbps max speed.",
    descZh: "解锁支持，节点稳定。", protocols: ["Shadowsocks"],
    tags: ["unlock", "stable", "dedicated line"], payment: "Alipay, WeChat",
    pricing: [
      { name: "Basic Personal", monthly: "¥17.4", traffic: "25G/mo", notes: "¥208.95/yr total | 300GB/yr | 2.5Gbps | 2 IPs" },
      { name: "Basic Extended", monthly: "¥43.3", traffic: "200G/mo", notes: "¥129.99/qtr | 2.5Gbps | 2 IPs" }
    ],
    speed: "2.5Gbps", nodes: "HK, JP, TW, SG, US", restrictions: ""
  },
  {
    name: "LaoMao Cloud", nameZh: "老猫云", slug: "laomao",
    desc: "Dedicated-line airport, node speed-limited. Enterprise IEPL dedicated line. 3-day refund policy. Quarterly minimum.",
    descZh: "专线机场，节点限速，季付起步。", protocols: ["V2ray"],
    tags: ["dedicated line", "speed-limited", "quarterly-min"], payment: "Alipay",
    pricing: [
      { name: "Plan B", monthly: "¥15", traffic: "50G/mo", notes: "IEPL | Up to 200Mbps | 99% SLA | 50+ nodes" },
      { name: "Plan C", monthly: "¥20", traffic: "100G/mo", notes: "IEPL | Up to 300Mbps | 99% SLA | 50+ nodes" },
      { name: "Plan D", monthly: "¥30", traffic: "200G/mo", notes: "IEPL | Up to 500Mbps | 99% SLA | 50+ nodes" },
      { name: "Plan E", monthly: "¥40", traffic: "300G/mo", notes: "IEPL | Up to 500Mbps | 99% SLA | 50+ nodes" },
      { name: "Plan F", monthly: "¥50", traffic: "500G/mo", notes: "IEPL | Up to 1000Mbps | 99% SLA | 50+ nodes" }
    ],
    speed: "200–1000Mbps", nodes: "50+ global", restrictions: "Quarterly payment minimum. Node speed-limited."
  },
  {
    name: "X-Air", nameZh: "X-Air", slug: "x-air",
    desc: "Low-key niche, legacy airport. Unlimited simultaneous connections. Streaming unlock acceleration.",
    descZh: "低调小众，老牌机场。", protocols: ["Hysteria", "VLESS"],
    tags: ["niche", "low-key", "legacy"], payment: "Alipay",
    pricing: [
      { name: "Advanced Annual", monthly: "¥26", traffic: "168G/mo", notes: "¥311.85/yr | 2.01TB total | Unlimited connections" },
      { name: "Advanced Deluxe Annual", monthly: "¥34.8", traffic: "333G/mo", notes: "¥417.9/yr | 4TB total | Unlimited connections" },
      { name: "Advanced Monthly", monthly: "¥30.45", traffic: "150G/mo", notes: "Monthly | Streaming unlock" },
      { name: "Advanced 6mo", monthly: "¥28.9", traffic: "167G/mo", notes: "¥173.25/6mo | 1TB total | Streaming unlock" }
    ],
    speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: ""
  },
  {
    name: "YToo", nameZh: "歪兔 YToo", slug: "ytoo",
    desc: "Flower Cloud alternative, has low-rate nodes. Good streaming & ChatGPT unlock. Custom client. Low rate: 0.2x during day (02:30-13:00).",
    descZh: "花云平替，有低倍率。", protocols: ["Shadowsocks", "Trojan"],
    tags: ["low-rate", "alternative", "dedicated line"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: "Low-rate nodes: 0.2x during day hours."
  },
  {
    name: "FlowerCloud", nameZh: "花云 FlowerCloud", slug: "flowercloud",
    desc: "First-tier airport. Global acceleration with mainland China international dedicated line. 80+ edge networks. ChatGPT unlock.",
    descZh: "第一梯队机场。", protocols: ["Shadowsocks", "Trojan"],
    tags: ["first-tier", "dedicated line", "high-end"], payment: "Alipay, WeChat",
    pricing: [
      { name: "Air", monthly: "¥10.7", traffic: "20GiB/mo", notes: "¥128/yr | Up to 1000Mbps | 80+ edge networks" },
      { name: "Lite", monthly: "¥39", traffic: "150GiB/mo", notes: "Monthly | Up to 1000Mbps | 80+ edge networks" },
      { name: "Plus", monthly: "¥58", traffic: "400GiB/mo", notes: "Monthly | Up to 1000Mbps | 80+ edge networks" },
      { name: "Max", monthly: "¥113", traffic: "1000GiB/mo", notes: "Monthly | Up to 1000Mbps | 80+ edge networks" }
    ],
    speed: "Up to 1000Mbps", nodes: "80+ edge networks", restrictions: "Personal use only."
  },
  {
    name: "LinkCube", nameZh: "LinkCube 绿叶", slug: "linkcube",
    desc: "Large dedicated-line airport, green-leaf acceleration. BGP ingress. International dedicated line transmission. 50+ nodes.",
    descZh: "专线大机场，绿叶加速。", protocols: ["Shadowsocks", "Trojan"],
    tags: ["large-airport", "dedicated line"], payment: "Alipay",
    pricing: [
      { name: "Light", monthly: "¥15", traffic: "100GiB/mo", notes: "Monthly | Up to 1000Mbps | 50+ nodes | Full platform" },
      { name: "Standard", monthly: "¥26.7", traffic: "300GiB/mo", notes: "¥160/6mo | Up to 1000Mbps | Full streaming unlock" },
      { name: "High-Volume", monthly: "¥76.7", traffic: "900GiB/mo", notes: "¥460/6mo | Up to 1000Mbps | Full streaming unlock" }
    ],
    speed: "Up to 1000Mbps", nodes: "50+ nodes", restrictions: "Personal use only."
  },
  {
    name: "CTC / JinLongYu", nameZh: "CTC 金龙鱼", slug: "ctc",
    desc: "JinLongYu airport, invite-only registration. Monthly and annual plans. USDT payment gets 5% discount.",
    descZh: "金龙鱼机场，邀请注册。", protocols: ["Shadowsocks"],
    tags: ["invite-only", "dedicated line"], payment: "Alipay, USDT",
    pricing: [
      { name: "SE-100G", monthly: "¥20", traffic: "100G/mo", notes: "Monthly reset | 1x & 2x rate nodes" },
      { name: "SE-200G", monthly: "¥40", traffic: "200G/mo", notes: "Monthly reset | 1x & 2x rate nodes" },
      { name: "SE-500G", monthly: "¥100", traffic: "500G/mo", notes: "Monthly reset | 1x & 2x rate nodes" },
      { name: "Max-1000G", monthly: "¥25", traffic: "1000G/yr", notes: "¥300/yr | Annual | No monthly reset" },
      { name: "Max-5000G", monthly: "¥125", traffic: "5000G/yr", notes: "¥1500/yr | Annual | No monthly reset" },
      { name: "PAYG-1314G", monthly: "—", traffic: "1314G one-time", notes: "¥400 one-time | No expiry | USDT 5% off" }
    ],
    speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: "Invite code required for registration."
  },
  {
    name: "Riolu", nameZh: "Riolu 精灵学院", slug: "riolu",
    desc: "Legacy airport, AnyTLS new protocol. Full IEPL & relay ingress. ChatGPT/Claude AI support. Emby service.",
    descZh: "老牌机场，AnyTLS 新协议。", protocols: ["AnyTLS"],
    tags: ["legacy", "AnyTLS", "custom client"], payment: "Alipay",
    pricing: [
      { name: "Iron", monthly: "¥8", traffic: "30GB/mo", notes: "500Mb/s | Full IEPL | ChatGPT/Claude | No Emby" },
      { name: "Silver", monthly: "¥15", traffic: "120GB/mo", notes: "500Mb/s | Full IEPL | ChatGPT/Claude | Emby" },
      { name: "Gold", monthly: "¥45", traffic: "360GB/mo", notes: "500Mb/s | Full IEPL | ChatGPT/Claude | Emby" },
      { name: "Diamond", monthly: "¥75", traffic: "600GB/mo", notes: "500Mb/s | Full IEPL | ChatGPT/Claude | Emby" },
      { name: "PAYG Small", monthly: "—", traffic: "400GB one-time", notes: "¥70 one-time | 500Mb/s | No expiry" },
      { name: "PAYG Large", monthly: "—", traffic: "800GB one-time", notes: "¥130 one-time | 500Mb/s | No expiry" }
    ],
    speed: "500Mb/s", nodes: "Global", restrictions: "No refunds."
  },
  {
    name: "FluxLink", nameZh: "云翼网络", slug: "fluxlink",
    desc: "Since 2020. Custom 3-platform client. IEPL dedicated line. Unlimited streaming unlock.",
    descZh: "2020年老牌，定制三端，VLESS。", protocols: ["VLESS"],
    tags: ["custom client", "2020", "VLESS"], payment: "Alipay, WeChat",
    pricing: [
      { name: "Standard", monthly: "¥26.9", traffic: "108GiB/mo", notes: "IEPL | 4 devices | Monthly reset" },
      { name: "Premium", monthly: "¥37.9", traffic: "198GiB/mo", notes: "IEPL | 4 devices | Monthly reset" },
      { name: "Ultimate", monthly: "¥102.9", traffic: "520GiB/mo", notes: "IEPL | 10 devices | Monthly reset" },
      { name: "Annual 648G", monthly: "¥18.2", traffic: "54GiB/mo", notes: "¥218/yr | 648GiB total | 3 devices" },
      { name: "Annual 1398G", monthly: "¥31.5", traffic: "117GiB/mo", notes: "¥378/yr | 1398GiB total | 5 devices" },
      { name: "Annual 3288G", monthly: "¥65.8", traffic: "274GiB/mo", notes: "¥789/yr | 3288GiB total | 8 devices" }
    ],
    speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: ""
  },
  {
    name: "Poros", nameZh: "Poros", slug: "poros",
    desc: "Low-key niche, ultra-high-rate dedicated-line nodes. BGP standard + IPLC premium nodes. 20 nodes. Unlimited devices.",
    descZh: "低调小众，专线节点超高倍率。", protocols: ["Shadowsocks", "V2ray", "AnyTLS"],
    tags: ["niche", "ultra-high-rate", "dedicated line"], payment: "Alipay",
    pricing: [
      { name: "Lite", monthly: "¥10", traffic: "50G/mo", notes: "BGP + IPLC | 20 nodes | Unlimited devices" },
      { name: "Pro", monthly: "¥15", traffic: "100G/mo", notes: "BGP + IPLC | 20 nodes | Unlimited devices" }
    ],
    speed: "Unlimited", nodes: "Asia, Americas, Europe", restrictions: "Ultra-high rate nodes."
  },
  {
    name: "ByWave", nameZh: "ByWave", slug: "bywave",
    desc: "Legacy dedicated-line airport. Financial-grade 10G IEPL dedicated line. Full Netflix/Disney+/ChatGPT unlock. Emby.",
    descZh: "老牌专线机场。", protocols: ["Shadowsocks"],
    tags: ["legacy", "dedicated line"], payment: "Alipay",
    pricing: [
      { name: "Special", monthly: "¥11.7", traffic: "17G/mo", notes: "¥140 one-time | 360days | 200G total | 100Mbps | 10 devices" },
      { name: "Bronze", monthly: "¥30", traffic: "150G/mo", notes: "Monthly | 500Mbps | 10 devices | Financial IEPL" },
      { name: "Gold", monthly: "¥60", traffic: "500G/mo", notes: "Monthly | 1000Mbps | 10 devices | Emby" },
      { name: "Platinum", monthly: "¥110", traffic: "1000G/mo", notes: "Monthly | Unlimited speed | 10 devices | Emby" }
    ],
    speed: "100Mbps–Unlimited", nodes: "Global", restrictions: "No refunds."
  },
  {
    name: "Seele Cloud", nameZh: "Seele Cloud", slug: "seelecloud",
    desc: "Low-key niche, operating for many years. Unlimited speed on most plans. Home broadband IP available.",
    descZh: "低调小众，开业多年。", protocols: ["AnyTLS"],
    tags: ["niche", "many-years", "legacy"], payment: "Alipay",
    pricing: [
      { name: "Night Walk", monthly: "¥4.75", traffic: "17G/mo", notes: "¥14.25/qtr | 50GB | Unlimited speed" },
      { name: "Ripple", monthly: "¥14.20", traffic: "200G/mo", notes: "Monthly | Unlimited speed" },
      { name: "Butterfly", monthly: "¥21.33", traffic: "320G/mo", notes: "Monthly | Unlimited speed" },
      { name: "PAYG Small", monthly: "—", traffic: "120GB one-time", notes: "¥24.90 one-time | Unlimited speed" },
      { name: "PAYG Large", monthly: "—", traffic: "300GB one-time", notes: "¥58.90 one-time | Unlimited speed" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "WUXX", nameZh: "WUXX", slug: "wuxx",
    desc: "Dedicated-line + premium direct-connect combo. Full IEPL nodes. PAYG available. Unlimited speed on Premium.",
    descZh: "专线+精品直连的组合。", protocols: ["V2ray", "VLESS"],
    tags: ["dedicated line", "direct-connect", "multi-protocol"], payment: "Alipay",
    pricing: [
      { name: "Mini", monthly: "¥9.99", traffic: "50G/mo", notes: "50Mbps | 1 device | 5 regions" },
      { name: "Standard", monthly: "¥29.99", traffic: "150G/mo", notes: "100Mbps | 3 devices | 10+ regions" },
      { name: "Premium", monthly: "¥89.99", traffic: "500G/mo", notes: "Unlimited speed | Unlimited devices | 10+ regions" },
      { name: "PAYG 300GB", monthly: "—", traffic: "300GB one-time", notes: "¥139 one-time | Unlimited speed" },
      { name: "PAYG 1000GB", monthly: "—", traffic: "1000GB one-time", notes: "¥399 one-time | Unlimited speed" }
    ],
    speed: "50Mbps–Unlimited", nodes: "10+ regions", restrictions: ""
  },
  {
    name: "GieGie Cloud", nameZh: "GieGie Cloud", slug: "giegiecloud",
    desc: "Legacy niche airport. Standard relay + dedicated line options. Mainland China only. ChatGPT unlock.",
    descZh: "老牌小众机场。", protocols: ["Shadowsocks"],
    tags: ["niche", "legacy"], payment: "Alipay",
    pricing: [
      { name: "Std Small", monthly: "¥13", traffic: "166G/mo", notes: "Relay | 5 IPs | ChatGPT unlock" },
      { name: "Std Medium", monthly: "¥25", traffic: "388G/mo", notes: "Relay | 5 IPs | ChatGPT unlock" },
      { name: "Std Large", monthly: "¥35", traffic: "524G/mo", notes: "Relay | 5 IPs | ChatGPT unlock" },
      { name: "Std X-Large", monthly: "¥48", traffic: "812G/mo", notes: "Relay | 5 IPs | ChatGPT unlock" },
      { name: "Line Small", monthly: "¥19", traffic: "64G/mo", notes: "IPLC dedicated line | 5 IPs | ChatGPT unlock" },
      { name: "Line Large", monthly: "¥49", traffic: "256G/mo", notes: "IPLC dedicated line | 5 IPs | ChatGPT unlock" }
    ],
    speed: "Unlimited", nodes: "China mainland relay", restrictions: "Mainland China only. No Xinjiang guarantee."
  },
  {
    name: "AgentNEO", nameZh: "AgentNEO", slug: "agentneo",
    desc: "Legacy low-key relay station. Multi-platform support. Netflix unlock. No BT downloads.",
    descZh: "老牌低调中转站。", protocols: ["Trojan", "VLESS"],
    tags: ["low-key", "relay", "legacy"], payment: "Alipay",
    pricing: [
      { name: "Basic A", monthly: "¥12", traffic: "20G/mo", notes: "Multi-platform | Netflix | No BT" },
      { name: "High-Vol A", monthly: "¥20", traffic: "50G/mo", notes: "Multi-platform | Netflix | No BT" },
      { name: "High-Vol B", monthly: "¥33.33", traffic: "150G/mo", notes: "Multi-platform | Netflix | No BT" },
      { name: "High-Vol C", monthly: "¥46.67", traffic: "750G/mo", notes: "Multi-platform | Netflix | No BT" }
    ],
    speed: "Unlimited", nodes: "HK, US, KR, SG", restrictions: "No BT downloads. Personal use only."
  },
  {
    name: "XFLTD", nameZh: "XFSS 养鸡场", slug: "xfltd",
    desc: "XFSS chicken farm. IEPL dedicated line options. 1Gbps bandwidth guarantee. No refunds.",
    descZh: "XFSS 养鸡场。", protocols: ["Shadowsocks"],
    tags: ["chicken-farm", "legacy"], payment: "Alipay",
    pricing: [
      { name: "2yr 1024G", monthly: "¥3.2", traffic: "43G/mo", notes: "¥77/2yr | 1024G total | 1Gbps | No refund" },
      { name: "IEPL 300G", monthly: "¥12", traffic: "300G/mo", notes: "IEPL dedicated line | 1Gbps | No refund" },
      { name: "IEPL 750G", monthly: "¥30", traffic: "750G/mo", notes: "IEPL dedicated line | 1Gbps | No refund" },
      { name: "150G Plan", monthly: "¥7", traffic: "150G/mo", notes: "1Gbps | No refund" },
      { name: "500G Plan", monthly: "¥20", traffic: "500G/mo", notes: "1Gbps | No refund" }
    ],
    speed: "1Gbps guaranteed", nodes: "Global", restrictions: "No refunds. Xinjiang not supported."
  },
  {
    name: "KuaiChongYun", nameZh: "快充云", slug: "kuaichongyun",
    desc: "Many home-broadband IP nodes are the highlight. Military-grade encryption. Dynamic nodes. No refunds.",
    descZh: "较多家宽 IP 节点是特色。", protocols: ["Shadowsocks"],
    tags: ["home-IP", "feature"], payment: "Alipay",
    pricing: [
      { name: "360G/90d", monthly: "¥13.3", traffic: "120G/mo", notes: "¥40/90d | Home broadband IP | 500MB node speed" },
      { name: "266G/30d", monthly: "¥27", traffic: "266G/mo", notes: "Dynamic nodes | Home broadband IP | Unlimited speed" },
      { name: "455G/30d", monthly: "¥46", traffic: "455G/mo", notes: "Dynamic nodes | Home broadband IP | Unlimited speed" },
      { name: "610G/30d", monthly: "¥62", traffic: "610G/mo", notes: "Dynamic nodes | Home broadband IP | Unlimited speed" },
      { name: "1024G/30d", monthly: "¥103", traffic: "1024G/mo", notes: "Dynamic nodes | Home broadband IP | Unlimited speed" }
    ],
    speed: "500MB–Unlimited", nodes: "60+ regions", restrictions: "No refunds. Xinjiang not guaranteed."
  },
  {
    name: "MuNiu Cloud", nameZh: "牧牛云 MUNIUCLOUD", slug: "muniu",
    desc: "Since 2020. Public tunnel relay + IEPL dedicated line. Multi-platform client. Quick support.",
    descZh: "2020年老牌，公网隧道中转+IEPL专线。", protocols: ["Shadowsocks"],
    tags: ["IEPL", "2020", "legacy", "public-relay"], payment: "Alipay",
    pricing: [
      { name: "Trial", monthly: "¥3.4", traffic: "5G/mo", notes: "¥8/7d | 35GB | 150Mbps | Unlimited devices" },
      { name: "Bronze", monthly: "¥20.80", traffic: "90G/mo", notes: "100Mbps | Unlimited devices | Global nodes" },
      { name: "Silver", monthly: "¥32.80", traffic: "180G/mo", notes: "200Mbps | Unlimited devices | Global nodes" },
      { name: "Silver+", monthly: "¥52.80", traffic: "350G/mo", notes: "300Mbps | Unlimited devices | Global nodes" }
    ],
    speed: "150–300Mbps", nodes: "Global", restrictions: ""
  },
  {
    name: "ZhangZhongShiJie", nameZh: "掌中世界", slug: "zzsj",
    desc: "Since 2021. 3-entry-point relay. Custom beginner 3-platform client. ChatGPT/Netflix/Midjourney support.",
    descZh: "2021年小机场，三线入口，中转机场。", protocols: ["Shadowsocks"],
    tags: ["3-platform", "2021", "custom client"], payment: "Alipay",
    pricing: [
      { name: "BA1.0", monthly: "¥18", traffic: "100G/mo", notes: "500Mbps | 2 devices | ChatGPT/Netflix" },
      { name: "ST2.0", monthly: "¥20", traffic: "280G/mo", notes: "500Mbps | 3 devices | ChatGPT/Netflix" },
      { name: "PR5", monthly: "¥45", traffic: "680G/mo", notes: "Unlimited speed | 10 devices | ChatGPT/Netflix" },
      { name: "mini X", monthly: "¥6.5", traffic: "30G/mo", notes: "¥78/yr | 300Mbps | 2 devices" },
      { name: "mini S", monthly: "¥7.3", traffic: "60G/mo", notes: "¥88/yr | 300Mbps | 2 devices" },
      { name: "King", monthly: "¥12.5", traffic: "87G/mo", notes: "¥299/2yr | 2088GB one-time | Unlimited speed" },
      { name: "Heirloom", monthly: "—", traffic: "5550G one-time", notes: "¥399 one-time | Unlimited speed | 10 devices" }
    ],
    speed: "300Mbps–Unlimited", nodes: "HK, US, KR, SG", restrictions: ""
  },
  {
    name: "WannaFlix",
    nameZh: "WannaFlix",
    slug: "wannaflix",
    desc: "Commercial VPN service (not an airport). 19 countries, 16 premium locations. 5 simultaneous connections. 256-bit encryption. No logs. 30-day money-back guarantee. 3-day free trial.",
    descZh: "商业VPN服务，非机场。",
    protocols: ["OpenVPN", "WireGuard", "IKEv2"],
    tags: ["VPN", "unlimited", "no-logs", "money-back"],
    payment: "Credit Card, PayPal, Crypto",
    pricing: [
      { name: "1 Month", monthly: "$9.97", traffic: "Unlimited", notes: "Billed monthly | 5 devices | 30-day guarantee" },
      { name: "6 Months", monthly: "$8.32", traffic: "Unlimited", notes: "Billed $49.95/6mo | 5 devices | 30-day guarantee" },
      { name: "12 Months", monthly: "$6.99", traffic: "Unlimited", notes: "Billed $83.88/yr | Was $119.64 | Save 30% | 5 devices | 30-day guarantee" }
    ],
    speed: "Ultra-fast (4K streaming)",
    nodes: "19 countries / 16 premium",
    restrictions: "3-day free trial available. Commercial VPN, not proxy/airport."
  }
];

const testing = [
  {
    name: "FliggyCloud", nameZh: "飞天猫 FliggyCloud", slug: "fliggycloud",
    desc: "2024 premium airport. IPLC dedicated line. 3000Mbps max. Netflix/Disney+/HBO/TikTok/ChatGPT unlock. No device limit.",
    descZh: "2024新高端机场，IPLC专线。", protocols: ["Shadowsocks"],
    tags: ["IPLC", "2024", "new", "high-end"], payment: "Alipay",
    pricing: [
      { name: "Light", monthly: "¥7", traffic: "50G/mo", notes: "¥84/yr | ¥168/2yr | Traffic reset ¥15" },
      { name: "VIP1", monthly: "¥20", traffic: "120G/mo", notes: "Qtr ¥54 | 6mo ¥102 | Yr ¥192 | 2yr ¥284 | Reset ¥20" },
      { name: "VIP2", monthly: "¥40", traffic: "240G/mo", notes: "Qtr ¥108 | 6mo ¥204 | Yr ¥384 | 2yr ¥568 | Reset ¥40" },
      { name: "VIP3", monthly: "¥70", traffic: "500G/mo", notes: "Qtr ¥189 | 6mo ¥357 | Yr ¥672 | 2yr ¥1176 | Reset ¥70" },
      { name: "VIP4", monthly: "¥120", traffic: "1000G/mo", notes: "Qtr ¥324 | 6mo ¥697 | Yr ¥1152 | 2yr ¥2016 | Reset ¥120" },
      { name: "Custom Nodes", monthly: "¥680", traffic: "Custom", notes: "Dedicated IP + bandwidth | TikTok/e-commerce" }
    ],
    speed: "3000Mbps", nodes: "HK, JP, TW, SG, US", restrictions: "Email whitelist required for registration."
  },
  {
    name: "LuYu Cloud", nameZh: "鹿语云", slug: "luyuyun",
    desc: "Niche dedicated line, selectable ingress. IEPL lines. Residential IP nodes. Founded 2024. Free trial cancelled. Quarterly minimum. Emby partnership.",
    descZh: "小众专线，可自选入口。", protocols: ["VLESS"],
    tags: ["niche", "dedicated line", "selectable ingress"], payment: "Alipay, WeChat",
    pricing: [],
    speed: "IEPL dedicated line", nodes: "Multiple", restrictions: "Quarterly minimum. Promo: luyu9 (10% off), luyu8 (20% off yearly)."
  },
  {
    name: "YouTu", nameZh: "悠兔机场", slug: "youtu",
    desc: "Premium dedicated-line airport. Good overall performance. Dedicated line nodes up to 2.5x rate. Dynamic off-peak rates. Custom client app.",
    descZh: "高端专线机场，综合表现不错。", protocols: ["Shadowsocks"],
    tags: ["high-end", "dedicated line", "excellent"], payment: "Alipay",
    pricing: [],
    speed: "Up to 2.5x rate", nodes: "Global", restrictions: "Free trial on registration."
  },
  {
    name: "YangFan Cloud", nameZh: "扬帆云", slug: "yangfanyun",
    desc: "Vmess dedicated-line airport. Public tunnel transit, reportedly upgraded to full IEPL. Founded 2025. NOT the same as 扬帆起航.",
    descZh: "Vmess 专线机场。", protocols: ["Vmess"],
    tags: ["dedicated line", "Vmess"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: "Some nodes may not PING but are usable."
  },
  {
    name: "BeiBei Cloud", nameZh: "贝贝云", slug: "beibeilink",
    desc: "Relay airport, beginner-friendly. Custom beginner client for 3 platforms. AnyTLS protocol. Telegram: t.me/beibeicloud.",
    descZh: "中转机场，新手友好。", protocols: ["AnyTLS"],
    tags: ["relay", "beginner", "friendly", "custom client"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Cyber Guard", nameZh: "Cyber Guard", slug: "cybeguard",
    desc: "DEFUNCT — Ran away Jan 2026. Was: IEPL/IPLC dedicated lines. Netflix/Disney+ unlock. 1000M bandwidth.",
    descZh: "已跑路（2026年1月）。", protocols: ["Trojan", "VLESS"],
    tags: ["defunct", "IEPL", "IPLC"], payment: "—",
    pricing: [],
    speed: "—", nodes: "—", restrictions: "SERVICE DEFUNCT. Do not purchase."
  },
  {
    name: "FatCat Cloud", nameZh: "肥猫云", slug: "fatcat",
    desc: "SEIZED — Domain seized by Jiangsu Anti-Fraud Network (江苏反诈网). Was: BGP ingress dedicated line. Founded Nov 2023.",
    descZh: "已被江苏反诈网查封。", protocols: ["Trojan"],
    tags: ["seized", "defunct", "BGP"], payment: "—",
    pricing: [],
    speed: "—", nodes: "—", restrictions: "DOMAIN SEIZED BY AUTHORITIES. Do not use."
  },
  {
    name: "YkkCloud", nameZh: "YkkCloud", slug: "ykkcloud",
    desc: "DEFUNCT — Ran away Sept 2025. Was: VLESS Reality relay + dedicated lines. Netflix hijack nodes. Xinjiang-specific nodes historically.",
    descZh: "已跑路（2025年9月）。", protocols: ["VLESS"],
    tags: ["defunct", "VLESS", "Reality"], payment: "—",
    pricing: [],
    speed: "—", nodes: "—", restrictions: "SERVICE DEFUNCT. Do not purchase."
  },
  {
    name: "Dragonfly", nameZh: "蜗蜗 Dragonfly", slug: "dragonfly",
    desc: "Premium direct-connect station. Next.js SPA.", descZh: "又一家精品直连站。", protocols: ["VLESS"],
    tags: ["direct-connect", "premium", "new"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "AnyNet", nameZh: "AnyNet", slug: "anynet",
    desc: "Rare VLESS dedicated-line airport.", descZh: "稀有 VLESS 专线机场。", protocols: ["VLESS"],
    tags: ["VLESS", "rare", "dedicated line", "new"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "WaveNebula", nameZh: "电波星云 WaveNebula", slug: "wavenebula",
    desc: "New dedicated-line. 403 Forbidden by WAF.", descZh: "新兴专线。", protocols: ["Shadowsocks", "AnyTLS"],
    tags: ["emerging", "dedicated line", "custom client"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: "Site behind WAF."
  },
  {
    name: "XSWL Cloud", nameZh: "XSWLCloud 笑死了", slug: "xswl",
    desc: "Low-price high-volume route. Cheap.", descZh: "走低价便宜大碗路线。", protocols: ["VLESS"],
    tags: ["low-price", "high-volume", "cheap"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "GodWorld", nameZh: "上帝世界 GodWorld", slug: "godworld",
    desc: "2026 new. CN2 GIA / CMIN2 / 9929 optimized direct.", descZh: "2026新机场，CN2 GIA / 9929 / CMIN2 优化直连。", protocols: ["AnyTLS"],
    tags: ["CN2 GIA", "CMIN2", "9929", "2026", "new", "optimized direct"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Translink", nameZh: "Translink Cloud", slug: "translink",
    desc: "2026 new airport. Site unresponsive.", descZh: "2026新开的机场。", protocols: ["VLESS", "AnyTLS"],
    tags: ["2026", "new", "multi-protocol"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: "Site may be down."
  },
  {
    name: "Dishu Cloud", nameZh: "地鼠机场 DishuCloud", slug: "dishucloud",
    desc: "2024 small airport. VLESS/Xray.", descZh: "2024小机场，VLESS(Xray)。", protocols: ["VLESS", "AnyTLS"],
    tags: ["2024", "niche", "VLESS"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "HongMo", nameZh: "红魔馆机场", slug: "hongmowangluo",
    desc: "VLESS. HK/JP/TW/SG/US nodes.", descZh: "VLESS，香港/日本/台湾/新加坡/美国节点。", protocols: ["VLESS"],
    tags: ["multi-region", "VLESS", "PAYG"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: ""
  }
];

const allData = [
  ...top8.map(s => ({...s, tier: 'top'})),
  ...legacy.map(s => ({...s, tier: 'legacy'})),
  ...testing.map(s => ({...s, tier: 'new'}))
];

// ===== NUMERIC PARSERS =====
function parsePriceMonthly(str) {
  if (!str || str === '—') return Infinity;
  const yuan = str.match(/¥\s*([0-9.]+)/);
  if (yuan) return parseFloat(yuan[1]);
  const usd = str.match(/\$\s*([0-9.]+)/);
  if (usd) return parseFloat(usd[1]) * 7.2; // Approximate USD to CNY
  return Infinity;
}

function parseTrafficMonthly(str) {
  if (!str) return 0;
  if (/unlimited/i.test(str)) return 10000;
  const yr = str.match(/([0-9.]+)\s*G\s*\/\s*yr/i);
  if (yr) return parseFloat(yr[1]) / 12;
  const onetime = str.match(/一次性|one-time/i);
  if (onetime) return 0;
  const mo = str.match(/([0-9.]+)\s*G/i);
  return mo ? parseFloat(mo[1]) : 0;
}

function parseSpeed(str) {
  if (!str) return 0;
  const highBandwidthWords = /IEPL|专线|high bandwidth|guaranteed/i;
  const hasNumber = /[0-9]/.test(str);
  if (!hasNumber && highBandwidthWords.test(str)) return 1000;
  const normalized = str.replace(/[–—]/g, '-');
  const matches = [...normalized.matchAll(/([0-9.]+)\s*(Gbps|G|Mbps|M)\b/gi)];
  if (matches.length === 0) return 0;
  let maxVal = 0;
  for (const m of matches) {
    let val = parseFloat(m[1]);
    if (m[2].toLowerCase().startsWith('g')) val *= 1000;
    if (val > maxVal) maxVal = val;
  }
  return maxVal;
}

function getBestPlan(s) {
  if (!s.pricing || s.pricing.length === 0) return null;
  const valid = s.pricing.filter(p => parsePriceMonthly(p.monthly) < Infinity);
  if (valid.length === 0) return s.pricing[0];
  return valid.sort((a, b) => parseTrafficMonthly(b.traffic) - parseTrafficMonthly(a.traffic))[0];
}

function getSortValue(s, sortKey) {
  const plan = getBestPlan(s);
  if (!plan) {
    if (sortKey === 'price') return Infinity;
    if (sortKey === 'traffic') return 0;
    if (sortKey === 'speed') return parseSpeed(s.speed);
    if (sortKey === 'value') return getValueScore(s);
    return 0;
  }
  if (sortKey === 'price') return parsePriceMonthly(plan.monthly);
  if (sortKey === 'traffic') return parseTrafficMonthly(plan.traffic);
  if (sortKey === 'speed') return parseSpeed(s.speed);
  if (sortKey === 'value') return getValueScore(s);
  return 0;
}

// ===== STANDARDIZED VALUES =====
function getPricePerGb(s) {
  const plan = getBestPlan(s);
  if (!plan) return null;
  const price = parsePriceMonthly(plan.monthly);
  const traffic = parseTrafficMonthly(plan.traffic);
  if (traffic <= 0 || price === Infinity) return null;
  if (traffic >= 9999) return 0;
  return price / traffic;
}

function getValueScore(s) {
  const ppg = getPricePerGb(s);
  if (ppg === null) return 0;
  if (ppg === 0) return 100;
  return 1 / ppg;
}

function formatPricePerGb(s) {
  const ppg = getPricePerGb(s);
  if (ppg === null) return '—';
  if (ppg === 0) return 'Unlimited';
  if (ppg < 1) return '¥' + ppg.toFixed(2) + '/GB';
  return '¥' + ppg.toFixed(1) + '/GB';
}

function formatValueScore(s) {
  const score = getValueScore(s);
  if (score <= 0) return '—';
  if (score >= 99) return '∞';
  if (score >= 10) return score.toFixed(0) + ' GB/¥';
  if (score >= 1) return score.toFixed(1) + ' GB/¥';
  return score.toFixed(2) + ' GB/¥';
}

// ===== MATCH LOGIC =====
let currentSort = 'default';
let currentMinTraffic = null;
let currentMaxTraffic = null;
let currentMinSpeed = null;

function matchesCriteria(s) {
  const plan = getBestPlan(s);
  if (!plan) return false;
  const traffic = parseTrafficMonthly(plan.traffic);
  const speed = parseSpeed(s.speed);
  if (currentMinTraffic !== null && traffic < currentMinTraffic) return false;
  if (currentMaxTraffic !== null && traffic > currentMaxTraffic) return false;
  if (currentMinSpeed !== null && speed < currentMinSpeed) return false;
  return true;
}
