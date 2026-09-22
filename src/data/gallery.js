// Kategori filter sesuai unit pendidikan
export const galleryCategories = [
  ["semua", "Semua"],
  ["tk", "TK"],
  ["mdt", "MDT"],
  ["smp", "SMP"],
  ["sma", "SMA"],
  ["pesantren", "Pesantren"],
];

// Jenis konten: foto / video
export const galleryTypes = [
  ["semua", "Semua"],
  ["foto", "Foto"],
  ["video", "Video"],
];

// Semua item galeri. `type` = "foto" | "video".
// Untuk video, `src` menunjuk ke berkas video dan `poster` ke gambar sampulnya.
export const galleryItems = [
  // ===== TK Kober =====
  {
    id: "tk-belajar-gembira",
    title: "Belajar Gembira di Kelas",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/2.jpeg",
  },
  {
    id: "tk-kreativitas",
    title: "Kelas Kreativitas Anak",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/kreativitas.jpg",
  },
  {
    id: "tk-senyum-anak",
    title: "Senyum Anak Usia Dini",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/tk1.png",
  },
  {
    id: "tk-bermain-belajar",
    title: "Bermain Sambil Belajar",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/tk3.jpeg",
  },
  {
    id: "tk-pembiasaan-ibadah",
    title: "Pembiasaan Ibadah Anak",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/tk4.jpeg",
  },
  {
    id: "tk-aktivitas-motorik",
    title: "Aktivitas Motorik Anak",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/tk5.jpg",
  },
  {
    id: "tk-bermain-kelompok",
    title: "Kegiatan Bermain Kelompok",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/tk6.jpg",
  },
  {
    id: "tk-momen-ceria",
    title: "Momen Ceria TK Kober",
    unit: "tk",
    unitName: "TK Kober",
    type: "foto",
    src: "/Assets/tk-kober/tk7.png",
  },
  {
    id: "tk-video-raport",
    title: "Video Pembagian Raport",
    unit: "tk",
    unitName: "TK Kober",
    type: "video",
    src: "/Assets/tk-kober/vidio/rapot.mp4",
    poster: "/Assets/tk-kober/rapot.jpg",
  },
  {
    id: "tk-video-kegiatan",
    title: "Video Kegiatan TK",
    unit: "tk",
    unitName: "TK Kober",
    type: "video",
    src: "/Assets/tk-kober/vidio/VID_20260309_083802.mp4",
    poster: "/Assets/tk-kober/tk3.jpeg",
  },

  // ===== MDT =====
  {
    id: "mdt-buka-bersama",
    title: "Buka Bersama Siswa",
    unit: "mdt",
    unitName: "MDT",
    type: "foto",
    src: "/Assets/diniyah/galeri/bukabersama.jpg",
  },
  {
    id: "mdt-maulid",
    title: "Peringatan Maulid Nabi",
    unit: "mdt",
    unitName: "MDT",
    type: "foto",
    src: "/Assets/diniyah/galeri/maulid.jpg",
  },
  {
    id: "mdt-perpisahan",
    title: "Perpisahan Siswa MDT",
    unit: "mdt",
    unitName: "MDT",
    type: "foto",
    src: "/Assets/diniyah/galeri/perpisahan.jpg",
  },
  {
    id: "mdt-raport",
    title: "Pembagian Raport MDT",
    unit: "mdt",
    unitName: "MDT",
    type: "foto",
    src: "/Assets/diniyah/galeri/rapot.jpg",
  },

  // ===== SMP IT =====
  {
    id: "smp-siswa",
    title: "Siswa SMP IT Yaspimiyah",
    unit: "smp",
    unitName: "SMP IT",
    type: "foto",
    src: "/Assets/smp/1.jpg",
  },
  {
    id: "smp-suasana-belajar",
    title: "Suasana Belajar SMP IT",
    unit: "smp",
    unitName: "SMP IT",
    type: "foto",
    src: "/Assets/smp/2.jpg",
  },
  {
    id: "smp-belajar-interaktif",
    title: "Belajar Interaktif",
    unit: "smp",
    unitName: "SMP IT",
    type: "foto",
    src: "/Assets/smp/galeri/belajarinteraktif.jpg",
  },
  {
    id: "smp-prestasi",
    title: "Prestasi Siswa SMP",
    unit: "smp",
    unitName: "SMP IT",
    type: "foto",
    src: "/Assets/smp/galeri/prestasi.jpg",
  },

  // ===== SMA IT =====
  {
    id: "sma-siswa",
    title: "Siswa SMA IT Yaspimiyah",
    unit: "sma",
    unitName: "SMA IT",
    type: "foto",
    src: "/Assets/sma/1.jpg",
  },
  {
    id: "sma-semangat-belajar",
    title: "Semangat Belajar SMA IT",
    unit: "sma",
    unitName: "SMA IT",
    type: "foto",
    src: "/Assets/sma/6.jpeg",
  },

  // ===== Pondok Pesantren =====
  {
    id: "pesantren-reuni",
    title: "Reuni Akbar Santri",
    unit: "pesantren",
    unitName: "Pesantren",
    type: "foto",
    src: "/Assets/pesantren/galeri/reuni.png",
  },
  {
    id: "pesantren-pembinaan",
    title: "Pembinaan Santri",
    unit: "pesantren",
    unitName: "Pesantren",
    type: "foto",
    src: "/Assets/pesantren/galeri/1.jpg",
  },
  {
    id: "pesantren-kebersamaan",
    title: "Kebersamaan Santri",
    unit: "pesantren",
    unitName: "Pesantren",
    type: "foto",
    src: "/Assets/pesantren/galeri/2.jpg",
  },
  {
    id: "pesantren-hsn",
    title: "Momen HSN Santri",
    unit: "pesantren",
    unitName: "Pesantren",
    type: "foto",
    src: "/Assets/pesantren/galeri/hsn.jpg",
  },
  {
    id: "pesantren-rihlah",
    title: "Rihlah & Ziarah Santri",
    unit: "pesantren",
    unitName: "Pesantren",
    type: "foto",
    src: "/Assets/pesantren/galeri/rihlahziarah.jpg",
  },
  {
    id: "pesantren-video-reuni",
    title: "Video Reuni Akbar",
    unit: "pesantren",
    unitName: "Pesantren",
    type: "video",
    src: "/Assets/pesantren/vidio/reuni.mp4",
    poster: "/Assets/pesantren/galeri/reuni.png",
  },
];

export default galleryItems;
