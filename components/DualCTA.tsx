

import React from 'react';
import { View } from '../types';

interface DualCTAProps {
    navigateToConfigurator: (filter?: string | null) => void;
    navigateTo: (view: View) => void;
}

const DualCTA: React.FC<DualCTAProps> = ({ navigateToConfigurator, navigateTo }) => {
    return (
        <section className="bg-brand-dark py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Jargon Free Configurator */}
                    <div className="relative rounded-lg overflow-hidden bg-brand-light-dark p-12 flex flex-col items-start text-left shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-extrabold text-white">JARGON FREE CONFIGURATOR</h3>
                            <p className="mt-4 text-gray-400">Create your ideal computer without any confusion.</p>
                            <button 
                                onClick={() => navigateToConfigurator(null)}
                                className="mt-8 bg-brand-dark text-white font-bold py-3 px-6 rounded-md border border-gray-600 hover:bg-brand-purple hover:border-brand-purple transition-all duration-300"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Choose Your Game */}
                    <div className="relative rounded-lg overflow-hidden p-12 flex flex-col items-start text-left shadow-2xl bg-cover bg-center" style={{ backgroundImage: "url('/custom-pc-2.png')" }}>
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-extrabold text-white">CHOOSE YOUR FAVOURITE GAME</h3>
                            <p className="mt-4 text-gray-300">Choose a desktop PC system built around your favourite game.</p>
                            <button 
                                onClick={() => navigateTo('chooseByGame')}
                                className="mt-8 bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-brand-purple/30"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DualCTA;