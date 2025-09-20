
import React, { useState, useMemo } from 'react';
import { PCSystem, Review } from '../types';
import ImageGallery from '../components/ImageGallery';
import TrustBadges from '../components/TrustBadges';
import FullSpecsList from '../components/FullSpecsList';
import PerformanceBenchmarks from '../components/PerformanceBenchmarks';
import ReviewsSection from '../components/ReviewsSection';
import RatingStars from '../components/RatingStars';

interface ProductDetailPageProps {
    pc: PCSystem;
    onBack: () => void;
}

type Tab = 'story' | 'specs' | 'performance' | 'reviews' | 'warranty';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 sm:px-6 py-3 font-semibold rounded-t-lg transition-colors text-sm sm:text-base whitespace-nowrap ${
                active 
                ? 'bg-brand-light-dark text-white' 
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
        >
            {children}
        </button>
    );
};


const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ pc: initialPc, onBack }) => {
    const [pc, setPc] = useState(initialPc);
    const [activeTab, setActiveTab] = useState<Tab>('story');

    const averageRating = useMemo(() => {
        if (!pc.reviews || pc.reviews.length === 0) return 0;
        const total = pc.reviews.reduce((acc, review) => acc + review.rating, 0);
        return total / pc.reviews.length;
    }, [pc.reviews]);

    const handleAddReview = (newReview: Omit<Review, 'id' | 'date'>) => {
        const reviewToAdd: Review = {
            ...newReview,
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
        };
        setPc(prevPc => ({
            ...prevPc,
            reviews: [reviewToAdd, ...(prevPc.reviews || [])]
        }));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'story':
                return (
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Story</h3>
                        <p className="text-gray-300 leading-relaxed">{pc.story}</p>
                    </div>
                );
            case 'specs':
                return (
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Full Specification</h3>
                       <FullSpecsList specs={pc.fullSpecs} />
                       <div className="mt-8">
                            <h4 className="text-xl font-bold text-white mb-3">What's In The Box</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {pc.whatsInTheBox.map(item => <li key={item}>{item}</li>)}
                            </ul>
                       </div>
                    </div>
                );
            case 'performance':
                return pc.benchmarks ? <PerformanceBenchmarks benchmarks={pc.benchmarks} /> : null;
            case 'reviews':
                return <ReviewsSection reviews={pc.reviews || []} onAddReview={handleAddReview} />;
            case 'warranty':
                 return (
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Warranty & Support</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            At PCBL UK, we stand behind the quality of our builds. Every custom PC comes with a comprehensive 3-year warranty covering both parts and labour, giving you complete peace of mind.
                        </p>
                         <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-brand-teal flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span><strong>3-Year Premium Warranty:</strong> Includes parts and labour. If a component fails, we'll replace it at no cost.</span>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-brand-teal flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span><strong>UK-Based Lifetime Support:</strong> Our expert technical support team is based in the UK and available to help for the life of your machine.</span>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-brand-teal flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span><strong>Hassle-Free Process:</strong> In the unlikely event of an issue, our team will guide you through a simple and efficient support process to get you back up and running as quickly as possible.</span>
                            </li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className="bg-brand-dark min-h-screen text-white">
            <div className="relative bg-brand-dark">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(98,48,221,0.2)_0%,_transparent_70%)]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <button onClick={onBack} className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Products
                        </button>
                    </div>
                    
                    <ImageGallery images={pc.galleryImages} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight">{pc.name}</h1>
                            <p className="mt-2 text-gray-400 text-lg">{pc.tagline}</p>
                            {pc.reviews && pc.reviews.length > 0 && (
                                <div className="mt-4 flex items-center">
                                    <RatingStars rating={averageRating} />
                                    <span className="ml-3 text-sm text-gray-400">{averageRating.toFixed(1)} out of 5</span>
                                    <span className="ml-3 text-sm text-gray-400">({pc.reviews.length} reviews)</span>
                                </div>
                            )}
                             <div className="mt-4 flex items-center text-sm text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
                                </svg>
                                <span>Built and delivered in 2 - 3 weeks</span>
                            </div>
                        </div>
                        <div className="md:text-right">
                             <div className="text-4xl font-black text-brand-purple">
                                £{pc.price.toLocaleString()}
                            </div>
                            <p className="text-gray-400 text-sm">From £{(pc.price / 12).toFixed(2)} per month</p>
                             <button className="mt-6 w-full md:w-auto bg-brand-purple text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-brand-purple/30">
                                Add to Basket
                            </button>
                        </div>
                    </div>
                </div>

                <TrustBadges />

                <div className="mt-12">
                    <div className="border-b border-gray-700">
                        <nav className="-mb-px flex space-x-0 sm:space-x-4 overflow-x-auto" aria-label="Tabs">
                           <TabButton active={activeTab === 'story'} onClick={() => setActiveTab('story')}>Story</TabButton>
                           <TabButton active={activeTab === 'specs'} onClick={() => setActiveTab('specs')}>Full Specs</TabButton>
                           {pc.benchmarks && pc.benchmarks.length > 0 && (
                             <TabButton active={activeTab === 'performance'} onClick={() => setActiveTab('performance')}>Performance</TabButton>
                           )}
                           <TabButton active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>
                                Reviews ({pc.reviews?.length || 0})
                           </TabButton>
                           <TabButton active={activeTab === 'warranty'} onClick={() => setActiveTab('warranty')}>Warranty</TabButton>
                        </nav>
                    </div>
                    <div className="py-8 px-6 bg-brand-light-dark rounded-b-lg">
                        {renderTabContent()}
                    </div>
                </div>

                 {/* --- START OF NEW SECTIONS --- */}

                {/* Section 1: Promotion */}
                <div className="mt-16 py-16 bg-brand-light-dark rounded-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src={pc.galleryImages[0]} alt="Accessory Bundle" className="rounded-lg shadow-lg object-contain" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-white">£50 Razer accessory bundle</h3>
                            <p className="mt-4 text-lg text-brand-teal font-bold">For a limited time only, get a <a href="#" className="underline hover:text-teal-300">Razer accessory bundle for only £50</a> when you buy this pre-built PC.</p>
                            <p className="mt-4 text-gray-300">
                                Worth £179.99, this bundle features a selection of elite gaming accessories from Razer: the Ornata V3 keyboard, DeathAdder Essential mouse and BlackShark V2 headset.
                            </p>
                            <p className="mt-4 text-gray-300">
                                Simply add this PC to your basket, then add the bundle, and your discount will be automatically applied at basket.
                            </p>
                            <button className="mt-8 bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all">
                                View Razer Bundle
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section 2: Case/Aesthetics */}
                <div className="mt-16 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-2">
                            <img src={pc.galleryImages[1]} alt={`${pc.name} chassis`} className="rounded-lg shadow-2xl object-contain" />
                        </div>
                        <div className="md:order-1">
                            <h3 className="text-3xl font-extrabold text-white">Sculpted for Victory</h3>
                            <p className="mt-4 text-gray-400 text-lg">
                                The {pc.name} is a masterpiece of design and engineering. Its striking chassis ({pc.fullSpecs['PC Case']}) provides an incredible view of the high-performance components within, showcasing a vibrant spectacle of ARGB lighting. The innovative design ensures excellent airflow, keeping your system cool under pressure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Performance/Cooling */}
                <div className="mt-16 relative py-24 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${pc.galleryImages[2]})` }}>
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="relative max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">Engineered Cooling</h2>
                        <p className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                            ICE-COLD PERFORMANCE
                        </p>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                            Push your system to its limits without fear. Our advanced cooling solutions, featuring high-airflow fans and premium liquid coolers like the {pc.fullSpecs['CPU Cooler']}, ensure your components stay frosty for maximum sustained performance.
                        </p>
                    </div>
                </div>
                
                {/* --- END OF NEW SECTIONS --- */}

            </div>
        </div>
    );
};

export default ProductDetailPage;
