/**
 * Konten terpusat situs portofolio — data asli Rahmad Akbar.
 * Sumber: CV Rahmad Akbar (Digital Marketing) & profil LinkedIn.
 */

export const profile = {
  name: "Rahmad Akbar",
  role: "Digital Marketer & Content Creator",
  shortRole: "Digital Marketer",
  monogram: "RA",
  location: "Jember, Jawa Timur",
  availability: "Terbuka untuk magang & posisi entry-level",
  subheadline:
    "Mahasiswa S1 Ilmu Al-Qur'an dan Tafsir yang merancang kalender konten, menulis copywriting, mengelola media sosial, dan mengedit visual/video (Canva, CapCut) — sekaligus membangun landing page dan kampanye digital lewat web development (Next.js).",
  cvPath: "/CV_Rahmad_Akbar_Digital_Marketing.pdf",
} as const;

export const heroDossier = [
  { label: "FOKUS UTAMA", value: "Content & Social Media" },
  { label: "KEAHLIAN UNGGULAN", value: "Kalender Konten · Copywriting · Canva/CapCut" },
  { label: "STATUS", value: "Terbuka untuk magang & entry-level" },
] as const;

export const keyMetrics = [
  {
    index: "01",
    label: "ENGAGEMENT KONTEN ORGANIK",
    value: "+30%",
    unit: "",
    tag: "IG · TIKTOK · YOUTUBE (PERSONAL)",
    tone: "light" as const,
    cellClass: "border-r-2 border-b-2 lg:border-b-0",
  },
  {
    index: "02",
    label: "PESERTA SEMINAR NASIONAL",
    value: "200+",
    unit: "ORANG",
    tag: "PROMOSI & PENDAFTARAN 2024",
    tone: "light" as const,
    cellClass: "border-b-2 lg:border-b-0 lg:border-r-2",
  },
  {
    index: "03",
    label: "PROGRAM KERJA DI-BRANDING",
    value: "12",
    unit: "PROKER",
    tag: "DEMA MA'HAD ALY 2025-2026",
    tone: "muted" as const,
    cellClass: "border-r-2",
  },
  {
    index: "04",
    label: "PRODUK WEB LIVE",
    value: "10+",
    unit: "PRODUK",
    tag: "NEXT.JS · VERCEL · GITHUB",
    tone: "dark" as const,
    cellClass: "",
  },
] as const;

export const about = {
  eyebrow: "[01 // TENTANG SAYA]",
  title: "Tentang Saya",
  caption: "Mahasiswa, praktisi konten, dan builder.",
  philosophy:
    "Hafalan 30 juz mengajarkan satu hal: konsistensi mengalahkan intensitas.",
  lead: {
    prefix:
      "Mahasiswa S1 Ilmu Al-Qur'an dan Tafsir (Ma'had Aly Nurussalam Mubarok, Jember) dengan pengalaman praktis digital marketing: merancang kalender konten, menulis",
    highlightA: "copywriting",
    middle: ", mengelola media sosial, dan mengedit visual/video. Juga menguasai web development untuk mendukung",
    highlightB: "landing page & kampanye digital",
    suffix: ".",
  },
  philosophyBody:
    "Terlatih analisis literatur, riset berbasis referensi, dan penulisan terstruktur — bekal yang saya bawa ke copywriting, skrip konten, dan dokumentasi. Mencari posisi entry-level Digital Marketing / Content Creator. Sebagai Hafidz Al-Qur'an 30 juz (2019), saya terbiasa dengan disiplin, konsistensi, dan target jangka panjang: kualitas eksekusi dibangun dari rutinitas yang dijaga setiap hari, bukan dari sprint sesaat.",
  pillars: [
    {
      index: "PILAR // 01",
      title: "Konsistensi & Disiplin",
      description:
        "Hafidz Al-Qur'an 30 juz (2019); membiasakan murajaah dan eksekusi rutin yang berkelanjutan.",
      tone: "muted" as const,
    },
    {
      index: "PILAR // 02",
      title: "Konten yang Terencana",
      description:
        "Kalender konten mingguan, copywriting sesuai audiens, dan analisis performa postingan.",
      tone: "light" as const,
    },
    {
      index: "PILAR // 03",
      title: "Eksekusi End-to-End",
      description:
        "Dari ide, desain visual, dan edit video, sampai landing page yang di-deploy ke Vercel.",
      tone: "muted" as const,
    },
  ],
} as const;

