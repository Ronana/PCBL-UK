import React from 'react';
import { SaveIcon } from '../icons/ActionIcons';
import { User } from '../../types';

interface ConfiguratorSummaryBarProps {
    totalPrice: number;
    onContinue: () => void;
    onSave: () => void;
    user: User | null;
}

const ConfiguratorSummaryBar: React.FC<ConfiguratorSummaryBarProps> = ({ totalPrice, onContinue, onSave, user }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-light-dark/90 backdrop-blur-sm border-t border-gray-800 z-30">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center">
                        <h3 className="text-sm text-gray-400 mr-4 hidden md:block">Your Custom Build</h3>
                         <div className="text-2xl md:text-4xl font-black text-white">
                           £{totalPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                         <div className="ml-4 text-xs text-gray-500">
                           <p>Finance from £{(totalPrice / 12).toFixed(2)} a month</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {user && (
                            <button 
                                onClick={onSave}
                                className="bg-brand-dark text-white font-bold py-3 px-4 rounded-md hover:bg-gray-700 transition-all text-sm uppercase tracking-wider flex items-center border border-gray-600"
                                title="Save Build to Your Account"
                            >
                                <SaveIcon className="h-5 w-5 mr-2" />
                                Save
                            </button>
                        )}
                        <button 
                            onClick={onContinue}
                            className="bg-brand-purple text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all text-sm uppercase tracking-wider"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfiguratorSummaryBar;