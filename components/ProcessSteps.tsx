const defaultSteps = [
  {
    number: "01",
    title: "Audit",
    description:
      "A low-cost, no-obligation diagnostic that maps exactly where the gap is — growth or operations — and what closing it is worth, in real numbers.",
  },
  {
    number: "02",
    title: "Implementation",
    description:
      "We build the fix: the offer, the pipeline, or the workflow — scoped to what the audit actually found, not a generic package.",
  },
  {
    number: "03",
    title: "Retainer",
    description:
      "Optional. Once the system is live, we can stay on to refine it against real results as your business changes.",
  },
];

export default function ProcessSteps({
  steps = defaultSteps,
}: {
  steps?: typeof defaultSteps;
  inverted?: boolean;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="glass-card reveal group p-7 sm:p-8"
        >
          <div className="flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-2xl border border-red/20 bg-red/8 font-display text-sm text-red">{step.number}</span>
            {index < steps.length - 1 && <span className="text-cream/18 transition-transform group-hover:translate-x-1" aria-hidden>→</span>}
          </div>
          <h3 className="mt-7 font-display text-xl tracking-[-.025em] text-cream">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-stone">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
