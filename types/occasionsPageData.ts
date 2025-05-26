// types/occasionsPageData.ts
export interface OccasionsPageHeroData {
  title: string;
  subtitle: string;
  backgroundImageText: string;
}

export interface OccasionCardData {
  id: string;
  link: string; // This is the prop in question
  imageSrc: string;
  imageAlt: string;
  fallbackImageSrc: string;
  iconClass: string;
  title: string;
  description: string;
  linkText: string;
  delay?: string | null;
}

export interface OccasionsPageCTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface OccasionsPageData {
  metaTitle: string;
  hero: OccasionsPageHeroData;
  occasions: OccasionCardData[];
  cta: OccasionsPageCTAData;
}