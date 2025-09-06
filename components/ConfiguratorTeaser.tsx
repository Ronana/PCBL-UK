
import React from 'react';

interface ConfiguratorTeaserProps {
    navigateToBaseSelector: () => void;
}

const ConfiguratorTeaser: React.FC<ConfiguratorTeaserProps> = ({ navigateToBaseSelector }) => {
    return (
        <div className="bg-brand-dark">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-light-dark rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                <span className="block">Your Vision. Your Build.</span>
                                <span className="block text-brand-purple">Total Customization.</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-300">
                                Use our powerful and intuitive configurator to build the PC you've always dreamed of. Select every component, from the CPU to the case lighting, and see your creation come to life.
                            </p>
                            <button
                                onClick={navigateToBaseSelector}
                                className="mt-8 bg-brand-purple border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-white hover:bg-opacity-80 transition-all"
                            >
                                Start Building Now
                            </button>
                        </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img
                            className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                            src="https://img.freepik.com/free-photo/view-computer-motherboard_23-2151167421.jpg"
                            alt="Custom PC Components"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfiguratorTeaser;