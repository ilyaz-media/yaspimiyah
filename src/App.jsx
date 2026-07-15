import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  GraduationCap,
  Play,
  Quote,
  Sparkles,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const units = [

  {
    slug: "pesantren",
    name: "Pondok Pesantren",
    detail: "Pembinaan iman, ilmu, dan adab dalam keseharian.",
    image: "/Assets/pesantren/1.jpg",
    tag: "Pesantren",
    intro:
      "Ruang pembinaan yang menumbuhkan santri dengan pembiasaan ibadah, pendalaman ilmu agama, dan kemandirian.",
    programs: [
      "Tahfiz dan tadarus Al-Qur’an",
      "Kajian kitab dan pembinaan adab",
      "Kegiatan kepemimpinan santri",
    ],
    gallery: [
      "/Assets/pesantren/galeri/1.jpg",
      "/Assets/pesantren/galeri/2.jpg",
      "/Assets/pesantren/galeri/hsn.jpg",
    ],
  },

  {
    slug: "tk-kober",
    name: "TK Kober Yaspimiyah",
    detail: "Ruang awal yang hangat untuk belajar dengan gembira.",
    image: "/Assets/tk-kober/2.jpeg",
    tag: "Usia dini",
    intro:
      "Masa emas anak didampingi lewat bermain, bereksplorasi, dan pembiasaan baik dalam suasana yang penuh kasih.",
    programs: [
      "Belajar sambil bermain",
      "Pembiasaan doa dan ibadah",
      "Seni, motorik, dan kreativitas",
    ],
    gallery: [
      "/Assets/tk-kober/tk3.jpeg",
      "/Assets/tk-kober/tk4.jpeg",
      "/Assets/tk-kober/kreativitas.jpg",
    ],
  },

  {
    slug: "mdt",
    name: "MDT Miftahul Hidayah",
    detail: "Fondasi keislaman untuk tumbuh menjadi pribadi berakhlak.",
    image: "/Assets/diniyah/1.jpg",
    tag: "Diniyah",
    intro:
      "Pendidikan diniyah yang memperkuat pemahaman agama dan membiasakan akhlak mulia dalam kehidupan sehari-hari.",
    programs: [
      "Baca tulis Al-Qur’an",
      "Aqidah, fiqih, dan akhlak",
      "Peringatan hari besar Islam",
    ],
    gallery: [
      "/Assets/diniyah/galeri/bukabersama.jpg",
      "/Assets/diniyah/galeri/maulid.jpg",
      "/Assets/diniyah/galeri/perpisahan.jpg",
    ],
  },

  {
    slug: "smp-it",
    name: "SMP IT Yaspimiyah",
    detail: "Pendidikan terpadu yang membangun karakter dan kompetensi.",
    image: "/Assets/smp/1.jpg",
    tag: "Menengah",
    intro:
      "Jenjang menengah yang mengintegrasikan pembelajaran akademik, keterampilan abad 21, dan karakter Islami.",
    programs: [
      "Pembelajaran akademik terpadu",
      "Literasi digital dan proyek siswa",
      "Pembinaan karakter serta ekstrakurikuler",
    ],
    gallery: [
      "/Assets/smp/2.jpg",
      "/Assets/smp/galeri/belajarinteraktif.jpg",
      "/Assets/smp/galeri/prestasi.jpg",
    ],
  },

  {
    slug: "sma-it",
    name: "SMA IT Yaspimiyah",
    detail: "Menyiapkan pelajar yang siap melangkah menuju masa depan.",
    image: "/Assets/sma/1.jpg",
    tag: "Menengah atas",
    intro:
      "Pendampingan akademik dan karakter bagi pelajar yang siap melanjutkan studi, berkarya, serta memberi manfaat.",
    programs: [
      "Persiapan studi lanjut",
      "Penguatan akademik dan karakter",
      "Kepemimpinan dan pengembangan diri",
    ],
    gallery: [
      "/Assets/sma/1.jpg",
      "/Assets/sma/6.jpeg",
      "/Assets/sma/1.jpg",
    ],
  },
];

const values = [
  [
    "Beriman",
    "Nilai Islam menjadi arah dalam belajar, bertumbuh, dan berkontribusi.",
  ],
  [
    "Berilmu",
    "Pembelajaran aktif untuk membangun rasa ingin tahu dan kecakapan hidup.",
  ],
  [
    "Berakhlak",
    "Membiasakan sikap santun, amanah, disiplin, serta peduli pada sesama.",
  ],
];

