import { ArrowLeft, ArrowRight, Check, GraduationCap, Sparkles } from "lucide-react";

export default function UnitHero({ unit }) {
  return (
    <section
      data-reveal="pop"
      className="relative overflow-hidden bg-emerald-950 pb-20 pt-28 text-white sm:pb-24 sm:pt-36">
      {/* Latar: foto + gradasi + glow + pola grid */}
      <div className="absolute inset-0">
        <img
          src={unit.image}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(217,166,56,.18),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(16,185,129,.16),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[.05] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-white/60">
          <a
            href="#beranda"
            className="inline-flex items-center gap-1.5 transition hover:text-amber-300">
            <ArrowLeft size={15} /> Beranda
          </a>
          <span className="text-white/30">/</span>
          <a href="#unit" className="transition hover:text-amber-300">
            Unit pendidikan
          </a>
          <span className="text-white/30">/</span>
          <span className="text-amber-300">{unit.tag}</span>
        </nav>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          {/* Kolom teks */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-amber-300 backdrop-blur">
              <Sparkles size={14} /> {unit.tag}
            </span>

            <h1 className="font-display mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {unit.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
              {unit.detail}
            </p>

            {/* Chip program unggulan */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {unit.programs.map((program) => (
                <span
                  key={program}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.08] px-4 py-2 text-sm font-semibold text-emerald-50 backdrop-blur">
                  <Check size={15} className="text-amber-300" />
                  {program}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:info@yaspimiyah.sch.id"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-emerald-950 transition hover:bg-amber-300">
                Hubungi kami <ArrowRight size={18} />
              </a>
              <a
                href="#kegiatan-unit"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10">
                Lihat kegiatan <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Kolom visual: kartu foto + kartu mengambang */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-amber-400/20 blur-3xl" />
            <img
              src={unit.image}
              alt={unit.name}
              className="relative h-[440px] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/15"
            />

            <span className="absolute right-5 top-5 rounded-full bg-emerald-950/70 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-amber-300 backdrop-blur">
              {unit.tag}
            </span>

            <div className="absolute -bottom-7 -left-7 max-w-[260px] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
              <GraduationCap className="text-amber-300" size={26} />
              <p className="mt-3 text-xs font-bold uppercase tracking-[.18em] text-emerald-100/80">
                Program unggulan
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-6 text-white">
                {unit.programs[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
