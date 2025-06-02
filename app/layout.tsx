// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Your global styles
import { IBM_Plex_Sans } from 'next/font/google';

const majorMonoDisplay = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'], // Include all font weights
  subsets: ['latin'],
  display: 'swap',
});
// import Navbar from "@/components/Navbar"; // REMOVED
// import Footer from "@/components/landing/Footer"; // REMOVED
// import { LandingPageData } from "@/types/landingPageData"; // REMOVED (if only used for nav/footer)

// import fsPromises from 'fs/promises'; // REMOVED (if only used for nav/footer)
// import path from 'path'; // REMOVED (if only used for nav/footer)

// REMOVED getLayoutData function
// async function getLayoutData(): Promise<{
//   navData: LandingPageData['landing_nav'] | null;
//   footerData: LandingPageData['landing_footer'] | null;
// }> {
//   const filePath = path.join(process.cwd(), 'public', 'landing_page_data.json');
//   try {
//     const jsonData = await fsPromises.readFile(filePath, 'utf-8');
//     const objectData = JSON.parse(jsonData) as LandingPageData;
//     return {
//       navData: objectData.landing_nav || null,
//       footerData: objectData.landing_footer || null,
//     };
//   } catch (error) {
//     console.error("Could not read layout data (nav/footer):", error);
//     return { navData: null, footerData: null };
//   }
// }

export const metadata: Metadata = {
  title: "Fanora - Personalized Video Messages", // You might want to make this more dynamic per page
  description: "Get personalized video messages from your favorite Pakistani stars.",
};

export default function RootLayout({ // No longer async as data fetching is removed
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { navData, footerData } = await getLayoutData(); // REMOVED

  return (
    <html lang="en">
      <head>
        {/* These are still useful globally */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={`${majorMonoDisplay.className} text-gray-800 flex bg-white flex-col min-h-screen`}> {/* Sticky footer classes can remain if you plan to add footers per page */}
      {/* {navData && <Navbar data={navData} />} // REMOVED */}
      <main className="flex-grow bg-white">{children}</main>
      {/* {footerData && <Footer data={footerData} />} // REMOVED */}
    </body>
    </html >
  );
}