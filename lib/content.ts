/**
 * Konten terpusat situs portofolio.
 *
 * PLACEHOLDER: Seluruh data pribadi, metrik, studi kasus, pengalaman,
 * sertifikasi, testimoni, dan kontak di bawah ini adalah CONTOH FIKTIF
 * yang dibawa dari desain sumber (design/desktop.html).
 * Ganti dengan data asli Anda sebelum situs dipakai melamar kerja.
 */

// PLACEHOLDER: ganti dengan data asli Anda
export const profile = {
  name: "Aditya Pratama",
  nameWithTitle: "Aditya Pratama, S.Kom",
  role: "Senior Growth & Performance Specialist",
  shortRole: "Growth Architect",
  monogram: "AP",
  id: "AP-MKT-88402",
  location: "Jakarta, ID (WIB/UTC+7)",
  availability: "Q3 / Q4 2024",
  headlinePrefix: "Mengubah traffic menjadi konversi lewat",
  subheadline:
    "Membantu brand berskala berkembang melalui eksekusi data-driven marketing, efisiensi budget iklan tanpa kompromi, dan funnel konversi terukur secara analitis.",
  cvPath: "/cv-placeholder.txt", // PLACEHOLDER: ganti dengan file PDF CV asli di folder public/
} as const;

// PLACEHOLDER: ganti dengan data asli Anda
export const heroDossier = [
  { label: "SERTIFIKASI UTAMA", value: "Certified Google & Meta Marketer" },
  { label: "METODOLOGI EKSEKUSI", value: "Berdasarkan Data, ROI & CAC Terukur" },
  { label: "STATUS KONTRAK", value: "Terbuka untuk Full-time & Konsultasi" },
] as const;

// PLACEHOLDER: ganti dengan data asli Anda
export const keyMetrics = [
  {
    index: "01",
    label: "PENGALAMAN INDUSTRI",
    value: "4+",
    unit: "THN",
    tag: "METRIC.EXP: VERIFIED",
    tone: "light" as const,
    cellClass: "border-r-2 border-b-2 lg:border-b-0",
  },
  {
    index: "02",
    label: "CAMPAIGN DIKELOLA",
    value: "30+",
    unit: "PROJ",
    tag: "STATUS.ACTIVE_TOTAL",
    tone: "light" as const,
    cellClass: "border-b-2 lg:border-b-0 lg:border-r-2",
  },
  {
    index: "03",
    label: "RATA-RATA ROAS PAID ADS",
    value: "4.0x",
    unit: "AVG",
    tag: "META & GOOGLE BLENDED",
    tone: "muted" as const,
    cellClass: "border-r-2",
  },
  {
    index: "04",
    label: "ORGANIC TRAFFIC",
    value: "+120%",
    unit: "",
    tag: "AGGREGATE SEARCH UPLIFT",
    tone: "dark" as const,
    cellClass: "",
  },
] as const;

export const about = {
  eyebrow: "[01 // FILOSOFI OPERASIONAL]",
  title: "Tentang Saya",
  caption: "Efisiensi alokasi modal dan akurasi atribusi data.",
  philosophy:
    "Every rupiah spent is an investment evaluated by CAC to LTV ratio.",
  lead: {
    prefix:
      "Praktisi pemasaran digital berorientasi hasil dengan rekam jejak mengelola end-to-end campaign performance dan organik. Memadukan analisis analitik mendalam dengan strategi kreatif untuk menurunkan",
    cac: "Customer Acquisition Cost (CAC)",
    middle: "dan memaksimalkan",
    ltv: "Customer Lifetime Value (LTV)",
    suffix: ".",
  },
  philosophyBody:
    "Berpengalaman dalam orkestrasi lintas platform (Meta Ads, Google Search & Display, TikTok Ads) serta optimalisasi arsitektur situs untuk SEO teknis. Setiap rupiah alokasi media diperlakukan sebagai investasi terukur dengan pengujian hipotesis berkala.",
  pillars: [
    {
      index: "PILAR // 01",
      title: "Data-driven Decision",
      description:
        "Pengambilan keputusan berbasis atribusi akurat dan data riil.",
      tone: "muted" as const,
    },
    {
      index: "PILAR // 02",
      title: "Continuous A/B Testing",
      description:
        "Iterasi terstruktur pada creative copy, hook visual, dan UX landing page.",
      tone: "light" as const,
    },
    {
      index: "PILAR // 03",
      title: "Full-funnel Optimization",
      description:
        "Harmonisasi fase awareness (TOFU) hingga retensi pasca-pembelian.",
      tone: "muted" as const,
    },
  ],
} as const;

