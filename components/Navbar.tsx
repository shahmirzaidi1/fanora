"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Using Next.js Link for internal navigation
import { LandingPageData } from '@/types/mainLandingPageData'; // Adjust path as needed
import Logo from './misc/logo'; // Assuming Logo component exists

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
    <nav className="backdrop-blur-lg h-16 text-white bg-black/65 dark:bg-secondary/60 drop-shadow-md shadow-sm sticky top-0 z-50">
      {/* Container for navbar content, handles padding and centers items */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        {/* Added 'hidden md:flex' to hide on small screens and 'flex-grow' to help center it */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-1 lg:space-x-2">
          {data.links.map((link) => (
            <Link key={link.text} href={link.href} className="text-sm text-white hover:text-gray-50 px-3 py-2 rounded-md">
              {link.text}
            </Link>
          ))}
        </div>

        {/* Desktop Action Buttons (Search, Sign Up, Log In) - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="text-white hover:text-gray-50 p-2" aria-label="Search">
            <i className={data.searchIconClass}></i>
          </button>
          <Link href={data.signUpLink} className="btn-primary text-sm text-white hover:text-gray-50">
            {data.signUpButtonText}
          </Link>
          <Link href={data.logInLink} className="nav-link text-sm text-white hover:text-gray-50">
            {data.logInButtonText}
          </Link>
        </div>

        {/* Mobile Menu Button and Search Icon - Shown only on Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-gray-50 p-2 mr-2" aria-label="Search">
            <i className={`${data.searchIconClass} text-lg`}></i>
          </button>
          <button
            id="mobile-menu-button"
            ref={buttonRef}
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-50 focus:outline-none p-2"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open mobile menu"
          >
            <i className={`${data.mobileMenuIconClass} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Absolutely Positioned Dropdown */}
      {/* Added 'block'/'hidden' for visibility, 'top-16' (navbar height), 'left-0', and a slightly more distinct background */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-black/85 dark:bg-secondary/85 backdrop-blur-md shadow-lg py-2`}
      >
        {data.links.map((link) => (
          <Link
            key={`mobile-${link.text}`}
            href={link.href}
            className={`block py-2 px-4 text-sm text-white nav-link ${link.active ? 'nav-link-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)} // Optional: close menu on link click
          >
            {link.text}
          </Link>
        ))}
        <div className="border-t border-gray-700 my-2"></div>
        <Link
            href={data.logInLink}
            className="block py-2 px-4 text-sm text-white nav-link"
            onClick={() => setIsMobileMenuOpen(false)} // Optional: close menu on link click
        >
          {data.logInButtonText}
        </Link>
        <Link
            href={data.signUpLink}
            className="block mx-4 my-2 btn-primary text-center text-sm py-2 text-white"
            onClick={() => setIsMobileMenuOpen(false)} // Optional: close menu on link click
        >
          {data.signUpButtonText}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;