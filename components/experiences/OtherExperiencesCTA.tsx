// components/experiences/OtherExperiencesCTA.tsx
import React from 'react';
import Link from 'next/link';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { ExperiencesPageCTAData } from '@/types/experiencesPageData';

interface OtherExperiencesCTAProps {
  data: ExperiencesPageCTAData;
}

const OtherExperiencesCTA: React.FC<OtherExperiencesCTAProps> = ({ data }) => {
  return (
    <ScrollAnimated className="text-center mt-16 lg:mt-24">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">{data.title}</h3>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">{data.description}</p>
      <Link href={data.buttonLink} className="btn-primary font-semibold py-3 px-8 text-lg transition duration-300 inline-block">
        {data.buttonText}
      </Link>
    </ScrollAnimated>
  );
};

export default OtherExperiencesCTA;