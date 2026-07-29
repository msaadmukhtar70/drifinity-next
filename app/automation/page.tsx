import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCard from "@/components/IndustryCard";
import CTABand from "@/components/CTABand";
import { automationPillar, automationIndustries } from "@/lib/content/automation";

export const metadata: Metadata = {
  title: {
    absolute: "Automation Services | Cut Manual Admin — Drifinity",
  },
  description:
    "Drifinity builds automation systems that remove manual admin for agencies, coaches, clinics, law firms, and trading companies.",
};

export default function AutomationHub() {
  return (
    <>
      <Hero
        eyebrow="Automation"
        title="Remove the manual admin. Keep the software you already use."
        subtitle={automationPillar.summary}
        primaryCta={{ label: "Book Your Audit", href: "/contact" }}
        secondaryCta={{ label: "See Who We Help", href: "#industries" }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="The Problem"
            title="Manual admin doesn't scale — and it's usually invisible until you count it"
            description="Reminders, intake, follow-ups, document handling, status updates: each one feels small. Together they're hours a week that should be going toward the work that actually pays."
          />
          <div className="glass-card reveal p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-red">The audit answers</p>
            <ul className="mt-6 space-y-4 text-sm text-cream/65">
              {["Where staff time is disappearing", "Which handoffs create delay or risk", "What should be automated first", "How much capacity the fix can return"].map((item) => <li key={item} className="flex gap-3"><span className="text-red">✓</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="How It Works"
            title="Audit. Implementation. Optional retainer."
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                {
                  number: "01",
                  title: "Audit",
                  description:
                    "A low-cost, no-obligation diagnostic that maps exactly where the gap is — growth or operations — and what closing it is worth, in real numbers.",
                },
                {
                  number: "02",
                  title: "Implementation",
                  description:
                    "We build the fix: the offer, the pipeline, or the workflow — scoped to what the audit actually found, not a generic package.",
                },
                {
                  number: "03",
                  title: "Retainer",
                  description:
                    "Optional. Once the system is live, we can stay on to refine it against real results as your business changes.",
                },
              ]}
              inverted
            />
          </div>
        </div>
      </section>

      <section id="industries" className="section-pad mx-auto max-w-7xl scroll-mt-28 px-6 lg:px-10">
        <SectionHeading eyebrow="Who We Work With" title="Built for how you operate" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {automationIndustries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              name={industry.name}
              headline={industry.headline}
              href={`/automation/${industry.slug}`}
            />
          ))}
        </div>
      </section>

      <CTABand
        title="Curious how much manual admin is actually costing you?"
        subtitle="The audit puts a real number on it — no obligation to go further."
        ctaLabel="Book Your Audit"
      />
    </>
  );
}
