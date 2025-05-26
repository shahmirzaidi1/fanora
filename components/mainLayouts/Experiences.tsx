// components/mainLayouts/Experiences.tsx
import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { ExperiencesPageData } from '@/types/experiencesPageData';
import ExperiencesPageHero from '@/components/experiences/ExperiencesPageHero';
import ExperienceCard from '@/components/experiences/ExperienceCard';
import OtherExperiencesCTA from '@/components/experiences/OtherExperiencesCTA';

async function getExperiencesPageData(): Promise<ExperiencesPageData> {
  const filePath = path.join(process.cwd(), 'public', 'experiences_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as ExperiencesPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Experiences' page data:", error);
    throw new Error("Failed to load 'Experiences' page data.");
  }
}

export default async function ExperiencesLayout() {
  const pageData = await getExperiencesPageData();

  return (
    <>
      <ExperiencesPageHero data={pageData.hero} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageData.experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
          <OtherExperiencesCTA data={pageData.cta} />
        </div>
      </section>
    </>
  );
}