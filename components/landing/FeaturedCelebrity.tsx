"use client";
import React from 'react';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Adjust the import path as needed
// import Image from 'next/image'; // Using Next.js Image component
import { LandingPageData } from '@/types/mainLandingPageData';

interface FeaturedCelebrityProps {
  data: LandingPageData['landing_featuredCelebrity'];
}

const FeaturedCelebrity: React.FC<FeaturedCelebrityProps> = ({ data }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = data.fallbackImageSrc;
  };

  return (
    <ScrollAnimated as="section" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="featured-celebrity-bg p-6 md:p-10 md:flex items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{data.heading}</h2>
            {/* Consider width/height for Next/Image if images are local */}
            <img
              src={data.imageSrc} // Using src for external URLs with placehold.co
              alt={data.imageAlt}
              className="featured-celebrity-img mx-auto md:mx-0 shadow-lg"
              onError={handleImageError}
              width={280} // Provide width/height if known, or use fill with relative parent
              height={350}
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h3>
            <p className="text-brand-secondary font-semibold mb-3">{data.title}</p>
            <p className="text-gray-600 mb-4 leading-relaxed">{data.description1}</p>
            <p className="text-gray-600 mb-5 leading-relaxed">{data.description2}</p>
            <a href={data.profileLink} className="btn-secondary py-2.5 px-6 text-sm">
              {data.requestButtonText}
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default FeaturedCelebrity;