export const skills = [
  {
    id: "SKILL.01",
    icon: "search",
    name: "SEO (Search Engine Optimization)",
    description:
      "Audit teknis arsitektur web, keyword research intents, on-page optimization, dan link building terstruktur.",
    tags: "Ahrefs, SEMrush, Technical Audit",
  },
  {
    id: "SKILL.02",
    icon: "ads_click",
    name: "SEM / Google Ads",
    description:
      "Pengelolaan Search, Display, dan Performance Max dengan kontrol target CPA, tROAS, serta negative keywords sculpting.",
    tags: "PMax, Search Ads, Target CPA",
  },
  {
    id: "SKILL.03",
    icon: "campaign",
    name: "Meta Ads",
    description:
      "Strategi full-funnel (TOFU, MOFU, BOFU), catalog dynamic ads, dan optimalisasi Audience Lookalike di Instagram & Facebook.",
    tags: "Advantage+, CBO, Retargeting",
  },
  {
    id: "SKILL.04",
    icon: "share",
    name: "Social Media Marketing",
    description:
      "Perencanaan pilar konten strategis, community growth, dan engagement rate terukur untuk memperkuat brand equity.",
    tags: "Organic Reach, Content Strategy",
  },
  {
    id: "SKILL.05",
    icon: "article",
    name: "Content Marketing",
    description:
      "Pembuatan copy persuasif berorientasi aksi, artikel SEO bernilai tinggi, dan lead magnet pendukung funnel konversi.",
    tags: "Copywriting, Lead Magnets",
  },
  {
    id: "SKILL.06",
    icon: "query_stats",
    name: "GA4 & GTM Tracking",
    description:
      "Setup custom server-side & client-side events, conversion tracking, dan analisis dashboard data studio analitik mendalam.",
    tags: "Tag Manager, GA4 Custom Events",
  },
  {
    id: "SKILL.07",
    icon: "mail",
    name: "Email Marketing",
    description:
      "Automasi welcome sequence, segmentasi subscriber berbasis behavior, dan kampanye newsletter retensi berulang.",
    tags: "Klaviyo, Lifecycle Retention",
  },
  {
    id: "SKILL.08",
    icon: "smart_toy",
    name: "Marketing Automation",
    description:
      "Integrasi CRM, nurture workflow otomatis, dan scoring lead untuk mempercepat sales cycle produk berkinerja tinggi.",
    tags: "HubSpot, Zapier, Webhooks",
  },
] as const;

export type CaseCategory = "paid-ads" | "seo-organic" | "analytics" | "cro-funnel";

export interface CaseStudy {
  id: string;
  code: string;
  client: string;
  period: string;
  title: string;
  context: string;
  categories: CaseCategory[];
  metrics: { label: string; value: string; note: string; highlight?: boolean }[];
  actions: string[];
}

