'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { partCategories, Category, shopInfo } from '@/data/partsData';
import { ArrowUpRight, Wrench, Disc, Activity, Cpu, Filter, Lightbulb, Settings } from 'lucide-react';
import { GrowthPlanButton } from './Button';

interface CategoryGridProps {
    onSelectCategory?: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
    const handleCategoryWhatsApp = (categoryName: string) => {
        const text = `Assalam o Alaikum! Mujhe ${categoryName} ke spare parts chahiye Bahawalpur shop par. Kya stock available hai?`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Disc': return <Disc className="w-4 h-4 text-[#e03627]" />;
            case 'Activity': return <Activity className="w-4 h-4 text-[#e03627]" />;
            case 'Cpu': return <Cpu className="w-4 h-4 text-[#e03627]" />;
            case 'Filter': return <Filter className="w-4 h-4 text-[#e03627]" />;
            case 'Lightbulb': return <Lightbulb className="w-4 h-4 text-[#e03627]" />;
            case 'Settings': return <Settings className="w-4 h-4 text-[#e03627]" />;
            default: return <Wrench className="w-4 h-4 text-[#e03627]" />;
        }
    };

    return (
        <section
            id="categories"
            className="relative py-16 md:py-24 px-4 sm:px-8 w-full bg-[#f4f7f8] border-y border-slate-300/80 text-[#0f1115] select-none overflow-hidden"
        >
            <div className="w-full max-w-[1280px] mx-auto relative z-10">

                {/* 1. Header Section with Motion */}
                <div className="flex flex-col items-start mb-14 text-left max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e03627]/10 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider mb-3"
                    >
                        <Wrench className="w-3.5 h-3.5" />
                        <span>FAST-MOVING AUTO SPARES DEPARTMENTS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-druk text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0f1115] leading-tight mb-3"
                    >
                        SPARE PARTS <span className="text-[#e03627]">CATEGORIES</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 font-machina text-xs sm:text-sm leading-relaxed"
                    >
                        Japanese OEM standards ke mutabiq certified braking, suspension, engine aur body spare parts counter pickup ke sath.
                    </motion.p>
                </div>

                {/* 2. Framer-Powered Category Cards Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {partCategories.map((cat: Category, index: number) => (
                        <motion.div
                            key={cat.id}
                            id={`category-card-${cat.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => {
                                if (onSelectCategory) onSelectCategory(cat.id);
                            }}
                            className="group relative rounded-[24px] bg-white border border-slate-200/90 p-6 lg:p-7 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:border-[#e03627]/60 hover:shadow-2xl cursor-pointer min-h-[480px]"
                        >
                            {/* Top Content: Badges, Title & Subcategories */}
                            <div className="relative z-10 mb-6 flex-1 flex flex-col items-start text-left">
                                
                                {/* Top Badge Row */}
                                <div className="flex items-center justify-between w-full mb-4">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 shadow-sm">
                                        {getIcon(cat.icon)}
                                        <span className="text-xs font-machina font-bold text-slate-800 tracking-wide">
                                            {cat.itemCount}+ In Stock
                                        </span>
                                    </div>
                                    <span className="text-sm font-machina text-slate-500 font-bold">
                                        {cat.urduName}
                                    </span>
                                </div>

                                {/* Category Title */}
                                <h3 className="font-druk text-2xl lg:text-[26px] uppercase tracking-tight text-[#0f1115] leading-snug mb-2 group-hover:text-[#e03627] transition-colors">
                                    {cat.name}
                                </h3>

                                {/* Description */}
                                <p className="text-xs font-machina text-slate-600 leading-relaxed mb-4">
                                    {cat.description}
                                </p>

                                {/* Subcategories Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {cat.subcategories.slice(0, 4).map((sub: string) => (
                                        <span
                                            key={sub}
                                            className="text-[11px] font-machina bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/80 font-medium"
                                        >
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Image Container with Hover Zoom & Sliding Growth Button */}
                            <div className="relative z-10 w-full h-[210px] rounded-[18px] overflow-hidden border border-slate-200 shadow-md mt-auto shrink-0 bg-slate-900">
                                {/* Category Real Product Image */}
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                                />

                                {/* Dark Gradient Overlay (Reveals more on card hover) */}
                                <div
                                    className="absolute inset-0 rounded-[18px] pointer-events-none opacity-20 group-hover:opacity-80 transition-opacity duration-500 backdrop-blur-[1px] z-10"
                                    style={{
                                        background: "linear-gradient(rgba(220, 38, 38, 0) 40%, rgba(15, 17, 21, 0.9) 100%)",
                                    }}
                                />

                                {/* Sliding Growth Button - HIDDEN BY DEFAULT, ONLY APPEARS ON CARD HOVER */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center w-max opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                                    <GrowthPlanButton
                                        text={`Inquire ${cat.name}`}
                                        onClick={() => handleCategoryWhatsApp(cat.name)}
                                        className="!py-2.5 !px-5 !text-xs !bg-[#e03627] !text-white !border-[#e03627] shadow-lg shadow-red-500/40"
                                    />
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CategoryGrid;
