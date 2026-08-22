'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProducts, Product, shopInfo } from '@/data/partsData';
import { Star, CheckCircle, MessageSquare, ShieldCheck, Tag } from 'lucide-react';
import { GrowthPlanButton } from './Button';

export const FeaturedProducts: React.FC = () => {
    const [filterCategory, setFilterCategory] = useState<string>('all');

    const filteredList = filterCategory === 'all'
        ? featuredProducts
        : featuredProducts.filter((p: Product) => p.category === filterCategory);

    const handlePartWhatsAppOrder = (part: Product) => {
        const text = `Hello! I would like to check the price and stock availability for ${part.name} (Part #${part.partNumber}) for pickup at your Bahawalpur counter.`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const filterPills = [
        { key: 'all', label: 'All Inventory' },
        { key: 'brakes', label: 'Brakes & Hubs' },
        { key: 'suspension', label: 'Suspension & Shocks' },
        { key: 'engine', label: 'Engine Spares' },
        { key: 'filters', label: 'Filters & Oils' },
        { key: 'clutch-transmission', label: 'Clutch & Gearbox' },
    ];

    return (
        <section id="products" className="w-full bg-[#f4f7f8] py-14 px-4 sm:px-8 border-y border-slate-300/60 shadow-sm">
            <div className="w-full max-w-[1400px] mx-auto">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e03627]/10 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider mb-2">
                            <Tag className="w-3.5 h-3.5" />
                            <span>FAST-MOVING INVENTORY • COUNTER PICKUP READY</span>
                        </div>
                        <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0f1115]">
                            FEATURED SPARE PARTS
                        </h2>
                    </div>

                    {/* Smooth Animated Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {filterPills.map((pill) => {
                            const isActive = filterCategory === pill.key;
                            return (
                                <button
                                    key={pill.key}
                                    onClick={() => setFilterCategory(pill.key)}
                                    className={`relative px-4 py-2 rounded-full text-xs font-machina font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? 'bg-[#0f1115] text-white shadow-lg scale-[1.03]'
                                            : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:border-slate-300'
                                    }`}
                                >
                                    <span>{pill.label}</span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeFilterBubble"
                                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#e03627] rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
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
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Image Header with Real Sehgal Motors Photo */}
                                    <div className="relative h-52 bg-slate-900 overflow-hidden">
                                        <img
                                            src={part.image}
                                            alt={part.name}
                                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0f1115]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-machina font-bold border border-white/10">
                                            <ShieldCheck className="w-3.5 h-3.5 text-[#e03627]" />
                                            <span>{part.condition}</span>
                                        </div>

                                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-full text-[10px] font-machina font-bold flex items-center gap-1 shadow-sm">
                                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                            <span>{part.rating} ({part.reviewsCount})</span>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between text-xs font-machina text-slate-500 mb-1">
                                            <span className="font-bold text-[#e03627]">{part.brand} OEM</span>
                                            <span>Part #{part.partNumber}</span>
                                        </div>

                                        <h3 className="font-druk text-xl uppercase tracking-tight text-[#0f1115] leading-tight mb-2 group-hover:text-[#e03627] transition-colors">
                                            {part.name}
                                        </h3>

                                        <p className="text-xs font-machina text-slate-600 leading-relaxed mb-4 line-clamp-2">
                                            {part.description}
                                        </p>

                                        {/* Compatible Models List */}
                                        <div className="mb-2">
                                            <span className="text-[10px] font-machina uppercase tracking-wider text-slate-400 font-bold block mb-1">
                                                Fits Car Models:
                                            </span>
                                            <div className="flex flex-wrap gap-1">
                                                {part.compatibleModels.map((model: string, idx: number) => (
                                                    <span
                                                        key={idx}
                                                        className="text-[10px] font-machina bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/80 font-medium"
                                                    >
                                                        {model}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Price and CTA Row */}
                                <div className="p-5 pt-0">
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-machina uppercase tracking-widest text-slate-400 block">
                                                Wholesale Rate
                                            </span>
                                            <span className="font-druk text-2xl text-[#0f1115] font-bold">
                                                PKR {part.pricePKR.toLocaleString()}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => handlePartWhatsAppOrder(part)}
                                            className="px-4 py-2.5 rounded-xl bg-[#e03627] hover:bg-[#cf2f20] text-white text-xs font-machina font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-red-500/25 transition-transform active:scale-95 cursor-pointer"
                                        >
                                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                            <span>Inquire</span>
                                        </button>
                                    </div>
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
