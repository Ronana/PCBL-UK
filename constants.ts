import { PCSystem, Testimonial, ComponentCategory, BasePCSystem, ConfigCategory, ConfiguratorSection, NavLink, Benchmark, Review, GameData } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Configure',
    isDropdown: true,
    links: [
      { name: 'Gaming PCs', view: 'selectBase', filter: 'gaming' },
      { name: 'Workstations', view: 'selectBase', filter: 'workstations' },
      { name: 'Overclocked PCs', view: 'selectBase', filter: 'overclocked' },
      { name: 'Liquid Series', view: 'selectBase', filter: 'liquid' },
      { name: 'Mini PCs', view: 'selectBase', filter: 'sff' },
      { name: 'Servers', view: 'selectBase', filter: 'server' },
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
    actionTarget: 'gaming',
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

export const CONFIGURATOR_SECTIONS: ConfiguratorSection[] = [
    // 1) Core Components
    {
        id: 'core_components',
        name: '1) CHOOSE YOUR CORE COMPONENTS',
        categories: [
            {
                id: 'cpu',
                name: 'Processor (CPU)',
                options: [
                    { id: 'r3-4100', name: 'AMD Ryzen 3 4100 Quad Core CPU (3.8GHz-4.0GHz/6MB CACHE/AM4)', price: 79, platform: 'AMD' },
                    { id: 'r5-7600x', name: 'AMD Ryzen 5 7600X', price: 230, platform: 'AMD' },
                    { id: 'r7-7800x3d', name: 'AMD Ryzen 7 7800X3D', price: 380, platform: 'AMD' },
                    { id: 'i3-12100f', name: 'Intel Core i3-12100F Quad Core CPU (3.3GHz-4.3GHz/12MB CACHE/LGA1700)', price: 92, platform: 'Intel'},
                    { id: 'i5-14600k', name: 'Intel Core i5-14600K', price: 310, platform: 'Intel' },
                    { id: 'i9-14900k', name: 'Intel Core i9-14900K', price: 580, platform: 'Intel' },
                ],
            },
            {
                id: 'motherboard',
                name: 'Motherboard',
                options: [
                    { id: 'a520m-k', name: 'ASUS® PRIME A520M-K (mATX, AM4, DDR4, PCIe 3.0)', price: 65, platform: 'AMD' },
                    { id: 'b650m-ds3h', name: 'Gigabyte B650M DS3H', price: 150, platform: 'AMD' },
                    { id: 'x670e-a', name: 'ASUS ROG STRIX X670E-A', price: 350, platform: 'AMD' },
                    { id: 'h610m-h', name: 'Gigabyte H610M H (mATX, LGA1700, DDR4, PCIe 4.0)', price: 78, platform: 'Intel' },
                    { id: 'b760-aorus-elite', name: 'Gigabyte B760 AORUS ELITE AX', price: 200, platform: 'Intel' },
                    { id: 'b760i-rog-strix', name: 'ASUS ROG STRIX B760-I GAMING WIFI Mini-ITX', price: 220, platform: 'Intel' },
                ],
            },
            {
                id: 'ram',
                name: 'Memory (RAM)',
                options: [
                    { id: '8gb-ddr4-3200', name: '8GB PCS PRO DDR4 3200MHz (1 x 8GB)', price: 22 },
                    { id: '16gb-ddr4-3200', name: '16GB PCS PRO DDR4 3200MHz (2 x 8GB)', price: 38 },
                    { id: '16gb-ddr5-5200', name: '16GB DDR5 5200MHz (2x8GB)', price: 70 },
                    { id: '32gb-ddr5-6000', name: '32GB DDR5 6000MHz (2x16GB)', price: 120 },
                    { id: '64gb-ddr5-6000', name: '64GB DDR5 6000MHz (2x32GB)', price: 220 },
                    { id: '128gb-ddr5-5200', name: '128GB DDR5 5200MHz (4x32GB)', price: 400 },
                ],
            },
            {
                id: 'gpu',
                name: 'Graphics Card',
                options: [
                    { id: 'onboard-graphics', name: 'Onboard Integrated Graphics', price: 0 },
                    { id: 'nvidia-710', name: '2GB NVIDIA GEFORCE 710', price: 40 },
                    { id: 'rtx4060', name: 'NVIDIA GeForce RTX 4060', price: 300 },
                    { id: 'rtx4070s', name: 'NVIDIA GeForce RTX 4070 Super', price: 600 },
                    { id: 'rtx4080s', name: 'NVIDIA GeForce RTX 4080 Super', price: 1000 },
                    { id: 'rtx4090', name: 'NVIDIA GeForce RTX 4090', price: 1800 },
                    { id: 'rtx-a4000', name: 'NVIDIA RTX A4000 16GB GDDR6 Workstation GPU', price: 1100 },
                ],
            },
            {
                id: 'gpu_type',
                name: 'Refine your graphics card selection:',
                options: [
                    { id: 'msi-710', name: '2GB MSI GEFORCE 710 - DVI, HDMI, VGA', price: 0 },
                    { id: 'asus-710-evo', name: '2GB ASUS GEFORCE 710 EVO - DVI, HDMI, VGA', price: 5 },
                ]
            },
            {
                id: 'gpu_bracket',
                name: 'Graphics Card Support Bracket',
                options: [
                    { id: 'none', name: 'NONE (BRACKET INCLUDED AS STANDARD ON 5070 Ti / RX 9070 AND ABOVE)', price: 0 },
                    { id: 'standard', name: 'STANDARD SUPPORT BRACKET', price: 10 },
                ]
            },
             {
                id: 'case',
                name: 'Case',
                options: [
                    { id: 'corsair-4000d', name: 'Corsair 4000D Airflow', price: 90, imageUrl: '/custom-pc-2.png' },
                    { id: 'lianli-o11', name: 'Lian Li O11 Dynamic EVO', price: 160, imageUrl: '/custom-pc-1.png' },
                    { id: 'fractal-north', name: 'Fractal Design North', price: 130, imageUrl: '/custom-pc-3.png' },
                    { id: 'fractal-define7', name: 'Fractal Design Define 7 XL Tower Case', price: 220, imageUrl: '/custom-pc-2.png' },
                    { id: 'chenbro-rm42300', name: 'Chenbro RM42300 4U Rackmount Server Chassis', price: 250, imageUrl: '/rack-workstation.png' },
                    { id: 'fractal-terra', name: 'Fractal Design Terra Mini-ITX', price: 180, imageUrl: '/sff-gaming.png' },
                    { id: 'cooler-master-nr200p', name: 'Cooler Master NR200P MAX Mini-ITX', price: 200, imageUrl: '/sff-mini-itx.png' },
                    { id: 'silverstone-sg13', name: 'Silverstone Sugo SG13 Mini-ITX', price: 60, imageUrl: '/sff-nuc.png' },
                ],
            },
        ]
    },
    // 2) Hard Drives, Optical Storage & Memory Card Reader
    {
        id: 'storage_devices',
        name: '2) HARD DRIVES, OPTICAL STORAGE & MEMORY CARD READER',
        categories: [
             {
                id: 'm2_ssd_1',
                name: '1st M.2 SSD Drive',
                options: [
                    { id: '256gb-m2', name: '256GB PCS PCIe M.2 SSD (3200 MB/R, 2700 MB/W)', price: 29 },
                    { id: '512gb-m2', name: '512GB PCS PCIe M.2 SSD', price: 45 },
                    { id: '1tb-nvme', name: '1TB NVMe M.2 SSD', price: 80 },
                    { id: '2tb-nvme', name: '2TB NVMe M.2 SSD', price: 140 },
                    { id: '4tb-nvme', name: '4TB NVMe M.2 SSD', price: 250 },
                ]
            },
            {
                id: 'm2_ssd_2',
                name: '2nd M.2 SSD Drive',
                options: [
                    { id: 'none', name: 'NONE', price: 0 },
                    { id: '256gb-m2', name: '256GB PCS PCIe M.2 SSD (3200 MB/R, 2700 MB/W)', price: 29 },
                    { id: '512gb-m2', name: '512GB PCS PCIe M.2 SSD', price: 45 },
                    { id: '1tb-nvme', name: '1TB NVMe M.2 SSD', price: 80 },
                ]
            },
            {
                id: 'storage_drive_1',
                name: '1st Storage Drive',
                options: [
                    { id: 'none', name: 'NONE', price: 0 },
                    { id: '1tb-hdd', name: '1TB SEAGATE BARRACUDA SATA-III 3.5" HDD, 6GB/s, 7200RPM', price: 42 },
                    { id: '2tb-hdd', name: '2TB SEAGATE BARRACUDA SATA-III 3.5" HDD, 6GB/s, 7200RPM', price: 65 },
                    { id: '4tb-ironwolf', name: '4TB SEAGATE IRONWOLF SATA-III 3.5" HDD, 6GB/s, 7200RPM', price: 110 },
                    { id: '8tb-ironwolf', name: '8TB SEAGATE IRONWOLF SATA-III 3.5" HDD, 6GB/s, 7200RPM', price: 200 },
                ]
            },
            {
                id: 'storage_drive_2',
                name: '2nd Storage Drive',
                options: [
                    { id: 'none', name: 'NONE', price: 0 },
                    { id: '1tb-hdd', name: '1TB SEAGATE BARRACUDA SATA-III 3.5" HDD, 6GB/s, 7200RPM', price: 42 },
                    { id: '4tb-ironwolf', name: '4TB SEAGATE IRONWOLF SATA-III 3.5" HDD, 6GB/s, 7200RPM', price: 110 },
                ]
            },
            { id: 'raid', name: 'RAID', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'dvd_bluray', name: 'DVD/BLU-RAY Drive', options: [{ id: 'none', name: 'NOT REQUIRED', price: 0 }] },
            { id: 'external_dvd_bluray', name: 'External DVD/BLU-RAY Drive', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'external_hdd', name: 'External Hard Drive', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'memory_card_reader', name: 'Memory Card Reader', options: [{ id: 'none', name: 'NONE', price: 0 }] },
        ]
    },
     // 3) Power and Cooling
    {
        id: 'power_cooling',
        name: '3) POWER AND COOLING',
        categories: [
            {
                id: 'psu',
                name: 'Power Supply',
                options: [
                    { id: 'corsair-550w', name: 'CORSAIR 550W CX SERIES™ CX-550 POWER SUPPLY', price: 59 },
                    { id: '750w-gold', name: '750W 80+ Gold', price: 100 },
                    { id: '850w-gold', name: '850W 80+ Gold', price: 130 },
                    { id: '1000w-platinum', name: '1000W 80+ Platinum', price: 200 },
                    { id: 'corsair-sf750', name: 'Corsair SF750 750W 80+ Platinum SFX', price: 160 },
                ],
            },
            { id: 'power_cable', name: 'Power Cable', options: [{ id: 'uk-kettle', name: '1 x 1.5 Metre UK Power Cable (Kettle Lead)', price: 0 }] },
            {
                id: 'cpu_cooling',
                name: 'Processor Cooling',
                options: [
                    { id: 'standard-amd', name: 'STANDARD AMD CPU COOLER (105W TDP)', price: 0 },
                    { id: 'standard-intel', name: 'STANDARD INTEL CPU COOLER (125W TDP)', price: 0 },
                    { id: 'deepcool-ak620', name: 'Deepcool AK620 Digital Air Cooler', price: 70 },
                    { id: 'corsair-h150i', name: 'Corsair H150i ELITE CAPELLIX XT 360mm Liquid CPU Cooler', price: 180 },
                    { id: 'arctic-lf3-360', name: 'ARCTIC Liquid Freezer III 360 A-RGB', price: 150 },
                    { id: 'noctua-nh-l12s', name: 'Noctua NH-L12S Low Profile Air Cooler', price: 65 },
                ]
            },
            { id: 'thermal_paste', name: 'Thermal Paste', options: [{ id: 'standard', name: 'STANDARD THERMAL PASTE FOR SUFFICIENT COOLING', price: 0 }] },
            { id: 'led_lighting', name: 'LED Lighting', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'case_fans', name: 'Extra Case Fans', options: [{ id: 'none', name: 'NONE', price: 0 }] },
        ]
    },
    // 4) System Refinements
    {
        id: 'refinements',
        name: '4) SYSTEM REFINEMENTS',
        categories: [
            { id: 'sound_card', name: 'Sound Card', options: [{ id: 'onboard', name: 'ONBOARD 6 CHANNEL (5.1) HIGH DEF AUDIO (AS STANDARD)', price: 0 }] },
            { id: 'external_sound_card', name: 'External Sound Card', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'network_card', name: 'Network Card', options: [{ id: 'onboard-1gbit', name: '10/100/1000 GIGABIT LAN PORT', price: 0 }] },
            { id: 'wireless_card', name: 'Wireless Network Card', options: [{ id: 'ac600', name: 'WIRELESS AC600 USB ADAPTER (433Mbps/5GHz, 150Mbps/2.4GHz)', price: 10 }] },
            { id: 'router_homeplugs', name: 'Wireless Router/HomePlugs', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'usb_thunderbolt', name: 'USB/Thunderbolt Options', options: [{ id: 'min-2-usb3-2-usb2', name: 'MIN. 2 x USB 3.0 & 2 x USB 2.0 PORTS @ BACK PANEL + MIN. 2 FRONT PORTS', price: 0 }] },
            { id: 'capture_card', name: 'Capture/Streaming Cards', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'external_capture_card', name: 'External Capture Card', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'firewire', name: 'Firewire', options: [{ id: 'none', name: 'NONE', price: 0 }] },
        ]
    },
    // 5) Operating System and Software
    {
        id: 'os_software',
        name: '5) CHOOSE YOUR OPERATING SYSTEM AND SOFTWARE',
        categories: [
            { id: 'os', name: 'Operating System', options: [{ id: 'win11-home', name: 'Windows 11 Home 64 Bit - inc. Single Licence', price: 95 }] },
            { id: 'os_language', name: 'Operating System Language', options: [{ id: 'uk-english', name: 'United Kingdom - English Language', price: 0 }] },
            { id: 'recovery_media', name: 'Windows Recovery Media', options: [{ id: 'online-download', name: 'Windows 10/11 Multi-Language Recovery Image - Unlimited Downloads from Online Account', price: 0 }] },
            { id: 'office_software', name: 'Office Software', options: [{ id: 'm365-trial', name: 'FREE 30 Day Trial of Microsoft 365® (Operating System Required)', price: 0 }] },
            { id: 'antivirus', name: 'Anti-Virus Software', options: [{ id: 'norton-360', name: 'Norton 360 inc. Game Optimizer - Free 90 Day License', price: 0 }] },
            { id: 'browser', name: 'Browser', options: [{ id: 'ms-edge', name: 'Microsoft® Edge', price: 0 }] },
        ]
    },
    // 6) Peripherals and Accessories
    {
        id: 'peripherals',
        name: '6) PERIPHERALS & ACCESSORIES',
        categories: [
            { id: 'monitor_1', name: 'Monitor', options: [{ id: 'none', name: 'NONE', price: 0 }, {id: 'asus-24', name: '24" ASUS VA249HE (1920x1080, 5ms, D-Sub, HDMI)', price: 110 }] },
            { id: 'monitor_2', name: '2nd Monitor', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'monitor_cables', name: 'Monitor Cables', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'monitor_mounts', name: 'Multi Monitor Mounts', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'keyboard_mouse', name: 'Keyboard and Mouse', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'mouse', name: 'Mouse', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'controller', name: 'Controllers', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'headset', name: 'Headsets', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'mouse_pad', name: 'Mouse Pad', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'streaming_accessories', name: 'Streaming Accessories', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'gaming_chair', name: 'Gaming Chair', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'speakers', name: 'Speakers', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'webcam', name: 'Webcam', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'key_light', name: 'Key Light', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'microphone', name: 'Microphone', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'surge_protection', name: 'Surge Protection', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'cable_management', name: 'Cable Management', options: [{ id: 'none', name: 'NONE', price: 0 }] },
        ]
    },
    // 7) Delivery and Services
    {
        id: 'services',
        name: '7) DELIVERY & SERVICES',
        categories: [
            { id: 'warranty', name: 'Warranty', options: [{ id: '3-year-std', name: '3 Year Standard Warranty (6 Month Collect & Return, 1 Year Parts, 3 Year Labour)', price: 0 }] },
            { id: 'home_installation', name: 'Home Installation', options: [{ id: 'none', name: 'NONE', price: 0 }] },
            { id: 'delivery', name: 'Delivery', options: [{ id: 'uk-mainland-std', name: 'STANDARD INSURED DELIVERY TO UK MAINLAND (MON-FRI)', price: 9 }] },
            { id: 'build_time', name: 'Build Time', options: [{ id: 'std-build', name: 'Standard Build - Approximately 7 to 9 working days', price: 0 }] },
            { id: 'quantity', name: 'Quantity', options: [{ id: '1', name: '1', price: 0 }] },
        ]
    },
];

export const ALL_COMPONENT_CATEGORIES: ComponentCategory[] = CONFIGURATOR_SECTIONS.flatMap(section => section.categories);

const BASE_DEFAULT_CONFIG = {
    gpu_type: 'msi-710',
    gpu_bracket: 'none',
    m2_ssd_2: 'none',
    storage_drive_1: 'none',
    storage_drive_2: 'none',
    raid: 'none',
    dvd_bluray: 'none',
    external_dvd_bluray: 'none',
    external_hdd: 'none',
    memory_card_reader: 'none',
    power_cable: 'uk-kettle',
    thermal_paste: 'standard',
    led_lighting: 'none',
    case_fans: 'none',
    sound_card: 'onboard',
    external_sound_card: 'none',
    network_card: 'onboard-1gbit',
    wireless_card: 'ac600',
    router_homeplugs: 'none',
    usb_thunderbolt: 'min-2-usb3-2-usb2',
    capture_card: 'none',
    external_capture_card: 'none',
    firewire: 'none',
    os: 'win11-home',
    os_language: 'uk-english',
    recovery_media: 'online-download',
    office_software: 'm365-trial',
    antivirus: 'norton-360',
    browser: 'ms-edge',
    monitor_1: 'none',
    monitor_2: 'none',
    monitor_cables: 'none',
    monitor_mounts: 'none',
    keyboard_mouse: 'none',
    mouse: 'none',
    controller: 'none',
    headset: 'none',
    mouse_pad: 'none',
    streaming_accessories: 'none',
    gaming_chair: 'none',
    speakers: 'none',
    webcam: 'none',
    key_light: 'none',
    microphone: 'none',
    surge_protection: 'none',
    cable_management: 'none',
    warranty: '3-year-std',
    home_installation: 'none',
    delivery: 'uk-mainland-std',
    build_time: 'std-build',
    quantity: '1',
};

const AMD_ESSENTIALS_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'r3-4100',
    motherboard: 'a520m-k',
    ram: '8gb-ddr4-3200',
    gpu: 'nvidia-710',
    case: 'corsair-4000d',
    m2_ssd_1: '256gb-m2',
    psu: 'corsair-550w',
    cpu_cooling: 'standard-amd',
};

