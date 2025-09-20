import React, { useState, useRef, useMemo, useEffect } from 'react';
import { BasePCSystem, BasketItem, ConfigCategory, SavedBuild, SelectedComponents, User, ConfiguratorSection, Platform } from '../types';
import { TriangleRightIcon, WindowsIcon, SffPcIcon } from '../components/icons/SpecIcons';
import Configurator from '../components/Configurator';
import { GAMING_PLATFORMS, WORKSTATION_PLATFORMS } from '../constants';

interface BaseConfigSelectorPageProps {
    onAddToBasket: (item: BasketItem) => void;
    filter: string | null;
    onSaveBuild: (name: string, buildData: { baseSystem: BasePCSystem, selectedComponents: SelectedComponents, totalPrice: number }) => void;
    buildToLoad: SavedBuild | null;
    onLoadComplete: () => void;
    user: User | null;
    configCategories: ConfigCategory[];
    configuratorSections: ConfiguratorSection[];
}

const PlatformCard: React.FC<{platform: Platform, onSelect: () => void}> = ({ platform, onSelect }) => {
    return (
        <div className="bg-brand-light-dark rounded-lg shadow-lg flex flex-col transition-all duration-300 border border-gray-700/50 hover:shadow-brand-purple/20 hover:border-brand-purple/50 overflow-hidden">
            <div className="relative">
                <img src={platform.imageUrl} alt={platform.name} className="w-full h-48 object-cover" />
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
                        onClick={onSelect}
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


const BaseConfigSelectorPage: React.FC<BaseConfigSelectorPageProps> = ({ 
    onAddToBasket, 
    filter, 
    onSaveBuild, 
    buildToLoad, 
    onLoadComplete, 
    user,
    configCategories,
    configuratorSections 
}) => {
    const [selectedSystem, setSelectedSystem] = useState<BasePCSystem | null>(null);
    const [loadedComponents, setLoadedComponents] = useState<SelectedComponents | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
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
        setLoadedComponents(null);
        setTimeout(() => {
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleBack = () => {
        setSelectedSystem(null);
        setLoadedComponents(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePlatformSelect = (platform: Platform) => {
        setSelectedPlatform(platform);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const allSystems = useMemo(() => configCategories.flatMap(c => c.systems), [configCategories]);

    const renderSystemCard = (system: BasePCSystem) => (
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
    
    const renderContent = () => {
        if (filter === 'home-office') {
            const homeSystems = configCategories.find(c => c.id === 'home-office-gaming')?.systems || [];
            return (
                 <div>
                    <div className="bg-black/20 p-4 flex justify-between items-center mb-8 rounded-md">
                        <h1 className="text-xl font-bold tracking-tight text-white uppercase flex items-center">
                            HOME, OFFICE & GAMING PCS
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {homeSystems.map(system => renderSystemCard(system))}
                    </div>
                </div>
            );
        }

        const platforms = filter === 'gaming-pro' ? GAMING_PLATFORMS : filter === 'workstation-pro' ? WORKSTATION_PLATFORMS : [];
        const title = filter === 'gaming-pro' ? "Gaming / Professional PCs" : "Professional Workstation PCs";

        if (selectedPlatform) {
            const systemsForPlatform = allSystems.filter(sys => selectedPlatform.systemIds.includes(sys.id));
            return (
                 <div>
                    <div className="bg-black/20 p-4 flex justify-between items-center mb-8 rounded-md relative">
                        <button onClick={() => setSelectedPlatform(null)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </button>
                        <h1 className="text-xl font-bold tracking-tight text-white uppercase flex items-center mx-auto">
                            {selectedPlatform.name}
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {systemsForPlatform.map(system => renderSystemCard(system))}
                    </div>
                </div>
            )
        }

        if (platforms.length > 0) {
            return (
                 <div>
                    <div className="bg-black/20 p-4 flex justify-between items-center mb-8 rounded-md">
                        <h1 className="text-xl font-bold tracking-tight text-white uppercase flex items-center">{title}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {platforms.map(p => <PlatformCard key={p.id} platform={p} onSelect={() => handlePlatformSelect(p)} />)}
                    </div>
                </div>
            );
        }

        // Fallback for old filters or direct links
        const category = configCategories.find(c => c.id === filter);
        if (category) {
             return (
                 <div>
                    <div className="bg-black/20 p-4 flex justify-between items-center mb-8 rounded-md">
                        <h1 className="text-xl font-bold tracking-tight text-white uppercase flex items-center">{category.name}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {category.systems.map(system => renderSystemCard(system))}
                    </div>
                </div>
            );
        }

        return <p>Invalid configuration selection.</p>;
    }


    return (
        <div ref={pageTopRef}>
            {!selectedSystem ? (
                <div className="bg-brand-dark text-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                       {renderContent()}
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
                               {selectedSystem.name}
                            </h1>
                        </div>
                        <Configurator 
                            key={selectedSystem.id + (buildToLoad ? buildToLoad.id : '')}
                            baseSystem={selectedSystem}
                            platformId={selectedPlatform?.id || null}
                            onBack={handleBack} 
                            onAddToBasket={onAddToBasket}
                            onSaveBuild={onSaveBuild}
                            initialComponents={loadedComponents}
                            user={user}
                            configuratorSections={configuratorSections}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BaseConfigSelectorPage;