
import React from 'react';
import { PCSystem } from '../types';
import { CpuIcon, GpuIcon, RamIcon, PcCaseIcon, CompareIcon } from './icons/SpecIcons';

interface PCSystemCardProps {
  pc: PCSystem;
  onViewProduct: (pc: PCSystem) => void;
  comparisonList: PCSystem[];
  onToggleComparison: (pc: PCSystem) => void;
}

const PCSystemCard: React.FC<PCSystemCardProps> = ({ pc, onViewProduct, comparisonList, onToggleComparison }) => {
  const isCompared = comparisonList.some(item => item.id === pc.id);

  return (
    <div className="relative flex flex-col bg-brand-light-dark rounded-lg overflow-hidden shadow-lg h-full border border-gray-700/50">
      {pc.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">SALE</div>
      )}
      <button 
        onClick={() => onToggleComparison(pc)}
        className={`absolute top-2 right-2 p-2 rounded-full transition-colors z-10 ${
          isCompared ? 'bg-brand-teal text-white' : 'bg-brand-dark/50 text-gray-300 hover:bg-brand-dark'
        }`}
        title={isCompared ? 'Remove from comparison' : 'Add to comparison'}
        aria-label={isCompared ? 'Remove from comparison' : 'Add to comparison'}
      >
        <CompareIcon className="h-5 w-5" />
      </button>

      <div className="p-6 flex flex-col flex-grow">
        
        <div className="h-40 flex items-center justify-center border-b border-gray-700/50 mb-4">
          {/* This is a placeholder for an image or icon, currently empty as per the design reference */}
          <div className="text-center">
            <PcCaseIcon className="h-12 w-12 text-gray-600 mx-auto" />
            <span className="text-xs text-gray-500 mt-2 block">{pc.name}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white">{pc.name}</h3>
        <p className="text-sm text-gray-400 mt-1 flex-grow">{pc.tagline}</p>

        <div className="my-4 space-y-3 text-sm text-gray-300">
          <div className="flex items-center">
            <CpuIcon className="h-5 w-5 text-brand-purple mr-3" />
            <span>{pc.specs.cpu}</span>
          </div>
          <div className="flex items-center">
            <GpuIcon className="h-5 w-5 text-brand-purple mr-3" />
            <span>{pc.specs.gpu}</span>
          </div>
          <div className="flex items-center">
            <RamIcon className="h-5 w-5 text-brand-purple mr-3" />
            <span>{pc.specs.ram}</span>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-baseline justify-center text-4xl font-black text-white mb-4">
            {pc.originalPrice && (
              <span className="text-2xl text-gray-500 line-through mr-3">
                £{pc.originalPrice.toLocaleString()}
              </span>
            )}
            <span>
              £{pc.price.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
             <button 
                onClick={() => onViewProduct(pc)}
                className="w-full text-center bg-brand-purple text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300"
              >
              Customize
            </button>
            <button 
                onClick={() => onViewProduct(pc)}
                className="w-full text-center bg-brand-dark text-gray-300 font-bold py-3 px-4 rounded-md hover:bg-gray-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCSystemCard;