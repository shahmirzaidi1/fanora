// components/auctions/AuctionExploreCTA.tsx
import React from 'react';
import Link from 'next/link';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { AuctionsPageCTAData } from '@/types/auctionsPageData';

interface AuctionExploreCTAProps {
  data: AuctionsPageCTAData;
}

const AuctionExploreCTA: React.FC<AuctionExploreCTAProps> = ({ data }) => {
  return (
    <ScrollAnimated className="text-center mt-16">
      <Link href={data.buttonLink} className="btn-secondary py-3 px-8 text-base">
        {data.buttonText}
      </Link>
    </ScrollAnimated>
  );
};

export default AuctionExploreCTA;