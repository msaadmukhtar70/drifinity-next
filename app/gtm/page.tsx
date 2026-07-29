import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCard from "@/components/IndustryCard";
import CTABand from "@/components/CTABand";
import { gtmPillar, gtmIndustries } from "@/lib/content/gtm";

export const metadata: Metadata = {
  title: {
    absolute: "GTM Services for Startups, Agencies & More — Drifinity",
  },
  description:
    "Stop relying on referrals. Drifinity builds repeatable GTM systems — positioning, pipeline, and outbound — for startups, agencies, and more.",
};

export default function GTMHub() {
  return (
    <>
      <Hero
        eyebrow="GTM"
        title="Fix the offer, the positioning, and the pipeline."
        subtitle={gtmPillar.summary}
        primaryCta={{ label: "Book Your Audit", href: "/contact" }}
        secondaryCta={{ label: "See Who We Help", href: "#industries" }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="The Problem"
            title="Growth that depends on referrals or founder hustle isn't a system"
            description="It's momentum. Momentum runs out. We replace it with an offer people say yes to and a pipeline that keeps producing whether or not anyone's personally pushing it this week."
          />
          <div className="glass-card reveal p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-red">The audit answers</p>
            <ul className="mt-6 space-y-4 text-sm text-cream/65">
              {["Where qualified buyers are dropping out", "Why the offer is creating hesitation", "Which pipeline gap is costing the most", "What a practical fix is worth in revenue"].map((item) => <li key={item} className="flex gap-3"><span className="text-red">✓</span>{item}</li>)}
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
            <ProcessSteps inverted />
          </div>
        </div>
      </section>

      <section id="industries" className="section-pad mx-auto max-w-7xl scroll-mt-28 px-6 lg:px-10">
        <SectionHeading eyebrow="Who We Work With" title="Built for how you sell" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gtmIndustries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              name={industry.name}
              headline={industry.headline}
              href={`/gtm/${industry.slug}`}
            />
          ))}
        </div>
      </section>

      <CTABand
        title="Not sure if it's a GTM problem or an operations problem?"
        subtitle="That's exactly what the audit is for. Start there and we'll tell you straight."
        ctaLabel="Book Your Audit"
      />
    </>
  );
}
