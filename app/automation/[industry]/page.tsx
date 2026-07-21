import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { automationPillar, automationIndustries } from "@/lib/content/automation";

export function generateStaticParams() {
  return automationIndustries.map((industry) => ({ industry: industry.slug }));
}

function getIndustry(slug: string) {
  return automationIndustries.find((industry) => industry.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `Automation for ${industry.name}`,
    description: industry.dek,
  };
}

export default async function AutomationIndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <IndustryPageTemplate
      industry={industry}
      pillarLabel={automationPillar.label}
      pillarHref={automationPillar.href}
      pillarName={automationPillar.name}
    />
  );
}
