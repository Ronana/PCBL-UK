

import React from 'react';
import Hero from '../components/Hero';
import FeaturedPCs from '../components/FeaturedPCs';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import QuickConfigure from '../components/QuickConfigure';
import PromoBanner from '../components/PromoBanner';
import DualCTA from '../components/DualCTA';
import CategoryLinks from '../components/CategoryLinks';
import { PCSystem, View } from '../types';

interface HomePageProps {
    navigateTo: (view: View) => void;
    navigateToConfigurator: (filter?: string | null) => void;
    onViewProduct: (pc: PCSystem) => void;
    comparisonList: PCSystem[];
    onToggleComparison: (pc: PCSystem) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, navigateToConfigurator, onViewProduct, comparisonList, onToggleComparison }) => {
    return (
        <>
            <Hero navigateToConfigurator={navigateToConfigurator} />
            <QuickConfigure navigateTo={navigateTo} navigateToConfigurator={navigateToConfigurator} />
            <FeaturedPCs 
                onViewProduct={onViewProduct}
                comparisonList={comparisonList}
                onToggleComparison={onToggleComparison}
            />
            <PromoBanner navigateTo={navigateTo} />
            <WhyChooseUs />
            <DualCTA navigateToConfigurator={navigateToConfigurator} navigateTo={navigateTo} />
            <CategoryLinks />
            <Testimonials />
        </>
    );
};

export default HomePage;