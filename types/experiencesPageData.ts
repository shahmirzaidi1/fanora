// types/experiencesPageData.ts
export interface ExperiencesPageHeroData {
  title: string;
  subtitle: string;
  backgroundImageText: string;
}

export interface ExperienceCardData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  fallbackImageSrc: string;
  iconClass: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay?: string | null;
}

export interface ExperiencesPageCTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ExperiencesPageData {
  metaTitle: string;
  hero: ExperiencesPageHeroData;
  experiences: ExperienceCardData[];
  cta: ExperiencesPageCTAData;
}