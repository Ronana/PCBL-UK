import React, { useState, useRef, useMemo, useEffect } from 'react';
import { CONFIG_CATEGORIES } from '../constants';
import { BasePCSystem, BasketItem, ConfigCategory, SavedBuild, SelectedComponents, User } from '../types';
import { TriangleRightIcon, WindowsIcon, SffPcIcon } from '../components/icons/SpecIcons';
import Configurator from '../components/Configurator';

interface BaseConfigSelectorPageProps {
    onAddToBasket: (item: BasketItem) => void;
    filter: string | null;
    onSaveBuild: (name: string, buildData: { baseSystem: BasePCSystem, selectedComponents: SelectedComponents, totalPrice: number }) => void;
    buildToLoad: SavedBuild | null;
    onLoadComplete: () => void;
    user: User | null;
}

const BaseConfigSelectorPage: React.FC<BaseConfigSelectorPageProps> = ({ onAddToBasket, filter, onSaveBuild, buildToLoad, onLoadComplete, user }) => {
    const [selectedSystem, setSelectedSystem] = useState<BasePCSystem | null>(null);
    const [loadedComponents, setLoadedComponents] = useState<SelectedComponents | null>(null);
    const pageTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (buildToLoad) {
            setSelectedSystem(buildToLoad.baseSystem);
            setLoadedComponents(buildToLoad.selectedComponents);
            setTimeout(() => {
                pageTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            onLoadComplete(); // Signal that loading is done to prevent re-loading on nav
        }
    }, [buildToLoad, onLoadComplete]);

    const handleSelectSystem = (system: BasePCSystem, components: SelectedComponents | null = null) => {
        setSelectedSystem(system);
        setLoadedComponents(components);
        setTimeout(() => {
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleBack = () => {
        setSelectedSystem(null);
        setLoadedComponents(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const displayedCategories = useMemo(() => {
        if (filter === 'workstations') {
            return CONFIG_CATEGORIES.filter(c => c.id === 'workstations');
        }
        if (filter === 'overclocked') {
            return CONFIG_CATEGORIES.filter(c => c.id === 'overclocked');
        }
        if (filter === 'liquid') {
            return CONFIG_CATEGORIES.filter(c => c.id === 'liquid-series');
        }
        if (filter === 'server') {
            return CONFIG_CATEGORIES.filter(c => c.id === 'servers');
        }
        if (filter === 'sff') {
            return CONFIG_CATEGORIES.filter(c => c.id === 'sff');
        }
        if (filter === 'gaming') {
             return CONFIG_CATEGORIES.filter(c => ['home-office-gaming', 'overclocked', 'liquid-series'].includes(c.id));
        }
        // Default view shows everything
        return CONFIG_CATEGORIES;
    }, [filter]);

    const renderCard = (system: BasePCSystem, category: ConfigCategory) => {
        // Overclocked Card Style
        if (category.id === 'overclocked') {
            return (
                <div key={system.id} className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50 overflow-hidden">
                    <div className="relative">
                        <img src={system.imageUrl} alt={system.name} className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-md font-bold text-white uppercase">{system.name}</h2>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <p className="font-bold text-lg text-white mb-4">{system.budget}</p>
                        <ul className="space-y-2 text-gray-300 text-sm mb-6 flex-grow">
                            {system.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <TriangleRightIcon className="w-5 h-5 text-brand-teal flex-shrink-0 mr-1 mt-px" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <button
                                onClick={() => handleSelectSystem(system)}
                                className="w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-md hover:bg-teal-500 transition-all duration-300 flex items-center justify-center uppercase"
                            >
                                Configure
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

         // Small Form Factor Card Style
        if (category.id === 'sff') {
            return (
                 <div key={system.id} className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50">
                    <div className="p-6 flex flex-col flex-grow text-center">
                        <h2 className="text-lg font-bold text-white uppercase">{system.name}</h2>
                        <p className="text-gray-400 mt-1 text-sm flex-grow">{system.description}</p>
                        <div className="h-48 flex items-center justify-center my-4">
                            <img src={system.imageUrl} alt={system.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-700/50">
                            <div className="text-lg text-gray-300 mb-4">
                                Starting at <span className="text-3xl font-bold text-brand-teal">£{system.startingPrice.toLocaleString()}</span>
                            </div>
                            <button
                                onClick={() => handleSelectSystem(system)}
                                className="w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-md hover:bg-teal-500 transition-all duration-300 flex items-center justify-center uppercase"
                            >
                                Configure
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // Default card style (Gaming, Workstations, Servers, Liquid Series)
        return (
            <div key={system.id} className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50">
                <div className="p-6 flex flex-col flex-grow">
                    <div className="h-48 flex items-center justify-center mb-4">
                        <img src={system.imageUrl} alt={system.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h2 className="text-lg font-bold text-white uppercase">{system.name}</h2>
                    <p className="text-gray-400 mt-1 text-sm">{system.description}</p>
                    
                    <ul className="space-y-2 text-gray-300 text-sm my-6 flex-grow">
                        {system.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <TriangleRightIcon className="w-5 h-5 text-brand-teal flex-shrink-0 mr-1" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-gray-700/50">
                        <div className="text-lg text-gray-300 mb-4">
                            Starting at <span className="text-3xl font-bold text-brand-teal">£{system.startingPrice.toLocaleString()}</span>
                        </div>
                        <button
                            onClick={() => handleSelectSystem(system)}
                            className="w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-md hover:bg-teal-500 transition-all duration-300 flex items-center justify-center uppercase"
                        >
                            Configure
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const getGridCols = (category: ConfigCategory) => {
        if (category.id === 'overclocked' || category.id === 'liquid-series' || category.id === 'servers') {
            return 'lg:grid-cols-2';
        }
        return 'lg:grid-cols-3';
    };

    return (
        <div ref={pageTopRef}>
            {!selectedSystem ? (
                <div className="bg-brand-dark text-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        {displayedCategories.map((category) => (
                            <div key={category.id} className="mb-16">
                                <div className="bg-black/20 p-4 flex justify-between items-center mb-8 rounded-md">
                                    <h1 className="text-xl font-bold tracking-tight text-white uppercase flex items-center">
                                        {category.id === 'sff' && <SffPcIcon className="w-6 h-6 mr-3" />}
                                        {category.name}
                                    </h1>
                                    {category.id === 'workstations' && (
                                        <div className="hidden sm:flex items-center space-x-4">
                                            <div className="bg-blue-600 text-white text-sm py-1 px-3 rounded-sm flex items-center">
                                                <WindowsIcon className="w-4 h-4 mr-2" />
                                                Windows
                                            </div>
                                            <span className="text-sm text-gray-300">Get to know Windows 11 Pro</span>
                                        </div>
                                    )}
                                </div>

                                <div className={`grid grid-cols-1 md:grid-cols-2 ${getGridCols(category)} gap-8`}>
                                    {category.systems.map((system) => renderCard(system, category))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                 <div className="bg-[#111217] text-gray-200">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
                        <div className="text-center mb-8 relative">
                             <button onClick={handleBack} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Selection
                            </button>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Build Your Own</p>
                            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                               {selectedSystem.name} Gaming PC
                            </h1>
                        </div>
                        <Configurator 
                            key={selectedSystem.id + (buildToLoad ? buildToLoad.id : '')}
                            baseSystem={selectedSystem} 
                            onBack={handleBack} 
                            onAddToBasket={onAddToBasket}
                            onSaveBuild={onSaveBuild}
                            initialComponents={loadedComponents}
                            user={user}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BaseConfigSelectorPage;