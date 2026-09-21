import { ArrowRight } from "lucide-react";
import SectionTitle from "../../common/SectionTitle";
import { units } from "../../../data/units";

export default function UnitSection() {
  return (
    <section id="unit" data-reveal="right" className="bg-[#f1f6f1] py-20 sm:py-28">
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
              className={`group relative min-h-[300px] overflow-hidden rounded-3xl ${
                index === 0 ? "sm:col-span-2" : ""
              }`}>
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
  );
}
