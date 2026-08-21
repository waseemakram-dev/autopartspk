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
    name: "Auto Parts & Accessories PK",
    tagline: "Bahawalpur's #1 Genuine Japanese & Pakistani Auto Spare Parts Store",
    city: "Bahawalpur",
    address: "Shop #4-5, Auto Market, Near Dubai Chowk, Model Town",
    landmark: "Near Dubai Chowk, Model Town Bahawalpur",
    phone: "+92 300 8687890",
    whatsapp: "923008687890",
    email: "info@autopartsaccessories.pk",
    timings: "9:00 AM - 9:30 PM",
    days: "Monday to Saturday (Friday 2:30 PM onwards)",
    mapCoordinates: {
        lat: 29.3957,
        lng: 71.6833
    },
    googleMapsUrl: "https://maps.google.com/?q=29.3957,71.6833"
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
        image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'suspension',
        name: 'Suspension & Steering',
        urduName: 'شاکس اور سسپنشن',
        icon: 'Activity',
        itemCount: 560,
        description: 'Gas Shocks, Strut Mounts, Ball Joints, Tie Rod Ends, Control Arms & Bushing Kits',
        subcategories: ['Front Shock Absorbers', 'Rear Shocks', 'Lower Control Arms', 'Tie Rod Ends', 'Complete Bushing Sets'],
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'engine',
        name: 'Engine & Belts',
        urduName: 'انجن اور ٹرانسمیشن سپیئرز',
        icon: 'Cpu',
        itemCount: 780,
        description: 'Iridium Spark Plugs, Timing Belts, Fan Belts, Engine Mountings, Gaskets & Water Pumps',
        subcategories: ['Iridium Spark Plugs', 'Serpentine & Fan Belts', 'Hydraulic Engine Mounts', 'Head Gaskets', 'Ignition Coils'],
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'filters',
        name: 'Filters & Lubricants',
        urduName: 'آئل، ایئر اور کیبن فلٹرز',
        icon: 'Filter',
        itemCount: 340,
        description: 'Engine Oil Filters, AC Cabin Filters, High-Flow Air Filters & Fuel Filters',
        subcategories: ['OEM Oil Filters', 'High Filtration Air Filters', 'Charcoal Cabin Filters', 'Fuel Strainers', 'Transmission Oil'],
        image: 'https://images.unsplash.com/photo-1635773054018-22c388422857?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'body-lights',
        name: 'Lighting & Body Parts',
        urduName: 'لائٹس، بمپرز اور باڈی پارٹس',
        icon: 'Lightbulb',
        itemCount: 490,
        description: 'LED Headlights, Tail Lamps, Fog Lamps, Retractable Mirrors, Bumpers & Grills',
        subcategories: ['Projector Headlights', 'LED Tail Lamps', 'Power Side Mirrors', 'Front Bumpers', 'Radiator Grilles'],
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'clutch-transmission',
        name: 'Clutch & Gearbox',
        urduName: 'کلچ پلیٹ اور گیئر باکس',
        icon: 'Settings',
        itemCount: 310,
        description: 'Aisin / Exedy Clutch Plates, Pressure Plates, Release Bearings & Gear Cables',
        subcategories: ['Aisin Clutch Sets', 'Pressure Plates', 'Clutch Release Bearings', 'Flywheels', 'CV Axles / Drive Shafts'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop'
    }
];

export const featuredProducts: Product[] = [
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
        image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?q=80&w=500&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=500&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=500&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1635773054018-22c388422857?q=80&w=500&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=500&auto=format&fit=crop',
        rating: 5.0,
        reviewsCount: 17,
        description: 'Motorsport racing bronze finish, aggressive stance, PCD 4x100/114.3 dual fitment.'
    }
];

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
        name: "Ahmedpur East (احمد پور شرقیہ)",
        distance: "45 km",
        deliveryTime: "Same Day (2-3 Hours via AC Van Service)",
        status: "Daily Cargo Dispatch"
    },
    {
        name: "Yazman & Channigoth (یزمان)",
        distance: "32 km",
        deliveryTime: "Same Day Dispatch",
        status: "Daily Bus Cargo Delivery"
    },
    {
        name: "Lodhran & Dunyapur (لودھراں)",
        distance: "18 km",
        deliveryTime: "Same Day (1-2 Hours)",
        status: "Direct Courier / Van Link"
    },
    {
        name: "Hasilpur & Khairpur Tamewali (حاصل پور)",
        distance: "60 km",
        deliveryTime: "Same Day Delivery",
        status: "Cargo Service Dispatch"
    }
];

