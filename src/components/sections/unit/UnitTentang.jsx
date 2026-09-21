import { Check } from "lucide-react";
import SectionTitle from "../../common/SectionTitle";

export default function UnitTentang({ unit }) {
  return (
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
  );
}
