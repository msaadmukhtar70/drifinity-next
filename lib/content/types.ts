export interface ApproachItem {
  title: string;
  description: string;
}

export interface IndustryContent {
  slug: string;
  name: string;
  headline: string;
  dek: string;
  painPoints: string[];
  approach: ApproachItem[];
  outcome: string;
}
