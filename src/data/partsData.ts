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
        id: 'lighting',
        name: 'LED Headlights & Bulbs',
        urduName: 'ایل ای ڈی ہیڈلائٹس اور کٹس',
        icon: 'Lightbulb',
        itemCount: 450,
        description: 'Conpex 9005, H7 55W CANBUS & Turbo CSP High-Power LED Conversion Kits',
        subcategories: ['Conpex 9005 HB3', 'H7 55W CANBUS', 'Turbo CSP LED', '6500K Diamond White'],
        image: '/products/conpex-9005-led-headlight-kit.jpg'
    },
    {
        id: 'horns-audio',
        name: 'Horns, Speakers & Sound',
        urduName: 'ہارنز اور کار اسپیکرز',
        icon: 'Cpu',
        itemCount: 280,
        description: 'Maxxis Dual Snail Fanfare Horns & Pioneer TS-6975 V2 500W Oval Speakers',
        subcategories: ['Maxxis Snail Horn 12V', 'Pioneer 6x9 TS-6975 V2', '500W Max Audio', 'Waterproof Horns'],
        image: '/products/pioneer-ts-6975-v2-speakers.jpg'
    },
    {
        id: 'car-care',
        name: 'Car Care, Polish & Fluids',
        urduName: 'کار کیئر، ویکس اور ٹائر سیلنٹ',
        icon: 'Filter',
        itemCount: 390,
        description: 'Kangaroo Cosmic Strawberry/Lemon Leather & Tire Wax, Emergency Puncture Inflators',
        subcategories: ['Strawberry Wax 450ml', 'Lemon Wax 450ml', 'Emergency Tire Inflator', 'UV Dashboard Polish'],
        image: '/products/kangaroo-leather-tire-wax-strawberry.jpg'
    },
    {
        id: 'wheels-styling',
        name: 'Wheel Covers & Exterior',
        urduName: 'وہیل کورز اور باڈی سٹائلنگ',
        icon: 'Disc',
        itemCount: 220,
        description: 'BTC 16" Virgin ABS Metallic Silver Hubcaps & Rim Protection Sets',
        subcategories: ['16 Inch Wheel Covers', 'Virgin ABS Plastic', 'Airflow 5-Spoke Design', 'Snap-on Ring'],
        image: '/products/btc-wheel-cover-16.jpg'
    }
];

