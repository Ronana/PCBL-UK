import React, { useState, useMemo } from 'react';
import { CONFIGURATOR_SECTIONS } from '../constants';
import { BasePCSystem, SelectedComponents, BasketItem, User } from '../types';
import ImageGallery from './ImageGallery';
import ComponentAccordion from './configurator/ComponentAccordion';
import ConfiguratorSummaryBar from './configurator/ConfiguratorSummaryBar';

interface ConfiguratorProps {
    baseSystem: BasePCSystem;
    onBack: () => void;
    onAddToBasket: (item: BasketItem) => void;
    onSaveBuild: (name: string, buildData: { baseSystem: BasePCSystem, selectedComponents: SelectedComponents, totalPrice: number }) => void;
    initialComponents?: SelectedComponents | null;
    user: User | null;
}

const Configurator: React.FC<ConfiguratorProps> = ({ baseSystem, onBack, onAddToBasket, onSaveBuild, initialComponents, user }) => {

    const compatibleCategories = useMemo(() => {
        return CONFIGURATOR_SECTIONS.flatMap(section => section.categories)
            .map(category => ({
                ...category,
                options: category.options.filter(option => !option.platform || option.platform === baseSystem.brand),
            }))
            .filter(category => category.options.length > 0);
    }, [baseSystem.brand]);

    const getInitialSelection = (): SelectedComponents => {
        const initialSelection: SelectedComponents = {};
        compatibleCategories.forEach(category => {
            const defaultOptionId = baseSystem.defaultConfig[category.id];
            const defaultOption = category.options.find(o => o.id === defaultOptionId) || category.options[0] || null;
            initialSelection[category.id] = defaultOption;
        });
        return initialSelection;
    };

    const [selectedComponents, setSelectedComponents] = useState<SelectedComponents>(initialComponents || getInitialSelection());

    const totalPrice = useMemo(() => {
        return Object.values(selectedComponents).reduce((total, component) => {
            if (!component) return total;
            return total + component.price;
        }, 0);
    }, [selectedComponents]);

    const handleAddToBasket = () => {
        const newItem: BasketItem = {
            id: `${baseSystem.id}-${Date.now()}`,
            baseSystem: baseSystem,
            selectedComponents: selectedComponents,
            unitPrice: totalPrice,
            quantity: 1
        };
        onAddToBasket(newItem);
    };
    
    const handleSave = () => {
        const buildName = prompt("Enter a name for your build:", `${baseSystem.name} Custom`);
        if (buildName) {
            onSaveBuild(buildName, {
                baseSystem,
                selectedComponents,
                totalPrice,
            });
            alert(`Build "${buildName}" has been saved to your account!`);
        }
    };

    const galleryImages = useMemo(() => {
        const caseImage = selectedComponents.case?.imageUrl;
        if (caseImage) {
            return [caseImage, ...baseSystem.galleryImages.filter(img => img !== caseImage)];
        }
        return baseSystem.galleryImages;
    }, [selectedComponents.case, baseSystem.galleryImages]);


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Column: Image Gallery */}
                <div className="lg:col-span-3 lg:sticky lg:top-24 h-96 lg:h-[calc(100vh-8rem)]">
                    <div className="w-full aspect-w-4 aspect-h-5">
                         <ImageGallery images={galleryImages} />
                    </div>
                </div>
                
                {/* Right Column: Accordion */}
                <div className="lg:col-span-2 space-y-px">
                     <ComponentAccordion
                        categories={compatibleCategories}
                        selectedComponents={selectedComponents}
                        onSelectComponent={setSelectedComponents}
                     />
                </div>
            </div>
            <ConfiguratorSummaryBar 
                totalPrice={totalPrice} 
                onContinue={handleAddToBasket}
                onSave={handleSave}
                user={user}
            />
        </>
    );
};

export default Configurator;