const INTEL_ESSENTIALS_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i3-12100f',
    motherboard: 'h610m-h',
    ram: '8gb-ddr4-3200',
    gpu: 'nvidia-710',
    case: 'corsair-4000d',
    m2_ssd_1: '256gb-m2',
    psu: 'corsair-550w',
    cpu_cooling: 'standard-intel',
};

const WORKSTATION_AMD_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'r7-7800x3d',
    motherboard: 'b650m-ds3h',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4070s',
    gpu_bracket: 'standard',
    case: 'fractal-north',
    m2_ssd_1: '1tb-nvme',
    psu: '850w-gold',
    cpu_cooling: 'deepcool-ak620',
};

const WORKSTATION_INTEL_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i5-14600k',
    motherboard: 'b760-aorus-elite',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4070s',
    gpu_bracket: 'standard',
    case: 'fractal-north',
    m2_ssd_1: '1tb-nvme',
    psu: '850w-gold',
    cpu_cooling: 'deepcool-ak620',
};

const OVERCLOCKED_AMD_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'r7-7800x3d',
    motherboard: 'x670e-a',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4080s',
    gpu_bracket: 'standard',
    case: 'lianli-o11',
    m2_ssd_1: '2tb-nvme',
    psu: '1000w-platinum',
    cpu_cooling: 'deepcool-ak620',
};

