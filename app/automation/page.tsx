import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCard from "@/components/IndustryCard";
import CTABand from "@/components/CTABand";
import { automationPillar, automationIndustries } from "@/lib/content/automation";

export const metadata: Metadata = {
  title: "Automation",
  description: automationPillar.summary,
};

export default function AutomationHub() {
  return (
    <>
      <Hero
        eyebrow="Operations Automation"
        title="Return your team’s time to work that matters."
        subtitle="We remove repetitive admin from intake, reminders, follow-ups, documents, and status updates — using the software your team already knows."
        primaryCta={{ label: "Diagnose the Drag", href: "/contact" }}
        secondaryCta={{ label: "See Who We Help", href: "#industries" }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="The Hidden Cost"
            title="Small manual tasks become a very expensive system."
            description="Each reminder, handoff, form, follow-up, and status update feels harmless on its own. Count them across the team and the cost shows up in delayed work, missed details, and skilled people doing low-value admin."
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
            eyebrow="The Engagement"
            title="Trace it. Automate it. Keep it useful."
            description="We build around the way your team already works, then refine the system as your volume and needs change."
          />
          <div className="mt-12">
            <ProcessSteps inverted />
          </div>
        </div>
      </section>

      <section id="industries" className="section-pad mx-auto max-w-7xl scroll-mt-28 px-6 lg:px-10">
        <SectionHeading eyebrow="Where We Specialise" title="Automation designed around how you operate." description="Every service model has a different kind of operational drag. Choose the environment closest to yours." />
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
        title="How much capacity is hidden inside your current workflow?"
        subtitle="The diagnostic gives you a real number, a priority map, and a practical automation plan — with no obligation to go further."
        ctaLabel="Measure the Opportunity"
      />
    </>
  );
}
