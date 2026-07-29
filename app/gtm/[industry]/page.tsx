import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { gtmPillar, gtmIndustries } from "@/lib/content/gtm";

export function generateStaticParams() {
  return gtmIndustries.map((industry) => ({ industry: industry.slug }));
}

function getIndustry(slug: string) {
  return gtmIndustries.find((industry) => industry.slug === slug);
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
    title: { absolute: industry.metaTitle },
    description: industry.metaDescription,
  };
}

export default async function GTMIndustryPage({
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
      pillarLabel={gtmPillar.label}
      pillarHref={gtmPillar.href}
      pillarName={gtmPillar.name}
    />
  );
}
