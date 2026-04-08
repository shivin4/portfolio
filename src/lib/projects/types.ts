export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type JourneyStep = {
  title: string;
  body: string;
  link?: { label: string; href: string };
};

export type HowItWorksCard = {
  title: string;
  body: string;
};

export type ProblemStatement = {
  background: string;
  statement: string;
  goals: string[];
};

export type Project = {
  id: string;
  codename: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  status: string;
  classification: string;
  timeline: string;
  context?: string;
  description: string;
  longDescription?: string;
  problemStatement?: ProblemStatement;
  highlights: string[];
  features?: string[];
  howItWorks?: HowItWorksCard[];
  tech: string[];
  metrics: Record<string, string>;
  accent: string;
  featured: boolean;
  priority: number;
  links: ProjectLink[];
  journey?: JourneyStep[];
  architecture?: string;
  tryIt?: {
    heading: string;
    sample?: string;
    note?: string;
    href: string;
    cta: string;
  };
};
