
import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../constants';
import { CpuIcon, GpuIcon } from './icons/SpecIcons';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TrustBadges: React.FC = () => {
    // We'll take the first 3 points for the badges
    const badgePoints = WHY_CHOOSE_US_POINTS.slice(0, 3);

    return (
        <div className="my-12 py-8 border-y border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {badgePoints.map(point => (
                    <div key={point.title} className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-purple/20 text-brand-teal mb-4">
                           <CheckIcon className="h-7 w-7" />
                        </div>
                        <h3 className="font-semibold text-white">{point.title}</h3>
                        <p className="text-sm text-gray-400">{point.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustBadges;
