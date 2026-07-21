import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center gap-2.5"
      aria-label="Drifinity home"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-red/40 bg-red/10 shadow-[inset_0_1px_0_rgba(255,255,255,.18)]">
        <span className="absolute inset-1 rounded-lg bg-gradient-to-br from-red-bright via-red to-[#8f1414] opacity-90 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
        <span className="relative font-display text-sm text-white">D</span>
      </span>
      <span
        className={`font-display text-base tracking-[0.04em] ${
          inverted ? "text-cream" : "text-cream"
        }`}
      >
        DRIFINITY
      </span>
    </Link>
  );
}
