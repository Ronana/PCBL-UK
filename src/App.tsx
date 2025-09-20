import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BaseConfigSelectorPage from './pages/BaseConfigSelectorPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import DeliveryInfoPage from './pages/DeliveryInfoPage';
import WarrantyInfoPage from './pages/WarrantyInfoPage';
import AccountPage from './pages/AccountPage';
import AuthPage from './pages/AuthPage';
import BasketPage from './pages/BasketPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import RacingSimPage from './pages/RacingSimPage';
import FlightSimPage from './pages/FlightSimPage';
import DealsPage from './pages/DealsPage';
import SearchPage from './pages/SearchPage';
import ComparePage from './pages/ComparePage';
import PcblPointsPage from './pages/PcblPointsPage';
import FaqPage from './pages/FaqPage';
import ChooseByGamePage from './pages/ChooseByGamePage';
import ComparisonTray from './components/ComparisonTray';
import ConfigureLandingPage from './pages/ConfigureLandingPage';
import { View, PCSystem, BasketItem, Order, SavedBuild, BasePCSystem, SelectedComponents, User, ConfiguratorSection, SiteImages } from './types';
import { FEATURED_PCS, DEAL_PCS, RACING_SIM_PCS, FLIGHT_SIM_PCS } from './constants';
import { supabase } from './supabaseClient';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPC, setSelectedPC] = useState<PCSystem | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [latestOrder, setLatestOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [configFilter, setConfigFilter] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<PCSystem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [comparisonList, setComparisonList] = useState<PCSystem[]>([]);
  const [savedBuilds, setSavedBuilds] = useState<SavedBuild[]>([]);
  const [buildToLoad, setBuildToLoad] = useState<SavedBuild | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  // State for data fetched from Supabase
  const [allSystems, setAllSystems] = useState<BasePCSystem[]>([]);
  const [configuratorSections, setConfiguratorSections] = useState<ConfiguratorSection[]>([]);
  const [siteImages, setSiteImages] = useState<SiteImages>({});

  const allPcs = useMemo(() => {
    const all = [...FEATURED_PCS, ...DEAL_PCS, ...RACING_SIM_PCS, ...FLIGHT_SIM_PCS];
    return Array.from(new Map(all.map(pc => [pc.id, pc])).values());
  }, []);

  // Fix: Moved navigateTo function declaration before its usage in useEffect.
  const navigateTo = useCallback((view: View) => {
    if (view !== 'productDetail') {
      setSelectedPC(null);
    }
    setCurrentView(view);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const initializeApp = async () => {
        if (isDataLoaded) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const [systemsResponse, sectionsResponse, imagesResponse] = await Promise.all([
                supabase.from('base_pc_systems').select('*'),
                supabase.from('configurator_sections').select('*, categories:component_categories(*, options:component_options(*))').order('id'),
                supabase.from('site_images').select('id, url')
            ]);

            if (systemsResponse.error) throw systemsResponse.error;
            const transformedSystems = systemsResponse.data.map((system: any) => ({
                id: system.id,
                name: system.name,
                description: system.description,
                features: system.features,
                startingPrice: system.starting_price,
                imageUrl: system.image_url,
                brand: system.brand,
                budget: system.budget,
                defaultConfig: system.default_config,
                galleryImages: system.gallery_images,
                displayCategory: system.display_category,
                platformId: system.platform_id,
            }));
            setAllSystems(transformedSystems as BasePCSystem[]);

            if (sectionsResponse.error) throw sectionsResponse.error;
            const transformedSections = sectionsResponse.data.map((section: any) => ({
                ...section,
                categories: section.categories.map((category: any) => ({
                    ...category,
                    options: category.options.map((option: any) => ({
                        ...option,
                        imageUrl: option.image_url,
                    })),
                })),
            }));
            setConfiguratorSections(transformedSections as ConfiguratorSection[]);
            
            if (imagesResponse.error) throw imagesResponse.error;
            if (imagesResponse.data) {
                const imageMap = imagesResponse.data.reduce((acc: SiteImages, { id, url }) => {
                    acc[id] = url;
                    return acc;
                }, {});
                setSiteImages(imageMap);
            }

            setIsDataLoaded(true);

        } catch (error) {
            console.error("Failed to load data from Supabase:", error);
        }
    };
    initializeApp();
  }, [isDataLoaded]);
  
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        const [buildsResponse, ordersResponse] = await Promise.all([
          supabase.from('builds').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }),
          supabase.from('orders').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false })
        ]);

        if (buildsResponse.data) {
          const transformedBuilds = buildsResponse.data.map((build: any) => ({
            id: build.id,
            user_id: build.user_id,
            name: build.name,
            baseSystem: build.base_system,
            selectedComponents: build.selected_components,
            totalPrice: build.total_price,
            created_at: build.created_at,
          }));
          setSavedBuilds(transformedBuilds as SavedBuild[]);
        }
        if (ordersResponse.data) setOrders(ordersResponse.data);

        if (currentView === 'auth') {
          navigateTo('account');
        }
      } else {
        setSavedBuilds([]);
        setOrders([]);
      }
       if (isLoading && isDataLoaded) {
          setIsLoading(false);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [currentView, isDataLoaded, isLoading, navigateTo]);

  const navigateToConfigurator = useCallback((filter: string | null = null) => {
    if (filter === null) {
      setCurrentView('configureLanding');
    } else {
      setConfigFilter(filter);
      setCurrentView('selectBase');
    }
    window.scrollTo(0, 0);
  }, []);

  const handleViewProduct = (pc: PCSystem) => {
    setSelectedPC(pc);
    setCurrentView('productDetail');
    window.scrollTo(0, 0);
  };

  const addToBasket = (item: BasketItem) => {
    setBasketItems(prevItems => {
        return [...prevItems, item];
    });
    navigateTo('basket');
  };

  const updateBasketItemQuantity = (itemId: string, newQuantity: number) => {
    setBasketItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromBasket = (itemId: string) => {
    setBasketItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handlePlaceOrder = async (shippingDetails: any) => {
    if (!user) {
        alert("You must be logged in to place an order.");
        navigateTo('auth');
        return;
    }
    const total = basketItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0) + (basketItems.length > 0 ? 9.00 : 0);
    
    const newOrderData = {
        user_id: user.id,
        items: basketItems,
        total: total,
        shipping_address: shippingDetails,
    };

    try {
        const { data, error } = await supabase.from('orders').insert(newOrderData).select().single();
        if (error) throw error;
        
        const finalOrder = data as Order;
        setLatestOrder(finalOrder);
        setOrders(prevOrders => [finalOrder, ...prevOrders]);
        setBasketItems([]);
        navigateTo('checkoutSuccess');
    } catch (e) {
        console.error("Error placing order: ", e);
        alert("There was an error placing your order. Please try again.");
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowerCaseQuery = query.toLowerCase().trim();

    if (!lowerCaseQuery) {
        setSearchResults([]);
        return;
    }

    const results = allPcs.filter(pc => {
        const searchCorpus = [
            pc.name,
            pc.tagline,
            pc.specs.cpu,
            pc.specs.gpu,
            ...Object.values(pc.fullSpecs)
        ].join(' ').toLowerCase();

        return searchCorpus.includes(lowerCaseQuery);
    });

    setSearchResults(results);
    navigateTo('search');
  };

  const handleToggleComparison = (pc: PCSystem) => {
    setComparisonList(prevList => {
      const isInList = prevList.some(item => item.id === pc.id);
      if (isInList) {
        return prevList.filter(item => item.id !== pc.id);
      } else if (prevList.length < 4) {
        return [...prevList, pc];
      }
      return prevList;
    });
  };

  const handleClearComparison = () => {
    setComparisonList([]);
  };

  const handleSaveBuild = async (name: string, buildData: { baseSystem: BasePCSystem; selectedComponents: SelectedComponents; totalPrice: number; }) => {
    if (!user) {
        alert("You must be logged in to save a build.");
        navigateTo('auth');
        return;
    }
    try {
        const { data, error } = await supabase.from('builds').insert({
            name: name,
            user_id: user.id,
            base_system: buildData.baseSystem,
            selected_components: buildData.selectedComponents,
            total_price: buildData.totalPrice,
        }).select().single();

        if (error) throw error;
         const transformedBuild = {
            id: data.id,
            user_id: data.user_id,
            name: data.name,
            baseSystem: data.base_system,
            selectedComponents: data.selected_components,
            totalPrice: data.total_price,
            created_at: data.created_at,
        };
        setSavedBuilds(prevBuilds => [transformedBuild as SavedBuild, ...prevBuilds]);
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("There was an error saving your build. Please try again.");
    }
  };

  const handleDeleteBuild = async (buildId: string) => {
    try {
        const { error } = await supabase.from('builds').delete().match({ id: buildId });
        if (error) throw error;
        setSavedBuilds(prevBuilds => prevBuilds.filter(build => build.id !== buildId));
    } catch (e) {
        console.error("Error deleting document: ", e);
        alert("There was an error deleting your build. Please try again.");
    }
  };

  const handleRenameBuild = async (buildId: string, newName: string) => {
    try {
        const { error } = await supabase.from('builds').update({ name: newName }).match({ id: buildId });
        if (error) throw error;
        setSavedBuilds(prevBuilds => prevBuilds.map(build =>
            build.id === buildId ? { ...build, name: newName } : build
        ));
    } catch (e) {
        console.error("Error updating document: ", e);
        alert("There was an error renaming your build. Please try again.");
    }
  };

  const handleLoadBuild = (build: SavedBuild) => {
      setBuildToLoad(build);
      navigateTo('selectBase');
  };

  if (isLoading) {
    return (
        <div className="bg-brand-dark min-h-screen flex items-center justify-center">
            <h1 className="text-white text-2xl">Loading...</h1>
        </div>
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case 'configureLanding':
        return <ConfigureLandingPage navigateToConfigurator={navigateToConfigurator} siteImages={siteImages} />;
      case 'selectBase':
        return <BaseConfigSelectorPage 
                    allSystems={allSystems}
                    onAddToBasket={addToBasket} 
                    filter={configFilter}
                    onSaveBuild={handleSaveBuild}
                    buildToLoad={buildToLoad}
                    onLoadComplete={() => setBuildToLoad(null)}
                    user={user}
                    configuratorSections={configuratorSections}
                    navigateTo={navigateTo}
                    siteImages={siteImages}
                />;
      case 'about':
        return <AboutUsPage navigateToConfigurator={navigateToConfigurator} siteImages={siteImages} />;
      case 'contact':
        return <ContactUsPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsAndConditionsPage />;
      case 'delivery':
        return <DeliveryInfoPage />;
      case 'warranty':
        return <WarrantyInfoPage />;
      case 'auth':
        return <AuthPage />;
      case 'account':
        if (!user) {
          navigateTo('auth');
          return null;
        }
        return <AccountPage 
                    user={user}
                    orders={orders}
                    navigateTo={navigateTo}
                    savedBuilds={savedBuilds}
                    onLoadBuild={handleLoadBuild}
                    onDeleteBuild={handleDeleteBuild}
                    onRenameBuild={handleRenameBuild}
                />;
       case 'basket':
        return <BasketPage 
                    items={basketItems}
                    onUpdateQuantity={updateBasketItemQuantity}
                    onRemoveItem={removeFromBasket}
                    navigateTo={navigateTo}
                />;
      case 'checkout':
        if (basketItems.length === 0) {
            navigateTo('basket');
            return null;
        }
        return <CheckoutPage
                    items={basketItems}
                    onPlaceOrder={handlePlaceOrder}
                    navigateTo={navigateTo}
                />;
      case 'checkoutSuccess':
        if (!latestOrder) {
            navigateTo('home');
            return null;
        }
        return <CheckoutSuccessPage order={latestOrder} navigateTo={navigateTo} />;
      case 'productDetail':
        if (selectedPC) {
            return <ProductDetailPage pc={selectedPC} onBack={() => navigateTo('home')} />;
        }
        navigateTo('home');
        return null;
      case 'racingSims':
        return <RacingSimPage 
                  onViewProduct={handleViewProduct} 
                  comparisonList={comparisonList} 
                  onToggleComparison={handleToggleComparison}
                  siteImages={siteImages}
                />;
      case 'flightSims':
        return <FlightSimPage 
                  onViewProduct={handleViewProduct} 
                  comparisonList={comparisonList} 
                  onToggleComparison={handleToggleComparison}
                  siteImages={siteImages}
                />;
      case 'deals':
        return <DealsPage 
                  onViewProduct={handleViewProduct} 
                  comparisonList={comparisonList}
                  onToggleComparison={handleToggleComparison}
                />;
      case 'search':
        return <SearchPage 
                  query={searchQuery} 
                  results={searchResults} 
                  onViewProduct={handleViewProduct} 
                  comparisonList={comparisonList}
                  onToggleComparison={handleToggleComparison}
                />;
      case 'compare':
        return <ComparePage 
                  items={comparisonList} 
                  onToggleComparison={handleToggleComparison}
                  onViewProduct={handleViewProduct}
                  navigateTo={navigateTo}
                />;
      case 'pcblPoints':
        return <PcblPointsPage user={user} navigateToConfigurator={navigateToConfigurator} />;
      case 'faq':
        return <FaqPage />;
      case 'chooseByGame':
        return <ChooseByGamePage 
                  onViewProduct={handleViewProduct}
                  comparisonList={comparisonList}
                  onToggleComparison={handleToggleComparison}
                  siteImages={siteImages}
                />;
      case 'home':
      default:
        return <HomePage 
                    navigateTo={navigateTo}
                    navigateToConfigurator={navigateToConfigurator} 
                    onViewProduct={handleViewProduct}
                    comparisonList={comparisonList}
                    onToggleComparison={handleToggleComparison}
                    siteImages={siteImages}
                />;
    }
  };
  
  const basketItemCount = basketItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-brand-dark font-sans flex flex-col min-h-screen">
      <Header 
        navigateTo={navigateTo}
        navigateToConfigurator={navigateToConfigurator} 
        currentView={currentView} 
        user={user}
        basketItemCount={basketItemCount}
        onSearch={handleSearch}
      />
      <main className="flex-grow pb-24">
        {renderContent()}
      </main>
      <ComparisonTray
        items={comparisonList}
        onRemove={handleToggleComparison}
        onClear={handleClearComparison}
        navigateTo={navigateTo}
      />
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;