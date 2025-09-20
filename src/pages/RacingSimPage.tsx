
import React, { useState, useEffect } from 'react';
import { RACING_SIM_PCS } from '../constants';
import PCSystemCard from '../components/PCSystemCard';
import { PCSystem } from '../types';

interface RacingSimPageProps {
  onViewProduct: (pc: PCSystem) => void;
  comparisonList: PCSystem[];
  onToggleComparison: (pc: PCSystem) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const RacingSimPage: React.FC<RacingSimPageProps> = ({ onViewProduct, comparisonList, onToggleComparison }) => {
    const [displayedPcs, setDisplayedPcs] = useState<PCSystem[]>(RACING_SIM_PCS);
    const [sortOption, setSortOption] = useState('default');
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        cpuBrands: [] as string[],
    });

    useEffect(() => {
        let tempPcs = [...RACING_SIM_PCS];

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

    const simRacingFeatures = [
        {
            title: 'Optimized for VR & Triple Screens',
            description: 'Our builds are tested to handle the high demands of virtual reality and multi-monitor setups for a truly panoramic view of the track.',
        },
        {
            title: 'Extensive Peripheral Compatibility',
            description: 'With ample high-speed USB ports and robust motherboards, our PCs are ready for your entire ecosystem of wheels, pedals, shifters, and handbrakes.',
        },
        {
            title: 'Tuned for Sim Racing Titles',
            description: 'We optimize our configurations to excel in popular titles like iRacing, Assetto Corsa Competizione, and EA Sports WRC.',
        },
        {
            title: 'Built by Sim Racing Enthusiasts',
            description: 'We\'re passionate about sim racing ourselves, and we build every PC with the attention to detail we\'d want in our own rigs.',
        }
    ];

    return (
        <div className="bg-brand-dark text-white">
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 flex content-center items-center justify-center min-h-[60vh]">
                 <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614294154339-1f2a8c02118f?q=80&w=2070&auto=format&fit=crop')" }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
                </div>
                <div className="container relative mx-auto text-center">
                    <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-wider">
                        Feel Every <span className="text-brand-purple">Corner</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Experience ultimate immersion with our custom-built racing simulator PCs, engineered for peak performance and reliability.
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Why a Specialized PC <span className="text-brand-purple">Matters</span>
                            </h2>
                            <p className="mt-4 text-gray-400 text-lg">
                                Sim racing isn't just a game—it's a pursuit of realism. A standard PC can struggle with the demands of high-resolution textures, complex physics calculations, and the need for a consistently high frame rate. A split-second stutter can be the difference between a podium finish and the wall.
                            </p>
                            <p className="mt-4 text-gray-400 text-lg">
                                Our Racing Sim PCs are specifically configured to provide the smooth, fluid performance that allows you to focus on your racing line. We prioritize powerful single-core CPU performance and top-tier GPUs to ensure you can run at high settings, whether on a single ultrawide, a triple-screen array, or in virtual reality.
                            </p>
                        </div>
                        <div>
                             <img 
                                src="https://images.unsplash.com/photo-1628202492925-b9b5f50804a3?q=80&w=1964&auto=format&fit=crop"
                                alt="Triple monitor racing simulator setup" 
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* PC Builds Section */}
            <section className="bg-brand-light-dark py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">Pre-Configured Sim Rigs</h2>
                  <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Choose Your Grid Position
                  </p>
                  <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                    From the starting line to the champion's podium, we have a build for every level of sim racer.
                  </p>
                </div>
                
                 {/* Filter and Sort Controls */}
                <div className="my-12 p-4 bg-brand-dark rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <fieldset className="flex items-center gap-2">
                        <legend className="sr-only">Price</legend>
                        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min Price £" className="bg-brand-light-dark border-gray-600 rounded-md w-28 py-2 px-3 text-white text-sm" />
                        <span>-</span>
                        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max Price £" className="bg-brand-light-dark border-gray-600 rounded-md w-28 py-2 px-3 text-white text-sm" />
                        </fieldset>
                        <fieldset className="flex items-center gap-4">
                        <legend className="text-sm font-medium text-gray-300 mr-2">CPU:</legend>
                        <label className="flex items-center text-sm text-gray-300">
                            <input type="checkbox" checked={filters.cpuBrands.includes('Intel')} onChange={() => handleCpuFilterChange('Intel')} className="h-4 w-4 rounded bg-brand-light-dark text-brand-purple focus:ring-brand-purple" />
                            <span className="ml-2">Intel</span>
                        </label>
                        <label className="flex items-center text-sm text-gray-300">
                            <input type="checkbox" checked={filters.cpuBrands.includes('AMD')} onChange={() => handleCpuFilterChange('AMD')} className="h-4 w-4 rounded bg-brand-light-dark text-brand-purple focus:ring-brand-purple" />
                            <span className="ml-2">AMD</span>
                        </label>
                        </fieldset>
                        <button onClick={resetFilters} className="text-sm text-brand-teal hover:underline">Reset Filters</button>
                    </div>
                    <div>
                        <label htmlFor="sort-by" className="sr-only">Sort by</label>
                        <select id="sort-by" value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="bg-brand-light-dark border-gray-600 rounded-md py-2 pl-3 pr-8 text-white text-sm focus:ring-brand-purple">
                        <option value="default">Sort by...</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A-Z</option>
                        </select>
                    </div>
                </div>

                {displayedPcs.length > 0 ? (
                    <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
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
                        <h3 className="text-2xl font-bold text-white">No Matching Rigs Found</h3>
                        <p>Try adjusting your filters or click "Reset Filters" to see all sim racing PCs.</p>
                    </div>
                )}
              </div>
            </section>

             {/* Why Us Section */}
            <section className="bg-brand-dark py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                  <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">The PCBL UK Advantage</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Built for the Discerning Racer
                  </p>
                </div>

                <div className="mt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {simRacingFeatures.map((point) => (
                      <div key={point.title} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-purple text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-white">{point.title}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-400">
                          {point.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </section>

        </div>
    );
};

export default RacingSimPage;
