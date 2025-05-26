// components/auctions/AuctionCard.tsx
"use client"; // For bid input and button interaction

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Reusable
import { AuctionItemData } from '@/types/auctionsPageData';

interface AuctionCardProps {
  item: AuctionItemData;
}

const AuctionCard: React.FC<AuctionCardProps> = ({ item }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = item.fallbackImageSrc;
  };

  const handlePlaceBid = () => {
    // TODO: Implement actual bid placement logic
    console.log(`Placing bid of ${bidAmount} for item ${item.id}`);
    // You might want to clear the input or give feedback here
  };

  return (
    <ScrollAnimated className="auction-card" delay={item.delay}>
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        width={600} // Adjust as needed
        height={400} // Adjust as needed
        className="auction-item-image"
        onError={handleImageError}
        priority={!item.delay}
      />
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-xs text-gray-500">{item.currentBidLabel}</p>
              <p className="text-lg font-bold text-brand">{item.currentBidAmount}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 text-right">{item.bidsCountLabel}</p>
              <p className="text-md font-semibold text-gray-700 text-right">{item.bidsCount}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="countdown-timer">
              <i className="far fa-clock mr-1.5"></i>{item.countdownText}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder={item.bidInputPlaceholder}
              className="bid-input flex-grow"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
            <button
              onClick={handlePlaceBid}
              className="btn-accent py-2.5 px-5 font-semibold text-sm transition duration-300"
            >
              {item.placeBidButtonText}
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default AuctionCard;