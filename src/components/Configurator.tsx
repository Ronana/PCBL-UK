import React, { useState, useMemo } from 'react';
import { BasePCSystem, SelectedComponents, BasketItem, User, ConfiguratorSection, ComponentOption, ComponentCategoryId } from '../types';
import ImageGallery from './ImageGallery';
import ComponentAccordion from './configurator/ComponentAccordion';
import ConfiguratorSummaryBar from './configurator/ConfiguratorSummaryBar';

interface ConfiguratorProps {
    baseSystem: BasePCSystem;
    platformId: string | null; // New prop to identify the selected platform
    onBack: () => void;
    onAddToBasket: (item: BasketItem) => void;
    onSaveBuild: (name: string, buildData: { baseSystem: BasePCSystem, selectedComponents: SelectedComponents, totalPrice: number }) => void;
    initialComponents?: SelectedComponents | null;
    user: User | null;
    configuratorSections: ConfiguratorSection[];
}

const Configurator: React.FC<ConfiguratorProps> = ({ baseSystem, platformId, onBack, onAddToBasket, onSaveBuild, initialComponents, user, configuratorSections }) => {

    const compatibleCategories = useMemo(() => {
        if (!configuratorSections) return [];

        const filterOptionByPlatform = (option: ComponentOption, categoryId: ComponentCategoryId, platformIdentifier: string): boolean => {
            const name = option.name.toLowerCase();
            
            // Filter RAM based on DDR4/DDR5 compatibility
            if (categoryId === 'ram') {
                if (platformIdentifier.includes('ddr4')) return name.includes('ddr4');
                if (platformIdentifier.includes('ddr5')) return name.includes('ddr5');
            }

            // Filter Motherboards based on chipset/socket
            if (categoryId === 'motherboard') {
                if (platformIdentifier === 'amd-am4-ddr4') return name.includes('b550') || name.includes('x570') || name.includes('a520');
                if (platformIdentifier === 'amd-am5-ddr5') return name.includes('b650') || name.includes('x670') || name.includes('a620');
                if (platformIdentifier === 'intel-z790-ddr5' || platformIdentifier === 'intel-z790-ws') return name.includes('z790') || name.includes('b760') || name.includes('w680');
                if (platformIdentifier === 'amd-ryzen-ws') return name.includes('b650') || name.includes('x670');
            }

            // For other categories, we don't apply platform-specific filters yet.
            return true;
        };
        
        return configuratorSections.flatMap(section => section.categories)
            .map(category => ({
                ...category,
                options: category.options.filter(option => {
                    // Rule 1: Always include the default component for the selected base system.
                    const isDefault = option.id === baseSystem.defaultConfig[category.id];
                    if (isDefault) return true;

                    // Rule 2: Apply platform-specific filtering if a platform is selected.
                    if (platformId && !filterOptionByPlatform(option, category.id, platformId)) {
                        return false;
                    }
                    
                    // Rule 3: Maintain the original brand filtering (AMD/Intel).
                    return !option.platform || option.platform === baseSystem.brand;
                }),
            }))
            .filter(category => category.options.length > 0);
    }, [baseSystem, platformId, configuratorSections]);

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