'use client';

import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    Search,
    ArrowLeft,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Wrench,
    CheckCircle2,
    Phone,
    MessageSquare,
    Store,
    Clock,
    Truck
} from 'lucide-react';
import { shopInfo } from '@/data/partsData';

export const Hero: React.FC = () => {
    // Dropdown filters state
    const [selectedYear, setSelectedYear] = useState('2022');
    const [selectedMake, setSelectedMake] = useState('Toyota');
    const [selectedModel, setSelectedModel] = useState('Corolla Altis');
    const [selectedCategory, setSelectedCategory] = useState('Brake Pads & Discs');

    // Category flyout state
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Brake Pads & Discs');

    // Trending parts carousel index
    const [trendingIndex, setTrendingIndex] = useState(0);

    // Featured part carousel index
    const [featuredIndex, setFeaturedIndex] = useState(0);

    // Main visual stage car switch index
    const [stageCarIndex, setStageCarIndex] = useState(0);

    // Real categories relevant to Bahawalpur auto parts store
    const categoriesList = [
        'Brake Pads & Discs',
        'Suspension & Shocks',
        'Engine Spares & Belts',
        'Filters & Lubricants',
        'Body & Lighting Parts'
    ];

    // Real Pakistani Market Everyday Cars for Main Visual Stage
    const stageCars = [
        {
            name: 'Toyota Corolla Altis Grande',
            tagline: '1.8L Dual VVT-i • Pakistan Top Selling Sedan',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
            detailImage: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?q=80&w=400&auto=format&fit=crop',
            stockCount: '145+ Parts in Stock'
        },
        {
            name: 'Suzuki Alto 660cc (2019-2024)',
            tagline: 'R06A Engine • Fast-Moving Spares Hub',
            image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
            detailImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=400&auto=format&fit=crop',
            stockCount: '210+ Parts in Stock'
        },
        {
            name: 'Honda Civic Oriel / RS Turbo',
            tagline: 'Reborn / Rebirth / Turbo X Genuine Spares',
            image: 'https://images.unsplash.com/photo-1590362891988-f7761b378b66?q=80&w=1200&auto=format&fit=crop',
            detailImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=400&auto=format&fit=crop',
            stockCount: '130+ Parts in Stock'
        }
    ];

    // Trending Local Searches / Common Parts in Bahawalpur
    const trendingParts = [
        {
            carModel: 'Corolla Altis / GLi',
            partName: 'Akebono Front Ceramic Brake Pads',
            brand: 'Toyota Genuine OEM',
            status: 'In Stock • Counter Pickup',
            image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?q=80&w=400&auto=format&fit=crop'
        },
        {
            carModel: 'Suzuki Alto 660cc / Cultus',
            partName: 'NGK Laser Iridium Spark Plugs (4pcs)',
            brand: 'Suzuki Genuine Japan',
            status: 'Fast Moving • Wholesale Rate',
            image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=400&auto=format&fit=crop'
        },
        {
            carModel: 'Honda Civic / City',
            partName: 'KYB Excel-G Gas Front Shocks (Pair)',
            brand: 'KYB Japan Certified',
            status: 'Ready in Bahawalpur',
            image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=400&auto=format&fit=crop'
        },
        {
            carModel: 'Suzuki Mehran / Bolan',
            partName: 'Aisin Japanese Clutch & Pressure Plate Kit',
            brand: 'Aisin OEM Japan',
            status: 'Same Day Dispatch',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop'
        }
    ];

    // Featured Realistically-Priced Local Parts with PKR Pricing
    const featuredParts = [
        {
            title: 'AKEBONO',
            code: 'AN-634WK',
            partName: 'Front Ceramic Brake Pads',
            fits: 'Fits: Corolla, Yaris, Prius',
            pricePKR: 'PKR 6,850',
            inquiryLabel: 'Inquire for Stock',
            image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?q=80&w=500&auto=format&fit=crop'
        },
        {
            title: 'KYB JAPAN',
            code: 'EXCEL-G',
            partName: 'Twin-Tube Gas Shock Absorbers',
            fits: 'Fits: Civic Reborn / Oriel',
            pricePKR: 'PKR 19,500',
            inquiryLabel: 'Inquire for Stock',
            image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=500&auto=format&fit=crop'
        },
        {
            title: 'NGK IRIDIUM',
            code: 'ILZKR7B',
            partName: 'Laser Spark Plugs (Set of 4)',
            fits: 'Fits: Alto 660cc, Cultus, Wagon R',
            pricePKR: 'PKR 8,200',
            inquiryLabel: 'Inquire for Stock',
            image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=500&auto=format&fit=crop'
        },
        {
            title: 'DENSO OEM',
            code: '17801-21050',
            partName: 'Engine Air + AC Cabin Filter',
            fits: 'Fits: Corolla Grande, Yaris ATIV',
            pricePKR: 'PKR 3,200',
            inquiryLabel: 'Inquire for Stock',
            image: 'https://images.unsplash.com/photo-1635773054018-22c388422857?q=80&w=500&auto=format&fit=crop'
        }
    ];

    const currentStageCar = stageCars[stageCarIndex];
    const currentTrending = trendingParts[trendingIndex];
    const currentFeatured = featuredParts[featuredIndex];

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const text = `Assalam o Alaikum! Mujhe ${selectedMake} ${selectedModel} (${selectedYear}) ke liye ${selectedCategory} spare parts chahiye. Bahawalpur store counter availability aur wholesale price bata dain.`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto py-4 px-2 sm:px-4">

            {/* OUTER STACK WRAPPER WITH LAYERED BACKDROP EFFECT */}
            <div className="relative w-full flex items-center justify-center">

                {/* LEFT BACKGROUND LAYER CARD (Peek Card for 3D Depth with Local Context) */}
                <div className="hidden 2xl:block absolute -left-12 top-10 w-72 bg-white/75 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-xl pointer-events-none -z-10 -rotate-2">
                    <div className="text-xs font-bold font-machina uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#e03627]" />
                        <span>Popular Brands</span>
                    </div>
                    <div className="space-y-2.5 mb-6 text-xs font-bold text-slate-700 font-machina">
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <span>TOYOTA</span>
                            <span className="text-[10px] text-emerald-600 font-normal">1,400+ parts</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <span>SUZUKI</span>
                            <span className="text-[10px] text-emerald-600 font-normal">1,800+ parts</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <span>HONDA</span>
                            <span className="text-[10px] text-emerald-600 font-normal">1,100+ parts</span>
                        </div>
                    </div>

                    <div className="text-xs font-bold font-machina uppercase tracking-wider text-slate-800 mb-2">
                        Fast Moving Part
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                        <span className="text-[10px] text-slate-400 font-machina">Alto 660cc Brake Pads</span>
                        <div className="text-xs font-bold text-slate-800 font-machina">Akebono Ceramic OEM</div>
                        <div className="text-xs font-bold text-emerald-600">PKR 4,500 (In Stock)</div>
                    </div>
                </div>

                {/* MAIN SHOWCASE CONTAINER: 65% LEFT (WHITE) / 35% RIGHT (ICE-GREY) */}
                <div className="w-full bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">

                    {/* ========================================================= */}
                    {/* LEFT CANVAS: 65% (8 COLS ON LG) - PURE HIGH-CONTRAST WHITE */}
                    {/* ========================================================= */}
                    <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative bg-white min-h-[640px]">

                        {/* Subtle decorative curved background thread SVG */}
                        <svg
                            className="absolute top-0 right-10 w-80 h-80 text-slate-200/60 pointer-events-none stroke-current fill-none stroke-[1.2]"
                            viewBox="0 0 300 300"
                        >
                            <path d="M 50 100 C 120 20, 220 50, 260 140 C 290 200, 230 280, 160 250 C 90 220, 120 120, 240 100" />
                        </svg>

                        {/* TOP TITLE & CIRCULAR BAHAWALPUR VERIFIED STAMP BADGE */}
                        <div>
                            <div className="flex items-start justify-between relative z-10">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-machina font-bold text-[#e03627] tracking-wider uppercase mb-2">
                                        <Store className="w-3.5 h-3.5" />
                                        <span>BAHAWALPUR AUTO SPARE PARTS STORE</span>
                                    </div>
                                    <h1 className="font-druk text-5xl sm:text-7xl lg:text-8xl uppercase tracking-[-0.03em] text-[#0f1115] leading-[0.88] font-black select-none">
                                        GENUINE PARTS<br />
                                        <span className="text-[#e03627]">SAME DAY</span>
                                    </h1>
                                </div>

                                {/* Circular Bahawalpur Verified Stock Stamp Badge */}
                                <div className="relative shrink-0 ml-2">
                                    {/* Inline CSS Keyframes injected directly into component DOM */}
                                    <style>{`
                                        @keyframes spinCircleText {
                                            0% { transform: rotate(0deg); }
                                            100% { transform: rotate(360deg); }
                                        }
                                        .rotate-circle-text {
                                            animation: spinCircleText 8s linear infinite !important;
                                            transform-origin: 50% 50% !important;
                                        }
                                    `}</style>

                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e03627] text-white flex items-center justify-center p-1.5 sm:p-2 text-center shadow-lg shadow-red-500/30 relative">
                                        {/* Spinning HTML Div Container for Circular SVG Text */}
                                        <div className="absolute inset-0 p-1.5 sm:p-2 rotate-circle-text">
                                            <svg viewBox="0 0 100 100" className="w-full h-full block">
                                                <path
                                                    id="circlePathLocal"
                                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                                    fill="none"
                                                />
                                                <text className="text-[9px] uppercase font-machina font-bold fill-white tracking-widest">
                                                    <textPath href="#circlePathLocal" startOffset="0%">
                                                        • Bahawalpur • Verified Stock •
                                                    </textPath>
                                                </text>
                                            </svg>
                                        </div>

                                        {/* Upright Center Text */}
                                        <div className="relative z-10 flex items-center justify-center font-machina font-black text-xs sm:text-sm uppercase tracking-tighter drop-shadow-sm pointer-events-none">
                                            100%
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SUBHEADLINE FOR TRUST & LOCAL AVAILABILITY */}
                            <p className="mt-3 text-sm sm:text-base text-slate-600 font-machina max-w-md leading-snug">
                                Toyota, Honda, Suzuki aur Japanese gariyon ke liye verified spare parts — Bahawalpur mein counter se turant milte hain.
                            </p>

                            {/* CATEGORY FLYOUT & HANDWRITTEN "Select car" CALLOUT */}
                            <div className="mt-6 sm:mt-8 relative z-20 flex flex-wrap items-start gap-6">

                                {/* Category Toggle Button & Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                        className="flex items-center gap-2 text-base sm:text-lg font-bold font-machina text-[#0f1115] hover:opacity-80 transition-opacity cursor-pointer"
                                    >
                                        <span>Category</span>
                                        {isCategoryOpen ? (
                                            <ChevronUp className="w-4 h-4 text-slate-500" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-slate-500" />
                                        )}
                                    </button>

                                    {/* Flyout Menu (Frosted Glass Aesthetic with Real Local Categories) */}
                                    {isCategoryOpen && (
                                        <div className="absolute top-8 left-0 w-56 sm:w-60 bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 shadow-2xl border border-slate-200/90 space-y-1 z-30 transition-all">
                                            {categoriesList.map((cat) => {
                                                const isActive = activeCategory === cat;
                                                return (
                                                    <button
                                                        key={cat}
                                                        onClick={() => {
                                                            setActiveCategory(cat);
                                                            setSelectedCategory(cat);
                                                        }}
                                                        className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-machina transition-all cursor-pointer ${isActive
                                                                ? 'bg-[#0f1115] text-white font-bold shadow-sm'
                                                                : 'text-slate-700 hover:bg-slate-100 hover:text-black'
                                                            }`}
                                                    >
                                                        {cat}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* "Select car" HANDWRITTEN DOODLE OVAL WITH ARROW */}
                                <div className="relative pl-4 pt-1 select-none">
                                    <div className="relative inline-block">
                                        {/* Hand-drawn Red Oval Ring */}
                                        <svg
                                            className="absolute -inset-x-4 -inset-y-2 w-[calc(100%+32px)] h-[calc(100%+16px)] pointer-events-none"
                                            viewBox="0 0 140 50"
                                            fill="none"
                                        >
                                            <ellipse
                                                cx="70"
                                                cy="25"
                                                rx="62"
                                                ry="20"
                                                stroke="#e03627"
                                                strokeWidth="2.2"
                                                strokeDasharray="140"
                                                strokeDashoffset="0"
                                                transform="rotate(-3 70 25)"
                                            />
                                        </svg>

                                        {/* Handwritten text */}
                                        <span
                                            style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                                            className="text-2xl sm:text-3xl text-[#e03627] font-bold italic tracking-wide px-2"
                                        >
                                            Select car
                                        </span>
                                    </div>

                                    {/* Cute Red Arrow Pointing Down */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#e03627]">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <line x1="12" y1="2" x2="12" y2="18" />
                                            <polyline points="7 13 12 18 17 13" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* CENTER HERO VEHICLE IMAGE SHOWCASE (Everyday Pakistani Car with Studio Underglow) */}
                        <div className="relative my-6 w-full flex items-center justify-center">

                            {/* Main Dark Studio Stage with Pakistani Market Car */}
                            <div className="relative w-full max-w-xl h-56 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-t from-black via-[#141820] to-black shadow-2xl flex items-center justify-center">

                                {/* Red underglow ambient light */}
                                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#e03627]/40 via-transparent to-transparent pointer-events-none" />

                                <img
                                    src={currentStageCar.image}
                                    alt={currentStageCar.name}
                                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-700"
                                />

                                {/* Car Label Overlay & Stock Badge */}
                                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl text-white border border-white/10">
                                    <span className="text-xs font-machina font-bold block">{currentStageCar.name}</span>
                                    <span className="text-[10px] text-slate-300 font-machina">{currentStageCar.tagline}</span>
                                </div>

                                <div className="absolute bottom-3 right-3 bg-[#e03627]/90 text-white px-2.5 py-1 rounded-lg text-[10px] font-machina font-bold shadow-md">
                                    {currentStageCar.stockCount}
                                </div>

                                {/* Switcher dots for everyday cars */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                                    {stageCars.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setStageCarIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all cursor-pointer ${stageCarIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
                                                }`}
                                            aria-label={`Select car ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Secondary Overlapping Top-Crop Detail Preview Card */}
                            <div className="hidden sm:block absolute -top-8 right-2 w-40 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-xl rotate-3 bg-slate-900 pointer-events-none">
                                <img
                                    src={currentStageCar.detailImage}
                                    alt="Part detail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-machina text-white">
                                    Genuine Parts
                                </div>
                            </div>

                        </div>

                        {/* BOTTOM SEGMENTED FILTER BAR (WhatsApp Lead Generation Trigger) */}
                        <div className="w-full pt-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-machina text-slate-600 mb-2 gap-1 font-semibold">
                                <span className="flex items-center gap-1.5 font-bold text-[#0f1115]">
                                    <Sparkles className="w-3.5 h-3.5 text-[#e03627]" />
                                    Apni gaari select karein, rate turant WhatsApp par milega:
                                </span>
                                <span className="text-slate-500 font-medium">
                                    ✓ Local walk-in store &nbsp;•&nbsp; ✓ Same-day part availability check
                                </span>
                            </div>

                            <form
                                onSubmit={handleSearch}
                                className="w-full bg-[#f6f8f9] rounded-2xl p-1.5 sm:p-2 border border-slate-200 grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 shadow-inner"
                            >
                                {/* Year */}
                                <div className="relative">
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full bg-white text-[#0f1115] font-machina font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-xl appearance-none border border-slate-200 focus:outline-none cursor-pointer"
                                    >
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2018">2018</option>
                                        <option value="2015">2015</option>
                                        <option value="2010">2010</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                </div>

                                {/* Make */}
                                <div className="relative">
                                    <select
                                        value={selectedMake}
                                        onChange={(e) => setSelectedMake(e.target.value)}
                                        className="w-full bg-white text-[#0f1115] font-machina font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-xl appearance-none border border-slate-200 focus:outline-none cursor-pointer"
                                    >
                                        <option value="Toyota">Toyota</option>
                                        <option value="Suzuki">Suzuki</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="KIA">KIA</option>
                                        <option value="Daihatsu">Daihatsu</option>
                                        <option value="Changan">Changan</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                </div>

                                {/* Model */}
                                <div className="relative">
                                    <select
                                        value={selectedModel}
                                        onChange={(e) => setSelectedModel(e.target.value)}
                                        className="w-full bg-white text-[#0f1115] font-machina font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-xl appearance-none border border-slate-200 focus:outline-none cursor-pointer"
                                    >
                                        <option value="Corolla Altis">Corolla Altis</option>
                                        <option value="Civic Oriel / RS">Civic Oriel / RS</option>
                                        <option value="Alto 660cc">Alto 660cc</option>
                                        <option value="Cultus K10B">Cultus K10B</option>
                                        <option value="City i-DSI / Aspire">City i-DSI / Aspire</option>
                                        <option value="Yaris ATIV">Yaris ATIV</option>
                                        <option value="Mehran Euro II">Mehran Euro II</option>
                                        <option value="Wagon R">Wagon R</option>
                                        <option value="Hilux Revo">Hilux Revo</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                </div>

                                {/* Category */}
                                <div className="relative">
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full bg-white text-[#0f1115] font-machina font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-xl appearance-none border border-slate-200 focus:outline-none cursor-pointer"
                                    >
                                        <option value="Brake Pads & Discs">Brakes & Hubs</option>
                                        <option value="Suspension & Shocks">Suspension & Shocks</option>
                                        <option value="Engine Spares & Belts">Engine & Belts</option>
                                        <option value="Filters & Lubricants">Filters & Oils</option>
                                        <option value="Body & Lighting Parts">Lighting & Body</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                </div>

                                {/* Solid Red Search Button -> WhatsApp Lead */}
                                <button
                                    type="submit"
                                    className="col-span-2 sm:col-span-1 bg-[#e03627] hover:bg-[#cf2f20] text-white font-machina font-bold text-xs sm:text-sm uppercase tracking-wider py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-red-500/30 transition-transform active:scale-95 cursor-pointer"
                                >
                                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                    <span>Inquire</span>
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* ========================================================= */}
                    {/* RIGHT SIDEBAR: 35% (4 COLS ON LG) - ICE-GREY PANEL        */}
                    {/* ========================================================= */}
                    <div className="lg:col-span-4 bg-[#dde5e8] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-300/70">

                        <div>
                            {/* TOP LOCAL TRUST UTILITY HEADER (No ecommerce cart/avatar) */}
                            <div className="flex items-center justify-between pb-5 border-b border-slate-300/60">
                                {/* Red 8-Point Asterisk Star */}
                                <div className="flex items-center gap-2">
                                    <div className="text-[#e03627] font-black text-2xl leading-none">
                                        ✦
                                    </div>
                                    <span className="font-druk text-sm uppercase tracking-wider text-[#0f1115]">
                                        Bahawalpur Hub
                                    </span>
                                </div>

                                {/* Live Store Status */}
                                <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-full text-[10px] font-machina text-slate-800 shadow-sm border border-slate-200">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="font-bold">Open 9am - 9:30pm</span>
                                </div>
                            </div>

                            {/* 1. "TRENDING SEARCHES THIS WEEK" (Replaced luxury Garage) */}
                            <div className="mt-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-[10px] font-machina uppercase text-[#e03627] font-bold block">
                                            Popular Searches
                                        </span>
                                        <h3 className="font-druk text-lg uppercase tracking-tight text-[#0f1115] font-black leading-none">
                                            Trending in Bahawalpur
                                        </h3>
                                    </div>

                                    {/* Arrow switchers */}
                                    <div className="flex items-center gap-1 text-slate-700">
                                        <button
                                            onClick={() => setTrendingIndex((prev) => (prev === 0 ? trendingParts.length - 1 : prev - 1))}
                                            className="p-1 hover:text-black transition-colors cursor-pointer"
                                            aria-label="Previous Part"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setTrendingIndex((prev) => (prev === trendingParts.length - 1 ? 0 : prev + 1))}
                                            className="p-1 hover:text-black transition-colors cursor-pointer"
                                            aria-label="Next Part"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* White Card for Trending Local Part */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-2">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <span className="text-[10px] font-machina uppercase font-bold text-[#e03627]">
                                                {currentTrending.carModel}
                                            </span>
                                            <h4 className="font-machina text-xs font-bold text-[#0f1115] leading-tight">
                                                {currentTrending.partName}
                                            </h4>
                                            <span className="text-[10px] text-slate-500 font-machina">
                                                {currentTrending.brand}
                                            </span>
                                        </div>

                                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                            <img
                                                src={currentTrending.image}
                                                alt={currentTrending.partName}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-machina">
                                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                            {currentTrending.status}
                                        </span>
                                        <a
                                            href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe ${currentTrending.carModel} ke ${currentTrending.partName} ka rate chahiye.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#e03627] font-bold hover:underline"
                                        >
                                            Ask Rate →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 2. "FEATURED LOCAL SPARE PART" (Replaced $6,800 Weistec Wheels) */}
                            <div className="mt-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-[10px] font-machina uppercase text-slate-500 font-bold block">
                                            Featured Fast-Moving Part
                                        </span>
                                        <h2 className="font-druk text-2xl sm:text-3xl uppercase tracking-tight text-[#0f1115] font-black leading-none mt-0.5">
                                            {currentFeatured.title}<br />
                                            <span className="text-sm font-machina text-slate-700 font-bold">{currentFeatured.code}</span>
                                        </h2>
                                    </div>

                                    {/* Realistic PKR Price */}
                                    <div
                                        style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                                        className="text-2xl sm:text-3xl text-[#e03627] font-bold -rotate-6"
                                    >
                                        {currentFeatured.pricePKR}
                                    </div>
                                </div>

                                {/* Center Genuine Part Cutout with hover micro-interaction */}
                                <div className="my-3 w-full h-28 flex items-center justify-center relative">
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-300 shadow-md group hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={currentFeatured.image}
                                            alt={currentFeatured.partName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Part info and Navigation */}
                                <div className="flex items-center justify-between text-xs font-machina">
                                    <div>
                                        <span className="font-bold text-[#0f1115] block">{currentFeatured.partName}</span>
                                        <span className="text-[10px] text-slate-500">{currentFeatured.fits}</span>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-slate-700">
                                        <button
                                            onClick={() => setFeaturedIndex((prev) => (prev === 0 ? featuredParts.length - 1 : prev - 1))}
                                            className="p-1 hover:text-black transition-colors cursor-pointer"
                                            aria-label="Previous Part"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setFeaturedIndex((prev) => (prev === featuredParts.length - 1 ? 0 : prev + 1))}
                                            className="p-1 hover:text-black transition-colors cursor-pointer"
                                            aria-label="Next Part"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* DIRECT WHATSAPP ACTION BUTTON IN SIDEBAR FOOTER */}
                        <div className="mt-6 pt-4 border-t border-slate-300/80">
                            <a
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe AutoParts PK Bahawalpur se ${currentFeatured.partName} (${currentFeatured.code}) ki price aur stock confirm karna hai.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-[#0f1115] hover:bg-black text-white text-xs font-machina font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
                            >
                                <MessageSquare className="w-3.5 h-3.5 text-[#e03627] fill-current" />
                                <span>WhatsApp Par Rate Poochein</span>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;
