import SectionTitle from "../../common/SectionTitle";

export default function UnitGaleri({ unit }) {
  return (
    <section id="kegiatan-unit" data-reveal="right" className="bg-[#f1f6f1] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Kegiatan kami"
          title="Belajar dalam pengalaman yang berkesan."
          text="Keseharian peserta didik diisi dengan kegiatan yang mendukung ilmu, karakter, dan kebersamaan."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {unit.gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${unit.name} kegiatan ${index + 1}`}
              className="h-64 w-full rounded-2xl object-cover shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
