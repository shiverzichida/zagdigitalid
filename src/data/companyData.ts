export const COMPANY_INFO = {
  name: "ZAG Digital Indonesia",
  shortName: "ZAG Digital",
  instagram: "https://www.instagram.com/zagdigital.id",
  instagramHandle: "@zagdigital.id",
  whatsappNumber: "6289619320345",
  whatsappDisplay: "+62 896-1932-0345",
  email: "contact@zagdigital.id",
  address: "Indonesia",
  operatingHours: "Senin - Sabtu: 08:30 - 18:00 WIB",
  tagline: "Software Engineering & Enterprise Digital Solutions",
  heroTitle: "Membangun Software & Sistem Informasi Enterprise untuk Akselerasi Bisnis Anda",
  heroSubtitle: "Dari sistem operasional logistik & Bill of Lading, kontrol akses Face ID Turnstile Gate & Smart Locker IoT, hingga HRIS cuti dan portal web kustom. Kami hadir sebagai partner rekayasa perangkat lunak dan otomasi hardware terpercaya.",
};

export const SERVICES = [
  {
    id: "web-dev",
    title: "Custom Web Application",
    tagline: "High Performance & Scalable",
    description: "Pengembangan portal web kustom, sistem internal perusahaan, dan SaaS dengan arsitektur modern berkecepatan tinggi dan SEO optimal.",
    icon: "Code2",
    features: [
      "Arsitektur modern (Astro / React / Next.js)",
      "Responsif di seluruh ukuran layar (Mobile-first)",
      "Performa skor 95+ di Google PageSpeed",
      "SEO & Analytics terintegrasi"
    ],
    techStack: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    highlight: false,
  },
  {
    id: "enterprise-erp",
    title: "Sistem Informasi & ERP Kustom",
    tagline: "Otomasi Alur Bisnis Menyeluruh",
    description: "Sistem informasi manajemen terintegrasi: Bill of Lading, invoice otomatis, inventory barang, hingga pelaporan keuangan akurat.",
    icon: "Layers",
    features: [
      "Modul Bill of Lading & Surat Jalan digital",
      "Generator PDF Invoice otomatis berstandar pajak",
      "Multi-user role & audit log aktivitas",
      "Export data instan (PDF, Excel, CSV)"
    ],
    techStack: ["Node.js", "PostgreSQL", "Supabase", "Docker"],
    highlight: true,
  },
  {
    id: "hris-operations",
    title: "HRIS & Manajemen Operasional",
    tagline: "Efisiensi Tata Kelola Karyawan",
    description: "Digitalisasi administrasi perusahaan seperti pengajuan cuti berjenjang, absensi, sistem membership parkir, dan evaluasi performa.",
    icon: "Users2",
    features: [
      "Pengajuan & approval cuti online multi-level",
      "Integrasi membership & gate parkir",
      "Sistem review performa berkala",
      "Notifikasi instan via WhatsApp / Email"
    ],
    techStack: ["React", "REST API", "PostgreSQL", "Tailwind CSS"],
    highlight: false,
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure & Hosting",
    tagline: "Aman, Cepat, & Handal",
    description: "Penyediaan domain resmi (.id / .com), setup server VPS high-availability, konfigurasi SSL, CDN Cloudflare, dan backup berkala.",
    icon: "Cloud",
    features: [
      "Penyediaan domain & hosting tahunan terjamin",
      "SSL Certificate gratis & enkripsi penuh",
      "Automated daily/weekly database backup",
      "Setup email bisnis domain kustom"
    ],
    techStack: ["Vercel", "Cloudflare", "VPS Linux", "Docker"],
    highlight: false,
  },
  {
    id: "it-maintenance",
    title: "IT Maintenance & Support",
    tagline: "Jaminan Operasional Berkelanjutan",
    description: "Layanan pemeliharaan sistem berkala, perbaikan bug minor garansi 30 hari, maintenance loker, hingga integrasi monitoring CCTV.",
    icon: "ShieldCheck",
    features: [
      "Free pemeliharaan minor selama 30 hari",
      "Monitoring performa server & database 24/7",
      "Maintenance perangkat keras operasional & CCTV",
      "SLA tanggap darurat teknis terukur"
    ],
    techStack: ["Linux", "Nginx", "PostgreSQL", "Monitoring Tools"],
    highlight: false,
  },
  {
    id: "iot-smart-access",
    title: "IoT Smart Access & Biometric Gate",
    tagline: "Otomasi Hardware & Kontrol Akses",
    description: "Integrasi Turnstile Gate berbasis pengenalan wajah (Face ID), Smart Locker IoT tanpa kunci fisik, barrier gate parkir, dan sinkronisasi hak akses member secara real-time.",
    icon: "ScanFace",
    features: [
      "Face ID Turnstile Gate (verifikasi akses < 1 detik)",
      "Smart Locker IoT (buka & kunci via Face ID member)",
      "Sinkronisasi real-time status keanggotaan aktif",
      "Log kehadiran, audit trail, & zero key management"
    ],
    techStack: ["IoT Controller", "Face Recognition", "REST API", "MQTT/WebSockets"],
    highlight: true,
  }
];

