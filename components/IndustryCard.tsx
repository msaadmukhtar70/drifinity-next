import Link from "next/link";

export default function IndustryCard({
  name,
  headline,
  href,
}: {
  name: string;
  headline: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="glass-card reveal group flex min-h-64 flex-col justify-between p-7"
    >
      <div>
        <div className="mb-7 flex items-center justify-between">
          <span className="grid size-10 place-items-center rounded-xl border border-red/20 bg-red/8 text-sm text-red" aria-hidden>◇</span>
          <span className="text-xs text-cream/24">Explore</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[.15em] text-red">
          {name}
        </p>
        <p className="mt-3 text-lg font-semibold leading-snug text-cream">
          {headline}
        </p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.1em] text-cream/55 group-hover:text-red">
        View opportunity <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