export const skills = [
  {
    id: "SKILL.01",
    icon: "calendar_month",
    name: "Content Planning & Kalender Konten",
    description:
      "Perencanaan kalender konten mingguan dari ide sampai publikasi, dengan brief dan alur kerja yang jelas.",
    tags: "Kalender Konten, Brief, Alur Produksi",
  },
  {
    id: "SKILL.02",
    icon: "edit_note",
    name: "Copywriting & Content Writing",
    description:
      "Menulis caption, skrip konten, dan artikel sesuai target audiens — dari hook sampai call to action.",
    tags: "Caption, Skrip, Artikel",
  },
  {
    id: "SKILL.03",
    icon: "groups",
    name: "Social Media & Community",
    description:
      "Mengelola Instagram, TikTok, dan YouTube: publikasi, branding, dan komunikasi dengan audiens.",
    tags: "Instagram, TikTok, YouTube",
  },
  {
    id: "SKILL.04",
    icon: "search",
    name: "SEO Dasar",
    description:
      "Struktur konten, metadata, dan on-page dasar untuk membantu konten dan halaman lebih mudah ditemukan.",
    tags: "On-page, Metadata, Struktur Konten",
  },
  {
    id: "SKILL.05",
    icon: "design_services",
    name: "Canva & CapCut",
    description:
      "Desain aset visual (poster, carousel, thumbnail) dan edit video pendek untuk media sosial.",
    tags: "Poster, Carousel, Short Video",
  },
  {
    id: "SKILL.06",
    icon: "campaign",
    name: "Meta Business Suite",
    description:
      "Pengelolaan publikasi dan pemantauan performa konten di ekosistem Facebook & Instagram.",
    tags: "Facebook, Instagram, Insights",
  },
  {
    id: "SKILL.07",
    icon: "code",
    name: "Web Dev Pendukung",
    description:
      "Next.js, TypeScript, Tailwind, Supabase, dan Vercel untuk landing page & kampanye digital.",
    tags: "Next.js, TypeScript, Supabase, Vercel",
  },
  {
    id: "SKILL.08",
    icon: "table",
    name: "Excel & Google Sheets",
    description:
      "Pengelolaan data pendaftaran, rekap, dan laporan sederhana untuk kebutuhan acara & organisasi.",
    tags: "Data Pendaftaran, Rekap, Laporan",
  },
] as const;

