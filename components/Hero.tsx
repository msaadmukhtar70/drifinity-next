import Link from "next/link";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "dark",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "light";
  children?: React.ReactNode;
}) {
  const dark = variant === "dark";
  return (
    <section className={`relative overflow-hidden ${dark ? "text-cream" : "text-cream"}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(214,40,40,.12),transparent_24rem)]" />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.2fr_.8fr] lg:px-10 lg:py-24">
        <div className="relative z-10">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.6rem)] leading-[0.98] tracking-[-0.055em] text-gradient">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-2xl text-base leading-7 text-cream/64 sm:text-lg sm:leading-8">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {primaryCta && (
                <Link href={primaryCta.href} className="cta-primary">
                  {primaryCta.label}<span aria-hidden>↗</span>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="cta-secondary">
                  {secondaryCta.label}<span aria-hidden>→</span>
                </Link>
              )}
            </div>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-cream/45">
            <span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-[#64f2c2] shadow-[0_0_12px_#64f2c2]" /> Low-cost diagnostic</span>
            <span>No obligation</span>
            <span>Clear next-step plan</span>
          </div>
          {children}
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[450px] place-items-center lg:grid" aria-hidden>
          <div className="absolute inset-[4%] rounded-full border border-red/15 hero-orbit">
            <span className="absolute -right-2 top-1/2 size-4 rounded-full border border-red/60 bg-red/25 shadow-[0_0_18px_rgba(214,40,40,.55)]" />
          </div>
          <div className="absolute inset-[17%] rounded-full border border-dashed border-[#8f1414]/30 hero-orbit--reverse">
            <span className="absolute left-[13%] top-[5%] size-3 rounded-full bg-[#8f1414]/80 shadow-[0_0_14px_#8f1414]" />
          </div>
          <div className="glass-strong relative w-[70%] overflow-hidden rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[.2em] text-red">Live diagnostic</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-cream/45"><i className="size-1.5 rounded-full bg-[#64f2c2]" /> Scanning</span>
            </div>
            <div className="mt-8 space-y-5">
              {[
                ["Offer clarity", "78%"],
                ["Pipeline health", "42%"],
                ["Operational drag", "64%"],
              ].map(([label, value], index) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-[11px] text-cream/55"><span>{label}</span><span>{value}</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/6"><div className="h-full rounded-full bg-gradient-to-r from-red-bright to-[#8f1414]" style={{ width: value, animationDelay: `${index * 200}ms` }} /></div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-red/15 bg-red/6 p-4">
              <div className="mb-2 h-px w-full signal-line" />
              <p className="text-[10px] uppercase tracking-[.15em] text-cream/38">Primary opportunity</p>
              <p className="mt-1 text-sm font-semibold text-cream">Find the leak. Build the fix.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
