// components/mainLayouts/HowItWorks.tsx
import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { HowItWorksPageData } from '@/types/howItWorksPageData'; // Updated import
import ScrollAnimated from '@/components/landing/ScrollAnimated';
import Link from 'next/link';
import Image from 'next/image';

// Function to fetch "How It Works" page data from the new file
async function getHowItWorksPageData(): Promise<HowItWorksPageData> {
  const filePath = path.join(process.cwd(), 'public', 'how_it_works_page_data.json'); // Updated file path
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as HowItWorksPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'How It Works' page data:", error);
    throw new Error("Failed to load 'How It Works' page data.");
  }
}

// Sub-component for the Hero section
const HowItWorksHero: React.FC<{ data: HowItWorksPageData['hero'] }> = ({ data }) => {
    const heroBgStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 31, 63, 0.8), rgba(0, 18, 39, 0.9)), url('https://placehold.co/1920x400/001F3F/FFFFFF?text=${data.backgroundImageText}')`
    };
    return (
        <header className="hero-bg-subpage text-white py-16 md:py-20" style={heroBgStyle}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollAnimated as="h1" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
                    {data.title}
                </ScrollAnimated>
                <ScrollAnimated as="p" className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto" delay="100">
                    {data.subtitle}
                </ScrollAnimated>
            </div>
        </header>
    );
};

export default async function HowItWorksLayout() {
  const pageData = await getHowItWorksPageData();

  return (
    <>
      <HowItWorksHero data={pageData.hero} />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimated as="h2" className="section-title">
              {pageData.stepsSection.title}
            </ScrollAnimated>
            <ScrollAnimated as="p" className="section-subtitle" delay="100">
              {pageData.stepsSection.subtitle}
            </ScrollAnimated>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pageData.stepsSection.steps.map((step) => (
              <ScrollAnimated className="step-detail-card" key={step.id} delay={step.delay}>
                <div className="p-8 text-center md:text-left">
                  <div className="step-icon-bg-large mx-auto">
                    <i className={step.iconClass}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm text-center md:text-left">
                    {step.description}
                  </p>
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    width={400}
                    height={250}
                    className="step-image-detail"
                  />
                </div>
              </ScrollAnimated>
            ))}
          </div>

          <ScrollAnimated className="text-center mt-16" delay={pageData.stepsSection.browseButton.delay}>
            <Link href={pageData.stepsSection.browseButton.link} className="btn-secondary py-3 px-8 text-base">
              {pageData.stepsSection.browseButton.text}
            </Link>
          </ScrollAnimated>
        </div>
      </section>

      <ScrollAnimated as="section" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{pageData.tipsSection.title}</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            {pageData.tipsSection.tips.map((tip, index) => (
              <ScrollAnimated className="bg-blue-50 p-6 rounded-lg shadow-sm" key={tip.id} delay={(index * 100).toString()}>
                <h4 className="font-bold text-lg text-brand mb-2">
                  <i className={`${tip.iconClass} mr-2`}></i>{tip.title}
                </h4>
                <p className="text-sm leading-relaxed">{tip.description}</p>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </ScrollAnimated>
    </>
  );
}