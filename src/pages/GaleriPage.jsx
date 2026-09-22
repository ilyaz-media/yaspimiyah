import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Image as ImageIcon,
  Search,
  Video,
} from "lucide-react";
import {
  galleryItems,
  galleryCategories,
  galleryTypes,
} from "../data/gallery";

export default function GaleriPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("semua");
  const [type, setType] = useState("semua");

  // Filter berdasarkan pencarian (judul/unit), kategori unit, dan jenis konten
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return galleryItems.filter((item) => {
      const matchQuery =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.unitName.toLowerCase().includes(q);
      const matchCategory = category === "semua" || item.unit === category;
      const matchType = type === "semua" || item.type === type;
      return matchQuery && matchCategory && matchType;
    });
  }, [query, category, type]);

  const photos = filtered.filter((item) => item.type === "foto");
  const videos = filtered.filter((item) => item.type === "video");
  const isEmpty = filtered.length === 0;

  return (
    <div className="min-h-screen bg-[#fcfcf9]">
      {/* ===== Hero halaman ===== */}
      <section className="relative overflow-hidden bg-emerald-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        {/* Latar: foto + gradasi + glow + pola grid (ala UnitHero) */}
        <div className="absolute inset-0">
          <img
            src="/Assets/1.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(217,166,56,.22),transparent_26%),radial-gradient(circle_at_15%_85%,rgba(16,185,129,.18),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[.05] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-white/60">
            <a
              href="#beranda"
              className="inline-flex items-center gap-1.5 transition hover:text-amber-300">
              <ArrowLeft size={15} /> Beranda
            </a>
            <span className="text-white/30">/</span>
            <span className="text-amber-300">Galeri lengkap</span>
          </nav>

          <h1 className="font-display mt-8 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
            Galeri Lengkap Yaspimiyah
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Jelajahi seluruh momen foto dan video kegiatan dari setiap unit
            pendidikan. Gunakan pencarian dan filter untuk menemukan momen yang
            Anda cari.
          </p>
        </div>
      </section>

      {/* ===== Kontrol: pencarian + filter ===== */}
      <section className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Kolom pencarian */}
            <div className="relative w-full lg:max-w-xs">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari nama foto atau video..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/15"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Filter kategori unit */}
              <div className="flex flex-wrap items-center gap-2">
                {galleryCategories.map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setCategory(value)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                      category === value
                        ? "bg-emerald-800 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}>
                    {label}
                  </button>
                ))}
              </div>

              {/* Pemisah visual */}
              <span className="hidden h-6 w-px bg-slate-200 sm:block" />

              {/* Filter jenis: foto / video */}
              <div className="flex flex-wrap items-center gap-2">
                {galleryTypes.map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setType(value)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${
                      type === value
                        ? "border-amber-500 bg-amber-400 text-emerald-950"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}>
                    {value === "foto" && <ImageIcon size={14} />}
                    {value === "video" && <Video size={14} />}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Konten galeri ===== */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {isEmpty ? (
            <p className="py-20 text-center text-slate-500">
              Tidak ada galeri yang cocok dengan pencarian atau filter Anda.
            </p>
          ) : (
            <div className="space-y-14">
              {/* Bagian FOTO */}
              {photos.length > 0 && (
                <div>
                  <h2 className="font-display flex items-center gap-2.5 text-xl font-bold text-slate-900 sm:text-2xl">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-800 text-white">
                      <ImageIcon size={18} />
                    </span>
                    Foto{" "}
                    <span className="text-sm font-semibold text-slate-400">
                      ({photos.length})
                    </span>
                  </h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {photos.map((item) => (
                      <figure
                        key={item.id}
                        className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
                        <div className="overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <figcaption className="p-4">
                          <p className="font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                            {item.unitName}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Bagian VIDEO */}
              {videos.length > 0 && (
                <div>
                  <h2 className="font-display flex items-center gap-2.5 text-xl font-bold text-slate-900 sm:text-2xl">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-400 text-emerald-950">
                      <Video size={18} />
                    </span>
                    Video{" "}
                    <span className="text-sm font-semibold text-slate-400">
                      ({videos.length})
                    </span>
                  </h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((item) => (
                      <figure
                        key={item.id}
                        className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
                        <video
                          src={item.src}
                          poster={item.poster}
                          controls
                          preload="none"
                          className="h-56 w-full object-cover"
                        />
                        <figcaption className="p-4">
                          <p className="font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <span className="mt-1 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                            {item.unitName}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
