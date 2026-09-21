import { ArrowRight, Check, Quote } from "lucide-react";
import SectionTitle from "../../common/SectionTitle";
import { tentangPoints } from "../../../data/site";

export default function TentangSection() {
  return (
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
              Pendidikan adalah bekal terbaik untuk membangun masa depan umat.
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
            {tentangPoints.map((item) => (
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
  );
}
