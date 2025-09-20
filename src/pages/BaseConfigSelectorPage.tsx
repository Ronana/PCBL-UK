import React, { useState, useRef, useMemo, useEffect } from 'react';
import { BasePCSystem, BasketItem, SavedBuild, SelectedComponents, User, ConfiguratorSection, Platform, View, SiteImages } from '../types';
import { TriangleRightIcon } from '../components/icons/SpecIcons';
import Configurator from '../components/Configurator';
import { PLATFORMS } from '../constants';

interface BaseConfigSelectorPageProps {
    onAddToBasket: (item: BasketItem) => void;
    filter: string | null;
    onSaveBuild: (name: string, buildData: { baseSystem: BasePCSystem, selectedComponents: SelectedComponents, totalPrice: number }) => void;
    buildToLoad: SavedBuild | null;
    onLoadComplete: () => void;
    user: User | null;
    allSystems: BasePCSystem[];
    configuratorSections: ConfiguratorSection[];
    navigateTo: (view: View) => void;
    siteImages: SiteImages;
}

const BaseConfigSelectorPage: React.FC<BaseConfigSelectorPageProps> = ({ 
    onAddToBasket, 
    filter, 
    onSaveBuild, 
    buildToLoad, 
    onLoadComplete, 
    user,
    allSystems,
    configuratorSections,
    navigateTo,
    siteImages
}) => {
    const [selectedSystem, setSelectedSystem] = useState<BasePCSystem | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
    const [loadedComponents, setLoadedComponents] = useState<SelectedComponents | null>(null);
    const pageTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (buildToLoad) {
            setSelectedSystem(buildToLoad.baseSystem);
            setLoadedComponents(buildToLoad.selectedComponents);
            setTimeout(() => {
                pageTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            onLoadComplete();
        }
    }, [buildToLoad, onLoadComplete]);

    const handleSelectSystem = (system: BasePCSystem) => {
        setSelectedSystem(system);
        setLoadedComponents(null); // Reset components unless they are loaded from a saved build
        setTimeout(() => {
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleBackToSystems = () => {
        setSelectedSystem(null);
        setLoadedComponents(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToPlatforms = () => {
        setSelectedPlatform(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const displayedPlatforms = useMemo(() => {
        if (filter === 'gaming') return PLATFORMS.filter(p => p.type === 'gaming');
        if (filter === 'workstation') return PLATFORMS.filter(p => p.type === 'workstation');
        return [];
    }, [filter]);

    const systemsForPlatform = useMemo(() => {
        if (!selectedPlatform) return [];
        return allSystems.filter(sys => sys.platformId === selectedPlatform.id);
    }, [selectedPlatform, allSystems]);

    const systemsForHome = useMemo(() => {
        if (filter !== 'home') return [];
        // Filter by the new database column for reliability
        const homeSystems = allSystems.filter(sys => sys.displayCategory === 'home');
        
        // The image override logic for this specific page remains, as requested previously
        return homeSystems.map(sys => {
            if (sys.id === 'intel-core-gaming') {
                return { ...sys, imageUrl: siteImages.intel_config_logo || sys.imageUrl };
            }
            if (sys.id === 'amd-ryzen-gaming') {
                return { ...sys, imageUrl: siteImages.ryzen_config_logo || sys.imageUrl };
            }
            return sys;
        });
    }, [filter, allSystems, siteImages]);

    const renderPlatformCard = (platform: Platform) => (
        <div key={platform.id} className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50 overflow-hidden">
            <div className="relative">
                <img src={siteImages[platform.imageKey] || ''} alt={platform.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-md font-bold text-white uppercase">{platform.name}</h2>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="font-bold text-lg text-white mb-4">{platform.budget}</p>
                <ul className="space-y-2 text-gray-300 text-sm mb-6 flex-grow">
                    {platform.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <TriangleRightIcon className="w-5 h-5 text-brand-teal flex-shrink-0 mr-1 mt-px" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <button
                        onClick={() => setSelectedPlatform(platform)}
                        className="w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-md hover:bg-teal-500 transition-all duration-300 flex items-center justify-center uppercase"
                    >
                        Configure
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderSystemCard = (system: BasePCSystem) => (
        <div key={system.id} className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50">
            <div className="p-6 flex flex-col flex-grow">
                <div className="h-48 flex items-center justify-center mb-4">
                    <img src={system.imageUrl} alt={system.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h2 className="text-lg font-bold text-white uppercase">{system.name}</h2>
                <p className="text-gray-400 mt-1 text-sm flex-grow">{system.description}</p>
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
    
    const renderContent = () => {
        if (filter === 'home') {
            return (
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white uppercase text-center mb-8">Home, Office & Gaming PCs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {systemsForHome.map(system => renderSystemCard(system))}
                    </div>
                </div>
            );
        }

        if (selectedPlatform) {
            return (
                 <div>
                    <div className="text-center mb-8 relative">
                        <button onClick={handleBackToPlatforms} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </button>
                        <h1 className="text-2xl font-bold tracking-tight text-white uppercase">{selectedPlatform.name}</h1>
                    </div>
                    {systemsForPlatform.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {systemsForPlatform.map(system => renderSystemCard(system))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-400 py-12">
                            <p>No systems found for this platform yet. Please check back later!</p>
                        </div>
                    )}
                </div>
            )
        }

        return (
            <div>
                 <h1 className="text-2xl font-bold tracking-tight text-white uppercase text-center mb-8">{filter === 'gaming' ? 'Gaming / Professional PCs' : 'Workstation PCs'}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedPlatforms.map(platform => renderPlatformCard(platform))}
                </div>
            </div>
        );
    }

    return (
        <div ref={pageTopRef}>
            {selectedSystem ? (
                <div className="bg-[#111217] text-gray-200">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
                        <div className="text-center mb-8 relative">
                            <button onClick={handleBackToSystems} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Selection
                            </button>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Build Your Own</p>
                            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                                {selectedSystem.name}
                            </h1>
                        </div>
                        <Configurator 
                            key={selectedSystem.id + (buildToLoad ? buildToLoad.id : '')}
                            baseSystem={selectedSystem} 
                            onBack={handleBackToSystems} 
                            onAddToBasket={onAddToBasket}
                            onSaveBuild={onSaveBuild}
                            initialComponents={loadedComponents}
                            user={user}
                            configuratorSections={configuratorSections}
                        />
                    </div>
                </div>
            ) : (
                 <div className="bg-brand-dark text-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        {renderContent()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BaseConfigSelectorPage;