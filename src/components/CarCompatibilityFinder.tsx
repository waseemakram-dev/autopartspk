'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, MessageSquare, Car, ShieldCheck, Filter } from 'lucide-react';
import { shopInfo, featuredProducts } from '@/data/partsData';
import { GsapAnimatedHeader } from './GsapAnimatedHeader';

export const CarCompatibilityFinder: React.FC = () => {
    const [make, setMake] = useState('Toyota');
    const [model, setModel] = useState('Corolla Altis');
    const [category, setCategory] = useState('All Categories');
    const [hasSearched, setHasSearched] = useState(false);

    // Dynamic models based on selected make
    const modelMap: Record<string, string[]> = {
        Toyota: ['Corolla Altis', 'Yaris', 'Revo', 'Fortuner', 'Prius', 'Vitz'],
        Suzuki: ['Alto 660cc', 'Cultus', 'Wagon R', 'Swift', 'Mehran', 'Every'],
        Honda: ['Civic Oriel / RS', 'City', 'BR-V', 'Vezel', 'Fit'],
        Hyundai: ['Tucson', 'Elantra', 'Sonata'],
        Kia: ['Sportage', 'Picanto', 'Stonic'],
        Daihatsu: ['Mira', 'Move', 'Tanto', 'Hijet']
    };

    const currentModels = modelMap[make] || ['Standard Model'];

    const handleMakeChange = (newMake: string) => {
        setMake(newMake);
        const availableModels = modelMap[newMake] || ['Standard Model'];
        setModel(availableModels[0]);
    };

    const handleViewCompatible = (e: React.FormEvent) => {
        e.preventDefault();
        setHasSearched(true);
    };

    // Filter strictly by make and model compatibility
    const compatibleProducts = featuredProducts.filter((product) => {
        const productBrand = product.brand.toLowerCase();
        const selectedMake = make.toLowerCase();
        const selectedModel = model.toLowerCase();
        const baseModelWord = selectedModel.split(' ')[0]; // e.g., "corolla", "alto", "civic", "swift"

        // Brand must match either product.brand or any compatibleModels string
        const brandMatch =
            productBrand === selectedMake ||
            product.compatibleModels.some((m) => m.toLowerCase().includes(selectedMake)) ||
            product.compatibleModels.some((m) => m.toLowerCase().includes('all'));

        // Model must match in compatibleModels
        const modelMatch = product.compatibleModels.some((m) => {
            const mLower = m.toLowerCase();
            return mLower.includes(baseModelWord) || mLower.includes(selectedModel) || mLower.includes('all');
        });

        const categoryMatch =
            category === 'All Categories' || product.category === category;

        return brandMatch && modelMatch && categoryMatch;
    });

    return (
        /* Section with #0c1017 Deep Dark Background */
        <section className="w-full bg-[#0c1017] relative z-20 pb-16 pt-0 px-3 sm:px-6">
            {/* Constrained / Compact Width Card Container (Overlapping Hero) */}
            <div className="max-w-4xl mx-auto -mt-12 sm:-mt-20 md:-mt-28 relative z-30">
                {/* Off-White Card */}
                <div className="bg-[#f8f9fa] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
                    {/* GSAP Character Split Header */}
                    <GsapAnimatedHeader
                        badgeText="COMPATIBILITY CHECKER"
                        badgeIcon={<Car className="w-3.5 h-3.5" />}
                        titleText="FIND PRODUCTS FOR"
                        highlightText="YOUR VEHICLE"
                        descriptionText="Select your vehicle make and model to see verified compatible replacement spares and parts."
                        align="center"
                        className="!mb-6"
                    />

                    {/* Filter Form */}
                    <form onSubmit={handleViewCompatible} className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
                        {/* 1. CHOOSE BRAND */}
                        <div className="sm:col-span-4">
                            <label className="block text-[11px] font-machina uppercase font-extrabold tracking-wider text-slate-600 mb-1">
                                1. CHOOSE BRAND
                            </label>
                            <select
                                value={make}
                                onChange={(e) => handleMakeChange(e.target.value)}
                                className="w-full bg-white text-[#0f1115] font-machina font-bold text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#e03627] focus:ring-2 focus:ring-[#e03627]/20 outline-none cursor-pointer shadow-sm transition-all"
                            >
                                {Object.keys(modelMap).map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 2. CHOOSE MODEL */}
                        <div className="sm:col-span-4">
                            <label className="block text-[11px] font-machina uppercase font-extrabold tracking-wider text-slate-600 mb-1">
                                2. CHOOSE MODEL
                            </label>
                            <select
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                className="w-full bg-white text-[#0f1115] font-machina font-bold text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#e03627] focus:ring-2 focus:ring-[#e03627]/20 outline-none cursor-pointer shadow-sm transition-all"
                            >
                                {currentModels.map((mod) => (
                                    <option key={mod} value={mod}>
                                        {mod}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 3. CTA BUTTON (Standard Brand Red) */}
                        <div className="sm:col-span-4">
                            <button
                                type="submit"
                                className="w-full bg-[#e03627] hover:bg-[#c92a1c] text-white font-machina font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all cursor-pointer transform active:scale-95"
                            >
                                <span>VIEW COMPATIBLE PARTS</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </form>

                    {/* Footer Helper Text with Natural Roman Urdu WhatsApp link */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-machina text-slate-500">
                        <span className="font-medium">Car ka exact model ya part confirm nahi hai?</span>
                        <a
                            href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe apni car ke liye compatible spare parts ki maloomat leni hai.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#e03627] font-bold hover:underline flex items-center gap-1"
                        >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                            <span>WhatsApp par poochein →</span>
                        </a>
                    </div>

                    {/* Search Results Display */}
                    {hasSearched && (
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-[#e03627]" />
                                    <span className="font-machina text-xs font-extrabold text-[#0f1115] uppercase">
                                        Verified Parts for <span className="text-[#e03627]">{make} {model}</span>
                                    </span>
                                </div>
                                <span className="text-[11px] font-machina text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 font-bold">
                                    Counter Stock
                                </span>
                            </div>

                            {compatibleProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {compatibleProducts.map((part) => (
                                        <div
                                            key={part.id}
                                            className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="w-full h-28 rounded-lg overflow-hidden bg-slate-50 mb-2.5 border border-slate-100">
                                                    <img
                                                        src={part.image}
                                                        alt={part.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <h4 className="font-machina text-xs font-bold text-[#0f1115] line-clamp-2">
                                                    {part.name}
                                                </h4>
                                                <span className="text-[10px] font-machina text-slate-500 block mt-0.5">
                                                    Part #{part.partNumber}
                                                </span>
                                            </div>
                                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                                                <span className="font-machina font-black text-xs text-[#0f1115]">
                                                    PKR {part.pricePKR.toLocaleString()}
                                                </span>
                                                <a
                                                    href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe ${make} ${model} ke liye "${part.name}" (Part #${part.partNumber}) ki availability aur counter rate check karni hai.`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-[#e03627] hover:bg-[#c92a1c] text-white px-3 py-1.5 rounded-lg text-[10px] font-machina font-bold flex items-center gap-1 shadow-sm transition-colors"
                                                >
                                                    <MessageSquare className="w-3 h-3 fill-current" />
                                                    <span>Inquire</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
                                    <p className="text-xs sm:text-sm text-slate-700 font-machina">
                                        <span className="font-bold text-[#0f1115]">{make} {model}</span> ke tamam replacement parts (Brake Pads, Shocks, Spark Plugs, Filters, Engine Spares) hamare Ayyoub Chowk counter par available hain.
                                    </p>
                                    <a
                                        href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe ${make} ${model} ke spare parts ki availability aur counter rate maloom karna hai.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#e03627] hover:bg-[#c92a1c] text-white font-machina font-bold text-xs uppercase px-5 py-2.5 rounded-xl shadow-md transition-all"
                                    >
                                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                        <span>Check {make} {model} Parts on WhatsApp</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CarCompatibilityFinder;

