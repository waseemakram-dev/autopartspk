export interface Brand {
    id: string;
    name: string;
    origin: string;
    popularModels: string[];
    partsCount: number;
    logoUrl?: string;
    description: string;
}

export interface Category {
    id: string;
    name: string;
    urduName: string;
    icon: string;
    itemCount: number;
    description: string;
    subcategories: string[];
    image: string;
}

export interface Product {
    id: string;
    name: string;
    partNumber: string;
    brand: string;
    compatibleModels: string[];
    category: string;
    pricePKR: number;
    condition: '100% Genuine OEM' | 'Japanese Reconditioned' | 'High-Grade Aftermarket';
    inStock: boolean;
    image: string;
    hoverImage?: string;
    rating: number;
    reviewsCount: number;
    description: string;
}

export interface AreaServed {
    name: string;
    distance: string;
    deliveryTime: string;
    status: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    urduTitle: string;
    description: string;
    icon: string;
    badge: string;
}

export interface ShopInfo {
    name: string;
    tagline: string;
    city: string;
    address: string;
    landmark: string;
    phone: string;
    whatsapp: string;
    email: string;
    timings: string;
    days: string;
    mapCoordinates: {
        lat: number;
        lng: number;
    };
    googleMapsUrl: string;
}

export const shopInfo: ShopInfo = {
    name: process.env.NEXT_PUBLIC_SHOP_NAME || "Auto Parts & Accessories PK",
    tagline: "Bahawalpur's #1 Genuine Japanese & Pakistani Auto Spare Parts Store",
    city: process.env.NEXT_PUBLIC_SHOP_CITY || "Bahawalpur",
    address: process.env.NEXT_PUBLIC_SHOP_ADDRESS || "Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur",
    landmark: process.env.NEXT_PUBLIC_SHOP_ADDRESS || "Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+92 304 5759687",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923045759687",
    email: process.env.NEXT_PUBLIC_SHOP_EMAIL || "info@autopartsaccessories.pk",
    timings: process.env.NEXT_PUBLIC_STORE_TIMINGS || "9:00 AM - 9:30 PM",
    days: process.env.NEXT_PUBLIC_STORE_DAYS || "Monday to Saturday (Friday 2:30 PM onwards)",
    mapCoordinates: {
        lat: 29.3957,
        lng: 71.6833
    },
    googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.google.com/?q=29.3957,71.6833"
};

export const carBrands: Brand[] = [
    {
        id: 'toyota',
        name: 'Toyota',
        origin: 'Japan',
        popularModels: ['Corolla Altis / Grande', 'Yaris', 'Hilux Revo / Vigo', 'Fortuner', 'Prius / Aqua', 'Vitz'],
        partsCount: 1450,
        description: 'OEM Brake Pads, Suspension Bushings, Spark Plugs, Filters & Body Kits'
    },
    {
        id: 'honda',
        name: 'Honda',
        origin: 'Japan',
        popularModels: ['Civic (Reborn, Oriel, RS Turbo)', 'City (i-DSI, Aspire)', 'BR-V', 'Vezel', 'Grace'],
        partsCount: 1120,
        description: 'Genuine Engine Mounts, Shock Absorbers, Disc Rotors & Steering Racks'
    },
    {
        id: 'suzuki',
        name: 'Suzuki',
        origin: 'Pakistan / Japan',
        popularModels: ['Alto 660cc', 'Cultus (Old & New)', 'Wagon R', 'Swift', 'Mehran', 'Every', 'Bolan'],
        partsCount: 1800,
        description: 'Clutch Plates, Pressure Plates, Radiators, Bearings & Suspension Arms'
    },
    {
        id: 'hyundai',
        name: 'Hyundai',
        origin: 'Korea',
        popularModels: ['Tucson', 'Elantra', 'Sonata', 'Porter H-100', 'Santro'],
        partsCount: 620,
        description: 'OEM Sensor Kits, Brake Calipers, Belts, and Engine Components'
    },
    {
        id: 'kia',
        name: 'KIA',
        origin: 'Korea',
        popularModels: ['Sportage Alpha/FWD/AWD', 'Picanto', 'Stonic', 'Carnival', 'Sorento'],
        partsCount: 540,
        description: 'Brake pads, AC Compressors, Oil Filters, and Spark Plugs'
    },
    {
        id: 'daihatsu',
        name: 'Daihatsu',
        origin: 'Japan',
        popularModels: ['Mira', 'Move', 'Cast', 'Hijet', 'Cuore'],
        partsCount: 890,
        description: 'Japanese Kei Car Genuine Suspension, Hub Bearings & Sensors'
    },
    {
        id: 'changan',
        name: 'Changan',
        origin: 'China',
        popularModels: ['Alsvin', 'Karvaan', 'Oshan X7', 'M9 Pickup'],
        partsCount: 410,
        description: 'Engine gaskets, Clutch sets, brake shoes & body panels'
    }
];

