import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCard from "@/components/IndustryCard";
import CTABand from "@/components/CTABand";
import { gtmPillar, gtmIndustries } from "@/lib/content/gtm";

export const metadata: Metadata = {
  title: "GTM",
  description: gtmPillar.summary,
};

export default function GTMHub() {
  return (
    <>
      <Hero
        eyebrow="Go-To-Market Systems"
        title="Turn unpredictable growth into a repeatable system."
        subtitle="We sharpen the offer, clarify why buyers should care, and build the pipeline mechanics that keep qualified conversations moving — without depending on referrals or founder hustle."
        primaryCta={{ label: "Diagnose Your Pipeline", href: "/contact" }}
        secondaryCta={{ label: "See Who We Help", href: "#industries" }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="The Real Constraint"
            title="Momentum is not the same as a growth system."
            description="Referrals, founder relationships, and occasional campaigns can create traction. They cannot create predictability. When every sale needs a heroic push, the business has demand — but no dependable way to convert it."
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
            eyebrow="The Engagement"
            title="Diagnose it. Build it. Improve it."
            description="No pre-packaged campaign. The implementation is scoped around what your actual pipeline data reveals."
          />
          <div className="mt-12">
            <ProcessSteps inverted />
          </div>
        </div>
      </section>

      <section id="industries" className="section-pad mx-auto max-w-7xl scroll-mt-28 px-6 lg:px-10">
        <SectionHeading eyebrow="Where We Specialise" title="GTM designed around how you sell." description="Different buying journeys break in different places. Choose the model closest to yours." />
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
        title="Not sure whether growth or operations is the real constraint?"
        subtitle="That is exactly what the diagnostic separates. Start there and we will show you the highest-value problem to solve first."
        ctaLabel="Find the Constraint"
      />
    </>
  );
}
