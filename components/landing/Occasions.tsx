import React from 'react';
import ScrollAnimated from './ScrollAnimated';
// import Image from 'next/image';
import { LandingPageData } from '@/types/mainLandingPageData';

interface OccasionsProps {
  data: LandingPageData['landing_occasions'];
}

const Occasions: React.FC<OccasionsProps> = ({ data }) => {
  return (
    <ScrollAnimated as="section" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[2rem] font-extrabold text-white mb-10 text-center">{data.heading}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {data.items.map((occasion) => (
            <ScrollAnimated as="a" /* href={occasion.link} */ className="grid-item-card" key={occasion.name} delay={occasion.delay}>
              
              <img src={occasion.imgSrc} alt={occasion.name} className="w-full h-[160px] object-cover" />
              <div className="grid-item-overlay">
                <h4 className="text-white font-semibold">{occasion.name}</h4>
              </div>
            </ScrollAnimated>
          ))}
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default Occasions;