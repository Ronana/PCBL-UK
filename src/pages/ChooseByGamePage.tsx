
import React, { useState, useMemo } from 'react';
import { PCSystem, GameData } from '../types';
import { GAMES_DATA, FEATURED_PCS, RACING_SIM_PCS, DEAL_PCS } from '../constants';
import PCSystemCard from '../components/PCSystemCard';

interface ChooseByGamePageProps {
    onViewProduct: (pc: PCSystem) => void;
    comparisonList: PCSystem[];
    onToggleComparison: (pc: PCSystem) => void;
}

type Resolution = '1080p' | '1440p' | '4K';

const ChooseByGamePage: React.FC<ChooseByGamePageProps> = ({ onViewProduct, comparisonList, onToggleComparison }) => {
    const [selectedGame, setSelectedGame] = useState<GameData | null>(null);
    const [selectedResolution, setSelectedResolution] = useState<Resolution | null>(null);

    const allPcs = useMemo(() => {
        const all = [...FEATURED_PCS, ...DEAL_PCS, ...RACING_SIM_PCS];
        return Array.from(new Map(all.map(pc => [pc.id, pc])).values());
    }, []);

    const recommendedPcs = useMemo(() => {
        if (!selectedGame || !selectedResolution) return [];
        const recommendedIds = selectedGame.recommendations[selectedResolution];
        if (!recommendedIds) return [];
        const pcs = allPcs.filter(pc => recommendedIds.includes(pc.id));
        // Sort by price to show the best value options first
        return pcs.sort((a,b) => a.price - b.price);
    }, [selectedGame, selectedResolution, allPcs]);
    
    const handleGameSelect = (game: GameData) => {
        setSelectedGame(game);
        setSelectedResolution(null);
    };

    const handleBackToGames = () => {
        setSelectedGame(null);
        setSelectedResolution(null);
    };

    const handleBackToResolutions = () => {
        setSelectedResolution(null);
    }

    const GameSelection = () => (
        <>
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Step 1: Choose Your Game
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                    Select the game you're most excited to play.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {GAMES_DATA.map(game => (
                    <button key={game.id} onClick={() => handleGameSelect(game)} className="group relative block rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <img src={game.imageUrl} alt={game.name} className="w-full h-80 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white group-hover:text-brand-teal transition-colors">{game.name}</h3>
                        </div>
                    </button>
                ))}
            </div>
        </>
    );

    const ResolutionSelection = () => (
        <>
            <div className="text-center relative">
                <button onClick={handleBackToGames} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Games
                </button>
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Step 2: Choose Your Resolution
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                    How do you want to experience <span className="font-bold text-brand-teal">{selectedGame?.name}</span>?
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                <button onClick={() => setSelectedResolution('1080p')} className="group bg-brand-light-dark p-8 rounded-lg text-center transition-all border border-gray-700 hover:border-brand-purple hover:bg-brand-purple/10">
                    <h3 className="text-4xl font-black text-white">1080p</h3>
                    <p className="mt-2 text-brand-teal font-semibold">High FPS & Competitive</p>
                    <p className="mt-2 text-gray-400">Perfect for esports titles and achieving the highest possible frame rates for a competitive edge.</p>
                </button>
                 <button onClick={() => setSelectedResolution('1440p')} className="group bg-brand-light-dark p-8 rounded-lg text-center transition-all border border-gray-700 hover:border-brand-purple hover:bg-brand-purple/10">
                    <h3 className="text-4xl font-black text-white">1440p</h3>
                    <p className="mt-2 text-brand-teal font-semibold">The Sweet Spot</p>
                    <p className="mt-2 text-gray-400">The perfect balance of stunning visual fidelity and high performance for immersive AAA gaming.</p>
                </button>
                 <button onClick={() => setSelectedResolution('4K')} className="group bg-brand-light-dark p-8 rounded-lg text-center transition-all border border-gray-700 hover:border-brand-purple hover:bg-brand-purple/10">
                    <h3 className="text-4xl font-black text-white">4K</h3>
                    <p className="mt-2 text-brand-teal font-semibold">Ultimate Fidelity</p>
                    <p className="mt-2 text-gray-400">For the ultimate cinematic experience with breathtaking detail and realism. Demands top-tier hardware.</p>
                </button>
            </div>
        </>
    );

    const RecommendationDisplay = () => (
         <>
            <div className="text-center relative">
                 <button onClick={handleBackToResolutions} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Resolutions
                </button>
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Our Recommendations for <span className="text-brand-teal">{selectedGame?.name}</span> at <span className="text-brand-teal">{selectedResolution?.toUpperCase()}</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                    These systems are configured to give you a fantastic experience.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {recommendedPcs.map(pc => (
                     <PCSystemCard 
                        key={pc.id} 
                        pc={pc} 
                        onViewProduct={onViewProduct} 
                        comparisonList={comparisonList}
                        onToggleComparison={onToggleComparison}
                    />
                ))}
            </div>
        </>
    );


    return (
        <div className="bg-brand-dark py-20 min-h-[70vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!selectedGame && <GameSelection />}
                {selectedGame && !selectedResolution && <ResolutionSelection />}
                {selectedGame && selectedResolution && <RecommendationDisplay />}
            </div>
        </div>
    );
};

export default ChooseByGamePage;