const OVERCLOCKED_INTEL_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i9-14900k',
    motherboard: 'b760-aorus-elite',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4080s',
    gpu_bracket: 'standard',
    case: 'lianli-o11',
    m2_ssd_1: '2tb-nvme',
    psu: '1000w-platinum',
    cpu_cooling: 'deepcool-ak620',
};

const LIQUID_SERIES_AMD_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'r7-7800x3d',
    motherboard: 'x670e-a',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4080s',
    gpu_bracket: 'standard',
    case: 'lianli-o11',
    m2_ssd_1: '2tb-nvme',
    psu: '1000w-platinum',
    cpu_cooling: 'corsair-h150i',
};

const LIQUID_SERIES_INTEL_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i9-14900k',
    motherboard: 'b760-aorus-elite',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4080s',
    gpu_bracket: 'standard',
    case: 'lianli-o11',
    m2_ssd_1: '2tb-nvme',
    psu: '1000w-platinum',
    cpu_cooling: 'arctic-lf3-360',
};

const TOWER_SERVER_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i9-14900k',
    motherboard: 'b760-aorus-elite',
    ram: '64gb-ddr5-6000',
    gpu: 'rtx-a4000',
    gpu_bracket: 'standard',
    case: 'fractal-define7',
    m2_ssd_1: '1tb-nvme',
    storage_drive_1: '4tb-ironwolf',
    psu: '1000w-platinum',
    cpu_cooling: 'deepcool-ak620',
};

