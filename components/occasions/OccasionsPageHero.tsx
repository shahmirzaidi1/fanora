// components/occasions/OccasionsPageHero.tsx
import React from 'react';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { OccasionsPageHeroData } from '@/types/occasionsPageData';

interface OccasionsPageHeroProps {
  data: OccasionsPageHeroData;
}

const OccasionsPageHero: React.FC<OccasionsPageHeroProps> = ({ data }) => {
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

export default OccasionsPageHero;