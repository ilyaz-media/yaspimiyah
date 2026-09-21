import { Play } from "lucide-react";
import SectionTitle from "../../common/SectionTitle";

export default function GaleriSection() {
  return (
    <section id="galeri" className="bg-white py-20 text-white sm:py-28">
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
  );
}
