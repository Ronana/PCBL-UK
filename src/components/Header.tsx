import React, { useState, useRef } from 'react';
import { NAV_LINKS } from '../constants';
import { View, NavLink, User } from '../types';
import { UserIcon, BasketIcon } from './icons/HeaderIcons';
import SearchBar from './SearchBar';

interface HeaderProps {
  navigateTo: (view: View) => void;
  navigateToConfigurator: (filter: string | null) => void;
  currentView: View;
  user: User | null;
  basketItemCount: number;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, navigateToConfigurator, currentView, user, basketItemCount, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Delay to allow mouse to travel to the menu
  };

  const handleSubLinkNavigation = (subLink: NavLink) => {
    if (subLink.view) {
        if (subLink.view === 'selectBase') {
            navigateToConfigurator(subLink.filter || null);
        } else {
            navigateTo(subLink.view);
        }
    }
  };


  const navLinkClasses = (view?: View) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      currentView === view
        ? 'text-brand-teal'
        : 'text-gray-300 hover:text-brand-teal'
    }`;

  return (
    <header className="bg-brand-dark/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigateTo('home')} className="text-white text-2xl font-bold tracking-wider">
              PCBL <span className="text-brand-purple">UK</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                link.isDropdown ? (
                  <div 
                      key={link.name}
                      onMouseEnter={() => handleDropdownEnter(link.name)} 
                      onMouseLeave={handleDropdownLeave}
                      className="relative"
                  >
                      <button className={`${navLinkClasses()} flex items-center`}>
                          {link.name}
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </button>
                      {openDropdown === link.name && (
                          <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-brand-light-dark ring-1 ring-black ring-opacity-5 z-50">
                              <div className="py-1">
                                  {link.links?.map(subLink => (
                                      <button
                                          key={subLink.name}
                                          onClick={() => {
                                              handleSubLinkNavigation(subLink);
                                              setOpenDropdown(null);
                                          }}
                                          className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-purple/20 hover:text-white transition-colors"
                                      >
                                          {subLink.name}
                                      </button>
                                  ))}
                              </div>
                          </div>
                      )}
                  </div>
                ) : (
                    <button
                      key={link.name}
                      onClick={() => navigateTo(link.view as View)}
                      className={navLinkClasses(link.view)}
                    >
                      {link.name}
                    </button>
                  )
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <SearchBar onSearch={onSearch} />
            {user ? (
                <button onClick={() => navigateTo('account')} className="text-gray-300 hover:text-brand-teal p-2 rounded-full" aria-label="My Account">
                <UserIcon className="h-6 w-6" />
                </button>
            ) : (
                <button onClick={() => navigateTo('auth')} className="text-gray-300 hover:text-brand-teal p-2 rounded-full" aria-label="Sign In">
                <UserIcon className="h-6 w-6" />
                </button>
            )}
            <button onClick={() => navigateTo('basket')} className="relative text-gray-300 hover:text-brand-teal p-2 rounded-full" aria-label="Shopping Basket">
                <BasketIcon className="h-6 w-6" />
                {basketItemCount > 0 && (
                    <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-brand-purple text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                    {basketItemCount}
                    </span>
                )}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <div className='flex items-center space-x-1'>
              <SearchBar onSearch={onSearch} />
              <button onClick={() => navigateTo('basket')} className="relative text-gray-300 hover:text-brand-teal p-2 rounded-full" aria-label="Shopping Basket">
                  <BasketIcon className="h-6 w-6" />
                  {basketItemCount > 0 && (
                      <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-brand-purple text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                      {basketItemCount}
                      </span>
                  )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-brand-light-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              link.isDropdown ? (
                <div key={link.name}>
                  <button 
                    onClick={() => setOpenMobileSubMenu(openMobileSubMenu === link.name ? null : link.name)}
                    className="w-full text-left flex justify-between items-center text-gray-300 hover:bg-brand-light-dark hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    <span>{link.name}</span>
                    <svg className={`w-5 h-5 transition-transform ${openMobileSubMenu === link.name ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                  {openMobileSubMenu === link.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.links?.map(subLink => (
                        <button
                          key={subLink.name}
                          onClick={() => {
                              handleSubLinkNavigation(subLink);
                              setIsMenuOpen(false);
                              setOpenMobileSubMenu(null);
                          }}
                          className="w-full text-left text-gray-400 hover:bg-brand-light-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    navigateTo(link.view as View);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-gray-300 hover:bg-brand-light-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </button>
              )
            ))}
            
            <div className="border-t border-gray-700 pt-4 mt-4">
                 {user ? (
                     <button onClick={() => { navigateTo('account'); setIsMenuOpen(false); }} className="w-full text-left flex items-center text-gray-300 hover:bg-brand-light-dark hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                        <UserIcon className="h-6 w-6 mr-3" /> My Account
                     </button>
                  ) : (
                     <button onClick={() => { navigateTo('auth'); setIsMenuOpen(false); }} className="w-full text-left flex items-center text-gray-300 hover:bg-brand-light-dark hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                       <UserIcon className="h-6 w-6 mr-3" /> Sign In / Sign Up
                     </button>
                  )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;