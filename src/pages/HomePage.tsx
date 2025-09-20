


import React from 'react';
import Hero from '../components/Hero';
import FeaturedPCs from '../components/FeaturedPCs';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import QuickConfigure from '../components/QuickConfigure';
import PromoBanner from '../components/PromoBanner';
import DualCTA from '../components/DualCTA';
import CategoryLinks from '../components/CategoryLinks';
import { PCSystem, SiteImages, View } from '../types';

interface HomePageProps {
    navigateTo: (view: View) => void;
    navigateToConfigurator: (filter?: string | null) => void;
    onViewProduct: (pc: PCSystem) => void;
    comparisonList: PCSystem[];
    onToggleComparison: (pc: PCSystem) => void;
    siteImages: SiteImages;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, navigateToConfigurator, onViewProduct, comparisonList, onToggleComparison, siteImages }) => {
    return (
        <>
            <Hero navigateToConfigurator={navigateToConfigurator} siteImages={siteImages} />
            <QuickConfigure navigateTo={navigateTo} navigateToConfigurator={navigateToConfigurator} siteImages={siteImages} />
            <FeaturedPCs 
                onViewProduct={onViewProduct}
                comparisonList={comparisonList}
                onToggleComparison={onToggleComparison}
            />
            <PromoBanner navigateTo={navigateTo} />
            <WhyChooseUs />
            <DualCTA navigateToConfigurator={navigateToConfigurator} navigateTo={navigateTo} siteImages={siteImages} />
            <CategoryLinks />
            <Testimonials />
        </>
    );
};

export default HomePage;