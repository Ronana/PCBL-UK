import React from 'react';
import { ComponentOption } from '../../types';

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface ComponentOptionCardProps {
    option: ComponentOption;
    isSelected: boolean;
    onSelect: () => void;
}

const ComponentOptionCard: React.FC<ComponentOptionCardProps> = ({ option, isSelected, onSelect }) => {
    return (
        <button 
            onClick={onSelect}
            className={`relative w-full p-2 border rounded-lg cursor-pointer transition-all duration-200 text-left ${isSelected ? 'border-brand-purple bg-brand-light-dark shadow-lg' : 'border-gray-700 bg-gray-800/20 hover:border-gray-600'}`}
        >
            {isSelected && (
                <div className="absolute top-1 right-1 bg-brand-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                    Selected
                </div>
            )}
            <div className="h-20 bg-gray-900 rounded-md flex items-center justify-center mb-2 overflow-hidden">
                {option.imageUrl ? (
                    <img src={option.imageUrl} alt={option.name} className="max-h-full max-w-full object-contain p-1" />
                ) : (
                    <span className="text-gray-600 text-xs">No Image</span>
                )}
            </div>
            <p className="text-xs text-center font-medium text-gray-300 h-10 leading-tight">{option.name}</p>
            <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-brand-teal font-semibold">{option.price > 0 ? `+ £${option.price.toFixed(2)}` : 'Included'}</p>
                <div className="text-gray-500 hover:text-white" title="More info (placeholder)">
                    <InfoIcon />
                </div>
            </div>
        </button>
    );
};

export default ComponentOptionCard;