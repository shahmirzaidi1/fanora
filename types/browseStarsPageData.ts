// types/browseStarsPageData.ts
export interface BrowseStarsHeroData {
  title: string;
  subtitle: string;
  backgroundImageText: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface BrowseStarsFiltersData {
  searchLabel: string;
  searchPlaceholder: string;
  categoryLabel: string;
  defaultCategoryOption: string;
  categories: FilterOption[];
  priceLabel: string;
  defaultPriceOption: string;
  priceRanges: FilterOption[];
  applyButtonText: string;
}

export interface StarData {
  id: string;
  name: string;
  role: string;
  description: string;
  price: string;
  profileLink: string;
  imageSrc: string;
  imageAlt: string;
  fallbackImageSrc: string;
  delay?: string | null;
}

export interface BrowseStarsPaginationData {
  currentPageInfo: string;
  previousButtonText: string;
  nextButtonText: string;
  previousIconClass: string;
  nextIconClass: string;
}

export interface BrowseStarsPageData {
  metaTitle: string;
  hero: BrowseStarsHeroData;
  filters: BrowseStarsFiltersData;
  stars: StarData[];
  pagination: BrowseStarsPaginationData;
}