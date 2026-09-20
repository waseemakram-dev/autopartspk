'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProducts, Product, shopInfo } from '@/data/partsData';
import { Tag, MessageSquare } from 'lucide-react';
import { GsapAnimatedHeader } from './GsapAnimatedHeader';

export const FeaturedProducts: React.FC = () => {
    const [filterCategory, setFilterCategory] = useState<string>('all');

    const filteredList = filterCategory === 'all'
        ? featuredProducts
        : featuredProducts.filter((p: Product) => p.category === filterCategory);

    const handlePartWhatsAppOrder = (part: Product) => {
        const text = `Assalam o Alaikum! Mujhe ${part.name} (Part #${part.partNumber}) ki price aur counter stock check karni hai.`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const filterPills = [
        { key: 'all', label: 'All Inventory' },
        { key: 'lighting', label: 'LED Headlights' },
        { key: 'horns-audio', label: 'Horns & Audio' },
        { key: 'car-care', label: 'Car Care & Fluids' },
        { key: 'wheels-styling', label: 'Wheel Covers' },
    ];

    return (
        <section id="products" className="w-full bg-[#f4f7f8] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-300/60 shadow-sm">
            <div className="w-full max-w-[1400px] mx-auto">

                {/* GSAP Character Split Header */}
                <GsapAnimatedHeader
                    badgeText="FAST-MOVING INVENTORY • COUNTER PICKUP READY"
                    badgeIcon={<Tag className="w-3.5 h-3.5" />}
                    titleText="FEATURED"
                    highlightText="SPARE PARTS"
                    descriptionText="Toyota, Honda aur Suzuki ke fast-moving OEM replacement parts direct Bahawalpur counter stock se."
                    align="center"
                    className="!mb-6"
                />

                {/* Smooth Animated Filter Pills Centered */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {filterPills.map((pill) => {
                        const isActive = filterCategory === pill.key;
                        return (
                            <button
                                key={pill.key}
                                onClick={() => setFilterCategory(pill.key)}
                                className={`relative px-4 py-2 rounded-full text-xs font-machina font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    isActive
                                        ? 'bg-[#0f1115] text-white shadow-md scale-[1.03]'
                                        : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:border-slate-300'
                                }`}
                            >
                                <span>{pill.label}</span>
                                {isActive && (
                                    <motion.span
                                        layoutId="activeFilterBubble"
                                        className="absolute -bottom-1 left-1/2 w-5 h-1 bg-[#d31826] rounded-full pointer-events-none"
                                        style={{ x: '-50%' }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Animated Framer-Motion Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredList.map((part: Product) => (
                            <motion.div
                                key={part.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#d31826]/40 shadow-none hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                            >
                                <div>
                                    {/* Image Header with Servixa Dual-Image Lens Blur Motion Animation */}
                                    <div className="relative h-52 bg-slate-900 overflow-hidden">
                                        {/* Image 1: Bottom Image (Starts blurred +50% right, enters into sharp focus on Hover) */}
                                        <img
                                            src={part.image}
                                            alt={part.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out z-10 translate-x-1/2 scale-x-[2] opacity-0 blur-md group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
                                        />

                                        {/* Image 2: Top Image (Starts sharp center, exits blurred -50% left on Hover) */}
                                        <img
                                            src={part.image}
                                            alt={part.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out z-20 translate-x-0 scale-x-100 opacity-100 blur-none group-hover:-translate-x-1/2 group-hover:scale-x-[2] group-hover:opacity-0 group-hover:blur-md"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500 pointer-events-none z-30" />

                                        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0f1115]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-machina font-bold border border-white/10 z-30">
                                            <span>{part.condition}</span>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between text-xs font-machina text-slate-500 mb-1">
                                            <span className="font-bold text-[#d31826]">{part.brand} OEM</span>
                                            <span>Part #{part.partNumber}</span>
                                        </div>

                                        <h3 className="font-druk text-xl uppercase tracking-tight text-[#0f1115] leading-tight mb-2 group-hover:text-[#d31826] transition-colors">
                                            {part.name}
                                        </h3>

                                        {/* Compatibility Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {part.compatibleModels.map((m: string) => (
                                                <span
                                                    key={m}
                                                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-machina font-medium"
                                                >
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Price & Action Footer */}
                                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-machina uppercase text-slate-400 block font-bold">
                                            Counter Price (PKR)
                                        </span>
                                        <span className="font-druk text-xl text-[#0f1115]">
                                            Rs. {part.pricePKR.toLocaleString()}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handlePartWhatsAppOrder(part)}
                                        className="px-4 py-2.5 rounded-xl bg-[#d31826] hover:bg-[#b81320] text-white text-xs font-machina font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-red-500/25 transition-transform active:scale-95 cursor-pointer"
                                    >
                                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                        <span>Inquire</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default FeaturedProducts;