export const allProducts: Product[] = [
    {
        id: 'prod-01',
        name: 'Conpex 9005 (HB3) High-Output LED Headlight Conversion Kit',
        partNumber: 'CPX-9005-HB3',
        brand: 'Toyota',
        compatibleModels: ['Corolla Altis / Grande', 'Hilux Revo / Rocco', 'Fortuner', 'Civic X', 'Land Cruiser'],
        category: 'lighting',
        pricePKR: 9200,
        condition: '100% Genuine OEM',
        inStock: true,
        image: '/products/conpex-9005-led-headlight-kit.jpg',
        hoverImage: '/products/conpex-9005-led-headlight-kit.jpg',
        rating: 5.0,
        reviewsCount: 48,
        description: 'Official Conpex 9005/HB3 6500K diamond white LED conversion kit in protective hardcase with integrated Canbus decoders and high-speed silent cooling turbine.'
    },
    {
        id: 'prod-02',
        name: 'H7 55W CANBUS Ultra-Bright LED Headlight Kit (+100% Brightness)',
        partNumber: 'H7-55W-CANBUS-X',
        brand: 'Honda',
        compatibleModels: ['Civic Rebirth / Reborn', 'City Aspire', 'Sportage', 'Tucson', 'Elantra'],
        category: 'lighting',
        pricePKR: 7800,
        condition: 'High-Grade Aftermarket',
        inStock: true,
        image: '/products/h7-canbus-led-headlight-kit.jpg',
        hoverImage: '/products/h7-canbus-led-headlight-kit.jpg',
        rating: 4.9,
        reviewsCount: 36,
        description: 'H7 socket 55W per bulb CANBUS error-free LED headlight kit packed in rugged travel case. Dual copper heat pipes for +100% concentrated night road beam.'
    },
    {
        id: 'prod-03',
        name: 'Maxxis MR-80-002 Dual Snail Fanfare Electric Horn (12V Set)',
        partNumber: 'MR-80-002',
        brand: 'Suzuki',
        compatibleModels: ['Alto 660cc', 'Cultus VXL', 'Wagon R', 'Swift', 'Corolla', 'Civic', 'Mehran'],
        category: 'horns-audio',
        pricePKR: 2850,
        condition: 'High-Grade Aftermarket',
        inStock: true,
        image: '/products/maxxis-snail-horn.jpg',
        hoverImage: '/products/maxxis-snail-horn.jpg',
        rating: 4.9,
        reviewsCount: 64,
        description: 'Dual-tone fanfare electric snail horn set (400Hz low / 500Hz high tone). European style deep penetrating sound with waterproof acoustic housing.'
    },
    {
        id: 'prod-04',
        name: 'Pioneer TS-6975 V2 3-Way Oval Car Speakers (6"x9", 500W MAX)',
        partNumber: 'TS-6975-V2',
        brand: 'Toyota',
        compatibleModels: ['Corolla Altis / GLi', 'Civic / City', 'Cultus / Swift', 'Yaris', 'Universal Parcel Tray'],
        category: 'horns-audio',
        pricePKR: 8500,
        condition: 'High-Grade Aftermarket',
        inStock: true,
        image: '/products/pioneer-ts-6975-v2-speakers.jpg',
        hoverImage: '/products/pioneer-ts-6975-v2-speakers.jpg',
        rating: 5.0,
        reviewsCount: 92,
        description: 'Iconic 6x9 inch 3-way coaxial speakers delivering 500W peak power with titanium dome tweeters, heat-resistant voice coil, and heavy bass punch.'
    },
    {
        id: 'prod-05',
        name: 'BTC 16" ABS Heavy-Duty Silver Wheel Covers / Hubcaps (Set of 4)',
        partNumber: 'BTC-WC-16-SLV',
        brand: 'Toyota',
        compatibleModels: ['Corolla GLi / Altis (16")', 'Yaris ATIV', 'Civic 16" Steel Rims', 'City Aspire', 'Elantra'],
        category: 'wheels-styling',
        pricePKR: 4800,
        condition: 'High-Grade Aftermarket',
        inStock: true,
        image: '/products/btc-wheel-cover-16.jpg',
        hoverImage: '/products/btc-wheel-cover-16.jpg',
        rating: 4.8,
        reviewsCount: 27,
        description: 'Premium 16-inch high-impact virgin ABS wheel covers with 5-spoke airflow styling and heavy-duty snap-on retention ring. Rust and crack proof.'
    },
    {
        id: 'prod-06',
        name: 'Turbo High-Power LED Headlight Conversion Kit with External Canbus (Pair)',
        partNumber: 'TLED-CSP-CANBUS',
        brand: 'Honda',
        compatibleModels: ['Civic X / Reborn', 'City Aspire', 'BR-V', 'Corolla GLi / Altis', 'Swift 1.2'],
        category: 'lighting',
        pricePKR: 6500,
        condition: 'High-Grade Aftermarket',
        inStock: true,
        image: '/products/led-headlight-canbus-kit.jpg',
        hoverImage: '/products/led-headlight-canbus-kit.jpg',
        rating: 4.8,
        reviewsCount: 31,
        description: 'High-output CSP multi-core LED headlight kit in custom shockproof foam packaging. Includes external Canbus filter modules and aviation aluminum cooling heatsink.'
    },
    {
        id: 'prod-07',
        name: 'Kangaroo COSMIC Leather & Tire Wax - Sweet Strawberry (450ml)',
        partNumber: 'KG-WAX-STR450',
        brand: 'Suzuki',
        compatibleModels: ['Alto', 'Cultus', 'Wagon R', 'Corolla', 'Civic', 'All Cars & Bikes'],
        category: 'car-care',
        pricePKR: 950,
        condition: '100% Genuine OEM',
        inStock: true,
        image: '/products/kangaroo-leather-tire-wax-strawberry.jpg',
        hoverImage: '/products/kangaroo-leather-tire-wax-strawberry.jpg',
        rating: 4.9,
        reviewsCount: 78,
        description: 'Premium aerosol spray wax with sweet strawberry fragrance. Cleans, shines, and forms UV protective coating on car dashboards, leather seats, and tire walls.'
    },
    {
        id: 'prod-08',
        name: 'Kangaroo Brand Emergency Tire Sealant & Inflator Spray (450ml)',
        partNumber: 'KG-SEAL-450',
        brand: 'Toyota',
        compatibleModels: ['All Tubeless Tires', 'Corolla', 'Civic', 'Alto', 'Swift', 'SUVs & Keicars'],
        category: 'car-care',
        pricePKR: 1250,
        condition: '100% Genuine OEM',
        inStock: true,
        image: '/products/kangaroo-tire-sealant-inflator.jpg',
        hoverImage: '/products/kangaroo-tire-sealant-inflator.jpg',
        rating: 5.0,
        reviewsCount: 53,
        description: 'Instant roadside puncture repair and tire inflation in 60 seconds without removing the wheel or jack. Seals tread punctures up to 6mm.'
    },
    {
        id: 'prod-09',
        name: 'Kangaroo COSMIC Leather & Tire Wax - Fresh Lemon (450ml)',
        partNumber: 'KG-WAX-LMN450',
        brand: 'Honda',
        compatibleModels: ['Civic', 'City', 'BR-V', 'Corolla', 'Alto', 'All Vehicle Interiors & Tires'],
        category: 'car-care',
        pricePKR: 950,
        condition: '100% Genuine OEM',
        inStock: true,
        image: '/products/kangaroo-leather-tire-wax-lemon.jpg',
        hoverImage: '/products/kangaroo-leather-tire-wax-lemon.jpg',
        rating: 4.9,
        reviewsCount: 62,
        description: 'Antistatic interior & exterior detailing wax with crisp fresh lemon scent. Restores original showroom deep luster on vinyl, plastic trims, and rubber tires.'
    }
];

export const featuredProducts: Product[] = allProducts;

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