export const CASE_STUDIES = [
  {
    id: "cs-ransa",
    client: "Ransa Group",
    title: "Integrated Maritime, Logistics & Export Solutions Portal",
    category: "Maritime & Integrated Logistics",
    categoryGroup: "maritime",
    liveUrl: "https://www.ransa.id/",
    displayUrl: "ransa.id",
    challenge: "Membutuhkan portal korporasi terpadu untuk 3 divisi bisnis maritim utama (Agencies, Armada Tangguh, & Energi Muda) dengan standar internasional, navigasi bilingual, dan showcase metrik operasional skala besar.",
    solution: "Mengembangkan website korporasi berkinerja tinggi dengan interaksi animasi halus (GSAP), switcher bahasa (ID/EN), arsitektur multi-divisi, dan metrik armada 500+ kapal & 2M+ ton kargo.",
    results: [
      "Portal terpadu untuk 3 divisi bisnis maritim utama",
      "Navigasi bilingual (ID/EN) ramah bagi mitra dan klien global",
      "Showcase jaringan pelabuhan strategis dan operasional Terminal Kijing"
    ],
    tags: ["Maritime Logistics", "Corporate Portal", "Bilingual ID/EN", "Terminal Kijing", "GSAP"],
    year: "2026",
    image: "/portfolio/ransa.jpg",
    badge: "Live Corporate"
  },
  {
    id: "cs-bhumi",
    client: "PT. Bhumi Selaras Mitra",
    title: "Forwarding & Stevedoring Terminal Kijing Mempawah Portal",
    category: "Port Logistics & Freight Forwarding",
    categoryGroup: "maritime",
    liveUrl: "https://www.bhumiselarasmitra.my.id/",
    displayUrl: "bhumiselarasmitra.my.id",
    challenge: "Perusahaan bongkar muat dan forwarding di Terminal Kijing memerlukan kehadiran digital resmi yang memperlihatkan kredibilitas legalitas, fasilitas alat berat, dan integrasi alur Bill of Lading.",
    solution: "Membangun company profile resmi terhubung dengan sistem operasional internal, integrasi domain kustom .my.id, cloud hosting berkecepatan tinggi, dan showcase layanan stevedoring.",
    results: [
      "Representasi resmi mitra operasional Terminal Kijing Mempawah",
      "Terintegrasi dengan modul Bill of Lading & faktur invoice otomatis",
      "Waktu loading halaman di bawah 1.2 detik dengan proteksi SSL aktif"
    ],
    tags: ["Freight Forwarding", "Stevedoring", "Terminal Kijing", "Bill of Lading", "Cloud VPS"],
    year: "2026",
    image: "/portfolio/bhumiselarasmitra.jpg",
    badge: "Verified Client"
  },
  {
    id: "cs-lals",
    client: "PT Lintas Armada Lima Samudera",
    title: "Shipping Agency, STS Bunker & Vessel Operations Portal",
    category: "Shipping Agency & Maritime Services",
    categoryGroup: "maritime",
    liveUrl: "https://lintasarmadalimasamudera.com/",
    displayUrl: "lintasarmadalimasamudera.com",
    challenge: "Keagenan kapal membutuhkan platform digital representatif untuk mengenalkan layanan krusial pelayaran seperti shipping agency, crew changes, bunker service, STS bunker, dan inspeksi kapal.",
    solution: "Merancang web portal maritim profesional dengan UI berorientasi industri maritim, interactive preloader branding LALS, serta kemudahan akses kontak operasional 24/7 bagi agen kapal.",
    results: [
      "Katalog layanan komprehensif dari keagenan kapal hingga STS bunker",
      "Kemudahan koordinasi pergantian kru kapal dan kontak darurat",
      "Peningkatan konversi inquiry keagenan kapal domestik & luar negeri"
    ],
    tags: ["Shipping Agency", "Bunker Service", "STS Bunker", "Crew Changes", "Maritime"],
    year: "2026",
    image: "/portfolio/lintasarmada.jpg",
    badge: "Live Agency"
  },
  {
    id: "cs-westfit",
    client: "WestFit Indonesia",
    title: "Smart Gym Ecosystem: Web Platform, Face ID Gate & Smart Locker IoT",
    category: "Smart Gym, IoT & Biometric Access Control",
    categoryGroup: "sports",
    liveUrl: "https://westfitindonesia.com/",
    displayUrl: "westfitindonesia.com",
    challenge: "Manajemen fasilitas gym modern dengan 7000+ member membutuhkan otomatisasi total: memangkas antrean resepsionis, mencegah penyalahgunaan kartu member, serta mengeliminasi masalah member sering kehilangan kunci loker fisik atau gelang RFID.",
    solution: "Membangun ekosistem teknologi terintegrasi menyeluruh: Web portal responsif dengan Live Class Schedule Engine (/api/public/schedules), instalasi Face ID Biometric Turnstile Gate yang sinkron langsung dengan status keanggotaan aktif member (< 1 detik verifikasi), serta sistem Smart Locker IoT otomatis yang terkunci & terbuka menggunakan kredensial Face ID yang sama tanpa memerlukan kunci fisik sama sekali.",
    results: [
      "Akses gerbang keluar-masuk otomatis via Face ID Turnstile Gate (zero antrean resepsionis & anti kartu-joki)",
      "Smart Locker IoT berbasis Face ID (100% aman tanpa risiko kunci hilang atau tertinggal)",
      "Sinkronisasi real-time status keanggotaan aktif member dengan hak akses gate dan loker",
      "Live Class Schedule API & Member Portal terintegrasi melayani 7000+ member aktif"
    ],
    tags: ["Face ID Turnstile Gate", "Smart Locker IoT", "Live Schedule API", "Biometric Access", "Hardware Automation"],
    year: "2026",
    image: "/portfolio/westfit.jpg",
    badge: "IoT + Face ID Biometric"
  },
  {
    id: "cs-11fightcamp",
    client: "11 Fight Camp Pontianak",
    title: "Martial Arts Academy, Training Schedule & Booking Platform",
    category: "Combat Sports & Class Booking Platform",
    categoryGroup: "sports",
    liveUrl: "http://11fightcamp.vercel.app/",
    displayUrl: "11fightcamp.vercel.app",
    challenge: "Akademi bela diri MMA dan combat sports di Pontianak membutuhkan wadah pendaftaran online, jadwal kelas harian (Muay Thai, BJJ, Boxing), dan visualisasi branding yang berani (bold & gritty).",
    solution: "Membangun web app modern bertenaga Vercel Edge dengan performa super cepat, dark theme combat aesthetic, jadwal latihan interaktif, dan integrasi booking WhatsApp instan.",
    results: [
      "Booking kelas latihan bela diri online langsung dari smartphone",
      "Pengenalan profil pelatih bersertifikasi & fasilitas camp",
      "Hosting global Vercel Edge dengan kecepatan akses instan"
    ],
    tags: ["MMA Academy", "Class Booking", "Vercel Edge", "High Performance UI", "Pontianak"],
    year: "2026",
    image: "/portfolio/11fightcamp.jpg",
    badge: "Vercel Deployed"
  }
];

