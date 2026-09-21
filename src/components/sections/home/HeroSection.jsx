import { ArrowRight, Sparkles } from "lucide-react";
import { stats } from "../../../data/site";

export default function HeroSection() {
  return (
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
            <Sparkles size={16} className="text-amber-300" /> Yayasan Pendidikan
            Islam Miftahul Hidayah
          </div>
          <h1 className="font-display mt-7 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl sm:text-6xl lg:text-7xl">
            Tumbuh dengan iman.{" "}
            <span className="text-amber-300">Melangkah</span> dengan ilmu.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-emerald-50/80">
            Rumah belajar yang menumbuhkan generasi Qurani, berpengetahuan, dan
            berakhlak mulia untuk masa depan yang lebih bermakna.
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
          {stats.map(([number, label]) => (
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
  );
}
