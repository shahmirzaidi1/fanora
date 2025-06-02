import React from 'react';
import ScrollAnimated from '@/components/landing/ScrollAnimated'; // Adjust the import path as needed
import { LandingPageData } from '@/types/mainLandingPageData'; // Adjust the import path as needed
import Image from 'next/image';

interface HeaderProps {
  data: LandingPageData['landing_header'];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="relative text-white pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="absolute inset-0">
        <Image
          src="/landing.jpg"
          alt="Landing Background"
          className="w-full h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <div className="relative h-[75vh] flex flex-col justify-center items-center">
        <ScrollAnimated as="h1" className="justify-center flex flex-col items-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">

          <div className="justify-center flex flex-col items-center gap-6 ">
            <div className="font-extralight text-shadow-lg">
              {data.title}
            </div>
            <div className=" px-4 py-2 text-black backdrop-blur-lg rounded-full bg-white/80 dark:bg-secondary/60 text-sm drop-shadow-md flex items-center justify-between flex-row">
              {data.subtext}
            </div>
            {/* <div className="border-2 rounded-2xl border-white w-24 mt-4 mb-6 flex justify-center text-xs items-center font-thin ">
                click me
              </div> */}
          </div>
        </ScrollAnimated>
      </div>
    </header >
  );
};

export default Header;