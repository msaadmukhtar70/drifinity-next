import Link from "next/link";
import Logo from "./Logo";
import { gtmPillar, gtmIndustries } from "@/lib/content/gtm";
import { automationPillar, automationIndustries } from "@/lib/content/automation";

const linkClass = "text-sm text-cream/50 hover:text-red";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/8 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-6 text-cream/48">
              One brand, two ways in: fix how you grow, or fix how you run.
              Start with a low-cost audit — real numbers before any bigger
              commitment.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-red hover:text-red-bright">
              Book Your Audit <span aria-hidden>↗</span>
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[.15em] text-red">{gtmPillar.name}</p>
            <ul className="mt-5 space-y-3">
              <li><Link href={gtmPillar.href} className={linkClass}>Overview</Link></li>
              {gtmIndustries.map((industry) => (
                <li key={industry.slug}><Link href={`${gtmPillar.href}/${industry.slug}`} className={linkClass}>{industry.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[.15em] text-red">{automationPillar.name}</p>
            <ul className="mt-5 space-y-3">
              <li><Link href={automationPillar.href} className={linkClass}>Overview</Link></li>
              {automationIndustries.map((industry) => (
                <li key={industry.slug}><Link href={`${automationPillar.href}/${industry.slug}`} className={linkClass}>{industry.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[.15em] text-red">Company</p>
            <ul className="mt-5 space-y-3">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><a href="mailto:contact@drifinity.com" className={linkClass}>contact@drifinity.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-cream/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Drifinity. All rights reserved.</p>
          <p>Evidence first. Systems second. Growth that compounds.</p>
        </div>
      </div>
    </footer>
  );
}