export const servicesList: ServiceItem[] = [
    {
        id: 'snap-send',
        title: 'Snap & Send Part Finder',
        urduTitle: 'پارٹ کی تصویر بھیجیں',
        description: 'Part ka exact number nahi pata? Just picture kheenchain aur WhatsApp karein. 5 minutes mein rate aur availability payen.',
        icon: 'Camera',
        badge: 'Popular #1'
    },
    {
        id: 'genuine-guarantee',
        title: '100% Genuine Parts Guarantee',
        urduTitle: 'اصلی جاپانی پارٹس کی گارنٹی',
        description: 'Zero counterfeit or duplicate copies. Har part OEM barcode aur authentic packaging ke sath verification ke qabil hai.',
        icon: 'ShieldCheck',
        badge: 'Trust Verified'
    },
    {
        id: 'counter-pickup',
        title: 'Instant Bahawalpur Counter Pickup',
        urduTitle: 'دکان سے فوری دستیابی',
        description: 'Dubai Chowk Model Town counter par aakar khud check karein aur discount wholesale rates par hand-to-hand le jayen.',
        icon: 'Store',
        badge: 'Walk-in'
    },
    {
        id: 'mechanic-guidance',
        title: 'Free Compatibility & Mechanic Guidance',
        urduTitle: 'فری ماڈل اور فٹنگ رہنمائی',
        description: 'Chassis number ya car model bata kar exact matching part confirm karein taake mechanic ke paas ja kar fitting ka masla na bane.',
        icon: 'Wrench',
        badge: 'Expert Advice'
    }
];

export const faqsData = [
    {
        q: "Kya aapke paas 100% genuine Japanese aur OEM parts hotay hain?",
        a: "Jee bilkul! Auto Parts & Accessories PK Bahawalpur sirf authentic OEM aur Japanese genuine brands (Toyota Genuine, Honda Genuine, Suzuki Genuine, Denso, Aisin, KYB, Akebono, NGK) supply karta hai. Har part par verification barcode aur authentic stamping hoti hai."
    },
    {
        q: "Mujhe part ka naam ya number nahi pata, main kaise order karoon?",
        a: "Yeh hamari sab se asaan service hai! Bas apne purane ya toote hue part ki 2 pictures mobile se kheenchain aur hamare WhatsApp (+92 300 8687890) par send karein. Hamare auto experts foran part identify karke aapko rate aur stock bata denge."
    },
    {
        q: "Bahawalpur ke ilawa kya Ahmedpur East, Yazman ya Lodhran mein delivery mil sakti hai?",
        a: "Jee haan! Bahawalpur city ke andar 30-45 minutes mein rider delivery hoti hai, jabke Ahmedpur East, Yazman, Lodhran, Hasilpur aur Khanpur ke liye daily morning aur afternoon cargo dispatch hoti hai jo same-day deliver ho jati hai."
    },
    {
        q: "Shop ki timing aur exact address kya hai?",
        a: "Hamari shop Model Town, Near Dubai Chowk, Bahawalpur par waqia hai. Shop timings subah 9:00 AM se raat 9:30 PM tak hain (Monday se Saturday)."
    },
    {
        q: "Agar part fit na aaye ya model match na ho toh kya exchange policy hai?",
        a: "Agar part un-used aur original packing mein ho, toh aap 7 din ke andar counter par aakar ya courier ke zariye easily exchange karwa sakte hain."
    }
];
