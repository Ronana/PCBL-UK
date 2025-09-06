
import React from 'react';
import { PCSystem } from '../types';
import PCSystemCard from '../components/PCSystemCard';

interface SearchPageProps {
    query: string;
    results: PCSystem[];
    onViewProduct: (pc: PCSystem) => void;
    comparisonList: PCSystem[];
    onToggleComparison: (pc: PCSystem) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ query, results, onViewProduct, comparisonList, onToggleComparison }) => {
    return (
        <section className="bg-brand-dark py-20 min-h-[60vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Search Results for "{query}"
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        {results.length} {results.length === 1 ? 'result' : 'results'} found.
                    </p>
                </div>

                {results.length > 0 ? (
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {results.map((pc) => (
                            <PCSystemCard 
                              key={pc.id} 
                              pc={pc} 
                              onViewProduct={onViewProduct} 
                              comparisonList={comparisonList}
                              onToggleComparison={onToggleComparison}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-16 text-center bg-brand-light-dark max-w-lg mx-auto p-8 rounded-lg">
                         <p className="text-lg text-gray-300">
                            No systems found matching your search.
                         </p>
                         <p className="text-gray-400 mt-2">
                            Try a different term (e.g., "RTX 4080", "Vanguard") or browse our categories.
                         </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchPage;