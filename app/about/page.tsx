import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: {
    absolute: "About Drifinity | GTM & Automation Operators",
  },
  description:
    "Drifinity is built on real operator experience, not agency theory — diagnostic-first, with one brand and two clear entry points.",
};

const values = [
  {
    title: "Numbers before commitment",
    description:
      "We don't ask you to trust a pitch. The audit gives you real numbers on the gap and what closing it is worth — you decide from there.",
  },
  {
    title: "Operator experience, not agency theory",
    description:
      "The fixes we build come from having actually run growth and operations functions — not from a slide deck of best practices.",
  },
  {
    title: "Fit the fix to what's broken",
    description:
      "GTM and Automation are different disciplines solving different problems. We don't force one playbook onto every client.",
  },
  {
    title: "No dependency on us to keep running",
    description:
      "What we build is meant to work whether or not you keep us on retainer. The retainer is optional for a reason.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Drifinity"
        title={'One brand. Two clear entry points. No vague "we do everything" pitch.'}
        subtitle="Drifinity exists because most growth-stage businesses know something's broken, but haven't pinned down whether it's how they grow or how they run — and most agencies aren't built to tell them the difference."
        primaryCta={{ label: "Book Your Audit", href: "/contact" }}
      />

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why We Exist"
            title="Diagnostic-first, because pitches don't fix anything"
          />
          <div className="glass-card reveal space-y-5 p-7 text-base leading-7 text-stone sm:p-9">
            <p>
              Most agencies lead with a proposal. We lead with a diagnostic. Every
              engagement starts with a low-cost, no-obligation audit that maps
              exactly where the gap is — growth or operations — and what closing
              it is worth, in real numbers.
            </p>
            <p>
              That&apos;s not a sales tactic. It&apos;s because we&apos;ve found that the
              businesses we work with already suspect something&apos;s wrong; what
              they don&apos;t have is a clear, numbers-backed picture of what it&apos;s
              costing them and what fixing it actually requires. The audit gives
              you that picture before you commit to anything bigger.
            </p>
            <p>
              Only once the audit is done does the work move to implementation
              — scoped to what we actually found, not a pre-packaged offer. An
              optional retainer follows for clients who want us to keep refining
              the system against real results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Two Pillars"
            title="Growth and operations are different problems"
            description="GTM fixes how new business shows up: the offer, the positioning, the pipeline. Automation fixes how the business runs once that business shows up: the manual admin eating time that should go toward clients. Some clients need one. Some need both. Either way, it's one brand and one point of contact."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="glass-card reveal p-8"><p className="text-xs font-bold uppercase tracking-[.15em] text-red">Demand</p><h3 className="mt-4 font-display text-2xl text-cream">Win the right work.</h3><p className="mt-3 text-sm leading-6 text-stone">A focused offer and a pipeline that creates qualified conversations predictably.</p></div>
            <div className="glass-card reveal p-8"><p className="text-xs font-bold uppercase tracking-[.15em] text-red">Delivery</p><h3 className="mt-4 font-display text-2xl text-cream">Handle it without the drag.</h3><p className="mt-3 text-sm leading-6 text-stone">Workflows that protect team capacity and keep client experience consistent.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="How We Operate" title="What we hold ourselves to" />
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
        title="Ready to find out what's actually going on?"
        subtitle="Start with the audit. You'll get real numbers either way."
        ctaLabel="Book Your Audit"
      />
    </>
  );
}
