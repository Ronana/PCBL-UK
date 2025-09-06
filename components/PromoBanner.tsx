import React from 'react';
import { View } from '../types';

interface PromoBannerProps {
    navigateTo: (view: View) => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ navigateTo }) => {
    return (
        <div className="bg-brand-purple">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-extrabold text-white">TODAY'S DEALS</h2>
                        <p className="text-purple-200">The latest offers and promotions from PCBL UK</p>
                    </div>
                    <button 
                        onClick={() => navigateTo('deals')}
                        className="bg-white text-brand-purple font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition-all duration-300 shadow-lg"
                    >
                        View Deals
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;