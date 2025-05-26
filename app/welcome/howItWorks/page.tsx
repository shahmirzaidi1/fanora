// app/howItWorks/page.tsx
import HowItWorksLayout from "@/components/mainLayouts/HowItWorks";
import React from "react";
import type { Metadata } from 'next';
import fsPromises from 'fs/promises';
import path from 'path';
import { HowItWorksPageData } from '@/types/howItWorksPageData'; // Updated import

// Function to fetch metadata
async function getPageMetadataTitle(): Promise<string> {
  const filePath = path.join(process.cwd(), 'public', 'how_it_works_page_data.json'); // Updated file path
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as HowItWorksPageData;
    return objectData.metaTitle || "How It Works - Fanora";
  } catch {
    return "How It Works - Fanora"; // Fallback title
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const title = await getPageMetadataTitle();
  return {
    title: title,
  };
}

const HowItWorksPage = () => {
    return <HowItWorksLayout />;
};

export default HowItWorksPage;