export default function SectionTitle({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
        <span
          className={
            centered ? "h-px w-6 bg-amber-500" : "h-px w-8 bg-amber-500"
          }
        />{" "}
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-5 leading-7 text-slate-600">{text}</p>}
    </div>
  );
}