export type CaseCategory = "konten-sosmed" | "event-organisasi" | "web-seo";

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
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    code: "CASE // 01",
    client: "PERSONAL PROJECT",
    period: "JAN 2025 - SEKARANG",
    title: "Personal Brand IG/TikTok: Kalender Konten & Kenaikan Engagement",
    context:
      "Mengelola akun media sosial sendiri (Instagram, TikTok, YouTube) sebagai latihan end-to-end produksi konten.",
    categories: ["konten-sosmed"],
    metrics: [
      {
        label: "ENGAGEMENT",
        value: "+30%",
        note: "Kenaikan engagement konten organik",
        highlight: true,
      },
      {
        label: "PLATFORM DIKELOLA",
        value: "3",
        note: "Instagram · TikTok · YouTube",
      },
      {
        label: "ALAT UTAMA",
        value: "Canva/CapCut",
        note: "Visual & video pendek",
      },
    ],
    actions: [
      "Merencanakan kalender konten mingguan dan analisis performa postingan secara berkala.",
      "Menulis copywriting caption dan skrip konten sesuai target audiens.",
      "Mendesain aset visual (poster, carousel, thumbnail) dengan Canva dan mengedit video pendek dengan CapCut.",
    ],
  },
  {
    id: "case-02",
    code: "CASE // 02",
    client: "KELOMPOK 03 KKN — MA'HAD ALY NURUSSALAM MUBAROK",
    period: "JAN 2026 - FEB 2026",
    title: "KKN Kelompok 03: Dokumentasi & Branding Program Desa",
    context:
      "Kelompok 03 KKN membutuhkan dokumentasi kegiatan dan materi promosi untuk sosialisasi program ke masyarakat desa.",
    categories: ["konten-sosmed"],
    metrics: [
      {
        label: "KONTEN DIBUAT",
        value: "Foto · Video · Artikel",
        note: "Dokumentasi kegiatan KKN",
      },
      {
        label: "MATERI PROMOSI",
        value: "Poster & Pamflet",
        note: "Dibuat dengan Canva",
      },
      {
        label: "KANAL PUBLIKASI",
        value: "Media Sosial",
        note: "Branding kelompok ke masyarakat desa",
        highlight: true,
      },
    ],
    actions: [
      "Memproduksi konten dokumentasi kegiatan KKN (foto, video, artikel) dan mempublikasikannya ke media sosial untuk branding kelompok.",
      "Membuat materi promosi digital (poster kegiatan, pamflet program) dengan Canva untuk sosialisasi ke masyarakat desa.",
    ],
  },
  {
    id: "case-03",
    code: "CASE // 03",
    client: "PANITIA SEMINAR NASIONAL KEISLAMAN",
    period: "2024",
    title: "Seminar Nasional Keislaman: Promosi 200+ Peserta & Pengelolaan Pendaftaran",
    context:
      "Panitia membutuhkan promosi yang menjangkau ratusan peserta dan pengelolaan data pendaftaran yang rapi.",
    categories: ["event-organisasi"],
    metrics: [
      {
        label: "PESERTA",
        value: "200+",
        note: "Jangkauan promosi acara",
        highlight: true,
      },
      {
        label: "PENDAFTARAN",
        value: "Google Sheets",
        note: "Data 200+ peserta dikelola panitia",
      },
      {
        label: "LAPORAN",
        value: "Post-Event",
        note: "Dokumentasi & laporan untuk benchmark tahun berikutnya",
      },
    ],
    actions: [
      "Membuat materi promosi dan publikasi acara untuk 200+ peserta melalui media sosial dan grup komunitas.",
      "Mengelola data pendaftaran 200+ peserta (Google Sheets) dan komunikasi informasi acara ke peserta.",
      "Mendokumentasikan jalannya acara dan menyusun laporan post-event untuk benchmark tahun berikutnya.",
    ],
  },
  {
    id: "case-04",
    code: "CASE // 04",
    client: "PERSONAL PROJECT",
    period: "MEI 2025 - SEKARANG",
    title: "Web Developer: 10+ Produk Web Live dengan SEO Dasar",
    context:
      "Membangun produk web sendiri sebagai sarana digitalisasi layanan sekaligus mendukung funnel digital dan user experience.",
    categories: ["web-seo"],
    metrics: [
      {
        label: "PRODUK WEB LIVE",
        value: "10+",
        note: "Deploy di Vercel, source di GitHub",
        highlight: true,
      },
      {
        label: "STACK UTAMA",
        value: "Next.js",
        note: "TypeScript · Supabase/Prisma · Tailwind",
      },
      {
        label: "SEO",
        value: "Dasar",
        note: "Struktur konten & metadata",
      },
    ],
    actions: [
      "Membangun aplikasi web (Next.js + Supabase) sebagai sarana digitalisasi layanan, mendukung funnel digital dan user experience.",
      "Menerapkan SEO dasar (struktur konten, metadata) pada setiap produk yang dirilis.",
      "Deploy ke Vercel dengan version control GitHub dan dokumentasi (README) yang konsisten.",
    ],
  },
  {
    id: "case-05",
    code: "CASE // 05",
    client: "PRODUK YANG SAYA BANGUN",
    period: "2026",
    title: "Kalkulator ROAS & CAC: Tool Interaktif untuk Marketer",
    context:
      "Recruiter sering bertanya cara saya menganalisis performa iklan — saya bangun sendiri alat untuk menghitung CAC, ROAS, dan breakeven ROAS langsung di browser.",
    categories: ["web-seo"],
    metrics: [
      {
        label: "STATUS",
        value: "Live",
        note: "Produk nyata, dipakai bebas",
      },
      {
        label: "CARA PAKAI",
        value: "Tanpa signup",
        note: "Langsung di browser",
      },
      {
        label: "TEKNOLOGI",
        value: "Next.js + TypeScript",
        note: "Dibangun sendiri",
      },
    ],
    actions: [
      "Mendesain rumus CAC, ROAS, dan breakeven ROAS beserta logika interpretasinya.",
      "Membangun kalkulator interaktif dengan perhitungan real-time dan formatting Bahasa Indonesia.",
      "Menulis penjelasan edukatif cara membaca hasil untuk marketer pemula.",
    ],
    link: "/kalkulator-roas",
  },
];

