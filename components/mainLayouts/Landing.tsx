import fsPromises from 'fs/promises';
import path from 'path';
import Header from '@/components/landing/Header';
import FeaturedCelebrity from '@/components/landing/FeaturedCelebrity';
import PopularCelebrities from '@/components/landing/PopularCelebrities';
import Occasions from '@/components/landing/Occasions';
import Categories from '@/components/landing/Categories';
import HowItWorksSection from '@/components/landing/HowItWorks'; // Corrected filename from HowItWorks
import Reviews from '@/components/landing/Reviews';
import ContactCallToAction from '@/components/landing/ContactCallToAction';

import { LandingPageData } from '@/types/mainLandingPageData'; // Corrected casing for LandingPageData

// Function to fetch data
async function getLandingPageData(): Promise<LandingPageData> {
  const filePath = path.join(process.cwd(), 'public', 'landing_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData);
    return objectData as LandingPageData;
  } catch (error) {
    console.error("Could not read landing page data:", error);
    // Fallback or rethrow error
    throw new Error("Failed to load landing page data.");
  }
}

export default async function Landing() {
  const data = await getLandingPageData();

  return (
    <>
      <Header data={data.landing_header} />
      <FeaturedCelebrity data={data.landing_featuredCelebrity} />
      <PopularCelebrities data={data.landing_popularCelebrities} />
      <Occasions data={data.landing_occasions} />
      <Categories data={data.landing_categories} />
      <HowItWorksSection data={data.landing_howItWorks} />
      <Reviews data={data.landing_reviews} />
      <ContactCallToAction data={data.landing_contactCTA} />
      
    </>
  );
}