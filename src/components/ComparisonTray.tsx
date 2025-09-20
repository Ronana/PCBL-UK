
import React from 'react';
import { PCSystem, View } from '../types';
import { CloseIcon } from './icons/SpecIcons';

interface ComparisonTrayProps {
    items: PCSystem[];
    onRemove: (pc: PCSystem) => void;
    onClear: () => void;
    navigateTo: (view: View) => void;
}

const ComparisonTray: React.FC<ComparisonTrayProps> = ({ items, onRemove, onClear, navigateTo }) => {
    if (items.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-light-dark/90 backdrop-blur-lg border-t border-gray-700 shadow-2xl z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-white hidden sm:block">Compare ({items.length}/4)</span>
                        {items.map(pc => (
                            <div key={pc.id} className="relative">
                                <img src={pc.galleryImages[0]} alt={pc.name} className="h-16 w-16 rounded-md object-contain bg-brand-dark p-1" />
                                <button
                                    onClick={() => onRemove(pc)}
                                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-500 transition-colors"
                                    aria-label={`Remove ${pc.name} from comparison`}
                                >
                                    <CloseIcon className="h-3 w-3" />
                                </button>
                            </div>
                        ))}
                         {[...Array(4 - items.length)].map((_, i) => (
                             <div key={`placeholder-${i}`} className="h-16 w-16 rounded-md bg-brand-dark/50 border-2 border-dashed border-gray-600 hidden lg:block"></div>
                         ))}
                    </div>
                    <div className="flex items-center gap-4">
                         <button
                            onClick={onClear}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Clear All
                        </button>
                        <button
                            onClick={() => navigateTo('compare')}
                            className="bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300"
                        >
                            Compare Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTray;