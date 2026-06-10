// Airport Survey — Service Data
// Edit this file to update pricing, add new services, or modify existing entries.
// Then commit and push to GitHub Pages.

// Define your referral codes here.
// Map the service slug to your custom referral code.
// Example: const referralCodes = { ssrdog: "mycode", wgetcloud: "anothercode" };
const referralCodes = {
  // Put your custom codes here to automatically override or append them to registration links
};

function getServiceUrl(s) {
  if (!s.url) return '';
  const code = referralCodes[s.slug];
  if (!code) return s.url;
  try {
    const urlObj = new URL(s.url);
    if (urlObj.hash && urlObj.hash.includes('code=')) {
      urlObj.hash = urlObj.hash.replace(/code=[^&]+/, 'code=' + code);
    } else if (urlObj.searchParams.has('code')) {
      urlObj.searchParams.set('code', code);
    } else if (urlObj.searchParams.has('aff')) {
      urlObj.searchParams.set('aff', code);
    } else {
      if (s.url.includes('#/register')) {
        if (s.url.includes('code=')) {
          return s.url.replace(/code=[^&]+/, 'code=' + code);
        } else {
          return s.url + (s.url.includes('?') ? '&' : '?') + 'code=' + code;
        }
      }
      urlObj.searchParams.set('code', code);
    }
    return urlObj.toString();
  } catch (e) {
    return s.url;
  }
}

