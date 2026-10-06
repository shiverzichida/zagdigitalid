export interface ProjectOption {
  id: string;
  name: string;
  description: string;
  basePrice: number; // in IDR
  baseDurationDays: number;
}

export interface FeatureOption {
  id: string;
  name: string;
  description: string;
  price: number; // in IDR
  extraDays: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  categoryGroup: 'all' | 'maritime' | 'sports' | 'system';
  liveUrl: string;
  displayUrl: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  year: string;
  image: string;
  badge?: string;
}
