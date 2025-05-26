import React from 'react';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Adjust the import path as needed
import { LandingPageData } from '@/types/mainLandingPageData'; // Adjust the import path as needed

interface HeaderProps {
  data: LandingPageData['landing_header'];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="hero-bg text-white pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimated as="h1" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {data.title}
        </ScrollAnimated>
      </div>
    </header>
  );
};

export default Header;