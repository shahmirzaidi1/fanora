export interface HowItWorksHeroData {
  title: string;
  subtitle: string;
  backgroundImageText: string;
}

export interface HowItWorksStepData {
  id: string;
  iconClass: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay?: string | null;
}

export interface HowItWorksBrowseButtonData {
  text: string;
  link: string;
  delay?: string | null;
}

export interface HowItWorksStepsSectionData {
  title: string;
  subtitle: string;
  steps: HowItWorksStepData[];
  browseButton: HowItWorksBrowseButtonData;
}

export interface HowItWorksTipData {
  id: string;
  iconClass: string;
  title: string;
  description: string;
}

export interface HowItWorksTipsSectionData {
  title: string;
  tips: HowItWorksTipData[];
}

export interface HowItWorksPageData { // This is the top-level type for the new JSON file
  metaTitle: string;
  hero: HowItWorksHeroData;
  stepsSection: HowItWorksStepsSectionData;
  tipsSection: HowItWorksTipsSectionData;
}