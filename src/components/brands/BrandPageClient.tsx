'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/CtaSection';
import { allProducts, Product, shopInfo } from '@/data/partsData';
import { ShieldCheck, Star, MessageSquare, Tag, CheckCircle2, ChevronRight, Phone, Wrench, Search, FileText } from 'lucide-react';

export interface BrandPageClientProps {
    brandName: 'Toyota' | 'Honda' | 'Suzuki';
    brandSlug: string;
    pageTitle: string;
    pageSubtitle: string;
    popularModels: { name: string; years: string; badge: string }[];
    buyerGuideTitle: string;
    buyerGuideContent: string[];
    brandFaqs: { question: string; answer: string }[];
}

export const BrandPageClient: React.FC<BrandPageClientProps> = ({
    brandName,
    brandSlug,
    pageTitle,
    pageSubtitle,
    popularModels,
    buyerGuideTitle,
    buyerGuideContent,
    brandFaqs
}) => {
    // Filter products specifically for this brand
    const brandProducts = useMemo(() => {
        return allProducts.filter(
            (p) => p.brand.toLowerCase() === brandName.toLowerCase()
        );
    }, [brandName]);

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'all') return brandProducts;
        return brandProducts.filter((p) => p.category === selectedCategory);
    }, [brandProducts, selectedCategory]);

    const handleWhatsAppOrder = (part: Product) => {
        const text = `Assalam o Alaikum! Mujhe ${brandName} gari ke is part ki inquiry karni hai:
Part: ${part.name}
Part #: ${part.partNumber}
Brand: ${part.brand}
Price: PKR ${part.pricePKR.toLocaleString()}
Link: https://autopartsbahawalpur.pk/${brandSlug}`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full font-['Space_Grotesk',sans-serif]">
            {/* Global Navbar */}
            <Navbar />

            {/* MAIN CONTENT */}
            <main className="w-full flex-1 flex flex-col items-center">
                
                {/* 1. HERO BANNER (Clean Single Column Dark Banner, No Mechanic Image, No Description) */}
                <section className="breadcumb-wrapper relative w-full bg-[#0f1115] text-white pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-gray-800 overflow-hidden">
                    {/* Top Red Racing Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#d31826]" />

                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-4 text-center sm:text-left">
                            {/* Breadcrumb Title (Max 2 Lines) */}
                            <h1 className="breadcumb-title text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase font-['Chakra_Petch',sans-serif] leading-tight">
                                Genuine <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#d31826]">{brandName} Parts</span> in Bahawalpur
                            </h1>

                            {/* Breadcrumb Menu */}
                            <ul className="breadcumb-menu flex items-center justify-center sm:justify-start space-x-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-400 mt-4">
                                <li>
                                    <Link href="/" className="hover:text-[#d31826] transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-[#d31826]">•</li>
                                <li>
                                    <Link href="/products" className="hover:text-[#d31826] transition-colors">
                                        Products
                                    </Link>
                                </li>
                                <li className="text-[#d31826]">•</li>
                                <li className="active text-[#d31826]">{brandName} Parts</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. COMPATIBLE MODELS GRID STRIP */}
                <section className="w-full bg-[#f8f9fa] py-10 border-b border-slate-200">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm sm:text-base font-bold font-['Rajdhani',sans-serif] uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#d31826]" />
                                    Supported {brandName} Models in Bahawalpur Counter:
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                {popularModels.map((model, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-[#d31826]/40 transition-all text-center space-y-1"
                                    >
                                        <span className="text-xs font-extrabold text-[#0f1115] uppercase block truncate font-['Rajdhani',sans-serif]">
                                            {model.name}
                                        </span>
                                        <span className="text-[10px] text-slate-500 block">
                                            {model.years}
                                        </span>
                                        <span className="inline-block bg-[#d31826]/10 text-[#d31826] px-2 py-0.5 rounded text-[9px] font-bold">
                                            {model.badge}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. DEDICATED PRODUCTS CATALOG GRID */}
                <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-[1400px] mx-auto space-y-8">
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                            <div>
                                <span className="text-xs font-extrabold text-[#d31826] uppercase tracking-widest block mb-1">
                                    AVAILABLE STOCK CATALOG
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1115] font-['Rajdhani',sans-serif] uppercase">
                                    Genuine {brandName} Spare Parts & Accessories
                                </h2>
                            </div>

                            {/* Category Filter Pills */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs font-bold w-full sm:w-auto">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-3.5 py-2 rounded-xl uppercase transition-colors shrink-0 cursor-pointer ${
                                        selectedCategory === 'all' ? 'bg-[#d31826] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    All {brandName} Parts
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('brakes')}
                                    className={`px-3.5 py-2 rounded-xl uppercase transition-colors shrink-0 cursor-pointer ${
                                        selectedCategory === 'brakes' ? 'bg-[#d31826] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    Brakes & Hubs
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('suspension')}
                                    className={`px-3.5 py-2 rounded-xl uppercase transition-colors shrink-0 cursor-pointer ${
                                        selectedCategory === 'suspension' ? 'bg-[#d31826] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    Suspensions
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('engine')}
                                    className={`px-3.5 py-2 rounded-xl uppercase transition-colors shrink-0 cursor-pointer ${
                                        selectedCategory === 'engine' ? 'bg-[#d31826] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    Engine & Ignition
                                </button>
                            </div>
                        </div>

                        {/* Product Cards Grid with Exact Dual Lens-Blur Counter Motion Animation */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((part) => (
                                    <div
                                        key={part.id}
                                        onClick={() => handleWhatsAppOrder(part)}
                                        className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#d31826]/40 shadow-sm hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                                    >
                                        <div>
                                            {/* Dual Image Container with Servixa Dual-Image Motion Animation */}
                                            <div className="relative h-52 bg-slate-900 overflow-hidden">
                                                {/* Image 1: Bottom Layer */}
                                                <img
                                                    src={part.image}
                                                    alt={part.name}
                                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out z-10 translate-x-1/2 scale-x-[2] opacity-0 blur-md group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
                                                />

                                                {/* Image 2: Top Layer */}
                                                <img
                                                    src={part.image}
                                                    alt={part.name}
                                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out z-20 translate-x-0 scale-x-100 opacity-100 blur-none group-hover:-translate-x-1/2 group-hover:scale-x-[2] group-hover:opacity-0 group-hover:blur-md"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500 pointer-events-none z-30" />

                                                {/* Top Tag Badge */}
                                                <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#d31826] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-md z-10">
                                                    <span>{part.condition}</span>
                                                </div>
                                            </div>

                                            {/* Product Meta */}
                                            <div className="p-5">
                                                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                                                    <span className="font-bold text-[#d31826] uppercase">{part.brand} OEM</span>
                                                    <span className="text-[10px]">Part #{part.partNumber}</span>
                                                </div>

                                                <h3 className="font-[#Rajdhani] text-lg uppercase font-bold text-[#0f1115] leading-snug mb-2 group-hover:text-[#d31826] transition-colors line-clamp-1">
                                                    {part.name}
                                                </h3>

                                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                                                    {part.description}
                                                </p>

                                                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-2">
                                                    <span className="text-[11px] text-slate-500 font-bold block mb-0.5">Compatible Models:</span>
                                                    <div className="flex flex-wrap gap-1">
                                                        {part.compatibleModels.slice(0, 2).map((m, idx) => (
                                                            <span key={idx} className="bg-white text-slate-700 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">
                                                                {m}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Footer Price & WhatsApp CTA */}
                                        <div className="px-5 pb-5 pt-0">
                                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                                <div>
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Counter Price</span>
                                                    <span className="text-base font-extrabold text-[#0f1115] font-['Rajdhani',sans-serif]">
                                                        PKR {part.pricePKR.toLocaleString()}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleWhatsAppOrder(part);
                                                    }}
                                                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-transform active:scale-95 shadow-md shadow-emerald-600/20 cursor-pointer"
                                                >
                                                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                                    <span>Order</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-50 rounded-3xl p-10 text-center border border-slate-200 space-y-3">
                                <p className="text-slate-600 text-sm font-bold">
                                    Selected category mein filhaal {brandName} ka items view update ho raha hai.
                                </p>
                                <a
                                    href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe ${brandName} ka part chahiye.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#d31826] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase"
                                >
                                    WhatsApp Par Poochein
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* 4. BRAND BUYER'S GUIDE & OEM AUTHENTICITY GUIDE */}
                <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-t border-slate-200">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="text-center space-y-2">
                            <span className="text-xs font-extrabold text-[#d31826] uppercase tracking-widest">
                                LOCAL BUYER'S GUIDE
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1115] font-['Rajdhani',sans-serif] uppercase">
                                {buyerGuideTitle}
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
                            {buyerGuideContent.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. BRAND SPECIFIC FAQS */}
                <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="text-center space-y-2">
                            <span className="text-xs font-extrabold text-[#d31826] uppercase tracking-widest">
                                FREQUENTLY ASKED QUESTIONS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1115] font-['Rajdhani',sans-serif] uppercase">
                                {brandName} Spare Parts in Bahawalpur — FAQs
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {brandFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-[#f8f9fa] rounded-2xl border border-slate-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-[#0f1115] cursor-pointer"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronRight
                                            className={`w-4 h-4 text-[#d31826] transition-transform ${
                                                openFaqIndex === index ? 'rotate-90' : ''
                                            }`}
                                        />
                                    </button>
                                    {openFaqIndex === index && (
                                        <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-3 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA BANNER */}
                <CtaSection />

            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
};
