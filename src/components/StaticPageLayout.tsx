
import React from 'react';

interface StaticPageLayoutProps {
    title: string;
    children: React.ReactNode;
}

const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({ title, children }) => {
    return (
        <div className="bg-brand-dark">
            <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-brand-dark h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                           {title}
                        </h1>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Last Updated: {new Date().toLocaleDateString('en-GB')}
                        </p>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto bg-brand-light-dark p-8 rounded-lg shadow-lg">
                        <div className="prose prose-invert prose-lg text-gray-300 mx-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticPageLayout;
