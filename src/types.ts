import type { User } from '@supabase/supabase-js';

export interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

export interface Benchmark {
  game: string;
  resolution: '1080p' | '1440p' | '4K';
  settings: string;
  fps: number;
}

export interface PCSystem {
  id: number;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  story: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
  };
  fullSpecs: { [key: string]: string };
  whatsInTheBox: string[];
  galleryImages: string[];
  benchmarks?: Benchmark[];
  reviews?: Review[];
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
}

export interface ComponentOption {
  id: string;
  name: string;
  price: number;
  platform?: 'AMD' | 'Intel';
  imageUrl?: string;
}

// New comprehensive list of component IDs
export type ComponentCategoryId =
  // Core Components
  | 'cpu'
  | 'motherboard'
  | 'ram'
  | 'gpu'
  | 'gpu_type'
  | 'gpu_bracket'
  // Hard Drives, etc.
  | 'm2_ssd_1'
  | 'm2_ssd_2'
  | 'storage_drive_1'
  | 'storage_drive_2'
  | 'raid'
  | 'dvd_bluray'
  | 'external_dvd_bluray'
  | 'external_hdd'
  | 'memory_card_reader'
  // Power and Cooling
  | 'psu'
  | 'power_cable'
  | 'cpu_cooling'
  | 'thermal_paste'
  | 'led_lighting'
  | 'case_fans'
  | 'case'
  // System Refinements
  | 'sound_card'
  | 'external_sound_card'
  | 'network_card'
  | 'wireless_card'
  | 'router_homeplugs'
  | 'usb_thunderbolt'
  | 'capture_card'
  | 'external_capture_card'
  | 'firewire'
  // OS & Software
  | 'os'
  | 'os_language'
  | 'recovery_media'
  | 'office_software'
  | 'antivirus'
  | 'browser'
  // Peripherals
  | 'monitor_1'
  | 'monitor_2'
  | 'monitor_cables'
  | 'monitor_mounts'
  | 'keyboard_mouse'
  | 'mouse'
  | 'controller'
  | 'headset'
  | 'mouse_pad'
  | 'streaming_accessories'
  | 'gaming_chair'
  | 'speakers'
  | 'webcam'
  | 'key_light'
  | 'microphone'
  | 'surge_protection'
  | 'cable_management'
  // Delivery & Services
  | 'warranty'
  | 'home_installation'
  | 'delivery'
  | 'build_time'
  | 'quantity';

export interface ComponentCategory {
  id: ComponentCategoryId;
  name: string;
  options: ComponentOption[];
}

// New interface for the sections
export interface ConfiguratorSection {
    id: string;
    name: string;
    categories: ComponentCategory[];
}

export interface BasePCSystem {
  id: string;
  name:string;
  description: string;
  features: string[];
  startingPrice: number;
  imageUrl: string;
  brand: 'AMD' | 'Intel';
  budget: string;
  defaultConfig: {
    [key in ComponentCategoryId]?: string;
  };
  galleryImages: string[];
}

export interface ConfigCategory {
    id: string;
    name: string;
    systems: BasePCSystem[];
}

export interface Platform {
  id: string;
  name: string;
  subtitle?: string;
  budget: string;
  features: string[];
  imageUrl: string;
  systemIds: string[];
}

export type SelectedComponents = {
    [key in ComponentCategoryId]?: ComponentOption | null;
};

export interface BasketItem {
  id: string; // Unique ID for each item in the basket
  baseSystem: BasePCSystem;
  selectedComponents: SelectedComponents;
  unitPrice: number;
  quantity: number;
}

export interface Order {
  id: string;
  user_id: string;
  items: BasketItem[];
  total: number;
  shipping_address: any;
  created_at: string;
}

export interface SavedBuild {
  id: string;
  user_id: string;
  name: string;
  baseSystem: BasePCSystem;
  selectedComponents: SelectedComponents;
  totalPrice: number;
  created_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  full_name: string;
  address1: string;
  address2?: string;
  city: string;
  postcode: string;
  is_default: boolean;
}


export interface GameData {
  id: string;
  name: string;
  imageUrl: string;
  recommendations: {
    '1080p': number[];
    '1440p': number[];
    '4K': number[];
  };
}

export type View = 
  | 'home'
  | 'configureLanding' 
  | 'selectBase' 
  | 'about' 
  | 'productDetail'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'delivery'
  | 'warranty'
  | 'account'
  | 'auth'
  | 'basket'
  | 'checkout'
  | 'checkoutSuccess'
  | 'racingSims'
  | 'flightSims'
  | 'deals'
  | 'search'
  | 'compare'
  | 'pcblPoints'
  | 'faq'
  | 'chooseByGame';

export interface NavLink {
  name: string;
  view?: View;
  filter?: string | null;
  isDropdown?: boolean;
  links?: NavLink[];
}

// Re-export User type for convenience
export type { User };