export const TECH_STACK_LOGOS = [
  { name: "Astro", category: "Framework", icon: "🚀" },
  { name: "React 19", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", category: "Language", icon: "📘" },
  { name: "Tailwind CSS v4", category: "Styling", icon: "🎨" },
  { name: "Supabase", category: "Backend/DB", icon: "⚡" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Node.js", category: "Runtime", icon: "🟢" },
  { name: "Vercel", category: "Cloud & Edge", icon: "▲" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Cloudflare", category: "Security/CDN", icon: "🛡️" }
];

export const WHY_US = [
  {
    title: "30 Hari Garansi Maintenance",
    desc: "Setiap sistem yang kami bangun dilengkapi dengan garansi pemeliharaan & perbaikan minor gratis selama 30 hari pasca rilis.",
    badge: "Official Guarantee"
  },
  {
    title: "100% Hak Milik Source Code",
    desc: "Source code dan hak cipta sistem sepenuhnya menjadi milik Anda tanpa biaya lisensi tersembunyi (No Vendor Lock-in).",
    badge: "Full Ownership"
  },
  {
    title: "Arsitektur Bersih & Skalabel",
    desc: "Dibangun dengan standar modern (Clean Architecture & TypeScript) yang mudah dikembangkan oleh tim engineer internal Anda di kemudian hari.",
    badge: "Enterprise Grade"
  },
  {
    title: "Transparan & Tepat Waktu",
    desc: "Setiap progress proyek dilaporkan berkala dengan milestone jelas, timeline terukur, dan rincian invoice profesional.",
    badge: "Reliable Partner"
  }
];

export const FAQS = [
  {
    q: "Berapa lama waktu pengerjaan sebuah sistem atau website?",
    a: "Durasi tergantung kompleksitas sistem. Untuk landing page/company profile memakan waktu sekitar 5–10 hari kerja. Untuk sistem informasi kustom, ERP, atau HRIS biasanya membutuhkan 2–6 minggu dengan tahapan prototype dan testing."
  },
  {
    q: "Apakah disediakan garansi setelah sistem selesai dibuat?",
    a: "Ya! Kami memberikan garansi pemeliharaan sistem gratis (free minor support) selama 30 hari setelah serah terima sistem untuk memastikan kelancaran operasional bisnis Anda."
  },
  {
    q: "Bagaimana alur pembayaran proyek di ZAG Digital?",
    a: "Kami menggunakan skema milestone yang aman dan transparan: Down Payment (DP) 40-50% di awal untuk kick-off, termin progres development, dan pelunasan saat sistem siap go-live dengan invoice resmi CV IT Konsultan."
  },
  {
    q: "Apakah ZAG Digital juga menyediakan domain, server, dan email bisnis?",
    a: "Tentu. Kami menyediakan paket komprehensif mulai dari pendaftaran domain resmi (.id, .co.id, .com), konfigurasi cloud hosting/VPS, SSL security, hingga email profesional dengan nama domain Anda."
  },
  {
    q: "Bisakah sistem diintegrasikan dengan aplikasi atau perangkat pihak ketiga?",
    a: "Sangat bisa. Kami berpengalaman mengintegrasikan API pihak ketiga seperti payment gateway (Midtrans/Xendit), sistem absensi/RFID, CCTV operasional, notifikasi WhatsApp, hingga ekspor data ke Excel/PDF."
  }
];
