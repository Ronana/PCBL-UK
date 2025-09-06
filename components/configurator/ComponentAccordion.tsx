import React, { useState } from 'react';
import { ComponentCategory, ComponentCategoryId, ComponentOption, SelectedComponents } from '../../types';
import ComponentOptionCard from './ComponentOptionCard';
import { SearchIcon } from '../icons/HeaderIcons';

interface ComponentAccordionProps {
    categories: ComponentCategory[];
    selectedComponents: SelectedComponents;
    onSelectComponent: React.Dispatch<React.SetStateAction<SelectedComponents>>;
}

const AccordionItem: React.FC<{
    category: ComponentCategory;
    isOpen: boolean;
    onToggle: () => void;
    selectedOption: ComponentOption | null | undefined;
    onSelect: (option: ComponentOption) => void;
}> = ({ category, isOpen, onToggle, selectedOption, onSelect }) => {
    return (
        <div className="bg-[#1a1a1d] rounded-sm overflow-hidden">
            <button
                id={`accordion-header-${category.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${category.id}`}
                onClick={onToggle}
                className="w-full p-4 text-left flex justify-between items-center transition-colors"
            >
                <div className="flex items-center">
                    <h2 className="text-md font-bold text-white uppercase tracking-wider">{category.name}</h2>
                    {!isOpen && <div className="ml-4 w-px h-5 bg-gray-700"></div>}
                </div>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                ) : (
                    <div className="flex items-center">
                        <p className="text-sm text-gray-400 mr-4 truncate max-w-[150px]">{selectedOption?.name}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                )}
            </button>
            <div
                id={`accordion-panel-${category.id}`}
                role="region"
                aria-labelledby={`accordion-header-${category.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
                <div className="bg-[#16171B] p-4">
                    <div className="flex items-center space-x-4 mb-4">
                        <select className="bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 text-white text-sm w-full" aria-label={`Sort ${category.name} options`}>
                            <option>Sort By: Price (lowest first)</option>
                            <option>Sort By: Price (highest first)</option>
                            <option>Sort By: Name (A-Z)</option>
                        </select>
                        <div className="relative w-full">
                            <input type="text" placeholder="Search..." className="bg-gray-800/50 border border-gray-700 rounded-md py-2 pl-3 pr-8 text-white text-sm w-full" aria-label={`Search within ${category.name}`} />
                            <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 component-scrollbar">
                        {category.options.map(option => (
                            <ComponentOptionCard
                                key={option.id}
                                option={option}
                                isSelected={selectedOption?.id === option.id}
                                onSelect={() => onSelect(option)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ComponentAccordion: React.FC<ComponentAccordionProps> = ({ categories, selectedComponents, onSelectComponent }) => {
    const [openCategoryId, setOpenCategoryId] = useState<ComponentCategoryId | null>('case');

    const handleToggle = (categoryId: ComponentCategoryId) => {
        setOpenCategoryId(prevId => (prevId === categoryId ? null : categoryId));
    };

    const handleSelect = (categoryId: ComponentCategoryId, option: ComponentOption) => {
        onSelectComponent(prev => ({ ...prev, [categoryId]: option }));
    };

    return (
        <div className="space-y-px">
            {categories.map(category => (
                <AccordionItem
                    key={category.id}
                    category={category}
                    isOpen={openCategoryId === category.id}
                    onToggle={() => handleToggle(category.id)}
                    selectedOption={selectedComponents[category.id]}
                    onSelect={(option) => handleSelect(category.id, option)}
                />
            ))}
        </div>
    );
};

export default ComponentAccordion;