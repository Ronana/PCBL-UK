import { PCSystem, Testimonial, BasePCSystem, ConfigCategory, NavLink, Benchmark, Review, GameData, Platform } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Configure',
    isDropdown: true,
    links: [
      { name: 'Configure a Custom PC', view: 'configureLanding' },
      { name: 'Gaming PCs', view: 'configureLanding' },
      { name: 'Workstations', view: 'configureLanding' },
    ]
  },
  { name: 'Choose by Game', view: 'chooseByGame' },
  {
    name: 'Sim Rigs',
    isDropdown: true,
    links: [
      { name: 'Racing Sims', view: 'racingSims' },
      { name: 'Flight Sims', view: 'flightSims' },
    ]
  },
  { name: 'PCBL Points', view: 'pcblPoints' },
  { name: 'FAQ', view: 'faq' },
  { name: 'About', view: 'about' },
  { name: 'Contact', view: 'contact' },
];

export const PRODUCT_CAROUSEL_ITEMS = [
  {
    title: 'Pre-built PCs',
    description: 'Buy a next day PC and save £130 on a Razer accessory bundle.',
    buttonText: 'View Pre-builts',
    actionType: 'view',
    actionTarget: 'deals',
    imageUrl: '/custom-pc-1.png',
    bgColorClass: 'bg-purple-900/50',
  },
  {
    title: 'Gaming PCs',
    description: 'We build high-performance gaming PCs. It\'s time to invest in excellence.',
    buttonText: 'View Gaming PCs',
    actionType: 'config',
    actionTarget: 'gaming-pro',
    imageUrl: '/custom-pc-2.png',
    bgColorClass: 'bg-gray-800/50',
  },
  {
    title: 'Flight Sim PCs',
    description: 'An expertly crafted series of PCs engineered to take you to new heights.',
    buttonText: 'View Flight Sim PCs',
    actionType: 'view',
    actionTarget: 'flightSims',
    imageUrl: 'https://images.unsplash.com/photo-1575883858914-1a28a3415843?q=80&w=2070&auto=format&fit=crop',
    bgColorClass: 'bg-sky-900/50',
  },
  {
    title: 'Custom build PCs',
    description: 'Use our best in class configurator and we\'ll build your perfect spec.',
    buttonText: 'Build Your PC',
    actionType: 'config',
    actionTarget: null,
    imageUrl: 'https://img.freepik.com/free-photo/view-computer-motherboard_23-2151167421.jpg',
    bgColorClass: 'bg-gray-800/50',
  },
   {
    title: 'Help me choose',
    description: 'Spoiled for choice and need a little help? We\'ve got you covered.',
    buttonText: 'Best Gaming PCs',
    actionType: 'view',
    actionTarget: 'chooseByGame',
    imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/2313/e9a288279b3713f28a38a11394a1796d193d25d97d33d964.png',
    bgColorClass: 'bg-orange-900/50',
  },
   {
    title: 'Racing Sim PCs',
    description: 'Experience ultimate immersion with our custom-built racing simulator PCs.',
    buttonText: 'View Racing Sims',
    actionType: 'view',
    actionTarget: 'racingSims',
    imageUrl: 'https://images.unsplash.com/photo-1614294154339-1f2a8c02118f?q=80&w=2070&auto=format&fit=crop',
    bgColorClass: 'bg-red-900/50',
  },
];


export const PC_CATEGORY_LINKS = [
    'Intel Gaming Computers',
    'AMD Gaming Computers',
    'GeForce RTX™ Gaming',
    'Streaming PCs',
    'LUNA Series™',
    'Liquid Series® PCs',
    'Next Day PCs',
    'Gaming PCs',
];

const sampleReviews: Review[] = [
    { id: 1, author: "GamerPro123", rating: 5, title: "Absolute Beast!", comment: "This machine runs everything I throw at it on max settings without breaking a sweat. The build quality is top-notch and cable management is a work of art. Worth every penny!", date: "2023-10-15" },
    { id: 2, author: "CreativeCloud", rating: 5, title: "My workflow has never been smoother", comment: "I use this for video editing and 3D rendering. It's cut my render times in half. The 64GB of RAM is a lifesaver. Highly recommend for any creative professional.", date: "2023-11-02" },
    { id: 3, author: "CasualJones", rating: 4, title: "Great PC, runs a bit warm", comment: "Fantastic performance for the price. My only minor complaint is that the CPU can get a bit toasty under heavy load, might upgrade the cooler down the line. But for gaming, it's fantastic.", date: "2023-09-28" },
    { id: 4, author: "SimRacer_UK", rating: 5, title: "Perfect for my triple monitor setup", comment: "I was looking for a PC that could handle my triple 1440p monitors for iRacing, and this thing delivers. Super smooth frames, which is crucial for sim racing. The team at PCBL UK were super helpful too.", date: "2023-10-22" }
];


