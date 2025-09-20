import React from 'react';
import { SiteImages } from '../types';

interface ConfigureLandingPageProps {
    navigateToConfigurator: (filter: string) => void;
    siteImages: SiteImages;
}

const CategoryCard: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}> = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="relative group bg-brand-light-dark rounded-lg shadow-xl overflow-hidden cursor-pointer" onClick={onClick}>
            <img src={imageUrl} alt={title} className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-3xl font-extrabold text-white uppercase tracking-wider">{title}</h2>
                <p className="mt-2 text-gray-300">{description}</p>
                <div className="mt-6">
                    <span className="inline-block bg-brand-purple text-white font-bold py-3 px-6 rounded-md group-hover:bg-opacity-80 transition-all duration-300">
                        Configure
                    </span>
                </div>
            </div>
        </div>
    );
};

const ConfigureLandingPage: React.FC<ConfigureLandingPageProps> = ({ navigateToConfigurator, siteImages }) => {
    return (
        <div className="bg-brand-dark text-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight uppercase">Build a Custom PC</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Work, play, and create as quickly and seamlessly as your heart desires. Start by selecting a category.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CategoryCard
                        title="Home / Office / Gaming"
                        description="For everyday tasks, home, office, entry-gaming, business or education."
                        imageUrl={siteImages.landing_home || ''}
                        onClick={() => navigateToConfigurator('home')}
                    />
                    <CategoryCard
                        title="Gaming / Professional"
                        description="For serious multi-taskers, gamers or multimedia enthusiasts."
                        imageUrl={siteImages.landing_gaming || ''}
                        onClick={() => navigateToConfigurator('gaming')}
                    />
                    <CategoryCard
                        title="Workstation"
                        description="High-performance systems for a multitude of professional uses."
                        imageUrl={siteImages.landing_workstation || ''}
                        onClick={() => navigateToConfigurator('workstation')}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfigureLandingPage;