import React from 'react';
import { PcCaseIcon, DesktopIcon, WorkstationIcon, TriangleRightIcon } from '../components/icons/SpecIcons';

interface ConfigureLandingPageProps {
  navigateToConfigurator: (filter: string) => void;
}

const CategoryCard: React.FC<{
    category: { name: string; description: string; icon: JSX.Element; image: string; features: string[]; price: string; filter: string; };
    onSelect: (filter: string) => void;
}> = ({ category, onSelect }) => (
    <div className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50">
        <div className="p-6">
            <div className="flex items-center space-x-4">
                {category.icon}
                <div>
                    <h2 className="text-lg font-bold text-white uppercase">{category.name}</h2>
                    <p className="text-sm text-gray-400">{category.description}</p>
                </div>
            </div>
        </div>
        <div className="flex-grow">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <ul className="space-y-2 text-gray-300 text-sm mb-6 flex-grow">
                {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <TriangleRightIcon className="w-5 h-5 text-brand-teal flex-shrink-0 mr-1 mt-px" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-auto border-t border-gray-700/50 pt-4 flex items-center justify-between">
                <span className="text-gray-300 font-semibold">{category.price}</span>
                <button
                    onClick={() => onSelect(category.filter)}
                    className="bg-brand-teal text-white font-bold py-2 px-6 rounded-md hover:bg-teal-500 transition-all duration-300 flex items-center justify-center uppercase text-sm"
                >
                    Configure
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    </div>
);

const ConfigureLandingPage: React.FC<ConfigureLandingPageProps> = ({ navigateToConfigurator }) => {

    const categories = [
        {
            name: 'HOME / OFFICE / GAMING',
            description: 'Work, play, and create as quickly and seamlessly as your heart desires.',
            icon: <PcCaseIcon className="w-10 h-10 text-brand-teal" />,
            image: 'src/assets/home-office-pc.png',
            features: [
                'Custom PCs for home, office, entry-gaming, business or education.',
                'Micro-ATX options available to reduce size.',
                'Based around competitively priced chipsets with optional integrated graphics.'
            ],
            price: 'Starting at £390',
            filter: 'home-office'
        },
        {
            name: 'GAMING / PROFESSIONAL',
            description: 'For serious multi-taskers, gamers, professional & enthusiasts.',
            icon: <DesktopIcon className="w-10 h-10 text-brand-teal" />,
            image: 'src/assets/gaming-pc.png',
            features: [
                'Featuring the latest CPUs and graphics such as AMD® Ryzen™, Intel® Core™, and Nvidia® GeForce RTX.',
                'Ideal for high-end gaming, streaming, professional use & content creation.'
            ],
            price: 'Starting at £420',
            filter: 'gaming-pro'
        },
        {
            name: 'WORKSTATION',
            description: 'High-performance systems for a multitude of professional uses.',
            icon: <WorkstationIcon className="w-10 h-10 text-brand-teal" />,
            image: 'src/assets/workstation-pc.png',
            features: [
                'Featuring big-core CPUs such as Intel® Xeon™/i9, & AMD® Threadripper™.',
                'Ideal for CAD, AI Training, Deep Learning, Animation 3D Rendering, Media Production and professional use.'
            ],
            price: 'Starting at £550',
            filter: 'workstation-pro'
        }
    ];

    return (
        <div className="bg-brand-dark text-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Build a Custom PC</h1>
                    <p className="mt-4 text-xl text-gray-400">Choose a category to start building your perfect PC.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map(cat => (
                        <CategoryCard key={cat.filter} category={cat} onSelect={navigateToConfigurator} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConfigureLandingPage;