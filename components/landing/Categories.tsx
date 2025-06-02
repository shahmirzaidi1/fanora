import React from 'react';
import Link from 'next/link';
import { LandingPageData } from '@/types/mainLandingPageData';
import ScrollAnimated from './ScrollAnimated';

interface CategoriesProps {
  data: LandingPageData['landing_categories'];
}

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  return (
    <ScrollAnimated as="section" className="py-12 md:py-16 bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{data.heading}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {data.items.map((category) => (
            <ScrollAnimated as="a" className="grid-item-card" key={category.name} delay={category.delay}>
              <img src={category.imgSrc} alt={category.name} className="w-full h-[160px] object-cover" />
              <div className="grid-item-overlay">
                <h4 className="text-white font-semibold">{category.name}</h4>
              </div>
            </ScrollAnimated>
          ))}
        </div>
        <ScrollAnimated className="text-center mt-10">
          <Link href={data.seeMoreLink} className="text-brand hover:text-brand-secondary font-semibold">
            {data.seeMoreLinkText} <i className={`${data.seeMoreIconClass} ml-1`}></i>
          </Link>
        </ScrollAnimated>
      </div>
    </ScrollAnimated>
  );
};

export default Categories;