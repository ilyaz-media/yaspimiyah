import SectionTitle from "../../common/SectionTitle";
import { values } from "../../../data/site";

export default function NilaiSection() {
  return (
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
  );
}