export const partCategories: Category[] = [
    {
        id: 'brakes',
        name: 'Brakes & Hubs',
        urduName: 'بریک پیڈز اور روٹرز',
        icon: 'Disc',
        itemCount: 420,
        description: 'Ceramic Brake Pads, Disc Rotors, Brake Calipers, Wheel Cylinders & Brake Oil',
        subcategories: ['Ceramic Brake Pads', 'Front/Rear Disc Rotors', 'Brake Master Cylinder', 'ABS Sensors', 'Brake Fluid DOT4'],
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'suspension',
        name: 'Suspension & Steering',
        urduName: 'شاکس اور سسپنشن',
        icon: 'Activity',
        itemCount: 560,
        description: 'Gas Shocks, Strut Mounts, Ball Joints, Tie Rod Ends, Control Arms & Bushing Kits',
        subcategories: ['Front Shock Absorbers', 'Rear Shocks', 'Lower Control Arms', 'Tie Rod Ends', 'Complete Bushing Sets'],
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'engine',
        name: 'Engine & Belts',
        urduName: 'انجن اور ٹرانسمیشن سپیئرز',
        icon: 'Cpu',
        itemCount: 780,
        description: 'Iridium Spark Plugs, Timing Belts, Fan Belts, Engine Mountings, Gaskets & Water Pumps',
        subcategories: ['Iridium Spark Plugs', 'Serpentine & Fan Belts', 'Hydraulic Engine Mounts', 'Head Gaskets', 'Ignition Coils'],
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'filters',
        name: 'Filters & Lubricants',
        urduName: 'آئل، ایئر اور کیبن فلٹرز',
        icon: 'Filter',
        itemCount: 340,
        description: 'Engine Oil Filters, AC Cabin Filters, High-Flow Air Filters & Fuel Filters',
        subcategories: ['OEM Oil Filters', 'High Filtration Air Filters', 'Charcoal Cabin Filters', 'Fuel Strainers', 'Transmission Oil'],
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'body-lights',
        name: 'Lighting & Body Parts',
        urduName: 'لائٹس، بمپرز اور باڈی پارٹس',
        icon: 'Lightbulb',
        itemCount: 490,
        description: 'LED Headlights, Tail Lamps, Fog Lamps, Retractable Mirrors, Bumpers & Grills',
        subcategories: ['Projector Headlights', 'LED Tail Lamps', 'Power Side Mirrors', 'Front Bumpers', 'Radiator Grilles'],
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'clutch-transmission',
        name: 'Clutch & Gearbox',
        urduName: 'کلچ پلیٹ اور گیئر باکس',
        icon: 'Settings',
        itemCount: 310,
        description: 'Aisin / Exedy Clutch Plates, Pressure Plates, Release Bearings & Gear Cables',
        subcategories: ['Aisin Clutch Sets', 'Pressure Plates', 'Clutch Release Bearings', 'Flywheels', 'CV Axles / Drive Shafts'],
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop'
    }
];

