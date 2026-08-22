'use client';

import React, { useState } from 'react';
import { carBrands, Brand, shopInfo } from '@/data/partsData';
import { ArrowRight, CheckCircle2, Car, MessageSquare } from 'lucide-react';

interface BrandSelectorProps {
    onSelectBrand?: (brandId: string) => void;
}

export const BrandSelector: React.FC<BrandSelectorProps> = ({ onSelectBrand }) => {
    const [activeBrand, setActiveBrand] = useState<string>('toyota');

    const selectedBrandData = carBrands.find((b: Brand) => b.id === activeBrand) || carBrands[0];

    const handleWhatsAppBrandInquiry = (brandName: string) => {
        const text = `Hello! I would like to inquire about genuine spare parts for ${brandName} from your Bahawalpur store.`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="brands" className="w-full bg-[#f4f7f8] py-12 px-4 sm:px-8 border-y border-slate-200/80">
            <div className="w-full max-w-[1400px] mx-auto">
                
                {/* Clean Minimalist Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider mb-2">
                            <Car className="w-4 h-4" />
                            <span>SELECT VEHICLE MAKE</span>
                        </div>
                        <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0f1115]">
                            BROWSE BY BRAND
                        </h2>
                    </div>
                    <p className="text-slate-600 font-machina text-xs sm:text-sm max-w-md">
                        Verified genuine spare parts for Toyota, Honda, Suzuki, and Japanese vehicles — available for instant Bahawalpur counter pickup.
                    </p>
                </div>

                {/* Minimalist Brand Selector Tabs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
                    {carBrands.map((brand: Brand) => {
                        const isSelected = activeBrand === brand.id;
                        return (
                            <button
                                key={brand.id}
                                onClick={() => {
                                    setActiveBrand(brand.id);
                                    if (onSelectBrand) onSelectBrand(brand.id);
                                }}
                                className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-h-[90px] ${
                                    isSelected
                                        ? 'bg-[#0f1115] text-white border-[#0f1115] shadow-lg scale-[1.02]'
                                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                                }`}
                            >
                                <span className="font-druk text-xl uppercase tracking-tight mb-1">
                                    {brand.name}
                                </span>
                                <span className={`text-[11px] font-machina px-2.5 py-0.5 rounded-full ${
                                    isSelected ? 'bg-[#e03627] text-white font-bold' : 'bg-slate-100 text-slate-500'
                                }`}>
                                    {brand.partsCount}+ Parts
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Selected Brand Minimalist Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
                    
                    {/* Left: Models */}
                    <div className="space-y-3 w-full lg:w-auto">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider">
                                {selectedBrandData.origin} Import • Genuine Certified
                            </span>
                        </div>
                        <h3 className="font-druk text-2xl sm:text-3xl uppercase text-[#0f1115] tracking-tight">
                            {selectedBrandData.name} Spares Inventory
                        </h3>

                        <div className="pt-1">
                            <span className="text-xs font-machina text-slate-500 block mb-2 font-semibold">
                                Supported {selectedBrandData.name} Models:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {selectedBrandData.popularModels.map((model: string) => (
                                    <span
                                        key={model}
                                        className="text-xs font-machina bg-slate-100 text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/80 flex items-center gap-1.5"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e03627]" />
                                        <span className="font-semibold">{model}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: WhatsApp CTA */}
                    <div className="w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                        <button
                            onClick={() => handleWhatsAppBrandInquiry(selectedBrandData.name)}
                            className="w-full lg:w-auto px-6 py-4 rounded-2xl bg-[#e03627] hover:bg-[#cf2f20] text-white font-machina font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-transform active:scale-95 cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4 fill-current" />
                            <span>Inquire {selectedBrandData.name} Parts on WhatsApp</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BrandSelector;
