
import React from 'react';
import { PCSystem, View } from '../types';
import { CompareIcon, CloseIcon } from '../components/icons/SpecIcons';

interface ComparePageProps {
    items: PCSystem[];
    onToggleComparison: (pc: PCSystem) => void;
    onViewProduct: (pc: PCSystem) => void;
    navigateTo: (view: View) => void;
}

const ComparePage: React.FC<ComparePageProps> = ({ items, onToggleComparison, onViewProduct, navigateTo }) => {

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto py-24 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-white">Compare Systems</h1>
                <p className="mt-4 text-lg text-gray-400">You haven't selected any PCs to compare yet.</p>
                <button
                    onClick={() => navigateTo('home')}
                    className="mt-8 bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all"
                >
                    Browse PCs
                </button>
            </div>
        );
    }

    const specKeys = ['Processor (CPU)', 'Graphics Card (GPU)', 'Memory (RAM)', 'Storage (SSD)', 'Motherboard', 'PC Case'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-extrabold text-white tracking-tight text-center mb-12">Compare PC Builds</h1>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr>
                            <th className="py-4 pr-4 w-1/5"></th>
                            {items.map(pc => (
                                <th key={pc.id} className="p-4 w-1/4 border-b border-l border-gray-700 bg-brand-light-dark">
                                    <div className="flex flex-col h-full">
                                        <img src={pc.galleryImages[0]} alt={pc.name} className="h-32 w-full object-contain mb-4" />
                                        <h3 className="font-bold text-lg text-white">{pc.name}</h3>
                                        <p className="text-sm text-gray-400 flex-grow">{pc.tagline}</p>
                                        <div className="mt-4">
                                            <div className="text-2xl font-black text-brand-purple">£{pc.price.toLocaleString()}</div>
                                            <button onClick={() => onViewProduct(pc)} className="text-sm text-brand-teal hover:underline mt-1">View Details</button>
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Core Specs */}
                        {specKeys.map(key => (
                            <tr key={key}>
                                <td className="py-3 pr-4 font-semibold text-gray-300 border-b border-gray-800">{key}</td>
                                {items.map(pc => (
                                    <td key={pc.id} className="p-4 border-b border-l border-gray-800 text-gray-300">
                                        {pc.fullSpecs[key] || '-'}
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Benchmarks (e.g., Cyberpunk 1440p) */}
                        <tr>
                            <td className="py-3 pr-4 font-semibold text-gray-300 border-b border-gray-800">Cyberpunk 2077 (1440p)</td>
                             {items.map(pc => (
                                <td key={pc.id} className="p-4 border-b border-l border-gray-800 text-gray-300 font-bold">
                                    {pc.benchmarks?.find(b => b.game === 'Cyberpunk 2077' && b.resolution === '1440p')?.fps} FPS
                                </td>
                            ))}
                        </tr>

                        {/* Action Buttons */}
                        <tr>
                            <td className="py-4 pr-4"></td>
                            {items.map(pc => (
                                <td key={pc.id} className="p-4 border-l border-gray-800">
                                     <button 
                                        onClick={() => onToggleComparison(pc)}
                                        className="w-full flex items-center justify-center text-center font-bold py-3 px-4 rounded-md transition-all duration-300 bg-red-600/20 text-red-400 border border-red-600 hover:bg-red-600 hover:text-white"
                                    >
                                        <CloseIcon className="h-5 w-5 mr-2" />
                                        Remove
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComparePage;