
import React from 'react';
import { FEATURED_PCS } from '../constants';
import PCSystemCard from './PCSystemCard';
import { PCSystem } from '../types';

interface FeaturedPCsProps {
  onViewProduct: (pc: PCSystem) => void;
  comparisonList: PCSystem[];
  onToggleComparison: (pc: PCSystem) => void;
}

const FeaturedPCs: React.FC<FeaturedPCsProps> = ({ onViewProduct, comparisonList, onToggleComparison }) => {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">Pre-Configured Systems</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Ready to Dominate
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Choose from our expertly crafted systems, designed for every type of gamer and creator.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PCS.map((pc) => (
            <PCSystemCard 
              key={pc.id} 
              pc={pc} 
              onViewProduct={onViewProduct} 
              comparisonList={comparisonList}
              onToggleComparison={onToggleComparison}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPCs;