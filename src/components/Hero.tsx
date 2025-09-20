
import React from 'react';
import { SiteImages } from '../types';

interface HeroProps {
  navigateToConfigurator: (filter?: string | null) => void;
  siteImages: SiteImages;
}

const Hero: React.FC<HeroProps> = ({ navigateToConfigurator, siteImages }) => {
  return (
    <div className="relative bg-brand-dark pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${siteImages.hero_background || ''})` }}
      >
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-black text-5xl md:text-7xl uppercase">
                Engineered for <span className="text-brand-purple">Victory</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Experience unparalleled performance with custom-built PCs from PCBL UK. Meticulously crafted with premium components for the ultimate gaming and creative experience.
              </p>
              <div className="mt-12">
                <button
                  onClick={() => navigateToConfigurator()}
                  className="bg-brand-purple text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-xl shadow-brand-purple/40 transform hover:scale-105"
                >
                  Configure Your Dream PC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;