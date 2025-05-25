import React from 'react';
import ScrollAnimated from './ScrollAnimated';
import Image from 'next/image';
import { LandingPageData } from '@/types/landingPageData';

interface PopularCelebritiesProps {
  data: LandingPageData['landing_popularCelebrities'];
}

const PopularCelebrities: React.FC<PopularCelebritiesProps> = ({ data }) => {
  return (
    <ScrollAnimated as="section" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{data.heading}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 text-center">
          {data.celebrities.map((celeb) => (
            <ScrollAnimated key={celeb.name} className="flex flex-col items-center" delay={celeb.delay}>
              <Image 
                src={celeb.imgSrc} 
                alt={celeb.alt} 
                className="popular-celebrity-img mb-2" 
                width={100} 
                height={100}
              />
              <h3 className="font-semibold text-gray-800 text-sm">{celeb.name}</h3>
            </ScrollAnimated>
          ))}
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default PopularCelebrities;