// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css"; // Your global styles
import Navbar from "@/components/Navbar"; // Ensure this path is correct
import Footer from "@/components/landing/Footer"; // Ensure this path is correct
import { LandingPageData } from "@/types/landingPageData"; // Ensure this path is correct

import fsPromises from 'fs/promises';
import path from 'path';

// Function to fetch data needed for the global layout (Navbar and Footer)
async function getLayoutData(): Promise<{
  navData: LandingPageData['landing_nav'] | null;
  footerData: LandingPageData['landing_footer'] | null;
}> {
  const filePath = path.join(process.cwd(), 'public', 'landing_page_data.json');
  try {
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    const objectData = JSON.parse(jsonData) as LandingPageData;
    return {
      navData: objectData.landing_nav || null,
      footerData: objectData.landing_footer || null,
    };
  } catch (error) {
    console.error("Could not read layout data (nav/footer):", error);
    return { navData: null, footerData: null }; // Handle error gracefully
  }
}

export const metadata: Metadata = {
  title: "Fanora - Personalized Video Messages",
  description: "Get personalized video messages from your favorite Pakistani stars.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navData, footerData } = await getLayoutData();

  return (
    <div className="text-gray-800 flex flex-col min-h-screen"> {/* Added flex classes for sticky footer */}
      {navData && <Navbar data={navData} />}
      {children}
      {footerData && <Footer data={footerData} />}
    </div>
  );
}