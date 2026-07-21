"use client";

import Link from "next/link";
import { useState } from "react";

const paths = {
  growth: {
    label: "Growth feels unpredictable",
    title: "Your growth system is leaking.",
    description: "We inspect the offer, positioning, lead flow, follow-up, and conversion path to find where demand is stalling — then quantify the upside of fixing it.",
    signals: ["Referrals drive most new business", "The founder still closes every deal", "Leads arrive, but conversion is inconsistent"],
    href: "/gtm",
    cta: "Explore GTM",
  },
  operations: {
    label: "The team is buried in admin",
    title: "Operational drag is eating capacity.",
    description: "We trace repetitive work across intake, reminders, handoffs, documents, and status updates to show exactly where time disappears — and what to automate first.",
    signals: ["The same data is entered more than once", "Follow-ups depend on memory", "Skilled people lose hours to routine admin"],
    href: "/automation",
    cta: "Explore Automation",
  },
};

export default function DiagnosticSwitch() {
  const [active, setActive] = useState<keyof typeof paths>("growth");
  const path = paths[active];

  return (
    <div className="glass-strong reveal overflow-hidden rounded-[2rem] p-2 sm:p-3">
      <div className="grid gap-2 md:grid-cols-2">
        {(Object.keys(paths) as Array<keyof typeof paths>).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className={`rounded-2xl px-5 py-4 text-left text-sm font-semibold ${active === key ? "border border-red/25 bg-red/10 text-cream" : "border border-transparent text-cream/45 hover:bg-white/4 hover:text-cream/75"}`}
          >
            <span className={`mr-3 inline-block size-2 rounded-full ${active === key ? "bg-red shadow-[0_0_12px_var(--color-red)]" : "bg-white/15"}`} />
            {paths[key].label}
          </button>
        ))}
      </div>
      <div className="grid gap-10 px-5 py-9 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.15em] text-red">Likely diagnosis</p>
          <h3 className="mt-4 font-display text-2xl tracking-[-.03em] text-cream sm:text-3xl">{path.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-stone sm:text-base sm:leading-7">{path.description}</p>
          <Link href={path.href} className="cta-secondary mt-7">{path.cta} <span aria-hidden>→</span></Link>
        </div>
        <ul className="space-y-3">
          {path.signals.map((signal) => (
            <li key={signal} className="flex items-start gap-3 rounded-xl border border-white/7 bg-white/3 px-4 py-3 text-sm text-cream/63">
              <span className="mt-0.5 text-red" aria-hidden>✓</span>{signal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