const top8 = [
  {
    name: "WgetCloud",
    nameZh: "WgetCloud 全球加速",
    slug: "wgetcloud", url: "",
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
    slug: "boostnet", url: "",
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
    slug: "vikinglinks", url: "",
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
    slug: "eix", url: "",
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
    slug: "ssrdog", url: "",
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
    slug: "iplcvip", url: "",
    desc: "Legacy IPLC dedicated-line since 2019. Invite-code registration required. Limited quantity sales. Annual payment only.",
    descZh: "老牌IPLC专线，2019年或更早开业。邀请码注册，限量发售。",
    protocols: ["Shadowsocks"],
    tags: ["IPLC", "annual-only", "invite-code"],
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
    slug: "coffeecloud", url: "",
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
    name: "Night Fury Cloud",
    nameZh: "夜煞云",
    slug: "yesha", url: "",
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
    name: "Nexitally", nameZh: "奶昔机场", slug: "nexitally", url: "",
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
    name: "Imm Telecom", nameZh: "Imm Telecom", slug: "immtelecom", url: "",
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
    name: "Old Cat Cloud", nameZh: "老猫云", slug: "laomao", url: "",
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
    name: "X-Air", nameZh: "X-Air", slug: "x-air", url: "https://a012.red.xn-----dg4abflpy2ck1slc9ig05ag.xn--tckwe:666/#/ad/v2rayng",
    desc: "Low-key niche, legacy airport. Unlimited simultaneous connections. Streaming unlock acceleration.",
    descZh: "低调小众，老牌机场。", protocols: ["Hysteria", "VLESS"],
    tags: ["niche", "low-key"], payment: "Alipay",
    pricing: [
      { name: "Advanced Annual", monthly: "¥26", traffic: "168G/mo", notes: "¥311.85/yr | 2.01TB total | Unlimited connections" },
      { name: "Advanced Deluxe Annual", monthly: "¥34.8", traffic: "333G/mo", notes: "¥417.9/yr | 4TB total | Unlimited connections" },
      { name: "Advanced Monthly", monthly: "¥30.45", traffic: "150G/mo", notes: "Monthly | Streaming unlock" },
      { name: "Advanced 6mo", monthly: "¥28.9", traffic: "167G/mo", notes: "¥173.25/6mo | 1TB total | Streaming unlock" }
    ],
    speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: ""
  },
  {
    name: "YToo", nameZh: "歪兔 YToo", slug: "ytoo", url: "",
    desc: "Flower Cloud alternative, has low-rate nodes. Good streaming & ChatGPT unlock. Custom client. Low rate: 0.2x during day (02:30-13:00).",
    descZh: "花云平替，有低倍率。", protocols: ["Shadowsocks", "Trojan"],
    tags: ["low-rate", "alternative", "dedicated line"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: "Low-rate nodes: 0.2x during day hours."
  },
  {
    name: "FlowerCloud", nameZh: "花云 FlowerCloud", slug: "flowercloud", url: "",
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
    name: "LinkCube", nameZh: "LinkCube 绿叶", slug: "linkcube", url: "",
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
    name: "CTC / JinLongYu", nameZh: "CTC 金龙鱼", slug: "ctc", url: "",
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
    name: "Riolu", nameZh: "Riolu 精灵学院", slug: "riolu", url: "",
    desc: "Legacy airport, AnyTLS new protocol. Full IEPL & relay ingress. ChatGPT/Claude AI support. Emby service.",
    descZh: "老牌机场，AnyTLS 新协议。", protocols: ["AnyTLS"],
    tags: ["AnyTLS", "custom client"], payment: "Alipay",
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
    name: "FluxLink", nameZh: "云翼网络", slug: "fluxlink", url: "",
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
    name: "Poros", nameZh: "Poros", slug: "poros", url: "",
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
    name: "ByWave", nameZh: "ByWave", slug: "bywave", url: "",
    desc: "Legacy dedicated-line airport. Financial-grade 10G IEPL dedicated line. Full Netflix/Disney+/ChatGPT unlock. Emby.",
    descZh: "老牌专线机场。", protocols: ["Shadowsocks"],
    tags: ["dedicated line"], payment: "Alipay",
    pricing: [
      { name: "Special", monthly: "¥11.7", traffic: "17G/mo", notes: "¥140 one-time | 360days | 200G total | 100Mbps | 10 devices" },
      { name: "Bronze", monthly: "¥30", traffic: "150G/mo", notes: "Monthly | 500Mbps | 10 devices | Financial IEPL" },
      { name: "Gold", monthly: "¥60", traffic: "500G/mo", notes: "Monthly | 1000Mbps | 10 devices | Emby" },
      { name: "Platinum", monthly: "¥110", traffic: "1000G/mo", notes: "Monthly | Unlimited speed | 10 devices | Emby" }
    ],
    speed: "100Mbps–Unlimited", nodes: "Global", restrictions: "No refunds."
  },
  {
    name: "Seele Cloud", nameZh: "Seele Cloud", slug: "seelecloud", url: "",
    desc: "Low-key niche, operating for many years. Unlimited speed on most plans. Home broadband IP available.",
    descZh: "低调小众，开业多年。", protocols: ["AnyTLS"],
    tags: ["niche", "many-years"], payment: "Alipay",
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
    name: "WUXX", nameZh: "WUXX", slug: "wuxx", url: "",
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
    name: "GieGie Cloud", nameZh: "GieGie Cloud", slug: "giegiecloud", url: "",
    desc: "Legacy niche airport. Standard relay + dedicated line options. Mainland China only. ChatGPT unlock.",
    descZh: "老牌小众机场。", protocols: ["Shadowsocks"],
    tags: ["niche"], payment: "Alipay",
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
    name: "AgentNEO", nameZh: "AgentNEO", slug: "agentneo", url: "",
    desc: "Legacy low-key relay station. Multi-platform support. Netflix unlock. No BT downloads.",
    descZh: "老牌低调中转站。", protocols: ["Trojan", "VLESS"],
    tags: ["low-key", "relay"], payment: "Alipay",
    pricing: [
      { name: "Basic A", monthly: "¥12", traffic: "20G/mo", notes: "Multi-platform | Netflix | No BT" },
      { name: "High-Vol A", monthly: "¥20", traffic: "50G/mo", notes: "Multi-platform | Netflix | No BT" },
      { name: "High-Vol B", monthly: "¥33.33", traffic: "150G/mo", notes: "Multi-platform | Netflix | No BT" },
      { name: "High-Vol C", monthly: "¥46.67", traffic: "750G/mo", notes: "Multi-platform | Netflix | No BT" }
    ],
    speed: "Unlimited", nodes: "HK, US, KR, SG", restrictions: "No BT downloads. Personal use only."
  },
  {
    name: "XFLTD", nameZh: "XFSS 养鸡场", slug: "xfltd", url: "",
    desc: "XFSS chicken farm. IEPL dedicated line options. 1Gbps bandwidth guarantee. No refunds.",
    descZh: "XFSS 养鸡场。", protocols: ["Shadowsocks"],
    tags: ["chicken-farm"], payment: "Alipay",
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
    name: "KuaiChongYun", nameZh: "快充云", slug: "kuaichongyun", url: "",
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
    name: "MuNiu Cloud", nameZh: "牧牛云 MUNIUCLOUD", slug: "muniu", url: "",
    desc: "Since 2020. Public tunnel relay + IEPL dedicated line. Multi-platform client. Quick support.",
    descZh: "2020年老牌，公网隧道中转+IEPL专线。", protocols: ["Shadowsocks"],
    tags: ["IEPL", "2020", "public-relay"], payment: "Alipay",
    pricing: [
      { name: "Trial", monthly: "¥3.4", traffic: "5G/mo", notes: "¥8/7d | 35GB | 150Mbps | Unlimited devices" },
      { name: "Bronze", monthly: "¥20.80", traffic: "90G/mo", notes: "100Mbps | Unlimited devices | Global nodes" },
      { name: "Silver", monthly: "¥32.80", traffic: "180G/mo", notes: "200Mbps | Unlimited devices | Global nodes" },
      { name: "Silver+", monthly: "¥52.80", traffic: "350G/mo", notes: "300Mbps | Unlimited devices | Global nodes" }
    ],
    speed: "150–300Mbps", nodes: "Global", restrictions: ""
  },
  {
    name: "ZhangZhongShiJie", nameZh: "掌中世界", slug: "zzsj", url: "",
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
    slug: "wannaflix", url: "",
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
    name: "FliggyCloud", nameZh: "飞天猫 FliggyCloud", slug: "fliggycloud", url: "",
    desc: "2024 premium airport. IPLC dedicated line. 3000Mbps max. Netflix/Disney+/HBO/TikTok/ChatGPT unlock. No device limit.",
    descZh: "2024新高端机场，IPLC专线。", protocols: ["Shadowsocks"],
    tags: ["IPLC", "2024", "high-end"], payment: "Alipay",
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
    name: "Deer Whisper Cloud", nameZh: "鹿语云", slug: "luyuyun", url: "",
    desc: "Niche dedicated line, selectable ingress. IEPL lines. Residential IP nodes. Founded 2024. Free trial cancelled. Quarterly minimum. Emby partnership.",
    descZh: "小众专线，可自选入口。", protocols: ["VLESS"],
    tags: ["niche", "dedicated line", "selectable ingress"], payment: "Alipay, WeChat",
    pricing: [],
    speed: "IEPL dedicated line", nodes: "Multiple", restrictions: "Quarterly minimum. Promo: luyu9 (10% off), luyu8 (20% off yearly)."
  },
  {
    name: "YouTu", nameZh: "悠兔机场", slug: "youtu", url: "",
    desc: "Premium dedicated-line airport. Good overall performance. Dedicated line nodes up to 2.5x rate. Dynamic off-peak rates. Custom client app.",
    descZh: "高端专线机场，综合表现不错。", protocols: ["Shadowsocks"],
    tags: ["high-end", "dedicated line", "excellent"], payment: "Alipay",
    pricing: [],
    speed: "Up to 2.5x rate", nodes: "Global", restrictions: "Free trial on registration."
  },
  {
    name: "Setting Sail Cloud", nameZh: "扬帆云", slug: "yangfanyun", url: "",
    desc: "Vmess dedicated-line airport. Public tunnel transit, reportedly upgraded to full IEPL. Founded 2025. NOT the same as 扬帆起航.",
    descZh: "Vmess 专线机场。", protocols: ["Vmess"],
    tags: ["dedicated line", "Vmess"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: "Some nodes may not PING but are usable."
  },
  {
    name: "Beibei Cloud", nameZh: "贝贝云", slug: "beibeilink", url: "",
    desc: "Relay airport, beginner-friendly. Custom beginner client for 3 platforms. AnyTLS protocol. Telegram: t.me/beibeicloud.",
    descZh: "中转机场，新手友好。", protocols: ["AnyTLS"],
    tags: ["relay", "beginner", "friendly", "custom client"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Cyber Guard", nameZh: "Cyber Guard", slug: "cybeguard", url: "",
    desc: "DEFUNCT — Ran away Jan 2026. Was: IEPL/IPLC dedicated lines. Netflix/Disney+ unlock. 1000M bandwidth.",
    descZh: "已跑路（2026年1月）。", protocols: ["Trojan", "VLESS"],
    tags: ["defunct", "IEPL", "IPLC"], payment: "—",
    pricing: [],
    speed: "—", nodes: "—", restrictions: "SERVICE DEFUNCT. Do not purchase."
  },
  {
    name: "FatCat Cloud", nameZh: "肥猫云", slug: "fatcat", url: "",
    desc: "SEIZED — Domain seized by Jiangsu Anti-Fraud Network (江苏反诈网). Was: BGP ingress dedicated line. Founded Nov 2023.",
    descZh: "已被江苏反诈网查封。", protocols: ["Trojan"],
    tags: ["seized", "defunct", "BGP"], payment: "—",
    pricing: [],
    speed: "—", nodes: "—", restrictions: "DOMAIN SEIZED BY AUTHORITIES. Do not use."
  },
  {
    name: "YkkCloud", nameZh: "YkkCloud", slug: "ykkcloud", url: "",
    desc: "DEFUNCT — Ran away Sept 2025. Was: VLESS Reality relay + dedicated lines. Netflix hijack nodes. Xinjiang-specific nodes historically.",
    descZh: "已跑路（2025年9月）。", protocols: ["VLESS"],
    tags: ["defunct", "VLESS", "Reality"], payment: "—",
    pricing: [],
    speed: "—", nodes: "—", restrictions: "SERVICE DEFUNCT. Do not purchase."
  },
  {
    name: "Dragonfly", nameZh: "蜗蜗 Dragonfly", slug: "dragonfly", url: "",
    desc: "Premium direct-connect station. Next.js SPA.", descZh: "又一家精品直连站。", protocols: ["VLESS"],
    tags: ["direct-connect", "premium"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "AnyNet", nameZh: "AnyNet", slug: "anynet", url: "",
    desc: "Rare VLESS dedicated-line airport.", descZh: "稀有 VLESS 专线机场。", protocols: ["VLESS"],
    tags: ["VLESS", "rare", "dedicated line"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "WaveNebula", nameZh: "电波星云 WaveNebula", slug: "wavenebula", url: "",
    desc: "New dedicated-line. 403 Forbidden by WAF.", descZh: "新兴专线。", protocols: ["Shadowsocks", "AnyTLS"],
    tags: ["emerging", "dedicated line", "custom client"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: "Site behind WAF."
  },
  {
    name: "XSWL Cloud", nameZh: "XSWLCloud 笑死了", slug: "xswl", url: "",
    desc: "Low-price high-volume route. Cheap.", descZh: "走低价便宜大碗路线。", protocols: ["VLESS"],
    tags: ["low-price", "high-volume", "cheap"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "GodWorld", nameZh: "上帝世界 GodWorld", slug: "godworld", url: "",
    desc: "2026 new. CN2 GIA / CMIN2 / 9929 optimized direct.", descZh: "2026新机场，CN2 GIA / 9929 / CMIN2 优化直连。", protocols: ["AnyTLS"],
    tags: ["CN2 GIA", "CMIN2", "9929", "2026", "optimized direct"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Translink", nameZh: "Translink Cloud", slug: "translink", url: "",
    desc: "2026 new airport. Site unresponsive.", descZh: "2026新开的机场。", protocols: ["VLESS", "AnyTLS"],
    tags: ["2026", "multi-protocol"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: "Site may be down."
  },
  {
    name: "Gopher Cloud", nameZh: "地鼠机场 DishuCloud", slug: "dishucloud", url: "",
    desc: "2024 small airport. VLESS/Xray.", descZh: "2024小机场，VLESS(Xray)。", protocols: ["VLESS", "AnyTLS"],
    tags: ["2024", "niche", "VLESS"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Scarlet Devil Mansion Airport", nameZh: "红魔馆机场", slug: "hongmowangluo", url: "",
    desc: "VLESS. HK/JP/TW/SG/US nodes.", descZh: "VLESS，香港/日本/台湾/新加坡/美国节点。", protocols: ["VLESS"],
    tags: ["multi-region", "VLESS", "PAYG"], payment: "Alipay",
    pricing: [], speed: "Unlimited", nodes: "HK, JP, TW, SG, US", restrictions: ""
  },
{
    name: "VC Meow", nameZh: "ＶＣ喵", slug: "vcmeow", url: "https://xn--iqv29x7pk.com?code=5kRn",
    desc: "Decoded service. Features: IEPL lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "❤️❤️❤️█【ＶＣ喵】█　8元 / 48G / 月 起。始于 2017 ， 9 年海外运营，套餐只有月付！无需担心跑路☘️。在线客服团队支持☎️，小白友好。全 IEPL 专线覆盖 16 个国家 / 地区✈️，解锁 ChatGPT 等流媒体...", protocols: ["Shadowsocks"],
    tags: ["IEPL", "beginner-friendly", "streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥8", traffic: "48G/mo", notes: "IEPL专线覆盖" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "TomatoCloud", nameZh: "TomatoCloud", slug: "tomatocloud", url: "https://tomatocloud.com/account?action=register&code=caqB",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【TomatoCloud】 - 老牌鸡场、持续稳定境外运营多年,支援全球用户使用！节点保证可用ChatGPT、AI、流媒体解锁！全大陆中转、专线等线路，免费iOS下载ID，v2ray、ssr、trojan协议的120+高速节点，12小时客服...", protocols: ["Trojan", "Vmess"],
    tags: ["dedicated line", "relay", "streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "FASTLINK", nameZh: "FASTLINK", slug: "fastlink", url: "https://s.yam.com/99Dbw",
    desc: "Decoded service. Features: IPLC lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【FASTLINK】 -  老牌机场，实力验证，超级稳定，IPLC，Anycast ，中转技术应有尽有。不限设备数，解锁Netflix、Hulu、HBO、动画疯、TVB等流媒体。可定制独享专线...", protocols: ["Shadowsocks"],
    tags: ["IPLC", "relay", "streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Red Apricot", nameZh: "红杏", slug: "go", url: "https://go.ftq.cc/",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "❤️❤️❤️【红杏】❤️❤️❤️ 全IEPL专线！❤️ 全IEPL专线！！❤️ 全IEPL专线！！！❤️ 20Gbps不限速！❤️无倍率❤️无套路❤️流媒体ChatGPT❤️ 海外运营17年！『十七周年庆』优惠卷：hx17years，全场1...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [],
    speed: "20Gbps", nodes: "Global", restrictions: ""
  },
  {
    name: "52Cloud", nameZh: "52Cloud", slug: "52cloud", url: "https://v1.v52x.cc/#/register?code=EjHD",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✅️✅️✅️ 【52Cloud】本站专属优惠码: 52one 免费高速节点   6年老牌机场，50+地区国家，无倍率无套路，不限速不限设备，流量不限使用时间...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "50+ nodes", restrictions: ""
  },
  {
    name: "Big Brother Cloud", nameZh: "大哥云", slug: "dageyun", url: "https://dgy.dgywzc.com/#/register?code=4w7IK9Oi",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "【大哥云】✈️⏺⏺⏺,五年年稳定老牌机场...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "EEVPN", nameZh: "EEVPN", slug: "eevpn", url: "https://www.geteevpn.com/#/register?code=wdalKH4F",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "【EEVPN】★海外运营★支持ChatGPT★ 年付低至29.99元★全IEPL专线★最高5000Mbps速率★████████★知名老牌机场★海外实力团队★无倍率★无套路★████████▼▼▼点击下方注册▼▼▼████████...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [
      { name: "Yearly", monthly: "¥2.5", traffic: "N/A", notes: "年付低至 ¥29.99" }
    ],
    speed: "5000Mbps", nodes: "Global", restrictions: ""
  },
  {
    name: "CLOUDIE", nameZh: "CLOUDIE", slug: "cloudie", url: "https://home.cloudie.one",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "▼▼▼▼▼▼▼▼▼【CLOUDIE】-老牌营销专用线路。全专线入口，40+节点。稳定输出服务。原生IP，适合做外贸。稳定性高，可长期备用。████████████████████████...", protocols: ["Shadowsocks"],
    tags: ["dedicated line"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "40+ nodes", restrictions: ""
  },
  {
    name: "Surboard", nameZh: "Surboard 冲浪板", slug: "surboard", url: "https://ww1.surboard.net",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✅️✅️✅️✅️【Surboard-冲浪板】-5年老牌营销专用线路。全专线入口，30+节点。稳定输出服务。原生IP，适合做外贸。稳定性高，可长期备用。✅️⬇️✴️✅...", protocols: ["Shadowsocks"],
    tags: ["dedicated line"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "30+ nodes", restrictions: ""
  },
  {
    name: "Data Net", nameZh: "Data Net", slug: "datanet", url: "https://ww2.datanet.cc",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✅️✅️❇️❇️✅️✅️-【Data Net】@老牌专业外贸专线。原生IP全覆盖，IP干净，稀缺资源。全专线节点，稳定在线功能：【外贸营销专线】,【娱乐专线 | Netflix等流媒体原生支持】售后超好！</br>✅️✴️✅️✴️ ✅️✴️...", protocols: ["Shadowsocks"],
    tags: ["dedicated line"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Earthtor", nameZh: "Earthtor", slug: "earthtor", url: "https://ww2.earthtor.com",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✅️✅️✅️✅️✅️✅️✅️【Earthtor】全顶级中国入口，质量非常高的土豪线路,香港、台湾、泰国、马来、日本、欧美、迪拜、南非等中东国家原生ip线路,支持Tiktok.适合做海外营销的个人和团队。</br>...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "QuickLemon", nameZh: "快柠檬", slug: "quicklemon", url: "https://zept7bmddm.exnyv.cn/ep/s/ng677",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "【快柠檬】全客户端VPN，支持安卓/iOS/Windows/macOS，内置20+IEPL高速专线，下载安装试用2天，一键连接。低至19.8/月，可APP签到试用~...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥19.8", traffic: "N/A", notes: "20+IEPL专线" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "SpeedCAT", nameZh: "闪电猫 SpeedCAT", slug: "speedcat", url: "https://s.yam.com/JR87U",
    desc: "Decoded service. Features: IPLC lines. Direct register.",
    descZh: "【闪电猫-SPEEDCAT】闪电猫 SpeedCAT 是一家海外机场，重新定义科学上网，主打快速稳定，全专线IPLC，没有套路，承诺买多少给多少。...", protocols: ["Shadowsocks"],
    tags: ["IPLC"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Baby Cloud", nameZh: "宝贝云", slug: "baobeiyun", url: "http://101.133.239.232:8001/#/register?code=C5D297oX",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "✅️✅️✅️【宝贝云】618限时折扣活动进行中!! ★★稳定ChatGPT,Gemini,Claude★★ ，极致流畅带来丝滑享受，流媒体全解锁，新疆可用，60+节点遍布全球30+国家，免费苹果id，八年老厂，新加坡实力团队，可按量付费...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "60+ nodes", restrictions: "Xinjiang region supported."
  },
  {
    name: "CuteCloud", nameZh: "CuteCloud 最萌の云", slug: "cutecloud", url: "https://check.cutecloudone.de/#/register?code=qpEY",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "✅️【CuteCloud(最萌の云)】✅️老牌主力机场，可试用。顶级线路，解锁全面，不限制设备数。支持ChatGPT|NF|Disney+等流媒体和Ai服务，并提供相关的共享账户。速度与稳定性极佳，Youtube全天8K流畅。兼容性好，适配...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Topology Gate", nameZh: "拓扑门", slug: "tuopumen", url: "https://aooc.cc/",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "█████【强力推荐---拓扑门】不限流量★IEPL 专线★5元100G...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥5", traffic: "100G/mo", notes: "IEPL专线" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Xunfei Cloud", nameZh: "讯飞云", slug: "xunfeiyun", url: "https://www.xstart.cc",
    desc: "Decoded service. Features: IPLC lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "⚡⚡⚡【讯飞云】⚡⚡⚡ ✅顶级三网优化专线 ｜ ✅低延迟高并发 ｜ ✅8K秒开不卡顿 ｜ ✅小众国家多｜ | ✴️优惠码：四大皆空 ｜ ❤️全球流媒体 + AI 服务全解锁 ｜ ████████★专线定制----原生纯净IP❤️❤️IPLC...", protocols: ["Shadowsocks"],
    tags: ["IPLC", "BGP", "streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "PumpkinCloud", nameZh: "Pumpkin Cloud", slug: "pumpkincloud", url: "https://pumpkin369.cc",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "█❤️全新协议，更稳更快❤️█新用户免费用7天❤️支持GPT/Gemini，月卡3.6元/半年卡19.8元/29.8永久套餐██【★TK/AI/游戏专线定制--IP纯净易推流不封号★】《全球100+节点》人工客服/售后无忧❤️特惠码：新谷歌...", protocols: ["Shadowsocks"],
    tags: ["dedicated line"], payment: "Alipay",
    pricing: [
      { name: "Monthly", monthly: "¥3.6", traffic: "N/A", notes: "全新协议" },
      { name: "6-Month", monthly: "¥3.3", traffic: "N/A", notes: "¥19.8/6mo" },
      { name: "Lifetime", monthly: "¥29.8", traffic: "N/A", notes: "One-time payment" }
    ],
    speed: "Unlimited", nodes: "100+ nodes", restrictions: ""
  },
  {
    name: "xinAMD", nameZh: "xinAMD", slug: "xinamd", url: "https://aooc.cc/",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✴️✴️✴️✴️✴️✴️【xinAMD】✅️1元永久✅️3元/T✴️不限流量✴️免费试用✴️✴️✴️✴️✴️✴️✴️✴️✴️✴️...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [
      { name: "Lifetime", monthly: "¥1", traffic: "Unlimited", notes: "永久不限流量" },
      { name: "PAYG", monthly: "¥3", traffic: "1TB", notes: "3元/T" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "CokeCloud", nameZh: "CokeCloud 可乐云", slug: "cokecloud", url: "http://8.134.219.80/index.html",
    desc: "Decoded service. Features: IPLC lines. Direct register.",
    descZh: "【CokeCloud(可乐云)】主打速度快，节点稳老牌机场，可定制原生千兆独享节点，亦有9.9元超值400G流量不限速，youtube全天4K&ChatGPT，IPLC专线线路,专属客户端。▼▼点击下方注册购买,无需验证...", protocols: ["Shadowsocks"],
    tags: ["IPLC"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥9.9", traffic: "400G/mo", notes: "IPLC专线" }
    ],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Miaona", nameZh: "Miaona!", slug: "miaona", url: "https://miaona.app",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "❤️❤️❤️【Miaona!】❤️❤️❤️全IEPL专线机场 ！三网优化 高速稳定、流量不过墙！ 包含部分冷门地区节点...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Magic Ring .NET", nameZh: "魔戒 .NET", slug: "mojie", url: "https://xn--zuup71g88ae4i.com/?code=JAMKa9G8",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✈️【魔戒.NET】✈️    稳定运营5年 首家纯流量计费模式机场 无倍率 无套路  ☎️人工客服 1️⃣元即可体验...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [
      { name: "Trial", monthly: "¥1", traffic: "N/A", notes: "1元体验" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Autumn Forest Cloud", nameZh: "秋林云", slug: "qiulinyun", url: "https://www.qiulinyun.online/register?code=SHtzdIZc",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【官方推荐】▼▼秋林云▼▼老牌机场不跑路， 套餐低至5元/月！主打稳定高速实惠，业界良心，全lvess+hy2节点，不限制设备数，免费提供苹果ID，解锁ChatGPT及各种流媒体,有客户端一键链接！...", protocols: ["Hysteria"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥5", traffic: "N/A", notes: "低至5元/月" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "SoonVPN", nameZh: "SoonVPN 瞬连", slug: "soonvpn", url: "https://soontg.kbr1g.com/",
    desc: "Decoded service. Features: IPLC lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【SoonVPN（瞬连）】最低每月1.49美元（人民币10元），全IPLC精品线路、支持全球使用、自主开发客户端、主打各地区原生IP或原生解锁，支持各流媒体。...", protocols: ["Shadowsocks"],
    tags: ["IPLC", "streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥10", traffic: "N/A", notes: "最低每季度 $1.49 (约¥10)" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "SnailLink", nameZh: "SnailLink 蜗牛云", slug: "snaillink", url: "https://8.217.75.79:1000/register?code=f51sW4Ms",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "【SnailLink（蜗牛云）】老牌机场分站，全IEPL专线｜最低10元/月｜注册送2小时5G试用｜免邮箱验证｜新开业8折优惠码:off20fornew...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥10", traffic: "N/A", notes: "全IEPL专线" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Super Quality Airport", nameZh: "超优质机场", slug: "chaoyouzhi", url: "https://s.yam.com/F3nI7",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【超优质机场】全自研高速轻量协议，晚高峰高速稳定，不限速，不限设备数，支持个人及团队使用！解锁Netflix, Disney+, Abema等所有流媒体，支持ChatGPT, Claude, Meta AI等所有AI。实时客服回复，有问题可...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "AirRocket", nameZh: "Air rocket 火箭", slug: "airrocket", url: "https://airrocketgear.top/?path=register&code=coKJ6Hfs",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "✔️❤️推荐❤️✔️【Air rocket火箭3年老机场】☁️❇️（关闭代理打开页面注册）❤️✔️包月价格9.9✔️注册可试用。全中转4k秒开，GPT等全解锁,最高5000Mbps速率可用,价格亲民优惠码8888年付8折...", protocols: ["Shadowsocks"],
    tags: ["relay", "streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥9.9", traffic: "N/A", notes: "全中转线路" }
    ],
    speed: "5000Mbps", nodes: "Global", restrictions: ""
  },
  {
    name: "Pangolin", nameZh: "穿山甲", slug: "chuanshanjia", url: "https://aff01.csj2025.com/#/register?code=kZ6wwCEb",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "✴️✴️✴️【穿山甲】不限时套餐｜不限设备...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Urgent Dog", nameZh: "狗急加速", slug: "gouji", url: "https://main.goj2025.com/#/register?code=LCIyBKR0",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "⭐⭐⭐⭐【狗急加速】不限流 ❤️不限速 ❤️不限设备 ❤️新用户可流量计费 全平台支持,高峰期一样稳定...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "ParkSpeed", nameZh: "帕克加速.com", slug: "parkspeed", url: "https://xn--74q55am5wco4c.com/",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "⏩❇️老司机力荐❇️⏪【帕克加速.com】❤️低至7元/月❤️自有客户端❤️5年老牌机场❤️原生IP...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥7", traffic: "N/A", notes: "IEPL专线" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Skylumo", nameZh: "Skylumo", slug: "skylumo", url: "https://skylumo.cc/",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "✅认证优选✅最低9.9/年！送谷歌AI PRO年费！人手必备的大流量套餐。99.99元，99999G不限时，用完即止（原价299），7年大厂！<p>██【解锁流媒体】❤️80+地区，优惠券：pFkH4JED❤️【全匿名机场丨无验证】...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Yearly", monthly: "¥0.8", traffic: "N/A", notes: "¥9.9/yr" },
      { name: "Big Pack", monthly: "¥99.99", traffic: "99999G", notes: "不限时" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Cyber Express", nameZh: "网际快车", slug: "wangjikuaiche", url: "https://su.xn--66tw07h.com/?c=FEUFBG",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "⭐网际快车⭐多线路确保不断流，流量不过期，不限设备数...", protocols: ["Shadowsocks"],
    tags: [], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥6.8", traffic: "N/A", notes: "住宅IP" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Wormhole", nameZh: "虫洞加速", slug: "chongdong", url: "https://chongdong02.app/#/register?code=ukIYmSCD",
    desc: "Decoded service. Features: IEPL lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "✅【虫洞加速】全BGP企业级IEPL专线 · 极速稳定 · 全平台秒开4K · ChatGPT / 奈飞 / Disney+ 全解锁 · 月付19元 200G· 年付199元 · 无倍率...", protocols: ["Shadowsocks"],
    tags: ["IEPL", "BGP", "streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Monthly", monthly: "¥19", traffic: "200G/mo", notes: "BGP企业级专线" },
      { name: "Yearly", monthly: "¥16.6", traffic: "200G/mo", notes: "¥199/yr" }
    ],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Five Trees Cloud", nameZh: "五树云机场", slug: "wushuyun", url: "https://s.yam.com/XHvA3",
    desc: "Decoded service. Features: IPLC lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【五树云机场】██████ 全专线机场震撼来袭! ✅不限速✅不限设备✅全IPLC专线 + 50节点 + 8K流畅播放，ChatGPT + Netflix + Disney+等全解锁，别说你还在用免费节点！</br>███这是机场中的战斗机✈...", protocols: ["Shadowsocks"],
    tags: ["IPLC", "streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Stable Link Cloud", nameZh: "稳联云", slug: "wenlianyun", url: "https://pub01.sp0608.xyz/#/register?code=o8WMGHeO",
    desc: "Decoded service. Features: IEPL lines, unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【稳联云】 - 老牌机场，海外运营，主打稳定高速实惠。解锁Netflix等众多流媒体; 支持ChatGPT、Gemini、 Grok等等; 9.9元享受极速IEPL专线; 节点多协议支持，大量Hysteria2节点; 适配v2rayN/NG...", protocols: ["Hysteria", "Vmess"],
    tags: ["IEPL", "streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥9.9", traffic: "N/A", notes: "极速IEPL专线" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "Window of the World.com", nameZh: "世界之窗.com", slug: "shijiezhichuang", url: "https://s100.987345.xyz",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【世界之窗.com】50+地区国家，无倍率无套路，原生IP住宅IP，ChatGPT + Netflix + Disney+等流媒体全解锁，不限速不限设备，流量不限使用时间...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "50+ nodes", restrictions: ""
  },
  {
    name: "P1Cloud", nameZh: "P1云", slug: "p1cloud", url: "https://bieshawo321.top?path=register&code=X3vhUu56",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "❇️P1云❇️真·多线中转加速❇️多协议加持❇️晚高峰4K完美不卡顿❇️无倍率套路❇️可试用❇️免梯登录❇️...", protocols: ["Shadowsocks"],
    tags: ["relay"], payment: "Alipay",
    pricing: [],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Coco Cloud", nameZh: "可可云", slug: "kekeyun", url: "https://coweb.jjjxgc.com/#/register?code=4j4DuMD8",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "✅【可可云】｜全 IEPL 专线机场 · 无倍率...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: ""
  },
  {
    name: "DengtaCloud", nameZh: "灯塔Cloud", slug: "dengtacloud", url: "https://dengta.feishu-open.com/register?code=NZSr1mMG",
    desc: "Decoded service. Features: IEPL lines. Direct register.",
    descZh: "✅ [官方推荐] 【灯塔Cloud】：三线IEPL专线 4K 极速✅晚高峰不限速 | 4K 极速秒开 | 稳定首选...", protocols: ["Shadowsocks"],
    tags: ["IEPL"], payment: "Alipay",
    pricing: [],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Whisper Cloud", nameZh: "轻语机场", slug: "qingyuyun", url: "https://www.lajiaoyun.xyz/#/register?code=0t21Stac",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "【轻语机场】 新用户注册赠送2小时5G流量,顶级线路海外中转,晚高峰不限速 | 4K 极速秒开 | 稳定首选 ━ 晚高峰不卡顿,解锁 ChatGPT 等流媒体,赠送emby...", protocols: ["Shadowsocks"],
    tags: ["relay", "streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "4K/8K streaming support", nodes: "Global", restrictions: ""
  },
  {
    name: "Landscape Cloud", nameZh: "山水云", slug: "shanshuiyun", url: "https://ss2.byvvcsx.com/#/register?code=MX6ZSIhX",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "✅✅✅【山水云】优惠码:2026888 ★★★稳定ChatGPT,Netflix,★★★ ，极致流畅带来丝滑享受，流媒体全解锁，新疆不可用，70+节点遍布全球25+国家，免费苹果id，3年老厂，海外实力团队...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "70+ nodes", restrictions: "Xinjiang region not supported."
  },
  {
    name: "Second-by-Second Cloud", nameZh: "秒秒云", slug: "miaomiaoyun", url: "https://dl2.mmy8.com/#/register?code=natKgnpe",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "????????????【秒秒云】8折优惠码：2026888 ★★★ 稳定ChatGPT，Netflix，★★★，极致流畅带来丝滑享受，流媒体全解锁，新疆不可用，免费提供苹果id，老机场用的更放心...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [],
    speed: "Unlimited", nodes: "Global", restrictions: "Xinjiang region not supported."
  },
  {
    name: "White Rabbit Cloud", nameZh: "白兔云", slug: "baituyun", url: "https://nb.baitufacai.com/#/register?code=5k3MFXN6",
    desc: "Decoded service. Features: unlocking Netflix/Disney+/ChatGPT. Direct register.",
    descZh: "⚡⚡⚡【白兔机场】⚡⚡⚡支持四端客户端⚡⚡⚡全球100+节点⚡⚡⚡流媒体全解锁 ⚡⚡⚡☎️24小时人工客服⚡⚡⚡★不限速★无套路★⚡⚡⚡████████████████...", protocols: ["Shadowsocks"],
    tags: ["streaming unlock"], payment: "Alipay",
    pricing: [
      { name: "Light", monthly: "¥7", traffic: "100G/mo", notes: "三网优化" },
      { name: "Basic", monthly: "¥10", traffic: "200G/mo", notes: "三网优化" },
      { name: "Standard", monthly: "¥20", traffic: "500G/mo", notes: "三网优化" },
      { name: "Unlimited", monthly: "¥100", traffic: "Unlimited", notes: "不限量" }
    ],
    speed: "Unlimited", nodes: "100+ nodes", restrictions: ""
  },
  {
    name: "Sea-Link Cloud", nameZh: "海连云机场", slug: "hailianyun", url: "https://hi.xn--mes358a4ues53b.com/#/register?code=Poc7Zmp4",
    desc: "Decoded service. Features: stable connections. Direct register.",
    descZh: "⚡⚡⚡【官方推荐老牌机场】⚡⚡⚡稳定运营8年⚡⚡⚡三网国际专线⚡⚡⚡无日志记录⚡⚡⚡提供在线客服⚡⚡⚡冷门国家众多⚡⚡⚡████████████████...", protocols: ["Shadowsocks"],
    tags: ["dedicated line"], payment: "Alipay",
    pricing: [
      { name: "Entry", monthly: "¥5", traffic: "100G/mo", notes: "专线数据" },
      { name: "Big Pack", monthly: "¥35", traffic: "10000G", notes: "10TB流量" }
    ],
    speed: "Unlimited", nodes: "Global", restrictions: ""
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