export const FEATURED_PCS: PCSystem[] = [
  {
    id: 1,
    name: 'Aetheris MK. I',
    tagline: 'Elite 4K Gaming Powerhouse',
    price: 2499,
    story: 'The Aetheris MK. I is engineered for one purpose: to deliver the ultimate 4K gaming experience. Powered by the flagship Intel Core i9 and NVIDIA\'s top-tier RTX 4080 Super, this machine doesn\'t just play games—it conquers them. With lightning-fast DDR5 memory and vast NVMe storage, load times are a relic of the past. Encased in a premium chassis with optimal airflow, the Aetheris is a statement piece that performs as good as it looks.',
    specs: {
      cpu: 'Intel Core i9-14900K',
      gpu: 'NVIDIA RTX 4080 Super',
      ram: '32GB DDR5 6000MHz',
      storage: '2TB NVMe SSD'
    },
    fullSpecs: {
        'Processor (CPU)': 'Intel Core i9-14900K',
        'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4080 Super 16GB',
        'Memory (RAM)': '32GB Corsair Vengeance DDR5 6000MHz (2x16GB)',
        'Storage (SSD)': '2TB Samsung 980 Pro NVMe M.2 SSD',
        'Motherboard': 'ASUS ROG STRIX Z790-E GAMING WIFI II',
        'Power Supply (PSU)': 'Corsair RM1000x 1000W 80+ Gold',
        'CPU Cooler': 'Corsair H150i Elite Capellix XT Liquid CPU Cooler',
        'PC Case': 'Lian Li O11 Dynamic EVO',
        'Operating System': 'Windows 11 Home'
    },
    whatsInTheBox: [
        'Aetheris MK. I Gaming PC',
        'UK Power Cable',
        'Motherboard & Component Manuals',
        'PCBL UK Welcome Pack'
    ],
    galleryImages: [
      '/custom-pc-1.png',
      '/custom-pc-2.png',
      '/custom-pc-3.png',
    ],
    benchmarks: [
      { game: 'Cyberpunk 2077', resolution: '1080p', settings: 'Ultra', fps: 190 },
      { game: 'Cyberpunk 2077', resolution: '1440p', settings: 'Ultra', fps: 145 },
      { game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra', fps: 95 },
      { game: 'Valorant', resolution: '1080p', settings: 'Max', fps: 600 },
      { game: 'Valorant', resolution: '1440p', settings: 'Max', fps: 550 },
      { game: 'Valorant', resolution: '4K', settings: 'Max', fps: 480 },
      { game: 'Starfield', resolution: '1440p', settings: 'High', fps: 110 },
      { game: 'Starfield', resolution: '4K', settings: 'High', fps: 75 },
    ],
    reviews: sampleReviews.slice(0, 3)
  },
  {
    id: 2,
    name: 'Vanguard Lite',
    tagline: 'Competitive 1440p Performance',
    price: 1599,
    story: 'Dominate the competitive scene with the Vanguard Lite. Built around AMD\'s legendary Ryzen 7 7800X3D gaming CPU and a powerful RTX 4070, this rig is tuned for high-framerate 1440p gaming. Every component is selected for maximum value and performance, providing a smooth, responsive experience in today\'s most demanding esports and AAA titles without breaking the bank.',
    specs: {
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'NVIDIA RTX 4070',
      ram: '32GB DDR5 5200MHz',
      storage: '1TB NVMe SSD'
    },
     fullSpecs: {
        'Processor (CPU)': 'AMD Ryzen 7 7800X3D',
        'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4070 12GB',
        'Memory (RAM)': '32GB Corsair Vengeance DDR5 5200MHz (2x16GB)',
        'Storage (SSD)': '1TB Crucial P3 Plus NVMe M.2 SSD',
        'Motherboard': 'Gigabyte B650 GAMING X AX',
        'Power Supply (PSU)': 'Corsair RM850e 850W 80+ Gold',
        'CPU Cooler': 'Deepcool AK620 Digital Air Cooler',
        'PC Case': 'Corsair 4000D Airflow',
        'Operating System': 'Windows 11 Home'
    },
    whatsInTheBox: [
        'Vanguard Lite Gaming PC',
        'UK Power Cable',
        'Motherboard & Component Manuals',
        'PCBL UK Welcome Pack'
    ],
    galleryImages: [
      '/custom-pc-2.png',
      '/custom-pc-3.png',
      '/custom-pc-1.png',
    ],
    benchmarks: [
      { game: 'Cyberpunk 2077', resolution: '1080p', settings: 'Ultra', fps: 130 },
      { game: 'Cyberpunk 2077', resolution: '1440p', settings: 'Ultra', fps: 90 },
      { game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra', fps: 50 },
      { game: 'Valorant', resolution: '1080p', settings: 'Max', fps: 500 },
      { game: 'Valorant', resolution: '1440p', settings: 'Max', fps: 420 },
      { game: 'Helldivers 2', resolution: '1080p', settings: 'High', fps: 110 },
      { game: 'Helldivers 2', resolution: '1440p', settings: 'High', fps: 75 },
    ],
    reviews: sampleReviews.slice(1, 4)
  },
  {
    id: 3,
    name: 'Seraph Compact',
    tagline: 'Small Form Factor, Big Power',
    price: 1899,
    story: 'The Seraph Compact proves that size doesn\'t limit performance. This small form factor (SFF) build packs a mighty punch with an Intel Core i7 and an RTX 4070 Ti, delivering desktop-class power in a console-sized footprint. Perfect for those with limited space or who value a clean, minimalist setup, the Seraph is an engineering marvel of efficient, powerful design.',
    specs: {
      cpu: 'Intel Core i7-14700K',
      gpu: 'NVIDIA RTX 4070 Ti',
      ram: '32GB DDR5 5600MHz',
      storage: '2TB NVMe SSD'
    },
     fullSpecs: {
        'Processor (CPU)': 'Intel Core i7-14700K',
        'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4070 Ti 12GB',
        'Memory (RAM)': '32GB Corsair Vengeance DDR5 5600MHz (2x16GB)',
        'Storage (SSD)': '2TB WD Black SN770 NVMe M.2 SSD',
        'Motherboard': 'ASUS ROG STRIX B760-I GAMING WIFI Mini-ITX',
        'Power Supply (PSU)': 'Corsair SF750 750W 80+ Platinum SFX',
        'CPU Cooler': 'Noctua NH-L12S Low Profile Air Cooler',
        'PC Case': 'Fractal Design Terra Mini-ITX',
        'Operating System': 'Windows 11 Home'
    },
    whatsInTheBox: [
        'Seraph Compact Gaming PC',
        'UK Power Cable',
        'Motherboard & Component Manuals',
        'PCBL UK Welcome Pack'
    ],
    galleryImages: [
      '/custom-pc-3.png',
      '/custom-pc-1.png',
      '/custom-pc-2.png',
    ],
     benchmarks: [
      { game: 'Cyberpunk 2077', resolution: '1080p', settings: 'Ultra', fps: 160 },
      { game: 'Cyberpunk 2077', resolution: '1440p', settings: 'Ultra', fps: 120 },
      { game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra', fps: 70 },
      { game: 'Apex Legends', resolution: '1440p', settings: 'Max', fps: 240 },
      { game: 'Apex Legends', resolution: '4K', settings: 'Max', fps: 150 },
    ],
    reviews: [sampleReviews[0], sampleReviews[3]]
  },
   {
    id: 4,
    name: 'Oblivion X',
    tagline: 'Uncompromising Pro-Level Beast',
    price: 3999,
    story: 'For the creator and gamer who refuses to compromise, we present the Oblivion X. This is the apex of performance, a no-holds-barred machine featuring the best of the best. With an AMD Ryzen 9 7950X3D and the unmatched power of an NVIDIA RTX 4090, it handles 4K gaming, complex 3D rendering, and heavy multitasking without breaking a sweat. The Oblivion X isn\'t just a PC; it\'s the ultimate tool for work and play.',
    specs: {
      cpu: 'AMD Ryzen 9 7950X3D',
      gpu: 'NVIDIA RTX 4090',
      ram: '64GB DDR5 6200MHz',
      storage: '4TB NVMe SSD'
    },
     fullSpecs: {
        'Processor (CPU)': 'AMD Ryzen 9 7950X3D',
        'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4090 24GB',
        'Memory (RAM)': '64GB G.Skill Trident Z5 Neo RGB DDR5 6200MHz (2x32GB)',
        'Storage (SSD)': '4TB Crucial T700 Gen5 NVMe M.2 SSD',
        'Motherboard': 'MSI MAG X670E TOMAHAWK WIFI',
        'Power Supply (PSU)': 'be quiet! Dark Power 13 1000W 80+ Titanium',
        'CPU Cooler': 'ARCTIC Liquid Freezer III 360 A-RGB',
        'PC Case': 'Fractal Design Meshify 2',
        'Operating System': 'Windows 11 Pro'
    },
    whatsInTheBox: [
        'Oblivion X Gaming PC',
        'UK Power Cable',
        'Motherboard & Component Manuals',
        'PCBL UK Welcome Pack'
    ],
    galleryImages: [
        '/custom-pc-1.png',
        '/custom-pc-3.png',
        '/custom-pc-2.png',
    ],
     benchmarks: [
      { game: 'Cyberpunk 2077', resolution: '1440p', settings: 'Ultra', fps: 180 },
      { game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra', fps: 120 },
      { game: 'Alan Wake 2', resolution: '1440p', settings: 'Max RT', fps: 100 },
      { game: 'Alan Wake 2', resolution: '4K', settings: 'Max RT', fps: 85 },
      { game: 'Valorant', resolution: '4K', settings: 'Max', fps: 600 },
    ],
    reviews: [sampleReviews[1]]
  },
];

export const DEAL_PCS: PCSystem[] = [
    {
        ...FEATURED_PCS[1], // Vanguard Lite
        id: 101,
        price: 1449,
        originalPrice: 1599,
        reviews: sampleReviews.slice(2,4)
    },
    {
        ...FEATURED_PCS[2], // Seraph Compact
        id: 102,
        price: 1749,
        originalPrice: 1899,
        reviews: [sampleReviews[3]]
    }
];

export const RACING_SIM_PCS: PCSystem[] = [
    {
        id: 5,
        name: 'Sim Racer Starter',
        tagline: 'High-FPS 1080p/1440p Racing',
        price: 1199,
        story: 'The Sim Racer Starter is the perfect entry point into the world of high-fidelity sim racing. Built around a powerful Intel Core i5 and an NVIDIA RTX 4060, this machine is optimized to deliver consistent high frame rates on a single 1080p or 1440p monitor. Get the smooth, responsive experience you need to hit every apex.',
        specs: { cpu: 'Intel Core i5-13400F', gpu: 'NVIDIA RTX 4060', ram: '16GB DDR5 5200MHz', storage: '1TB NVMe SSD' },
        fullSpecs: {
            'Processor (CPU)': 'Intel Core i5-13400F',
            'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4060 8GB',
            'Memory (RAM)': '16GB Corsair Vengeance DDR5 5200MHz (2x8GB)',
            'Storage (SSD)': '1TB Crucial P3 Plus NVMe M.2 SSD',
            'Motherboard': 'ASUS PRIME B760M-A WIFI DDR5',
            'Power Supply (PSU)': 'Corsair RM750e 750W 80+ Gold',
            'CPU Cooler': 'Standard Intel CPU Cooler',
            'PC Case': 'Corsair 4000D Airflow',
            'Operating System': 'Windows 11 Home'
        },
        whatsInTheBox: ['Sim Racer Starter PC', 'UK Power Cable', 'Manuals', 'Welcome Pack'],
        galleryImages: ['/custom-pc-1.png', '/custom-pc-2.png', '/custom-pc-3.png'],
        benchmarks: [
          { game: 'iRacing', resolution: '1080p', settings: 'High', fps: 180 },
          { game: 'iRacing', resolution: '1440p', settings: 'High', fps: 130 },
          { game: 'Assetto Corsa Comp.', resolution: '1080p', settings: 'Epic', fps: 110 },
          { game: 'Assetto Corsa Comp.', resolution: '1440p', settings: 'Epic', fps: 80 },
        ],
        reviews: [sampleReviews[3], sampleReviews[0]]
    },
    {
        id: 6,
        name: 'Pro Grid Runner',
        tagline: 'Triple-Screen & VR Ready',
        price: 1899,
        story: 'Step up your immersion with the Pro Grid Runner. This build is engineered for triple-screen setups and high-performance VR racing. Featuring the AMD Ryzen 7 7800X3D, renowned for its gaming prowess, and a potent RTX 4070 Super, you get the graphical horsepower needed to render wide fields of view without sacrificing frame rate. Abundant USB ports ensure all your wheels, pedals, and shifters connect with ease.',
        specs: { cpu: 'AMD Ryzen 7 7800X3D', gpu: 'NVIDIA RTX 4070 Super', ram: '32GB DDR5 6000MHz', storage: '2TB NVMe SSD' },
        fullSpecs: {
            'Processor (CPU)': 'AMD Ryzen 7 7800X3D',
            'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4070 Super 12GB',
            'Memory (RAM)': '32GB Corsair Vengeance DDR5 6000MHz (2x16GB)',
            'Storage (SSD)': '2TB Samsung 980 Pro NVMe M.2 SSD',
            'Motherboard': 'Gigabyte B650 GAMING X AX',
            'Power Supply (PSU)': 'Corsair RM850e 850W 80+ Gold',
            'CPU Cooler': 'Deepcool AK620 Digital Air Cooler',
            'PC Case': 'Fractal Design North',
            'Operating System': 'Windows 11 Home'
        },
        whatsInTheBox: ['Pro Grid Runner PC', 'UK Power Cable', 'Manuals', 'Welcome Pack'],
        galleryImages: ['/custom-pc-2.png', '/custom-pc-3.png', '/custom-pc-1.png'],
         benchmarks: [
          { game: 'iRacing', resolution: '1440p', settings: 'High', fps: 220 },
          { game: 'iRacing (Triples)', resolution: '1080p', settings: 'High', fps: 150 },
          { game: 'Assetto Corsa Comp.', resolution: '1440p', settings: 'Epic', fps: 120 },
          { game: 'EA Sports WRC', resolution: '1440p', settings: 'Ultra', fps: 95 },
        ],
        reviews: [sampleReviews[3]]
    },
    {
        id: 7,
        name: 'Endurance Champion',
        tagline: 'Ultimate No-Compromise Sim Rig',
        price: 3199,
        story: 'For the sim racer who demands the absolute best, the Endurance Champion delivers. This is a no-compromise machine built for elite performance in any scenario—whether it\'s triple 1440p monitors, the latest high-resolution VR headsets, or streaming your races in stunning quality. Powered by an Intel Core i9 and the formidable RTX 4080 Super, this PC ensures you are always at the front of the pack.',
        specs: { cpu: 'Intel Core i9-14900K', gpu: 'NVIDIA RTX 4080 Super', ram: '32GB DDR5 6200MHz', storage: '4TB NVMe SSD' },
        fullSpecs: {
            'Processor (CPU)': 'Intel Core i9-14900K',
            'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4080 Super 16GB',
            'Memory (RAM)': '32GB G.Skill Trident Z5 Neo RGB DDR5 6200MHz (2x16GB)',
            'Storage (SSD)': '4TB Crucial T700 Gen5 NVMe M.2 SSD',
            'Motherboard': 'ASUS ROG STRIX Z790-E GAMING WIFI II',
            'Power Supply (PSU)': 'Corsair RM1000x 1000W 80+ Gold',
            'CPU Cooler': 'ARCTIC Liquid Freezer III 360 A-RGB',
            'PC Case': 'Lian Li O11 Dynamic EVO',
            'Operating System': 'Windows 11 Pro'
        },
        whatsInTheBox: ['Endurance Champion PC', 'UK Power Cable', 'Manuals', 'Welcome Pack'],
        galleryImages: ['/custom-pc-3.png', '/custom-pc-1.png', '/custom-pc-2.png'],
        benchmarks: [
          { game: 'iRacing (Triples)', resolution: '1440p', settings: 'High', fps: 160 },
          { game: 'iRacing (VR)', resolution: '4K', settings: 'High', fps: 120 },
          { game: 'Assetto Corsa Comp.', resolution: '4K', settings: 'Epic', fps: 110 },
          { game: 'EA Sports WRC', resolution: '4K', settings: 'Ultra', fps: 90 },
        ],
        reviews: []
    },
];

export const FLIGHT_SIM_PCS: PCSystem[] = [
    {
        id: 8,
        name: 'Aviator\'s Entry',
        tagline: 'Smooth 1080p Flight Simulation',
        price: 1299,
        story: 'The Aviator\'s Entry is your ticket to the virtual skies. Optimized for a fluid 1080p experience in Microsoft Flight Simulator, this build features a powerful Intel Core i5 to handle complex physics and an RTX 4060 for beautiful visuals. It\'s the perfect starting point for any aspiring pilot.',
        specs: { cpu: 'Intel Core i5-14600K', gpu: 'NVIDIA RTX 4060', ram: '32GB DDR5 5200MHz', storage: '1TB NVMe SSD' },
        fullSpecs: {
            'Processor (CPU)': 'Intel Core i5-14600K',
            'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4060 8GB',
            'Memory (RAM)': '32GB Corsair Vengeance DDR5 5200MHz (2x16GB)',
            'Storage (SSD)': '1TB Crucial P3 Plus NVMe M.2 SSD',
            'Motherboard': 'ASUS PRIME B760M-A WIFI DDR5',
            'Power Supply (PSU)': 'Corsair RM750e 750W 80+ Gold',
            'CPU Cooler': 'Deepcool AK620 Digital Air Cooler',
            'PC Case': 'Corsair 4000D Airflow',
            'Operating System': 'Windows 11 Home'
        },
        whatsInTheBox: ['Aviator\'s Entry PC', 'UK Power Cable', 'Manuals', 'Welcome Pack'],
        galleryImages: ['/custom-pc-1.png', '/custom-pc-2.png', '/custom-pc-3.png'],
        benchmarks: [
            { game: 'MS Flight Sim 2020', resolution: '1080p', settings: 'High-End', fps: 75 },
            { game: 'DCS World', resolution: '1080p', settings: 'High', fps: 130 },
            { game: 'X-Plane 12', resolution: '1080p', settings: 'High', fps: 85 },
        ],
        reviews: [sampleReviews[0], sampleReviews[2]]
    },
    {
        id: 9,
        name: 'Captain\'s Choice',
        tagline: 'High-Fidelity 1440p & VR Flight',
        price: 2099,
        story: 'Take command with the Captain\'s Choice. This rig is built for the serious simmer who demands high fidelity at 1440p or in VR. The AMD Ryzen 7 7800X3D provides class-leading simulation performance, while the RTX 4070 Super renders complex cockpits and dense scenery with ease. Get ready for IFR flights in stunning clarity.',
        specs: { cpu: 'AMD Ryzen 7 7800X3D', gpu: 'NVIDIA RTX 4070 Super', ram: '32GB DDR5 6000MHz', storage: '2TB NVMe SSD' },
        fullSpecs: {
            'Processor (CPU)': 'AMD Ryzen 7 7800X3D',
            'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4070 Super 12GB',
            'Memory (RAM)': '32GB Corsair Vengeance DDR5 6000MHz (2x16GB)',
            'Storage (SSD)': '2TB Samsung 980 Pro NVMe M.2 SSD',
            'Motherboard': 'Gigabyte B650 GAMING X AX',
            'Power Supply (PSU)': 'Corsair RM850e 850W 80+ Gold',
            'CPU Cooler': 'ARCTIC Liquid Freezer III 360 A-RGB',
            'PC Case': 'Fractal Design North',
            'Operating System': 'Windows 11 Home'
        },
        whatsInTheBox: ['Captain\'s Choice PC', 'UK Power Cable', 'Manuals', 'Welcome Pack'],
        galleryImages: ['/custom-pc-2.png', '/custom-pc-3.png', '/custom-pc-1.png'],
        benchmarks: [
            { game: 'MS Flight Sim 2020', resolution: '1440p', settings: 'High-End', fps: 65 },
            { game: 'MS Flight Sim 2020 (VR)', resolution: '4K', settings: 'Medium', fps: 45 },
            { game: 'DCS World', resolution: '1440p', settings: 'High', fps: 110 },
        ],
        reviews: [sampleReviews[3], sampleReviews[1]]
    },
    {
        id: 10,
        name: 'Top Gun Maverick',
        tagline: 'Ultimate 4K & Multi-Monitor Cockpit',
        price: 3399,
        story: 'For the pilot who accepts no compromises, the Top Gun Maverick is the pinnacle of flight simulation hardware. An Intel Core i9 processor crunches through the most complex scenery and add-ons, while the mighty RTX 4080 Super powers 4K visuals or a full multi-monitor cockpit setup without breaking a sweat. This is as real as it gets.',
        specs: { cpu: 'Intel Core i9-14900K', gpu: 'NVIDIA RTX 4080 Super', ram: '64GB DDR5 6000MHz', storage: '4TB NVMe SSD' },
        fullSpecs: {
            'Processor (CPU)': 'Intel Core i9-14900K',
            'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4080 Super 16GB',
            'Memory (RAM)': '64GB Corsair Vengeance DDR5 6000MHz (2x32GB)',
            'Storage (SSD)': '4TB Crucial T700 Gen5 NVMe M.2 SSD',
            'Motherboard': 'ASUS ROG STRIX Z790-E GAMING WIFI II',
            'Power Supply (PSU)': 'Corsair RM1000x 1000W 80+ Gold',
            'CPU Cooler': 'Corsair H150i Elite Capellix XT Liquid CPU Cooler',
            'PC Case': 'Lian Li O11 Dynamic EVO',
            'Operating System': 'Windows 11 Pro'
        },
        whatsInTheBox: ['Top Gun Maverick PC', 'UK Power Cable', 'Manuals', 'Welcome Pack'],
        galleryImages: ['/custom-pc-3.png', '/custom-pc-1.png', '/custom-pc-2.png'],
        benchmarks: [
            { game: 'MS Flight Sim 2020', resolution: '4K', settings: 'Ultra', fps: 60 },
            { game: 'DCS World', resolution: '4K', settings: 'Ultra', fps: 100 },
            { game: 'X-Plane 12', resolution: '4K', settings: 'Ultra', fps: 70 },
        ],
        reviews: []
    },
];

export const GAMING_PLATFORMS: Platform[] = [
    {
        id: 'amd-am4-ddr4',
        name: 'AMD® RYZEN AM4 COMPUTERS',
        budget: 'MY BUDGET IS £420 - £4,000',
        features: [
            'AMD A520 & B550 Chipsets. Socket AM4',
            'Supporting 7nm AMD Ryzen™ 5000 Series Processors',
            'Supports DDR4 memory up to 3600Mhz',
            'Unrivaled technology for exceptional performance!',
        ],
        imageUrl: 'src/assets/platforms/amd-ddr4.png',
        systemIds: ['amd-essential-gaming'],
    },
    {
        id: 'intel-z790-ddr5',
        name: 'INTEL® Z790 DDR5 TOP SPEC COMPUTERS',
        budget: 'MY BUDGET IS £460 - £3,000',
        features: [
            'Intel® Z790 Chipset & socket 1700.',
            '12ᵗʰ & 14ᵗʰ generation Intel® Core™ Processors.',
            'For serious multitaskers, gamers or multimedia enthusiasts.',
            'Choice of the latest DDR5 memory & up to 58 HSIO Lanes for powerful performance.',
        ],
        imageUrl: 'src/assets/platforms/intel-ddr5.png',
        systemIds: ['intel-core-gaming-pc'],
    },
     {
        id: 'amd-am5-ddr5',
        name: 'AMD® RYZEN AM5 COMPUTERS',
        budget: 'MY BUDGET IS £530 - £4,000',
        features: [
            'AMD A620, B650 & X670 Chipsets. Socket AM5',
            'Supporting AMD Ryzen™ 7000 & 9000 Series Processors',
            'Supports DDR5 memory up to 8000Mhz',
            'For serious multitaskers, gamers or multimedia enthusiasts.',
        ],
        imageUrl: 'src/assets/platforms/amd-ddr5.png',
        systemIds: ['amd-ryzen-gaming-pc'],
    },
    {
        id: 'intel-z790-ultra-ddr5',
        name: 'INTEL® CORE ULTRA & Z890 CHIPSET',
        budget: 'MY BUDGET IS £540 - £3,000',
        features: [
            'Intel® Z890 Chipset & Socket 1851',
            'Intel® Core™ Ultra Processors (Series 2)',
            'Offering Wi-Fi 7, USB4 and latest M.2 support (at least 1x PCIe 5.0 port)',
            'Ready for Advanced AI, designed for the future of AI Computing',
        ],
        imageUrl: 'src/assets/platforms/intel-ddr5-ultra.png',
        systemIds: [], // NOTE: No systems for this yet, it's future-facing
    },
];

export const WORKSTATION_PLATFORMS: Platform[] = [
    {
        id: 'intel-z790-ws',
        name: 'INTEL® Z790 WORKSTATION',
        budget: 'MY BUDGET IS £550 - £10,000',
        features: [
            'Intel® Z790 & W680 Chipset',
            '13ᵗʰ & 14ᵗʰ generation Intel® Core™ Processors.',
            'Professional W680 & ProArt Motherboards designed for AI Training, Deep Learning, Animation 3D Rendering and Media Production'
        ],
        imageUrl: 'src/assets/platforms/intel-z790-ws.png',
        systemIds: ['intel-workstation'],
    },
     {
        id: 'amd-ryzen-ws',
        name: 'AMD RYZEN WORKSTATION COMPUTERS',
        budget: 'MY BUDGET IS £650 - £10,000',
        features: [
            'AMD B650 & X670 Chipsets. Socket AM5',
            'Choice of AMD Radeon Pro™ & NVIDIA RTX Professional ®.',
            'Ideal for CAD engineers & Digital Content Creators.',
            'Supporting the AMD Ryzen™ Processors.',
        ],
        imageUrl: 'src/assets/platforms/amd-x670-ws.png',
        systemIds: ['amd-workstation'],
    },
];


export const WHY_CHOOSE_US_POINTS = [
    {
        title: 'Expert Craftsmanship',
        description: 'Every PC is hand-built by our seasoned technicians in the UK, ensuring flawless assembly and cable management.',
    },
    {
        title: 'Premium Components',
        description: 'We only use top-tier components from trusted brands to guarantee maximum performance and reliability.',
    },
    {
        title: '3-Year Warranty',
        description: 'Enjoy peace of mind with our comprehensive parts and labour warranty, backed by our dedicated support team.',
    },
    {
        title: 'UK-Based Support',
        description: 'Our friendly and knowledgeable support team is right here in the UK, ready to assist you with any queries.',
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'James H.',
        quote: 'The build quality is insane, and it runs every game I throw at it flawlessly. The cable management is a work of art. 10/10 would recommend!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Sarah W.',
        quote: 'From choosing the parts to the final delivery, the whole process was seamless. The support team was incredibly helpful. My new workstation is a beast!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Mike P.',
        quote: 'I was blown away by the performance for the price. PCBL UK offers incredible value compared to the bigger names out there. Very happy customer.',
        rating: 5,
    }
];

export const GAMES_DATA: GameData[] = [
    {
        id: 'cyberpunk',
        name: 'Cyberpunk 2077',
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4admmHf2C93delTsmHrL1.jpg',
        recommendations: {
            '1080p': [2, 5],
            '1440p': [3, 6, 101],
            '4K': [1, 7, 4]
        }
    },
    {
        id: 'cod',
        name: 'Call of Duty',
        imageUrl: 'https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt822b39512634f8e5/6528416a694cc6f4f5669b3f/COD_MW3_Keyart_Vert_Slate.jpg',
        recommendations: {
            '1080p': [5, 2],
            '1440p': [6, 3, 102],
            '4K': [1, 7, 4]
        }
    },
    {
        id: 'helldivers2',
        name: 'Helldivers 2',
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/2313/e9a288279b3713f28a38a11394a1796d193d25d97d33d964.png',
        recommendations: {
            '1080p': [2, 101],
            '1440p': [3, 6],
            '4K': [1, 7]
        }
    },
    {
        id: 'valorant',
        name: 'Valorant',
        imageUrl: 'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VAL_2560x1440-2560x1440-2c70d4753063f273b0693a4661a8779b.jpg',
        recommendations: {
            '1080p': [5, 2],
            '1440p': [6, 3],
            '4K': [1, 4]
        }
    },
    {
        id: 'iracing',
        name: 'iRacing',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5e5f3f0133276c112643a683/1614271810141-92XWW6E2BF3Q8T1940E8/iRacing.jpg',
        recommendations: {
            '1080p': [5],
            '1440p': [6],
            '4K': [7]
        }
    },
    {
        id: 'starfield',
        name: 'Starfield',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg?t=1700070383',
        recommendations: {
            '1080p': [2, 3],
            '1440p': [1, 6],
            '4K': [4, 7]
        }
    }
];

export const FOOTER_LINKS = {
    'Shop': [
      { name: 'Gaming PCs', view: 'configureLanding' as const }, 
      { name: 'Workstations', view: 'configureLanding' as const },
      { name: 'Racing Sims', view: 'racingSims' as const },
      { name: 'Flight Sims', view: 'flightSims' as const },
      { name: 'Build Your PC', view: 'configureLanding' as const },
    ],
    'Information': [
      { name: 'Delivery Information', view: 'delivery' as const },
      { name: 'Warranty Information', view: 'warranty' as const },
      { name: 'FAQ', view: 'faq' as const },
      { name: 'PCBL Points', view: 'pcblPoints' as const },
      { name: 'Privacy Policy', view: 'privacy' as const },
      { name: 'Terms & Conditions', view: 'terms' as const },
    ],
    'Company': [
      { name: 'About Us', view: 'about' as const },
      { name: 'Contact Us', view: 'contact' as const }, 
    ],
     'My Account': [
      { name: 'Sign In', view: 'auth' as const },
      { name: 'My Account', view: 'account' as const },
    ],
};