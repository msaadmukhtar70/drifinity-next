"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-cream placeholder:text-cream/25 transition-colors hover:border-white/16 focus:border-red/45 focus:bg-white/[0.065] focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      setErrorMessage(
        "Form isn't connected yet — set NEXT_PUBLIC_FORM_ENDPOINT in .env.local."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong sending that. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending that. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#64f2c2]/20 bg-[#64f2c2]/7 p-10 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-[#64f2c2]/25 text-[#64f2c2]">✓</span>
        <p className="mt-5 font-display text-2xl tracking-tight text-cream">
          Your message is in.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          We will be in touch shortly to understand the context and schedule your diagnostic.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[.08em] text-cream/65">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[.08em] text-cream/65">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[.08em] text-cream/65">
          Company
        </label>
        <input id="company" name="company" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="interest" className="mb-2 block text-xs font-semibold uppercase tracking-[.08em] text-cream/65">
          What are you looking to fix?
        </label>
        <select id="interest" name="interest" defaultValue="Not sure" className={inputClasses}>
          <option value="GTM">GTM — growth, offer, pipeline</option>
          <option value="Automation">Automation — manual admin, workflows</option>
          <option value="Not sure">Not sure — that&apos;s what the audit is for</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[.08em] text-cream/65">
          What feels stuck?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cta-primary w-full disabled:cursor-wait disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request Your Diagnostic ↗"}
      </button>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red/20 bg-red/7 p-3 text-sm text-red">{errorMessage}</p>
      )}
      <p className="text-xs leading-5 text-cream/30">No spam. No hard sell. Just a useful first conversation about what is getting in the way.</p>
    </form>
  );
}
