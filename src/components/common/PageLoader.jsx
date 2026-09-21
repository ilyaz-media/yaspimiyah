export default function PageLoader() {
  return (
    <div className="page-loader fixed inset-0 z-[100] grid place-items-center bg-emerald-950/95 text-white">
      <div className="relative grid h-28 w-28 place-items-center">
        <div className="loader-orbit absolute inset-0 rounded-full border-2 border-amber-300 border-t-transparent" />
        <div className="loader-orbit absolute inset-3 rounded-full border-2 border-emerald-300 border-b-transparent [animation-direction:reverse]" />
        <img
          src="/Assets/yayasan/YPI MIFTAHUL HIDAYAH.png"
          alt="Memuat halaman"
          className="h-14 w-14 rounded-full bg-white p-1"
        />
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[.3em] text-amber-300">
        Yaspimiyah
      </p>
    </div>
  );
}
