// components/mainLayouts/Auction.tsx
import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { AuctionsPageData } from '@/types/auctionsPageData';
import AuctionsPageHero from '@/components/auctions/AuctionsPageHero';
import AuctionIntro from '@/components/auctions/AuctionIntro';
import AuctionCard from '@/components/auctions/AuctionCard';
import AuctionExploreCTA from '@/components/auctions/AuctionExploreCTA';

async function getAuctionsPageData(): Promise<AuctionsPageData> {
  const filePath = path.join(process.cwd(), 'public', 'auctions_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as AuctionsPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Auctions' page data:", error);
    throw new Error("Failed to load 'Auctions' page data.");
  }
}

export default async function AuctionLayout() {
  const pageData = await getAuctionsPageData();

  return (
    <>
      <AuctionsPageHero data={pageData.hero} />
      <AuctionIntro data={pageData.introduction} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageData.auctionItems.map((item) => (
              <AuctionCard key={item.id} item={item} />
            ))}
          </div>
          <AuctionExploreCTA data={pageData.cta} />
        </div>
      </section>
    </>
  );
}