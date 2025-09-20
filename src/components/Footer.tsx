
import React from 'react';
import { View } from '../types';
import { FOOTER_LINKS } from '../constants';

interface FooterProps {
  navigateTo: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {

  const footerLinks = FOOTER_LINKS;

  return (
    <footer className="bg-brand-dark text-gray-400 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <button onClick={() => navigateTo('home')} className="text-white text-3xl font-bold tracking-wider">
              PCBL <span className="text-brand-purple">UK</span>
            </button>
            <p className="text-gray-400 text-base">
              The UK's premier destination for custom-built high-performance PCs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.Shop.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => navigateTo(item.view as View)} className="text-base text-gray-400 hover:text-brand-teal">{item.name}</button>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Information</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.Information.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => navigateTo(item.view as View)} className="text-base text-gray-400 hover:text-brand-teal">{item.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.Company.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => navigateTo(item.view as View)} className="text-base text-gray-400 hover:text-brand-teal">{item.name}</button>
                  </li>
                ))}
              </ul>
            </div>
             <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">My Account</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks['My Account'].map((item) => (
                  <li key={item.name}>
                    <button onClick={() => navigateTo(item.view as View)} className="text-base text-gray-400 hover:text-brand-teal">{item.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} PCBL UK Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;