export const allProducts: Product[] = [
    {
        id: 'prod-01',
        name: 'Akebono Ceramic Front Brake Pads',
        partNumber: 'AN-634WK',
        brand: 'Toyota',
        compatibleModels: ['Corolla GLi / Altis 2008-2023', 'Yaris 1.3/1.5', 'Prius 1.8'],
        category: 'brakes',
        pricePKR: 6850,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=500&auto=format&fit=crop',
        hoverImage: 'https://laravel-servixa.mnsithub.com/assets/images/shop/shop-product-1-2.jpg',
        rating: 4.9,
        reviewsCount: 38,
        description: 'Zero noise, ultra-low brake dust Japanese ceramic compound for supreme braking grip.'
    },
    {
        id: 'prod-02',
        name: 'KYB Excel-G Gas Front Shock Absorbers (Pair)',
        partNumber: '333338-KYB',
        brand: 'Honda',
        compatibleModels: ['Civic Rebirth / Oriel 2012-2016', 'Civic Reborn 2006-2012'],
        category: 'suspension',
        pricePKR: 19500,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=500&auto=format&fit=crop',
        hoverImage: 'https://laravel-servixa.mnsithub.com/assets/images/shop/shop-product-1-1.jpg',
        rating: 5.0,
        reviewsCount: 29,
        description: 'Original Japanese twin-tube gas shocks providing factory ride comfort and road control.'
    },
    {
        id: 'prod-03',
        name: 'NGK Laser Iridium Spark Plugs (Set of 4)',
        partNumber: 'ILZKR7B-11',
        brand: 'Suzuki',
        compatibleModels: ['Alto 660cc (2019-2024)', 'Wagon R VXL', 'Cultus K10B', 'Swift 1.2'],
        category: 'engine',
        pricePKR: 8200,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=500&auto=format&fit=crop',
        hoverImage: 'https://laravel-servixa.mnsithub.com/assets/images/shop/shop-product-1-2.jpg',
        rating: 4.9,
        reviewsCount: 52,
        description: 'High fuel efficiency, instant winter ignition, 100,000 km ultra-long spark life.'
    },
    {
        id: 'prod-04',
        name: 'Aisin Genuine Japanese Clutch & Pressure Plate Kit',
        partNumber: 'KS-024A',
        brand: 'Suzuki',
        compatibleModels: ['Mehran Euro II', 'Bolan Carry Dabba', 'Ravi Pickup'],
        category: 'clutch-transmission',
        pricePKR: 7400,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=500&auto=format&fit=crop',
        hoverImage: 'https://laravel-servixa.mnsithub.com/assets/images/shop/shop-product-1-1.jpg',
        rating: 4.8,
        reviewsCount: 44,
        description: 'Feather-light pedal feel, zero vibration pick up, authentic Aisin Japan engraving.'
    },
    {
        id: 'prod-05',
        name: 'Genuine Denso Air Filter + Carbon Cabin AC Filter',
        partNumber: '17801-21050',
        brand: 'Toyota',
        compatibleModels: ['Corolla Altis Grande 1.8', 'Yaris ATIV X', 'Aqua Hybrid'],
        category: 'filters',
        pricePKR: 3200,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500&auto=format&fit=crop',
        hoverImage: 'https://laravel-servixa.mnsithub.com/assets/images/shop/shop-product-1-2.jpg',
        rating: 4.9,
        reviewsCount: 22,
        description: 'Maximum dust capture in South Punjab dusty climate, protects engine throttle body.'
    },
    {
        id: 'prod-06',
        name: 'RAYS Volk TE37 Style 15" Lightweight Alloy Wheels',
        partNumber: 'TE37-15-4X100',
        brand: 'Toyota',
        compatibleModels: ['Corolla', 'Yaris', 'Civic', 'City', 'Swift'],
        category: 'body-lights',
        pricePKR: 48500,
        condition: 'High-Grade Aftermarket',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=500&auto=format&fit=crop',
        hoverImage: 'https://laravel-servixa.mnsithub.com/assets/images/shop/shop-product-1-1.jpg',
        rating: 5.0,
        reviewsCount: 17,
        description: 'Motorsport racing bronze finish, aggressive stance, PCD 4x100/114.3 dual fitment.'
    },
    {
        id: 'prod-07',
        name: 'Brembo Front Brake Disc Rotors (Pair)',
        partNumber: '09.A868.10',
        brand: 'Honda',
        compatibleModels: ['Civic Turbo RS 2016-2021', 'Civic Oriel 1.8', 'Vezel Hybrid'],
        category: 'brakes',
        pricePKR: 16500,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=500&auto=format&fit=crop',
        rating: 4.9,
        reviewsCount: 31,
        description: 'High-carbon ventilated steel disc rotors for maximum heat dissipation and fade resistance.'
    },
    {
        id: 'prod-08',
        name: 'Genuine Suzuki Alto Lower Control Arm Assembly (Pair)',
        partNumber: '45200-74P00',
        brand: 'Suzuki',
        compatibleModels: ['Alto 660cc 2019-2024', 'Wagon R VXR/VXL'],
        category: 'suspension',
        pricePKR: 9800,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=500&auto=format&fit=crop',
        rating: 4.7,
        reviewsCount: 19,
        description: 'Pre-bushed steel control arm assembly with heavy-duty ball joint for smooth steering alignment.'
    },
    {
        id: 'prod-09',
        name: 'Denso Genuine Ignition Coil Pack (Set of 4)',
        partNumber: '90919-02258',
        brand: 'Toyota',
        compatibleModels: ['Corolla Altis 1.6/1.8', 'Fortuner 2.7', 'Hilux Revo 2.7'],
        category: 'engine',
        pricePKR: 18400,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=500&auto=format&fit=crop',
        rating: 4.9,
        reviewsCount: 41,
        description: 'High voltage output ignition coils eliminating cylinder misfires and optimizing fuel economy.'
    },
    {
        id: 'prod-10',
        name: 'Genuine Honda CVT Fluid HCF-2 (4 Liters)',
        partNumber: '08269-99904',
        brand: 'Honda',
        compatibleModels: ['Civic X CVT', 'City 1.2/1.5 CVT', 'BR-V CVT', 'Grace Hybrid'],
        category: 'filters',
        pricePKR: 12500,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500&auto=format&fit=crop',
        rating: 5.0,
        reviewsCount: 64,
        description: 'Official Honda Japan transmission fluid formulated for ultra-smooth gear shifts and CVT protection.'
    },
    {
        id: 'prod-11',
        name: 'HYUNDAI Genuine Tucson Ceramic Brake Pads Set',
        partNumber: '58101-D3A00',
        brand: 'Hyundai',
        compatibleModels: ['Tucson FWD/AWD 2020-2024', 'Elantra 1.6/2.0'],
        category: 'brakes',
        pricePKR: 8900,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=500&auto=format&fit=crop',
        rating: 4.8,
        reviewsCount: 15,
        description: 'Factory original Hyundai Mobis ceramic brake pads with shims for silent high-speed stopping.'
    },
    {
        id: 'prod-12',
        name: 'KIA Sportage OEM Front Strut Mount & Bearing (Pair)',
        partNumber: '54610-D3000',
        brand: 'KIA',
        compatibleModels: ['Sportage Alpha/FWD/AWD 2019-2024', 'Picanto 1.0'],
        category: 'suspension',
        pricePKR: 11200,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=500&auto=format&fit=crop',
        rating: 4.9,
        reviewsCount: 23,
        description: 'Mobis Korea heavy duty strut mount dampeners eliminating suspension thumping sounds.'
    },
    {
        id: 'prod-13',
        name: 'Daihatsu Mira / Move Japanese Shock Absorbers Set',
        partNumber: '48510-B2C10',
        brand: 'Daihatsu',
        compatibleModels: ['Mira ES 660cc', 'Move Custom', 'Cast Activa', 'Hijet Truck'],
        category: 'suspension',
        pricePKR: 17800,
        condition: 'Japanese Reconditioned',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=500&auto=format&fit=crop',
        rating: 4.7,
        reviewsCount: 36,
        description: 'Inspected low-mileage original Japanese shocks imported directly for Kei cars.'
    },
    {
        id: 'prod-14',
        name: 'Changan Alsvin Engine Timing Belt & Tensioner Kit',
        partNumber: 'AL-104921',
        brand: 'Changan',
        compatibleModels: ['Alsvin 1.3/1.5', 'Karvaan MPV 1.0', 'M9 Pickup'],
        category: 'engine',
        pricePKR: 6400,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=500&auto=format&fit=crop',
        rating: 4.8,
        reviewsCount: 14,
        description: 'Heavy duty HNBR timing belt kit with sealed German tensioner bearing.'
    },
    {
        id: 'prod-15',
        name: 'Toyota Corolla Altis Grande Projector LED Headlight (Pair)',
        partNumber: '81110-02R20',
        brand: 'Toyota',
        compatibleModels: ['Corolla Altis Grande 2017-2024'],
        category: 'body-lights',
        pricePKR: 38500,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=500&auto=format&fit=crop',
        rating: 5.0,
        reviewsCount: 28,
        description: 'Original Koito Japan LED DRL projector headlight assemblies with crisp beam cutoff.'
    },
    {
        id: 'prod-16',
        name: 'Exedy Heavy Duty Clutch Plate & Cover Assembly',
        partNumber: 'HDC-509-EX',
        brand: 'Honda',
        compatibleModels: ['Civic EXi / VTi 2001-2006 (Eagle Eye)', 'City 1.3/1.5 Manual'],
        category: 'clutch-transmission',
        pricePKR: 14500,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=500&auto=format&fit=crop',
        rating: 4.9,
        reviewsCount: 40,
        description: 'Exedy Daikin Japan organic friction material for maximum torque transfer without slipping.'
    },
    {
        id: 'prod-17',
        name: 'Mobil 1 Extended Performance 5W-30 Fully Synthetic Oil (4L)',
        partNumber: 'MOB-5W30-EP',
        brand: 'Toyota',
        compatibleModels: ['All Toyota', 'All Honda', 'All Suzuki', 'All Hyundai/KIA'],
        category: 'filters',
        pricePKR: 11800,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500&auto=format&fit=crop',
        rating: 5.0,
        reviewsCount: 88,
        description: '15,000 km oil drain interval formula protecting engine against extreme summer temperatures.'
    },
    {
        id: 'prod-18',
        name: 'Suzuki Cultus K10B Water Pump Assembly',
        partNumber: '17400-67LV0',
        brand: 'Suzuki',
        compatibleModels: ['Cultus New Shape 2017-2024', 'Wagon R 1.0'],
        category: 'engine',
        pricePKR: 5400,
        condition: '100% Genuine OEM',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=500&auto=format&fit=crop',
        rating: 4.8,
        reviewsCount: 16,
        description: 'Cast aluminum coolant water pump with ceramic shaft seal preventing overheating.'
    }
];