function SectionTitle({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
        <span
          className={
            centered ? "h-px w-6 bg-amber-500" : "h-px w-8 bg-amber-500"
          }
        />{" "}
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-5 leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

function UnitPage({ unit }) {
  return (
    <>
      <section
        data-reveal="pop"
        className="relative overflow-hidden bg-emerald-950 pb-16 pt-28 text-white sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 opacity-25">
          <img src={unit.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/10" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <a
            href="#beranda"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200">
            <ArrowLeft size={17} /> Kembali ke beranda
          </a>
          <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-amber-300 sm:mt-12 sm:text-sm">
            {unit.tag}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {unit.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
            {unit.detail}
          </p>
        </div>
      </section>

      {/* second */}
      <section data-reveal="left" className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <img
            src={unit.image}
            alt={unit.name}
            className="h-64 w-full rounded-3xl object-cover shadow-xl sm:h-[440px]"
          />
          <div>
            <SectionTitle
              eyebrow="Tentang unit"
              title={`Belajar dan bertumbuh di ${unit.name}.`}
              text={unit.intro}
              centered={false}
            />
            <div className="mt-7 space-y-3 sm:mt-8">
              {unit.programs.map((program) => (
                <div
                  key={program}
                  className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-950">
                  <Check className="shrink-0 text-emerald-700" size={19} />
                  {program}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section data-reveal="right" className="bg-[#f1f6f1] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Kegiatan kami"
            title="Belajar dalam pengalaman yang berkesan."
            text="Keseharian peserta didik diisi dengan kegiatan yang mendukung ilmu, karakter, dan kebersamaan."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {unit.gallery.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${unit.name} kegiatan ${index + 1}`}
                className="h-64 w-full rounded-2xl object-cover shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-100 p-8 text-center sm:p-12">
            <GraduationCap className="mx-auto text-emerald-800" size={38} />
            <h2 className="font-display mt-5 text-3xl font-bold text-emerald-950">
              Bergabung bersama {unit.name}
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-emerald-900/75">
              Dapatkan informasi program dan pendaftaran melalui kontak resmi
              yayasan.
            </p>
            <a
              href="mailto:info@yaspimiyah.sch.id"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3.5 font-bold text-white hover:bg-emerald-700">
              Hubungi kami <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);
  const [loading, setLoading] = useState(true);
  // loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleRoute = () => {
      setLoading(true);

      const hash = window.location.hash;

      setTimeout(() => {
        setRoute(hash);
        setLoading(false);
      }, 2000);
    };

    window.addEventListener("hashchange", handleRoute);

    return () => {
      window.removeEventListener("hashchange", handleRoute);
    };
  }, []);

  // scroll smooth
  useEffect(() => {
    if (route === "" || route === "#beranda" || route.startsWith("#unit/")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [route]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("is-visible", entry.isIntersecting),
        );
      },
      { threshold: 0.16 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [route]);

  const unit = units.find((item) => route === `#unit/${item.slug}`);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcf9] text-slate-700">
      {loading && (
        <div className="page-loader fixed inset-0 z-[100] grid place-items-center bg-emerald-950/95 text-white">
          <div className="relative grid h-28 w-28 place-items-center">
            <div className="loader-orbit absolute inset-0 rounded-full border-2 border-amber-300 border-t-transparent" />
            <div className="loader-orbit absolute inset-3 rounded-full border-2 border-emerald-300 border-b-transparent [animation-direction:reverse]" />
            <img
              src="/Assets/yayasan/YPI MIFTAHUL HIDAYAH.png"
              alt="Memuat halaman"
              className="h-14 w-14 rounded-full bg-white p-1"
            />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[.3em] text-amber-300">
            Yaspimiyah
          </p>
        </div>
      )}
      <Header />

      <main>
        {unit ? (
          <UnitPage unit={unit} />
        ) : (
          <>
            <section
              id="beranda"
              className="relative isolate overflow-hidden bg-emerald-950 pb-20 pt-32 text-white lg:pb-28 lg:pt-40">
              <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_85%_15%,rgba(217,166,56,.22),transparent_26%),radial-gradient(circle_at_15%_85%,rgba(16,185,129,.18),transparent_28%)]" />
              <div className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] lg:block">
                <img
                  src="/Assets/2.png"
                  alt="Kegiatan Yaspimiyah"
                  className="h-full w-full object-cover opacity-75 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/55 to-emerald-950/10" />
              </div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-emerald-50 backdrop-blur">
                    <Sparkles size={16} className="text-amber-300" /> Yayasan
                    Pendidikan Islam Miftahul Hidayah
                  </div>
                  <h1 className="font-display mt-7 text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    Tumbuh dengan iman.{" "}
                    <span className="text-amber-300">Melangkah</span> dengan
                    ilmu.
                  </h1>
                  <p className="mt-7 max-w-xl text-lg leading-8 text-emerald-50/80">
                    Rumah belajar yang menumbuhkan generasi Qurani,
                    berpengetahuan, dan berakhlak mulia untuk masa depan yang
                    lebih bermakna.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#unit"
                      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-emerald-950 transition hover:bg-amber-300">
                      Jelajahi unit kami <ArrowRight size={18} />
                    </a>
                    <a
                      href="#tentang"
                      className="rounded-full border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                      Tentang kami
                    </a>
                  </div>
                </div>
                <div className="mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/[.07] p-5 backdrop-blur sm:p-6">
                  {[
                    ["20+", "tahun bertumbuh"],
                    ["5", "unit pendidikan"],
                    ["100+", "peserta didik"],
                  ].map(([number, label]) => (
                    <div key={label} className="px-3 first:pl-0">
                      <strong className="font-display block text-2xl text-amber-300 sm:text-3xl">
                        {number}
                      </strong>
                      <span className="mt-1 block text-xs text-emerald-50/70 sm:text-sm">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="tentang" data-reveal="left" className="py-20 sm:py-28">
              <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-amber-100" />
                  <img
                    src="/Assets/yayasan/anak-anak.jpg"
                    alt="Siswa Yaspimiyah"
                    className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[520px]"
                  />
                  <div className="absolute -bottom-6 right-6 max-w-[220px] rounded-2xl bg-white p-5 shadow-xl">
                    <Quote className="text-amber-500" size={24} />
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                      Pendidikan adalah bekal terbaik untuk membangun masa depan
                      umat.
                    </p>
                  </div>
                </div>
                <div>
                  <SectionTitle
                    eyebrow="Tentang Yaspimiyah"
                    title="Belajar yang bermakna, dalam lingkungan yang menguatkan."
                    text="Kami memadukan pendidikan umum, pembiasaan ibadah, dan penguatan karakter agar setiap anak memiliki pondasi yang kokoh untuk melanjutkan perjalanan hidupnya."
                    centered={false}
                  />
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Pembelajaran terarah",
                      "Pendidik berdedikasi",
                      "Lingkungan yang aman",
                      "Nilai Islam terpadu",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm font-semibold text-emerald-950">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-700 text-white">
                          <Check size={15} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#nilai"
                    className="mt-9 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-600">
                    Nilai yang kami hidupi <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </section>

            <section
              id="unit"
              data-reveal="right"
              className="bg-[#f1f6f1] py-20 sm:py-28">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle
                  eyebrow="Unit pendidikan"
                  title="Satu yayasan, banyak ruang untuk bertumbuh."
                  text="Setiap jenjang dirancang untuk menemani anak belajar sesuai tahap perkembangannya."
                />
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {units.map((unit, index) => (
                    <a
                      href={`#unit/${unit.slug}`}
                      key={unit.name}
                      className={`group relative min-h-[300px] overflow-hidden rounded-3xl ${index === 0 ? "sm:col-span-2" : ""}`}>
                      <img
                        src={unit.image}
                        alt={unit.name}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/45 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                          {unit.tag}
                        </span>
                        <h3 className="font-display mt-3 text-2xl font-bold">
                          {unit.name}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                          {unit.detail}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-950 transition group-hover:bg-amber-300">
                          Lihat halaman unit <ArrowRight size={16} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="nilai" className="py-20 sm:py-28">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle
                  eyebrow="Pendidikan berkarakter"
                  title="Nilai baik yang tinggal lebih lama dari pelajaran."
                  text="Kami ingin anak-anak tidak hanya cakap secara akademik, tetapi juga punya kompas dalam bersikap dan mengambil keputusan."
                />
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                  {values.map(([title, text], index) => (
                    <article
                      key={title}
                      className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <span className="font-display text-5xl text-amber-400">
                        0{index + 1}
                      </span>
                      <h3 className="font-display mt-8 text-2xl font-bold text-emerald-950">
                        {title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">{text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="galeri"
              className="bg-white py-20 text-white sm:py-28">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle
                  eyebrow="Sekilas kegiatan"
                  title="Momen kecil, pengalaman yang membentuk."
                  text="Lihat keseharian belajar, berkarya, dan bertumbuh bersama keluarga besar Yaspimiyah."
                  centered={false}
                />
                <div className="mt-10 grid gap-4 md:grid-cols-12 md:grid-rows-2">
                  <img
                    src="/Assets/smp/galeri/belajarinteraktif.jpg"
                    alt="Kegiatan belajar"
                    className="h-60 w-full rounded-2xl object-cover md:col-span-5 md:row-span-2 md:h-full"
                  />
                  <img
                    src="/Assets/diniyah/galeri/maulid.jpg"
                    alt="Kegiatan keagamaan"
                    className="h-48 w-full rounded-2xl object-cover md:col-span-4"
                  />
                  <div className="flex min-h-48 flex-col justify-between rounded-2xl bg-amber-400 p-6 text-emerald-950 md:col-span-3">
                    <Play fill="currentColor" />
                    <p className="font-display text-2xl font-bold leading-tight">
                      Tumbuh dalam suasana belajar yang hangat.
                    </p>
                  </div>
                  <img
                    src="/Assets/pesantren/galeri/rihlahziarah.jpg"
                    alt="Kegiatan siswa"
                    className="h-48 w-full rounded-2xl object-cover md:col-span-7"
                  />
                </div>
              </div>
            </section>

            <section id="kontak" className="py-20 sm:py-28">
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="overflow-hidden rounded-[2rem] bg-amber-100 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-800">
                      Penerimaan peserta didik baru
                    </p>
                    <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-emerald-950 sm:text-4xl">
                      Mari mulai perjalanan belajar yang lebih bermakna.
                    </h2>
                    <p className="mt-4 leading-7 text-emerald-900/75">
                      Kenali program kami dan konsultasikan pilihan unit
                      pendidikan untuk putra-putri Anda.
                    </p>
                  </div>
                  <a
                    href="mailto:info@yaspimiyah.sch.id"
                    className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-700 lg:mt-0">
                    Hubungi kami <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
