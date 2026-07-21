import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CTABand from "@/components/CTABand";
import DiagnosticSwitch from "@/components/DiagnosticSwitch";
import { gtmPillar, gtmIndustries } from "@/lib/content/gtm";
import { automationPillar, automationIndustries } from "@/lib/content/automation";

const differentiators = [
  {
    number: "01",
    title: "Evidence before recommendations",
    description: "We diagnose the gap, quantify its cost, and show you the business case before asking you to commit to implementation.",
  },
  {
    number: "02",
    title: "Built by operators",
    description: "The systems come from real growth and operations experience — designed for the messiness of an actual working business.",
  },
  {
    number: "03",
    title: "Works with your existing stack",
    description: "We improve the tools and workflows you already use, avoiding another platform your team has to learn and maintain.",
  },
  {
    number: "04",
    title: "Designed to outlast the engagement",
    description: "The system belongs to you. Ongoing support is available, but dependency is never built into the solution.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Growth + Operations Intelligence"
        title="Find the leak. Build the fix. Grow without the guesswork."
        subtitle="Drifinity diagnoses what is blocking growth or draining capacity, puts a real number on the problem, and builds the system that solves it. No vague proposal. No unnecessary software."
        primaryCta={{ label: "Book Your Diagnostic", href: "/contact" }}
        secondaryCta={{ label: "Explore the Process", href: "#process" }}
      />

      <section className="border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-7 sm:grid-cols-4 lg:px-10">
          {["Diagnostic first", "Numbers-backed plan", "No new platform", "Optional retainer"].map((item) => (
            <div key={item} className="flex items-center gap-2.5 py-2 text-xs font-semibold uppercase tracking-[.08em] text-cream/45">
              <span className="size-1.5 rounded-full bg-red/75 shadow-[0_0_8px_rgba(214,40,40,.45)]" />{item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Start With the Symptom"
            title="What feels broken right now?"
            description="You do not need to arrive with the answer. Pick the closest symptom and we will trace it back to the underlying system."
          />
          <p className="max-w-lg text-sm leading-6 text-cream/38 lg:justify-self-end">
            Not sure which path fits? That is useful information too. The audit is designed to separate a growth problem from an operations problem before money is spent on the wrong fix.
          </p>
        </div>
        <div className="mt-10"><DiagnosticSwitch /></div>
      </section>

      <section className="section-pad relative border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Two Focused Systems"
            title="Fix demand, delivery — or both."
            description="Each path solves a different constraint. Together, they create a business that can win new work and handle it without adding operational drag."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { pillar: gtmPillar, industries: gtmIndustries, label: "01 / Demand System", href: "/gtm", cta: "Explore GTM" },
              { pillar: automationPillar, industries: automationIndustries, label: "02 / Delivery System", href: "/automation", cta: "Explore Automation" },
            ].map(({ pillar, industries, label, href, cta }) => (
              <article key={href} className="glass-card reveal group flex min-h-[520px] flex-col justify-between p-7 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[.15em] text-red">{label}</p>
                    <span className="grid size-11 place-items-center rounded-2xl border border-red/18 bg-red/7 text-red transition-transform duration-500 group-hover:rotate-12" aria-hidden>✦</span>
                  </div>
                  <h3 className="mt-10 max-w-lg font-display text-3xl leading-[1.08] tracking-[-.04em] text-cream sm:text-4xl">{pillar.tagline}</h3>
                  <p className="mt-5 max-w-lg text-sm leading-6 text-stone sm:text-base sm:leading-7">{pillar.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <Link key={industry.slug} href={`${href}/${industry.slug}`} className="rounded-full border border-white/9 bg-white/3 px-3 py-2 text-xs text-cream/50 hover:border-red/25 hover:bg-red/7 hover:text-red">
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href={href} className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.11em] text-cream group-hover:text-red">
                  {cta}<span className="grid size-8 place-items-center rounded-full border border-current" aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad mx-auto max-w-7xl scroll-mt-28 px-6 lg:px-10">
        <SectionHeading
          eyebrow="A Lower-Risk Way to Fix It"
          title="Clarity first. Commitment second."
          description="Every engagement follows the same logic: establish the facts, build only what the facts justify, then improve it against real-world results."
        />
        <div className="mt-12"><ProcessSteps /></div>
      </section>

      <section className="section-pad border-y border-white/7 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Why Drifinity" title="Built for decisions, not dependency." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.number} className="glass-card reveal p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <span className="text-xs font-bold text-red">{item.number}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-[-.025em] text-cream">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Your First Step"
        title="Know what the problem is worth before you pay to solve it."
        subtitle="Start with a low-cost, no-obligation diagnostic. You will leave with the numbers, the priorities, and a clear next-step plan — whether or not we build it."
        ctaLabel="Book Your Diagnostic"
      />
    </>
  );
}
