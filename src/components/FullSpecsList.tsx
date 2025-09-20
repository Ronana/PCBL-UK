
import React from 'react';

interface FullSpecsListProps {
    specs: { [key: string]: string };
}

const FullSpecsList: React.FC<FullSpecsListProps> = ({ specs }) => {
    return (
        <div className="bg-brand-dark p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="py-2 flex justify-between border-b border-gray-700/50">
                        <dt className="text-sm font-medium text-gray-400">{key}</dt>
                        <dd className="text-sm text-white text-right">{value}</dd>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullSpecsList;
