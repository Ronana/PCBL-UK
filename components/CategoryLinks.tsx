import React from 'react';
import { PC_CATEGORY_LINKS } from '../constants';

const CategoryLinks: React.FC = () => {
    return (
        <section className="bg-brand-dark py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-b border-gray-700/50 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                        {PC_CATEGORY_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-gray-300 hover:text-brand-teal transition-colors flex justify-between items-center group"
                            >
                                <span>{link}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryLinks;
