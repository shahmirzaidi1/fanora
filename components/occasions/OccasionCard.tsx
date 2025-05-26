"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { OccasionCardData } from '@/types/occasionsPageData';

interface OccasionCardProps {
  occasion: OccasionCardData;
}

const OccasionCard: React.FC<OccasionCardProps> = ({ occasion }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = occasion.fallbackImageSrc;
  };

  return (
    <ScrollAnimated as={Link} href={occasion.link} id={occasion.id} className="occasion-display-card" delay={occasion.delay}>
      <Image
        src={occasion.imageSrc}
        alt={occasion.imageAlt}
        width={500} // Adjust as needed, these are placeholders
        height={300} // Adjust as needed
        className="w-full h-[11rem] object-cover" // h-44 or as per .occasion-display-card img
        onError={handleImageError}
        priority={!occasion.delay} // Prioritize first visible items
      />
      <div className="icon-wrapper">
        <i className={occasion.iconClass}></i>
      </div>
      <div className="content-area">
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{occasion.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{occasion.description}</p>
        </div>
        <span className="font-semibold text-brand hover:text-brand-secondary text-sm mt-3">
          {occasion.linkText} <i className="fas fa-arrow-right ml-1"></i>
        </span>
      </div>
    </ScrollAnimated>
  );
};

export default OccasionCard;