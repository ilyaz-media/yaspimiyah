import { ArrowRight, GraduationCap } from "lucide-react";

export default function UnitCta({ unit }) {
  return (
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
  );
}