export const experience = [
  {
    role: "Digital Marketing & Dokumentasi",
    company: "Kelompok 03 KKN — Ma'had Aly Nurussalam Mubarok",
    period: "JAN 2026 - FEB 2026",
    current: false,
    description:
      "Memproduksi konten dokumentasi kegiatan KKN (foto, video, artikel) dan mempublikasikannya ke media sosial untuk branding kelompok. Membuat materi promosi digital (poster kegiatan, pamflet program) dengan Canva untuk sosialisasi ke masyarakat desa.",
  },
  {
    role: "Web Developer (Personal Project)",
    company: "Mandiri",
    period: "MEI 2025 - SEKARANG",
    current: true,
    description:
      "Membangun 10+ aplikasi web (Next.js, TypeScript, Supabase/Prisma) yang live di Vercel — dari skema data sampai deploy — dengan SEO dasar dan version control GitHub untuk mendukung funnel digital dan user experience.",
  },
  {
    role: "Content Creator & Social Media Manager (Personal Project)",
    company: "Mandiri",
    period: "JAN 2025 - SEKARANG",
    current: true,
    description:
      "Mengelola akun media sosial (Instagram, TikTok, YouTube) dengan perencanaan kalender konten mingguan dan analisis performa postingan. Menulis copywriting caption dan skrip konten sesuai target audiens — meningkatkan engagement 30% dan reach organik. Mendesain aset visual (poster, carousel, thumbnail) dengan Canva dan mengedit video pendek dengan CapCut.",
  },
  {
    role: "Sekretaris & Humas Media Sosial",
    company: "DEMA Ma'had Aly Nurussalam Mubarok",
    period: "JAN 2025 - JAN 2026",
    current: false,
    description:
      "Mengelola publikasi dan branding kegiatan organisasi di media sosial untuk 12 program kerja. Menyusun materi promosi digital (poster, flyer) dan menjembatani komunikasi antara pengurus, dosen, dan pihak eksternal.",
  },
  {
    role: "Content & Promosi Acara",
    company: "Panitia Seminar Nasional Keislaman",
    period: "2024",
    current: false,
    description:
      "Membuat materi promosi dan publikasi acara untuk 200+ peserta melalui media sosial dan grup komunitas. Mengelola data pendaftaran 200+ peserta (Google Sheets), komunikasi informasi acara ke peserta, mendokumentasikan jalannya acara, dan menyusun laporan post-event untuk benchmark tahun berikutnya.",
  },
] as const;

export const certifications = [
  {
    code: "[CERT-01 // FREECODECAMP]",
    name: "Responsive Web Design",
    detail: "freeCodeCamp (PDF)",
  },
  {
    code: "[CERT-02 // FREECODECAMP]",
    name: "Front End Development Libraries",
    detail: "freeCodeCamp (PDF)",
  },
  {
    code: "[CERT-03 // UI/UX]",
    name: "UI/UX Design",
    detail: "Sertifikat (PDF)",
  },
  {
    code: "[CERT-04 // PRESTASI]",
    name: "Prestasi",
    detail: "Sertifikat (PDF)",
  },
] as const;

export const caseFilters: { label: string; value: CaseCategory | "all" }[] = [
  { label: "SEMUA [ALL]", value: "all" },
  { label: "KONTEN & SOCIAL MEDIA", value: "konten-sosmed" },
  { label: "EVENT & ORGANISASI", value: "event-organisasi" },
  { label: "WEB & SEO", value: "web-seo" },
];

export const contact = {
  eyebrow: "[05 // KONTAK]",
  title: "Terbuka untuk magang & posisi entry-level. Mari terhubung.",
  subtitle:
    "Mencari posisi entry-level Digital Marketing / Content Creator / Content Writer — magang maupun full-time, remote maupun onsite di Jember dan sekitarnya. Biasanya membalas dalam 1x24 jam.",
  email: "rahmad26akbar@gmail.com",
  linkedin: "https://linkedin.com/in/rahmadakbar24",
  linkedinLabel: "linkedin.com/in/rahmadakbar24",
  whatsapp: "https://wa.me/62882008321724",
  whatsappLabel: "+62 882 0083 21724",
  github: "https://github.com/fiilmudhori26",
  tiktok: "https://tiktok.com/@_arvyn24",
  instagram: "https://www.instagram.com/_arvyn24",
  socialLabel: "@_arvyn24",
  cvNote: "CV TERBARU // PDF",
} as const;

export const navLinks = [
  { index: "01", label: "TENTANG", href: "#tentang" },
  { index: "02", label: "KEAHLIAN", href: "#keahlian" },
  { index: "03", label: "STUDI KASUS", href: "#studi-kasus" },
  { index: "04", label: "RIWAYAT", href: "#pengalaman" },
  { index: "05", label: "KONTAK", href: "#kontak" },
] as const;