// PLACEHOLDER: ganti metrik & studi kasus dengan data asli Anda
export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    code: "CASE // 01",
    client: "D2C E-COMMERCE FASHION",
    period: "PERIODE: Q2 - Q4 2023 [AUDITED]",
    title: "E-commerce Fashion: Skalabilitas Revenue & Efisiensi Iklan",
    context:
      "Brand fashion lokal D2C yang ingin meningkatkan omzet kuartalan dengan efisiensi alokasi media.",
    categories: ["paid-ads"],
    metrics: [
      { label: "HASIL ROAS", value: "ROAS 4.5x", note: "Baseline sebelum optimasi: 2.1x" },
      {
        label: "PERTUMBUHAN PENDAPATAN",
        value: "+65%",
        note: "Performa kuartal berturut-turut",
      },
      {
        label: "EFISIENSI BIAYA AKUISISI",
        value: "-28% CPA",
        note: "Biaya konversi tertekan signifikan",
        highlight: true,
      },
    ],
    actions: [
      "Restrukturisasi kampanye Meta Ads dengan dynamic catalog ads tersegmen berdasarkan kategori minat produk.",
      "Pengujian terstruktur pada 15+ variasi creative ad (UGC hooks, clean product display, dan customer review carousel).",
      "Optimasi alur checkout abandonment via retargeting terpersonalisasi melalui integrasi email sequence & SMS automation.",
    ],
  },
  {
    id: "case-02",
    code: "CASE // 02",
    client: "B2B ENTERPRISE SAAS",
    period: "PERIODE: Q1 - Q3 2023 [AUDITED]",
    title: "SaaS B2B: Akuisisi Qualified Leads Melalui Paid Search & Inbound",
    context:
      "Startup teknologi B2B membutuhkan peningkatan supply demo booking dari target pengambil keputusan level C-Level.",
    categories: ["cro-funnel", "analytics"],
    metrics: [
      {
        label: "AKUISISI DEMO BOOKING",
        value: "+85% Lead",
        note: "Peningkatan volume demo terverifikasi",
      },
      {
        label: "RASIO KONVERSI LANDING PAGE",
        value: "3.2% → 7.4%",
        note: "Optimasi UX & lead form flow",
      },
      {
        label: "KUALITAS PROSPEK (SQL)",
        value: "+40% Score",
        note: "Peningkatan Sales Qualified Leads",
        highlight: true,
      },
    ],
    actions: [
      "Penargetan kata kunci high-intent di Google Search dengan negative keyword sculpting presisi untuk memfilter traffic non-B2B.",
      "Pembuatan landing page interaktif dengan tracking Google Tag Manager presisi untuk mengukur micro-interaction sebelum booking.",
      "Implementasi LinkedIn Ads retargeting pada pengambil keputusan tingkat manajerial dan C-Suite.",
    ],
  },
  {
    id: "case-03",
    code: "CASE // 03",
    client: "F&B RETAIL MULTI-OUTLET",
    period: "DURASI: 6 BULAN AUDIT [KAMPANYE LOKAL]",
    title: "F&B Lokal: Dominasi Visibilitas Organik & Local Search",
    context:
      "Jaringan kedai kopi modern dengan 8 outlet yang membutuhkan peningkatan foot-traffic dan pesanan delivery via optimasi lokal.",
    categories: ["seo-organic"],
    metrics: [
      {
        label: "PERTUMBUHAN ORGANIK",
        value: "+120% Traffic",
        note: "Kenaikan impresi & klik search",
      },
      {
        label: "INTERAKSI GOOGLE MAPS",
        value: "+45% Aksi",
        note: "Panggilan, rute jalan, & klik web",
      },
      {
        label: "AUDIENCE SOCIAL FOLLOWING",
        value: "+35,000",
        note: "Pertumbuhan follower aktif organik",
        highlight: true,
      },
    ],
    actions: [
      "Optimasi Google Business Profile untuk 8 lokasi outlet dengan review management otomatis dan penyesuaian geotag gambar.",
      "Produksi konten video lokal di TikTok dan Instagram Reels berbasis geolokasi mikro sesuai target demografi outlet.",
      "Strategi artikel panduan kuliner lokal bernilai SEO tinggi yang sukses menembus Peringkat 1 Google.",
    ],
  },
];

// PLACEHOLDER: ganti dengan data asli Anda
export const experience = [
  {
    role: "Senior Digital Marketer",
    company: "Growth & Performance Agency",
    period: "2022 - SEKARANG",
    current: true,
    description:
      "Memimpin tim ad ops, mengelola budget media bulanan berskala puluhan hingga ratusan juta, serta melaporkan metrik performa langsung ke stakeholder tingkat C-Level.",
  },
  {
    role: "Performance Marketing Specialist",
    company: "D2C Fast-Growing E-Commerce",
    period: "2020 - 2022",
    current: false,
    description:
      "Mengeksekusi campaign harian di Meta dan Google, optimasi funnel konversi landing page, serta pengujian A/B kreatifitas visual berkala untuk menekan CAC.",
  },
  {
    role: "SEO & Content Associate",
    company: "Digital Media Network",
    period: "2019 - 2020",
    current: false,
    description:
      "Riset keyword intent, penulisan artikel berperingkat tinggi di mesin pencari Google, dan audit on-page arsitektur web secara berkala.",
  },
] as const;

// PLACEHOLDER: ganti ID kredensial dengan data asli Anda
export const certifications = [
  {
    code: "[CERT-01 // GOOGLE ADS]",
    name: "Google Ads Search & Display Certified",
    detail: "ID: GOOG-ADS-89421",
  },
  {
    code: "[CERT-02 // ANALYTICS]",
    name: "Google Analytics 4 (GA4) Certification",
    detail: "ID: GA4-CORP-44021",
  },
  {
    code: "[CERT-03 // META BLUEPRINT]",
    name: "Meta Certified Digital Marketing Associate",
    detail: "Meta Blueprint Credential Verified",
  },
  {
    code: "[CERT-04 // INBOUND & CRM]",
    name: "HubSpot Inbound & Email Automation",
    detail: "HubSpot Academy Credential",
  },
] as const;

export interface Article {
  id: string;
  tag: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  metric: string;
  metricHighlight: boolean;
  categories: CaseCategory[];
  href: string;
}