export const featuredProducts: Product[] = allProducts.slice(0, 6);

export const areasServed: AreaServed[] = [
    {
        name: "Bahawalpur City & Model Town",
        distance: "0 - 5 km",
        deliveryTime: "30-45 mins (Instant Counter / Rider)",
        status: "Free Rider Pickup Available"
    },
    {
        name: "Satellite Town & One Unit Chowk",
        distance: "3 - 8 km",
        deliveryTime: "Within 1 Hour",
        status: "Express Local Delivery"
    },
    {
        name: "Ahmedpur East & Uch Sharif",
        distance: "45 km",
        deliveryTime: "Same Day (2-3 Hours via AC Van Service)",
        status: "Daily Cargo Dispatch"
    },
    {
        name: "Yazman & Channigoth",
        distance: "32 km",
        deliveryTime: "Same Day Dispatch",
        status: "Daily Bus Cargo Delivery"
    },
    {
        name: "Lodhran & Dunyapur",
        distance: "18 km",
        deliveryTime: "Same Day (1-2 Hours)",
        status: "Direct Courier / Van Link"
    },
    {
        name: "Hasilpur & Khairpur Tamewali",
        distance: "60 km",
        deliveryTime: "Same Day Delivery",
        status: "Cargo Service Dispatch"
    }
];

