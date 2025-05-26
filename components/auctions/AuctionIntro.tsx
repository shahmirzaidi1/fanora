// components/auctions/AuctionIntro.tsx
import React from 'react';
import Link from 'next/link';
import { AuctionIntroductionData } from '@/types/auctionsPageData';

interface AuctionIntroProps {
  data: AuctionIntroductionData;
}

const AuctionIntro: React.FC<AuctionIntroProps> = ({ data }) => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-700 text-sm md:text-base">
          {data.text}
          <Link href={data.learnMoreLink} className="text-brand hover:underline font-semibold ml-1">
            {data.learnMoreText}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuctionIntro;