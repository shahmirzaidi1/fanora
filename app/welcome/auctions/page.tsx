// app/auctions/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import fsPromises from 'fs/promises';
import path from 'path';
import { AuctionsPageData } from '@/types/auctionsPageData';
import AuctionLayout from '@/components/mainLayouts/Auction'; // Ensure this path is correct

async function getPageData(): Promise<AuctionsPageData> {
  const filePath = path.join(process.cwd(), 'public', 'auctions_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as AuctionsPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Auctions' page data for metadata:", error);
    throw new Error("Failed to load 'Auctions' page data for metadata.");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getPageData();
    return {
      title: data.metaTitle || "Auctions - Fanora",
    };
  } catch (error) {
    return {
      title: "Auctions - Fanora", // Fallback title
    };
  }
}

export default function AuctionsPage() {
  return <AuctionLayout />;
}