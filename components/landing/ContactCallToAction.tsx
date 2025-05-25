import React from 'react';
import ScrollAnimated from './ScrollAnimated'; // Adjust the import path as needed
import Link from 'next/link';
import { LandingPageData } from '@/types/landingPageData';

interface ContactCTAProps {
  data: LandingPageData['landing_contactCTA'];
}

const ContactCallToAction: React.FC<ContactCTAProps> = ({ data }) => {
  return (
    <ScrollAnimated as="section" className="py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.heading}</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          {data.subheading}
        </p>
        <Link href={data.buttonLink} className="btn-secondary py-3 px-8 text-base">
          {data.buttonText}
        </Link>
      </div>
    </ScrollAnimated>
  );
};

export default ContactCallToAction;