"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { gtmPillar, gtmIndustries } from "@/lib/content/gtm";
import { automationPillar, automationIndustries } from "@/lib/content/automation";

const pillars = [
  { pillar: gtmPillar, industries: gtmIndustries },
  { pillar: automationPillar, industries: automationIndustries },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5 lg:px-6">
        <Logo inverted />

        <nav className="hidden items-center gap-1 lg:flex">
          {pillars.map(({ pillar, industries }) => (
            <div
              key={pillar.href}
              className="relative"
              onMouseEnter={() => setOpenMenu(pillar.href)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(pillar.href)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
              }}
            >
              <Link
                href={pillar.href}
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.09em] text-cream/68 hover:bg-white/5 hover:text-cream"
              >
                {pillar.label}
                <span aria-hidden className="text-xs">
                  ▾
                </span>
              </Link>
              {openMenu === pillar.href && (
                <div className="glass-strong absolute left-0 top-[calc(100%+.75rem)] w-72 overflow-hidden rounded-2xl p-2">
                  <Link
                    href={pillar.href}
                    className="block rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-[.1em] text-red hover:bg-red/10"
                  >
                    {pillar.name} Overview
                  </Link>
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`${pillar.href}/${industry.slug}`}
                      className="block rounded-xl px-4 py-2.5 text-sm text-cream/65 hover:bg-white/6 hover:text-cream"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.09em] text-cream/68 hover:bg-white/5 hover:text-cream"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="cta-primary ml-3 !min-h-0 !px-5 !py-2.5"
          >
            Start the Audit <span aria-hidden>↗</span>
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`h-px w-5 bg-cream transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-cream transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-cream transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="glass-strong mx-auto mt-2 max-w-7xl rounded-2xl p-4 lg:hidden">
          {pillars.map(({ pillar, industries }) => (
            <div key={pillar.href} className="border-b border-white/8">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-xs font-semibold uppercase tracking-[.1em] text-cream"
                onClick={() =>
                  setMobileSection((s) => (s === pillar.href ? null : pillar.href))
                }
              >
                {pillar.label}
                <span aria-hidden>{mobileSection === pillar.href ? "−" : "+"}</span>
              </button>
              {mobileSection === pillar.href && (
                <div className="pb-4">
                  <Link
                    href={pillar.href}
                    className="block rounded-lg py-2 text-sm font-semibold text-red"
                    onClick={() => setMobileOpen(false)}
                  >
                    {pillar.name} Overview
                  </Link>
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`${pillar.href}/${industry.slug}`}
                      className="block rounded-lg py-2 text-sm text-cream/65"
                      onClick={() => setMobileOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/about"
            className="block border-b border-white/8 py-4 text-xs font-semibold uppercase tracking-[.1em] text-cream"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="cta-primary mt-4 flex w-full"
            onClick={() => setMobileOpen(false)}
          >
            Start the Audit <span aria-hidden>↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
