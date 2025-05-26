// app/occasions/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import fsPromises from 'fs/promises';
import path from 'path';
import { OccasionsPageData } from '@/types/occasionsPageData';
import OccasionsLayout from '@/components/mainLayouts/Occasions'; // Ensure this path is correct

async function getPageData(): Promise<OccasionsPageData> { // Renamed for clarity inside this file
  const filePath = path.join(process.cwd(), 'public', 'occasions_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as OccasionsPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Occasions' page data for metadata:", error);
    // Return a default structure or throw to indicate failure
    throw new Error("Failed to load 'Occasions' page data for metadata.");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getPageData();
    return {
      title: data.metaTitle || "Occasions - Fanora",
    };
  } catch (error) {
    return {
      title: "Occasions - Fanora", // Fallback title
    };
  }
}

export default function OccasionsPage() { // This page itself can be a simple Server Component
  // The actual data fetching and rendering logic is in OccasionsLayout
  return <OccasionsLayout />;
}