// PLACEHOLDER: ganti dengan artikel/tulisan asli Anda (atau hapus section jika belum ada)
export const articles: Article[] = [
  {
    id: "article-01",
    tag: "[ESSAY // ATTRIBUTION]",
    readTime: "6 MIN READ",
    date: "FEB 2024",
    title:
      "Membangun Server-Side GTM & CAPI: Mengatasi Atribusi Buta Pasca iOS 14.5",
    excerpt:
      "Panduan implementasi pelacakan first-party untuk memulihkan akurasi sinyal konversi Meta Ads hingga 92% dan menekan blended CAC.",
    metric: "+24% SIGNAL ACCURACY",
    metricHighlight: true,
    categories: ["analytics"],
    href: "#", // PLACEHOLDER: ganti dengan URL artikel asli
  },
  {
    id: "article-02",
    tag: "[PLAYBOOK // PAID ADS]",
    readTime: "8 MIN READ",
    date: "NOV 2023",
    title:
      "Dekonstruksi Creative Fatigue: Framework Modular DCT untuk Skalasi Iklan D2C",
    excerpt:
      "Metodologi rotasi 3 visual hooks, 2 core copy angles, dan 2 CTA untuk menjaga ROAS stabil di atas 4.0x pada skala budget 9 digit.",
    metric: "TESTED ON 100+ ADS",
    metricHighlight: false,
    categories: ["paid-ads"],
    href: "#", // PLACEHOLDER: ganti dengan URL artikel asli
  },
  {
    id: "article-03",
    tag: "[CASE // FUNNEL CRO]",
    readTime: "5 MIN READ",
    date: "AGU 2023",
    title:
      "Anatomi Landing Page B2B High-Converting: Mengurangi Friction Form Tanpa Mengorbankan Kualitas MQL",
    excerpt:
      "Eksperimen A/B testing multi-step lead capture yang meningkatkan conversion rate form dari 3.2% ke 7.4% pada audiens enterprise.",
    metric: "+131% CVR UPLIFT",
    metricHighlight: true,
    categories: ["cro-funnel"],
    href: "#", // PLACEHOLDER: ganti dengan URL artikel asli
  },
];

export const articleFilters: { label: string; value: CaseCategory | "all" }[] = [
  { label: "SEMUA [ALL]", value: "all" },
  { label: "ANALYTICS", value: "analytics" },
  { label: "PAID ADS", value: "paid-ads" },
  { label: "CRO & FUNNEL", value: "cro-funnel" },
  { label: "SEO & ORGANIC", value: "seo-organic" },
];

export const caseFilters: { label: string; value: CaseCategory | "all" }[] = [
  { label: "SEMUA [ALL]", value: "all" },
  { label: "PAID ADS", value: "paid-ads" },
  { label: "SEO & ORGANIC", value: "seo-organic" },
  { label: "ANALYTICS", value: "analytics" },
  { label: "CRO & FUNNEL", value: "cro-funnel" },
];

// PLACEHOLDER: ganti dengan data asli Anda
export const testimonials = [
  {
    id: "RECORD.END-01",
    quote:
      "Kemampuan analisis data dan eksekusi campaign Aditya sangat rapi. Selalu mampu menerjemahkan target bisnis menjadi rencana aksi marketing yang terukur dan efisien secara alokasi budget.",
    name: "Rian Hidayat",
    role: "VP of Growth Marketing - PT Inovasi Niaga Digital",
  },
  {
    id: "RECORD.END-02",
    quote:
      "Salah satu marketer terbaik dalam menjaga efisiensi ROAS tanpa mengorbankan volume penjualan. Sangat kolaboratif, transparan dalam reporting mingguan, dan cepat dalam evaluasi creative fatigue.",
    name: "Sarah Kusuma",
    role: "Managing Director & Co-Founder - Retail Brand Group",
  },
] as const;

// PLACEHOLDER: ganti dengan data kontak asli Anda
export const contact = {
  eyebrow: "INISIASI KOLABORASI // TAHUN KERJA 2024",
  title: "Mari bicarakan kebutuhan marketing & target pertumbuhan bisnis Anda.",
  subtitle:
    "Terbuka untuk diskusi mengenai peran full-time, konsultasi pertumbuhan, atau proyek skala strategis. Respons dijamin dalam 1x24 jam kerja.",
  email: "aditya.marketer@outlook.com",
  linkedin: "https://linkedin.com/in/adityapratama", // PLACEHOLDER: ganti dengan URL profil asli
  linkedinLabel: "linkedin.com/in/adityapratama",
  whatsapp: "https://wa.me/6281200000000", // PLACEHOLDER: ganti dengan nomor asli
  whatsappLabel: "+62 812-0000-0000",
  cvNote: "LENGKAP // REVISI 2024",
} as const;

export const navLinks = [
  { index: "01", label: "TENTANG", href: "#tentang" },
  { index: "02", label: "KEAHLIAN", href: "#keahlian" },
  { index: "03", label: "STUDI KASUS", href: "#studi-kasus" },
  { index: "04", label: "RIWAYAT", href: "#pengalaman" },
  { index: "05", label: "PUBLIKASI", href: "#artikel" },
  { index: "06", label: "KONTAK", href: "#kontak" },
] as const;
