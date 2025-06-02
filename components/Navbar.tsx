"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Using Next.js Link for internal navigation
import { LandingPageData } from '@/types/mainLandingPageData'; // Adjust path as needed
import Logo from './misc/logo';

interface NavbarProps {
  data: LandingPageData['landing_nav'];
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className=" p-5 backdrop-blur-lg h-16 text-white bg-black/65 dark:bg-secondary/60 drop-shadow-md flex items-center justify-between flex-row shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
            <div className="flex justify-center items-center gap-1  lg:space-x-2">
            {data.links.map((link) => (
              <Link key={link.text} href={link.href} className=" text-sm text-white hover:text-gray-50">
              {link.text}
              </Link>
            ))}
            </div>
            <div className="hidden md:flex items-center space-x-3">
            <button className="text-white hover:text-gray-50 p-2">
              <i className={data.searchIconClass}></i>
            </button>
            <Link href={data.signUpLink} className="btn-primary text-sm text-white hover:text-gray-50">
              {data.signUpButtonText}
            </Link>
            <Link href={data.logInLink} className="nav-link text-sm text-white hover:text-gray-50">
              {data.logInButtonText}
            </Link>
            </div>
            <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-50 p-2 mr-2">
              <i className={`${data.searchIconClass} text-lg`}></i>
            </button>
            <button
              id="mobile-menu-button"
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-50 focus:outline-none p-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <i className={`${data.mobileMenuIconClass} text-xl`}></i>
            </button>
            </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-black shadow-lg py-2 absolute w-full`}
      >
        {data.links.map((link) => (
          <Link key={`mobile-${link.text}`} href={link.href} className={`block py-2 px-4 text-sm text-white nav-link ${link.active ? 'nav-link-active' : ''}`}>
        {link.text}
          </Link>
        ))}
        <div className="border-t border-gray-700 my-2"></div>
        <Link href={data.logInLink} className="block py-2 px-4 text-sm text-white nav-link">
          {data.logInButtonText}
        </Link>
        <Link href={data.signUpLink} className="block mx-4 my-2 btn-primary text-center text-sm py-2 text-white">
          {data.signUpButtonText}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;