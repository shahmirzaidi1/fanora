// app/experiences/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import fsPromises from 'fs/promises';
import path from 'path';
import { ExperiencesPageData } from '@/types/experiencesPageData';
import ExperiencesLayout from '@/components/mainLayouts/Experiences'; // Ensure this path is correct

async function getPageData(): Promise<ExperiencesPageData> {
  const filePath = path.join(process.cwd(), 'public', 'experiences_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as ExperiencesPageData;
    return objectData;
  } catch (error) {
    console.error("Could not read 'Experiences' page data for metadata:", error);
    throw new Error("Failed to load 'Experiences' page data for metadata.");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getPageData();
    return {
      title: data.metaTitle || "Unique Experiences - Fanora",
    };
  } catch (error) {
    return {
      title: "Unique Experiences - Fanora", // Fallback title
    };
  }
}

export default function ExperiencesPage() {
  return <ExperiencesLayout />;
}