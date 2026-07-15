import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/Assets/yayasan/YPI MIFTAHUL HIDAYAH.png"
              alt="Logo Yaspimiyah"
              className="h-12 w-12 rounded-full bg-white object-contain p-1"
            />
            <strong className="font-display text-xl text-white">
              YASPIMIYAH
            </strong>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Yayasan Pendidikan Islam Miftahul Hidayah. Menemani generasi untuk
            tumbuh dalam iman, ilmu, dan akhlak mulia.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Jelajahi</h3>
          <div className="mt-4 grid gap-3 text-sm">
            {[
              ["Beranda", "#beranda"],
              ["Tentang", "#tentang"],
              ["Unit pendidikan", "#unit"],
              ["Galeri", "#galeri"],
            ].map(([name, href]) => (
              <a key={href} href={href} className="hover:text-amber-300">
                {name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Hubungi</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p className="flex gap-2">
              <MapPin size={17} className="shrink-0 text-amber-400" />
              Cinisti, Kabupaten Garut, Jawa Barat
            </p>
            <a
              href="mailto:info@yaspimiyah.sch.id"
              className="flex gap-2 hover:text-amber-300">
              <Mail size={17} className="shrink-0 text-amber-400" />
              info@yaspimiyah.sch.id
            </a>
            <p className="flex gap-2">
              <Phone size={17} className="shrink-0 text-amber-400" />
              Informasi melalui kontak resmi yayasan
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between lg:px-8">
          <span>© 2026 Yaspimiyah. Hak cipta dilindungi.</span>
          <span>Yayasan Pendidikan Islam Miftahul Hidayah</span>
        </div>
      </div>
    </footer>
  );
}
