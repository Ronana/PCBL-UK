
import React, { useRef } from 'react';
import { PRODUCT_CAROUSEL_ITEMS } from '../constants';
import { SiteImages, View } from '../types';

interface ProductCarouselProps {
    navigateTo: (view: View) => void;
    navigateToConfigurator: (filter: string | null) => void;
    siteImages: SiteImages;
}

const Arrow: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} z-10 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full h-12 w-12 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 backdrop-blur-sm`}
        aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
    >
        {direction === 'left' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        )}
    </button>
);

const QuickConfigure: React.FC<ProductCarouselProps> = ({ navigateTo, navigateToConfigurator, siteImages }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const items = PRODUCT_CAROUSEL_ITEMS;

    const handleAction = (item: typeof items[0]) => {
        if (item.actionType === 'view') {
            navigateTo(item.actionTarget as View);
        } else if (item.actionType === 'config') {
            navigateToConfigurator(item.actionTarget);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="bg-brand-dark pt-8 pb-16">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative group">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style>
                        {`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                        </style>
                        <div className="flex -mx-2">
                            {items.map((item, index) => (
                                <div key={index} className="snap-center w-[90vw] sm:w-[50vw] md:w-[33.33vw] lg:w-[25vw] xl:w-[20vw] flex-shrink-0 px-2">
                                    <div className={`relative h-[500px] rounded-lg overflow-hidden p-8 flex flex-col justify-end text-white bg-gray-900`} >
                                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${siteImages[item.imageKey] || ''})`}}></div>
                                        <div className={`absolute inset-0 ${item.bgColorClass} mix-blend-multiply`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                                            <p className="mt-2 text-gray-300 text-sm h-16">{item.description}</p>
                                            <button 
                                                onClick={() => handleAction(item)}
                                                className="mt-4 bg-brand-purple text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-80 transition-all text-sm uppercase tracking-wider shadow-lg shadow-brand-purple/30"
                                            >
                                                {item.buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Arrow direction="left" onClick={() => scroll('left')} />
                    <Arrow direction="right" onClick={() => scroll('right')} />
                </div>
            </div>
        </section>
    );
};

export default QuickConfigure;