const RACK_SERVER_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'r7-7800x3d',
    motherboard: 'b650m-ds3h',
    ram: '64gb-ddr5-6000',
    gpu: 'rtx-a4000',
    gpu_bracket: 'standard',
    case: 'chenbro-rm42300',
    m2_ssd_1: '1tb-nvme',
    storage_drive_1: '4tb-ironwolf',
    psu: '1000w-platinum',
    cpu_cooling: 'deepcool-ak620',
};

const SFF_COMPACT_NUC_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i5-14600k',
    motherboard: 'b760i-rog-strix',
    ram: '16gb-ddr5-5200',
    gpu: 'onboard-graphics',
    case: 'silverstone-sg13',
    m2_ssd_1: '1tb-nvme',
    psu: 'corsair-sf750',
    cpu_cooling: 'noctua-nh-l12s',
};

const SFF_MINI_ITX_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i3-12100f',
    motherboard: 'h610m-h',
    ram: '16gb-ddr4-3200',
    gpu: 'nvidia-710',
    case: 'silverstone-sg13',
    m2_ssd_1: '512gb-m2',
    psu: 'corsair-550w',
    cpu_cooling: 'standard-intel',
};

const SFF_GAMING_LIFESTYLE_DEFAULT_CONFIG = {
    ...BASE_DEFAULT_CONFIG,
    cpu: 'i5-14600k',
    motherboard: 'b760i-rog-strix',
    ram: '32gb-ddr5-6000',
    gpu: 'rtx4060',
    case: 'fractal-terra',
    m2_ssd_1: '1tb-nvme',
    psu: 'corsair-sf750',
    cpu_cooling: 'noctua-nh-l12s',
};


