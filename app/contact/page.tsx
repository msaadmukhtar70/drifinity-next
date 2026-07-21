import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Diagnostic",
  description: "Book a low-cost, no-obligation diagnostic with Drifinity and get a numbers-backed view of the constraint and the best next step.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(214,40,40,.11),transparent_28rem)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Start With Clarity</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.02] tracking-[-.05em] text-gradient sm:text-5xl lg:text-6xl">Book your diagnostic.</h1>
          <p className="mt-6 max-w-md text-base leading-7 text-cream/58">
            Tell us what feels stuck. We will follow up to understand the context, confirm fit, and schedule a low-cost diagnostic focused on the highest-value constraint.
          </p>

          <div className="mt-10 space-y-4">
            {["A clear diagnosis, not a sales deck", "A quantified view of the opportunity", "A priority map and practical next steps", "No obligation to continue into implementation"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-cream/62">
                <span className="grid size-7 place-items-center rounded-full border border-red/20 bg-red/8 text-xs text-red">✓</span>{item}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/8 pt-7">
            <p className="text-xs uppercase tracking-[.12em] text-cream/30">Prefer email?</p>
            <a href="mailto:hello@drifinity.com" className="mt-2 inline-block text-sm text-cream/65 hover:text-red">hello@drifinity.com</a>
          </div>
        </div>

        <div className="glass-strong rounded-[2rem] p-6 sm:p-9 lg:p-11">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-red">Tell us where it hurts</p>
            <h2 className="mt-3 font-display text-2xl tracking-[-.03em] text-cream">A few details. No lengthy brief.</h2>
            <p className="mt-2 text-sm text-cream/42">We typically reply within one business day.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
