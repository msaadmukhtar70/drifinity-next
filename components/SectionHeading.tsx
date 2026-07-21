export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-5 max-w-3xl font-display text-3xl leading-[1.06] tracking-[-0.035em] sm:text-4xl lg:text-5xl ${
          inverted ? "text-cream" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 ${
            align === "center" ? "mx-auto" : ""
          } ${inverted ? "text-cream/60" : "text-stone"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