export const CONFIG_CATEGORIES: ConfigCategory[] = [
    {
        id: 'home-office-gaming',
        name: 'HOME / OFFICE / GAMING',
        systems: [
            {
                id: 'amd-essentials',
                name: 'AMD ESSENTIALS',
                brand: 'AMD',
                budget: '£390 - £800',
                features: [
                    'AMD A520 Socket AM4 Platform',
                    'Supporting AMD Ryzen™ 3000, 4000 & 5000 Series',
                    'Up to 8 Core / 16 Thread CPUs & DDR4 Memory',
                    'Cost-Effective PCs For Home, Office, & Light Gaming',
                ],
                startingPrice: 390,
                imageUrl: '/custom-pc-1.png',
                galleryImages: ['/custom-pc-1.png', '/custom-pc-2.png', '/custom-pc-3.png'],
                defaultConfig: AMD_ESSENTIALS_DEFAULT_CONFIG,
                description: 'An entry-level AMD-based system for home and office use.'
            },
            {
                id: 'intel-essentials',
                name: 'INTEL ESSENTIALS',
                brand: 'Intel',
                budget: '£410 - £2,000',
                features: [
                    'Intel® H610 Chipset',
                    'Ideal Cost Effective PC for Home, Office or Education',
                    'Micro-ATX option available to reduce size',
                    'Performance with 12th Gen Intel® Core™ Processors',
                ],
                startingPrice: 410,
                imageUrl: '/custom-pc-2.png',
                galleryImages: ['/custom-pc-2.png', '/custom-pc-1.png', '/custom-pc-3.png'],
                defaultConfig: INTEL_ESSENTIALS_DEFAULT_CONFIG,
                description: 'An entry-level Intel-based system for home and office use.'
            },
        ]
    },
    {
        id: 'workstations',
        name: 'CUSTOM BUILT WORKSTATIONS',
        systems: [
            {
                id: 'tower-workstation',
                name: 'TOWER WORKSTATIONS',
                brand: 'AMD',
                description: 'High performance workstations in tower form factor.',
                features: [
                    'Custom workstations for home, office and education.',
                    'Single socket and dual socket options available.',
                ],
                startingPrice: 610,
                imageUrl: '/tower-workstation.png',
                galleryImages: ['/tower-workstation.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: WORKSTATION_AMD_DEFAULT_CONFIG,
                budget: 'From £610',
            },
            {
                id: 'rack-workstation',
                name: 'RACK WORKSTATIONS',
                brand: 'Intel',
                description: 'High performance workstations in a 2U or 4U 19" rack form factor.',
                features: [
                    'Rack mountable workstations in 2U or 4U form factor.',
                    'Ideal for education and business applications.',
                ],
                startingPrice: 1120,
                imageUrl: '/rack-workstation.png',
                galleryImages: ['/rack-workstation.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: WORKSTATION_INTEL_DEFAULT_CONFIG,
                budget: 'From £1120',
            },
            {
                id: 'sff-workstation',
                name: 'SMALL FORM FACTOR WORKSTATIONS',
                brand: 'Intel',
                description: 'Powerful small form factor workstations in 8L chassis.',
                features: [
                    'Small 8L chassis.',
                    'Ideal for office applications and home office.',
                ],
                startingPrice: 380,
                imageUrl: '/sff-workstation.png',
                galleryImages: ['/sff-workstation.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: INTEL_ESSENTIALS_DEFAULT_CONFIG,
                budget: 'From £380',
            }
        ]
    },
    {
        id: 'overclocked',
        name: 'OVERCLOCKED COMPUTERS',
        systems: [
            {
                id: 'intel-overclocked',
                name: 'INTEL® CORE ULTRA & Z890 CHIPSET',
                brand: 'Intel',
                budget: 'MY BUDGET IS £1,420 - £6,000',
                features: [
                    'Intel® Z890 Chipset & Socket 1851',
                    'Intel® Core™ Ultra Processors (Series 2)',
                    'Offering Wi-Fi 7, USB4 and latest M.2 support (at least 1x PCIe 5.0 port)',
                    'Out of the Box Overclocked Components'
                ],
                startingPrice: 1420,
                imageUrl: '/intel-overclocked.png',
                galleryImages: ['/intel-overclocked.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: OVERCLOCKED_INTEL_DEFAULT_CONFIG,
                description: ''
            },
            {
                id: 'amd-overclocked',
                name: 'AMD® RYZEN AM5 EXTREME COMPUTERS',
                brand: 'AMD',
                budget: 'MY BUDGET IS £1,520 - £4,000',
                features: [
                    'AMD B650 & X870 Chipsets. Socket AM5',
                    'Supporting AMD Ryzen™ 7000 Series Processors.',
                    'Up to 16 Core / 32 Thread CPUs & DDR5 Memory.',
                    'Out of the box overclocked performance systems.'
                ],
                startingPrice: 1520,
                imageUrl: '/amd-overclocked.png',
                galleryImages: ['/amd-overclocked.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: OVERCLOCKED_AMD_DEFAULT_CONFIG,
                description: ''
            }
        ]
    },
    {
        id: 'liquid-series',
        name: 'LIQUID SERIES® PCS',
        systems: [
            {
                id: 'liquid-series-amd',
                name: 'LIQUID SERIES® AMD',
                brand: 'AMD',
                budget: '£1,800 - £5,000',
                features: [
                    'Premium All-in-One Liquid Cooling',
                    'AMD Ryzen™ 7000 Series Processors',
                    'Maximized Thermal Performance for Gaming',
                    'Stunning Aesthetics with High-Airflow Cases',
                ],
                startingPrice: 1800,
                imageUrl: '/custom-pc-3.png',
                galleryImages: ['/custom-pc-3.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: LIQUID_SERIES_AMD_DEFAULT_CONFIG,
                description: 'Elite AMD systems with premium liquid cooling for ultimate performance.'
            },
            {
                id: 'liquid-series-intel',
                name: 'LIQUID SERIES® INTEL',
                brand: 'Intel',
                budget: '£1,950 - £6,000',
                features: [
                    'Premium All-in-One Liquid Cooling',
                    'Intel® 14th Gen Core™ Processors',
                    'Pushing Clock Speeds to the Absolute Limit',
                    'Engineered for Whisper-Quiet Operation',
                ],
                startingPrice: 1950,
                imageUrl: '/custom-pc-1.png',
                galleryImages: ['/custom-pc-1.png', '/custom-pc-2.png', '/custom-pc-3.png'],
                defaultConfig: LIQUID_SERIES_INTEL_DEFAULT_CONFIG,
                description: 'Top-tier Intel systems with premium liquid cooling for maximum power.'
            },
        ]
    },
     {
        id: 'sff',
        name: 'SMALL FORM FACTOR PCS',
        systems: [
            {
                id: 'sff-compact-nuc',
                name: 'COMPACT / NUC',
                brand: 'Intel',
                description: 'Surprising levels of power in a compact design you can hold in one hand.',
                features: [],
                startingPrice: 550,
                imageUrl: '/sff-nuc.png',
                galleryImages: ['/sff-nuc.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: SFF_COMPACT_NUC_DEFAULT_CONFIG,
                budget: 'From £550',
            },
            {
                id: 'sff-mini-itx',
                name: 'MINI-ITX / MICRO-ATX',
                brand: 'Intel',
                description: 'Designed with a low power consumption for space-constrained environments.',
                features: [],
                startingPrice: 380,
                imageUrl: '/sff-mini-itx.png',
                galleryImages: ['/sff-mini-itx.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: SFF_MINI_ITX_DEFAULT_CONFIG,
                budget: 'From £380',
            },
            {
                id: 'sff-gaming-lifestyle',
                name: 'GAMING / LIFESTYLE',
                brand: 'Intel',
                description: 'High-performance PCs with a stylish design whilst maintaining a small size.',
                features: [],
                startingPrice: 560,
                imageUrl: '/sff-gaming.png',
                galleryImages: ['/sff-gaming.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: SFF_GAMING_LIFESTYLE_DEFAULT_CONFIG,
                budget: 'From £560',
            }
        ]
    },
    {
        id: 'servers',
        name: 'SERVERS',
        systems: [
            {
                id: 'tower-server',
                name: 'TOWER SERVER',
                brand: 'Intel',
                description: 'Scalable tower servers for small businesses and enterprise.',
                features: [
                    'High-capacity storage options.',
                    'Professional-grade CPUs and GPUs.',
                    'Quiet operation suitable for office environments.'
                ],
                startingPrice: 2100,
                imageUrl: '/tower-workstation.png', // Reusing image
                galleryImages: ['/tower-workstation.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: TOWER_SERVER_DEFAULT_CONFIG,
                budget: 'From £2,100',
            },
            {
                id: 'rack-server',
                name: 'RACKMOUNT SERVER',
                brand: 'AMD',
                description: 'High-density rackmount servers for data centers and server rooms.',
                features: [
                    'Space-efficient 4U rackmount chassis.',
                    'Ideal for virtualization and intensive computing tasks.',
                    'Redundant power supply options available.'
                ],
                startingPrice: 2350,
                imageUrl: '/rack-workstation.png', // Reusing image
                galleryImages: ['/rack-workstation.png', '/custom-pc-1.png', '/custom-pc-2.png'],
                defaultConfig: RACK_SERVER_DEFAULT_CONFIG,
                budget: 'From £2,350',
            },
        ]
    }
];

export const FOOTER_LINKS = {
    'Shop': [
      { name: 'Gaming PCs', view: 'selectBase' as const }, 
      { name: 'Workstations', view: 'selectBase' as const },
      { name: 'Racing Sims', view: 'racingSims' as const },
      { name: 'Flight Sims', view: 'flightSims' as const },
      { name: 'Build Your PC', view: 'selectBase' as const },
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