"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { ExperienceCardData } from '@/types/experiencesPageData';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = experience.fallbackImageSrc;
  };

  return (
    <ScrollAnimated className="experience-card" delay={experience.delay}>
      <Image
        src={experience.imageSrc}
        alt={experience.imageAlt}
        width={500} // Adjust as needed
        height={300} // Adjust as needed to maintain aspect ratio for 12rem height
        className="w-full h-[12rem] object-cover" // h-48
        onError={handleImageError}
        priority={!experience.delay}
      />
      <div className="icon-wrapper">
        <i className={experience.iconClass}></i>
      </div>
      <div className="content-area">
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{experience.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
        </div>
        <Link href={experience.link} className="font-semibold text-brand hover:text-brand-secondary text-sm mt-3 self-center">
          {experience.linkText} <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      </div>
    </ScrollAnimated>
  );
};

export default ExperienceCard;