export const servicesList: ServiceItem[] = [
    {
        id: 'snap-send',
        title: 'Snap & Send Part Finder',
        urduTitle: 'Photo Part Finder',
        description: 'Don’t know the exact part number? Just take a photo and send it via WhatsApp. Get prices and availability in under 5 minutes.',
        icon: 'Camera',
        badge: 'Popular #1'
    },
    {
        id: 'genuine-guarantee',
        title: '100% Genuine Parts Guarantee',
        urduTitle: '100% Genuine Guarantee',
        description: 'Zero counterfeit or duplicate copies. Every part comes with authentic OEM barcodes and manufacturer packaging for verification.',
        icon: 'ShieldCheck',
        badge: 'Trust Verified'
    },
    {
        id: 'counter-pickup',
        title: 'Instant Bahawalpur Counter Pickup',
        urduTitle: 'Instant Counter Pickup',
        description: 'Visit our Ayyoub Chowk counter near Cheeka Wala Chowk to inspect parts in person and purchase at wholesale rates with instant handover.',
        icon: 'Store',
        badge: 'Walk-in'
    },
    {
        id: 'mechanic-guidance',
        title: 'Free Compatibility & Mechanic Guidance',
        urduTitle: 'Compatibility Guidance',
        description: 'Share your vehicle chassis or VIN number to verify exact part fitment and avoid mechanical sizing mismatches.',
        icon: 'Wrench',
        badge: 'Expert Advice'
    }
];

export const faqsData = [
    {
        q: "Do you supply 100% genuine Japanese and OEM parts?",
        a: "Yes, absolutely! Auto Parts & Accessories PK Bahawalpur exclusively supplies authentic OEM and genuine Japanese brands (Toyota Genuine, Honda Genuine, Suzuki Genuine, Denso, Aisin, KYB, Akebono, NGK). Every part carries verifiable barcodes and authentic manufacturer stamping."
    },
    {
        q: "I don't know the part name or code. How can I place an order?",
        a: `It's simple! Take 2 clear photos of your old or damaged part with your phone and send them to our WhatsApp helpline (${shopInfo.phone}). Our auto specialists will immediately identify the part and provide instant pricing and stock status.`
    },
    {
        q: "Do you offer delivery outside Bahawalpur to Ahmedpur East, Yazman, or Lodhran?",
        a: "Yes! Within Bahawalpur city, we offer fast rider delivery in 30-45 minutes. For Ahmedpur East, Yazman, Lodhran, Hasilpur, and Khanpur, we operate daily morning and afternoon cargo dispatches for same-day delivery."
    },
    {
        q: "What are your store hours and physical location?",
        a: "Our physical store is located at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur. We are open Monday through Saturday from 9:00 AM to 9:30 PM."
    },
    {
        q: "What is your exchange policy if a part does not fit?",
        a: "If the item is unused and remains in its original packaging, you can easily exchange it within 7 days by visiting our counter or via courier delivery."
    }
];
