
import React, { useState, useEffect } from 'react';
import { DEAL_PCS } from '../constants';
import PCSystemCard from '../components/PCSystemCard';
import { PCSystem } from '../types';

interface DealsPageProps {
  onViewProduct: (pc: PCSystem) => void;
  comparisonList: PCSystem[];
  onToggleComparison: (pc: PCSystem) => void;
}

const DealsPage: React.FC<DealsPageProps> = ({ onViewProduct, comparisonList, onToggleComparison }) => {
  const [displayedPcs, setDisplayedPcs] = useState<PCSystem[]>(DEAL_PCS);
  const [sortOption, setSortOption] = useState('default');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    cpuBrands: [] as string[],
  });

  useEffect(() => {
    let tempPcs = [...DEAL_PCS];

    // Filtering logic
    const min = parseFloat(filters.minPrice) || 0;
    const max = parseFloat(filters.maxPrice) || Infinity;
    tempPcs = tempPcs.filter(pc => pc.price >= min && pc.price <= max);
    
    if (filters.cpuBrands.length > 0) {
      tempPcs = tempPcs.filter(pc => 
        filters.cpuBrands.some(brand => pc.specs.cpu.toLowerCase().includes(brand.toLowerCase()))
      );
    }

    // Sorting logic
    switch (sortOption) {
      case 'price-asc':
        tempPcs.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        tempPcs.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        tempPcs.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setDisplayedPcs(tempPcs);
  }, [filters, sortOption]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCpuFilterChange = (brand: string) => {
    setFilters(prev => {
      const newCpuBrands = prev.cpuBrands.includes(brand)
        ? prev.cpuBrands.filter(b => b !== brand)
        : [...prev.cpuBrands, brand];
      return { ...prev, cpuBrands: newCpuBrands };
    });
  };

  const resetFilters = () => {
    setFilters({ minPrice: '', maxPrice: '', cpuBrands: [] });
    setSortOption('default');
  };

  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">Special Offers</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Today's Top Deals
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Grab a bargain with our limited-time offers on these expertly crafted systems.
          </p>
        </div>
        
        {/* Filter and Sort Controls */}
        <div className="my-12 p-4 bg-brand-light-dark rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <fieldset className="flex items-center gap-2">
              <legend className="sr-only">Price</legend>
              <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min Price £" className="bg-brand-dark border-gray-600 rounded-md w-28 py-2 px-3 text-white text-sm" />
              <span>-</span>
              <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max Price £" className="bg-brand-dark border-gray-600 rounded-md w-28 py-2 px-3 text-white text-sm" />
            </fieldset>
            <fieldset className="flex items-center gap-4">
               <legend className="text-sm font-medium text-gray-300 mr-2">CPU:</legend>
              <label className="flex items-center text-sm text-gray-300">
                <input type="checkbox" checked={filters.cpuBrands.includes('Intel')} onChange={() => handleCpuFilterChange('Intel')} className="h-4 w-4 rounded bg-brand-dark text-brand-purple focus:ring-brand-purple" />
                <span className="ml-2">Intel</span>
              </label>
              <label className="flex items-center text-sm text-gray-300">
                <input type="checkbox" checked={filters.cpuBrands.includes('AMD')} onChange={() => handleCpuFilterChange('AMD')} className="h-4 w-4 rounded bg-brand-dark text-brand-purple focus:ring-brand-purple" />
                <span className="ml-2">AMD</span>
              </label>
            </fieldset>
             <button onClick={resetFilters} className="text-sm text-brand-teal hover:underline">Reset Filters</button>
          </div>
          <div>
            <label htmlFor="sort-by" className="sr-only">Sort by</label>
            <select id="sort-by" value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="bg-brand-dark border-gray-600 rounded-md py-2 pl-3 pr-8 text-white text-sm focus:ring-brand-purple">
              <option value="default">Sort by...</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
            </select>
          </div>
        </div>
        
        {displayedPcs.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {displayedPcs.map((pc) => (
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
           <div className="mt-16 text-center text-gray-400">
              <h3 className="text-2xl font-bold text-white">No Matching Systems Found</h3>
              <p>Try adjusting your filters or click "Reset Filters" to see all deals.</p>
           </div>
        )}
      </div>
    </section>
  );
};

export default DealsPage;
