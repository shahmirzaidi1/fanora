// components/mainLayouts/Occasions.tsx
import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { OccasionsPageData } from '@/types/occasionsPageData';
import OccasionsPageHero from '@/components/occasions/OccasionsPageHero';
import OccasionCard from '@/components/occasions/OccasionCard';
import OtherOccasionsCTA from '@/components/occasions/OtherOccasionsCTA';

async function getOccasionsPageData(): Promise<OccasionsPageData> {
  const filePath = path.join(process.cwd(), 'public', 'occasions_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as OccasionsPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Occasions' page data:", error);
    throw new Error("Failed to load 'Occasions' page data.");
  }
}

export default async function OccasionsLayout() {
  const pageData = await getOccasionsPageData();

  return (
    <>
      <OccasionsPageHero data={pageData.hero} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageData.occasions.map((occasion) => (
              <OccasionCard key={occasion.id} occasion={occasion} />
            ))}
          </div>
          <OtherOccasionsCTA data={pageData.cta} />
        </div>
      </section>
    </>
  );
}