import { ArrowRight } from "lucide-react";

export default function KontakSection() {
  return (
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
              Kenali program kami dan konsultasikan pilihan unit pendidikan
              untuk putra-putri Anda.
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
  );
}
