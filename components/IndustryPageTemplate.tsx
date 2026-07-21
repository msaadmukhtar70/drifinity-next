import Link from "next/link";
import Hero from "./Hero";
import SectionHeading from "./SectionHeading";
import ProcessSteps from "./ProcessSteps";
import CTABand from "./CTABand";
import { IndustryContent } from "@/lib/content/types";

export default function IndustryPageTemplate({
  industry,
  pillarLabel,
  pillarHref,
  pillarName,
}: {
  industry: IndustryContent;
  pillarLabel: string;
  pillarHref: string;
  pillarName: string;
}) {
  return (
    <>
      <Hero
        eyebrow={`${pillarLabel} — ${industry.name}`}
        title={industry.headline}
        subtitle={industry.dek}
        primaryCta={{ label: "Book Your Diagnostic", href: "/contact" }}
        secondaryCta={{ label: `${pillarName} Overview`, href: pillarHref }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Common Signals"
          title="Where the system usually starts to leak."
          description="One symptom is inconvenient. Several together point to a structural problem worth measuring."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {industry.painPoints.map((point, i) => (
            <li key={i} className="glass-card reveal flex gap-4 p-6 sm:p-7">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-red/20 bg-red/8 text-sm text-red">{String(i + 1).padStart(2, "0")}</span>
              <span className="pt-1 text-sm leading-6 text-cream/68">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-pad border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Path Forward"
            title="Diagnose the constraint. Build the right system."
            description="The work is specific to your environment and the evidence we uncover — never a generic package forced onto the problem."
          />
          <div className="mt-10">
            <ProcessSteps steps={industry.approach.map((a, i) => ({
              number: `0${i + 1}`,
              title: a.title,
              description: a.description,
            }))} inverted />
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="glass-strong reveal relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="absolute -right-24 -top-24 size-64 rounded-full bg-red/10 blur-3xl" aria-hidden />
          <p className="eyebrow">
            The Outcome
          </p>
          <p className="relative mt-6 max-w-4xl font-display text-2xl leading-[1.2] tracking-[-.03em] text-cream sm:text-4xl">
            {industry.outcome}
          </p>
        </div>
      </section>

      <CTABand
        title={`See what the hidden gaps in ${industry.name.toLowerCase()} are really costing.`}
        subtitle="Start with a low-cost, no-obligation diagnostic. Get real numbers and a clear action plan before any bigger commitment."
        ctaLabel="Measure the Opportunity"
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Link
          href={pillarHref}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.1em] text-stone hover:text-red"
        >
          ← Back to {pillarName}
        </Link>
      </div>
    </>
  );
}
