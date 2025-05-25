import type { Metadata } from "next";
import "./globals.css"; // Your global styles

export const metadata: Metadata = {
  title: "Fanora - Personalized Video Messages", // Default title
  description: "Get personalized video messages from your favorite Pakistani stars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome and Google Fonts should be linked here if not in globals.css */}
        {/* For example: */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className="text-gray-800"> {/* Base body class from original */}
        {children}
      </body>
    </html>
  );
}