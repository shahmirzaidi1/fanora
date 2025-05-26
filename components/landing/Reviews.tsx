import React from 'react';
import ScrollAnimated from './ScrollAnimated'; // Adjust the import path as needed
import Image from 'next/image';
import { LandingPageData } from '@/types/mainLandingPageData';

interface ReviewsProps {
  data: LandingPageData['landing_reviews'];
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  // const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Not used directly for this icon set
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
  }
  if (halfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
  }
  // Fill remaining with empty stars if needed, original only showed filled/half
  // for (let i = 0; i < emptyStars; i++) {
  //   stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
  // }
  return <div className="text-yellow-400 text-sm">{stars}</div>;
};

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  return (
    <ScrollAnimated as="section" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{data.heading}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((review) => (
            <ScrollAnimated className="review-card" key={review.user} delay={review.delay}>
              <div className="flex items-center mb-3">
                <Image
                  src={`https://placehold.co/40x40/${review.avatarColor}/FFFFFF?text=${review.avatarText}`}
                  alt={`User ${review.avatarText}`}
                  className="w-10 h-10 rounded-full mr-3"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.user}</h4>
                  <StarRating rating={review.stars} />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </ScrollAnimated>
          ))}
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default Reviews;