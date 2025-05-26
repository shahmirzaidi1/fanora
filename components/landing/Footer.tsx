import React from 'react';
import Link from 'next/link';
import { LandingPageData } from '@/types/mainLandingPageData';

interface FooterProps {
  data: LandingPageData['landing_footer'];
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
          {data.sections.map(section => (
            <div key={section.title}>
              <h5 className="text-md font-semibold text-white mb-3">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">&copy; {currentYear} {data.companyName}. {data.copyrightText}</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {data.socialLinks.map(social => (
              <a key={social.iconClass} href={social.href} className="footer-link" target="_blank" rel="noopener noreferrer">
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;