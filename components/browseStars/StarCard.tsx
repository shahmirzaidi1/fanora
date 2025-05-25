// components/browseStars/StarCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { StarData } from '@/types/browseStarsPageData';

interface StarCardProps {
  star: StarData;
}

const StarCard: React.FC<StarCardProps> = ({ star }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = star.fallbackImageSrc;
  };

  return (
    <ScrollAnimated className="star-card" delay={star.delay}>
      <Image
        src={star.imageSrc}
        alt={star.imageAlt}
        className="star-card-image"
        width={400} // Adjust as per your design needs
        height={300} // Adjust as per your design needs
        onError={handleImageError}
        priority={star.delay === null} // Prioritize images visible on load
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-0.5">{star.name}</h3>
        <p className="text-xs text-brand-secondary mb-2 font-medium">{star.role}</p>
        <p className="text-gray-600 text-xs mb-3 line-clamp-2 flex-grow">{star.description}</p>
        <p className="price-tag mt-auto">{star.price}</p>
      </div>
      <div className="p-3 border-t border-gray-100">
        <Link href={star.profileLink} className="btn-primary text-xs font-semibold py-1.5 px-3 w-full text-center block">
          View Profile
        </Link>
      </div>
    </ScrollAnimated>
  );
};

export default StarCard;