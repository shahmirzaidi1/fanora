interface NavLink {
  href: string;
  text: string;
  active?: boolean;
}

interface FeaturedCelebrityData {
  heading: string;
  imageSrc: string;
  imageAlt: string;
  fallbackImageSrc: string;
  name: string;
  title: string;
  description1: string;
  description2: string;
  requestButtonText: string;
  profileLink: string;
}

interface PopularCelebrityItem {
  name: string;
  imgSrc: string;
  alt: string;
  delay?: string | null;
}

interface OccasionItem {
  name: string;
  imgSrc: string;
  link: string;
  delay?: string | null;
}

interface CategoryItem {
  name: string;
  imgSrc: string;
  link: string;
  delay?: string | null;
}

interface HowItWorksStep {
  iconClass: string;
  title: string;
  description: string;
  delay?: string | null;
}

interface ReviewItem {
  user: string;
  avatarText: string;
  avatarColor: string;
  stars: number;
  text: string;
  delay?: string | null;
}

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  iconClass: string;
  href: string;
}

export interface LandingPageData {
  landing_pageTitle: string;
  landing_nav: {
    logoText: string[];
    links: NavLink[];
    searchIconClass: string;
    signUpButtonText: string;
    signUpLink: string;
    logInButtonText: string;
    logInLink: string;
    mobileMenuIconClass: string;
  };
  landing_header: {
    title: string;
  };
  landing_featuredCelebrity: FeaturedCelebrityData;
  landing_popularCelebrities: {
    heading: string;
    celebrities: PopularCelebrityItem[];
  };
  landing_occasions: {
    heading: string;
    items: OccasionItem[];
  };
  landing_categories: {
    heading: string;
    items: CategoryItem[];
    seeMoreLinkText: string;
    seeMoreLink: string;
    seeMoreIconClass: string;
  };
  landing_howItWorks: {
    heading: string;
    subheading: string;
    steps: HowItWorksStep[];
    learnMoreLinkText: string;
    learnMoreLink: string;
    learnMoreIconClass: string;
  };
  landing_reviews: {
    heading: string;
    items: ReviewItem[];
  };
  landing_contactCTA: {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonLink: string;
  };
  landing_footer: {
    companyName: string;
    sections: FooterSection[];
    copyrightText: string;
    socialLinks: SocialLink[];
  };
}