import Link from "next/link";

export default function CTABand({
  eyebrow = "Get Started",
  title,
  subtitle,
  ctaLabel = "Book Your Audit",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10">
      <div className="glass-strong reveal relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 overflow-hidden rounded-[2rem] px-7 py-12 sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-16">
        <div className="absolute -right-20 -top-32 size-72 rounded-full bg-red/12 blur-3xl" aria-hidden />
        <div className="relative">
          <p className="eyebrow">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.08] tracking-[-.035em] text-cream sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base leading-7 text-cream/58">
              {subtitle}
            </p>
          )}
        </div>
        <Link
          href={ctaHref}
          className="cta-primary relative shrink-0"
        >
          {ctaLabel} <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}
