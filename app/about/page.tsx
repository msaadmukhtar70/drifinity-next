import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Drifinity is built on real operator experience, not agency theory — diagnostic-first, with one brand and two clear entry points: growth or operations.",
};

const values = [
  {
    title: "Clarity before commitment",
    description:
      "You see the gap, its cost, and the practical route forward before deciding whether implementation makes sense.",
  },
  {
    title: "Operator logic over agency theatre",
    description:
      "The fixes we build come from having actually run growth and operations functions — not from a slide deck of best practices.",
  },
  {
    title: "The fix follows the evidence",
    description:
      "GTM and Automation are different disciplines solving different problems. We don't force one playbook onto every client.",
  },
  {
    title: "Built for ownership, not dependency",
    description:
      "What we build is meant to work whether or not you keep us on retainer. The retainer is optional for a reason.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Why Drifinity Exists"
        title="The right fix starts with the right diagnosis."
        subtitle="Most growing businesses can feel the friction, but cannot see whether the constraint lives in demand, delivery, or the handoff between them. Drifinity makes that visible — then builds only what the evidence supports."
        primaryCta={{ label: "Start With a Diagnostic", href: "/contact" }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our Point of View"
            title="A proposal is only useful after the problem is understood."
          />
          <div className="glass-card reveal space-y-5 p-7 text-base leading-7 text-stone sm:p-9">
            <p>
              Most firms lead with the thing they already want to sell. We begin with a low-cost, no-obligation diagnostic that identifies where the constraint actually sits — growth, operations, or both — and what it is costing in real terms.
            </p>
            <p>
              That gives you something far more useful than a pitch: a numbers-backed view of the problem, a clear priority order, and a decision you can evaluate on its merits.
            </p>
            <p>
              Only then does work move to implementation, scoped to what the evidence justifies. Ongoing support remains optional for clients who want the system refined against real results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="One Connected System"
            title="Demand and delivery fail in different ways."
            description="GTM improves how new business is won: the offer, positioning, and pipeline. Automation improves how that business is delivered: the repetitive admin, handoffs, and follow-up consuming capacity. Some clients need one path. The best growth-stage systems eventually need both."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="glass-card reveal p-8"><p className="text-xs font-bold uppercase tracking-[.15em] text-red">Demand</p><h3 className="mt-4 font-display text-2xl text-cream">Win the right work.</h3><p className="mt-3 text-sm leading-6 text-stone">A focused offer and a pipeline that creates qualified conversations predictably.</p></div>
            <div className="glass-card reveal p-8"><p className="text-xs font-bold uppercase tracking-[.15em] text-red">Delivery</p><h3 className="mt-4 font-display text-2xl text-cream">Handle it without the drag.</h3><p className="mt-3 text-sm leading-6 text-stone">Workflows that protect team capacity and keep client experience consistent.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Operating Principles" title="What the work should feel like." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="glass-card reveal p-7 sm:p-8">
              <h3 className="font-display text-lg tracking-tight text-cream">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Replace the suspicion with a clear answer."
        subtitle="Start with the diagnostic. You will get the numbers, the priorities, and a practical plan either way."
        ctaLabel="Book Your Diagnostic"
      />
    </>
  );
}
