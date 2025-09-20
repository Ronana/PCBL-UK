
import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../constants';
import { SiteImages } from '../types';

interface AboutUsPageProps {
    navigateToConfigurator: (filter?: string | null) => void;
    siteImages: SiteImages;
}

const ValueCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-brand-light-dark p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-brand-teal">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
    </div>
);

const AboutUsPage: React.FC<AboutUsPageProps> = ({ navigateToConfigurator, siteImages }) => {
    return (
        <div className="bg-brand-dark text-white">
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 flex content-center items-center justify-center">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${siteImages.about_hero || ''})` }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
                        About <span className="text-brand-purple">PCBL UK</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Crafted with Passion, Built for Performance.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Our Story */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Our <span className="text-brand-purple">Story</span>
                            </h2>
                            <p className="mt-4 text-gray-400 text-lg">
                                PCBL UK was born from a simple yet powerful idea: to build high-performance custom PCs with the care and attention to detail they deserve. Founded by a team of lifelong tech enthusiasts, we were tired of the compromises and lack of personality found in mass-produced systems.
                            </p>
                            <p className="mt-4 text-gray-400 text-lg">
                                We believe every PC should be a masterpiece, a perfect blend of power, aesthetics, and reliability. That's why we build every single system as if it were our own, using only the best components and meticulous cable management to create a machine you can be proud of.
                            </p>
                        </div>
                        <div>
                            <img 
                                src={siteImages.about_story || ''}
                                alt="PC building workshop" 
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="mt-24 text-center">
                         <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Our Core <span className="text-brand-purple">Values</span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                           The principles that guide every build and every customer interaction.
                        </p>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                           {WHY_CHOOSE_US_POINTS.map(value => (
                               <ValueCard key={value.title} title={value.title} description={value.description} />
                           ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="bg-brand-light-dark">
                <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to build your masterpiece?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-300">
                        Let's create the perfect PC for your needs. Our expert team is ready to bring your vision to life.
                    </p>
                    <button
                        onClick={() => navigateToConfigurator(null)}
                        className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-purple hover:bg-opacity-80 sm:w-auto transition-all"
                    >
                        Start Configuring
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;