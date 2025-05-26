// types/auctionsPageData.ts
export interface AuctionsPageHeroData {
  title: string;
  subtitle: string;
  backgroundImageText: string;
}

export interface AuctionIntroductionData {
  text: string;
  learnMoreLink: string;
  learnMoreText: string;
}

export interface AuctionItemData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  fallbackImageSrc: string;
  currentBidLabel: string;
  currentBidAmount: string;
  bidsCountLabel: string;
  bidsCount: number;
  countdownText: string; // Static text for countdown display
  bidInputPlaceholder: string;
  placeBidButtonText: string;
  delay?: string | null;
}

export interface AuctionsPageCTAData {
  buttonText: string;
  buttonLink: string;
}

export interface AuctionsPageData {
  metaTitle: string;
  hero: AuctionsPageHeroData;
  introduction: AuctionIntroductionData;
  auctionItems: AuctionItemData[];
  cta: AuctionsPageCTAData;
}