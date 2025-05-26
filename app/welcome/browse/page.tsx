// app/browse/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import fsPromises from 'fs/promises';
import path from 'path';
import { BrowseStarsPageData } from '@/types/browseStarsPageData';
import BrowseStarsLayout from '@/components/mainLayouts/BrowseStars'; // Ensure this path is correct

async function getBrowseStarsPageData(): Promise<BrowseStarsPageData> {
  const filePath = path.join(process.cwd(), 'public', 'browse_stars_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as BrowseStarsPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Browse Stars' page data:", error);
    throw new Error("Failed to load 'Browse Stars' page data.");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBrowseStarsPageData();
  return {
    title: data.metaTitle || "Browse Stars - Fanora",
  };
}

export default async function BrowsePage() {
  const initialPageData = await getBrowseStarsPageData();
  return <BrowseStarsLayout initialData={initialPageData} />;
}