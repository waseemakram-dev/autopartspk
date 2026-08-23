'use client';

import React from 'react';
import { Logo } from './logo';
import { shopInfo, carBrands, partCategories } from '@/data/partsData';
import { MapPin, Phone, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#f8f9fa] text-[#0f1115] border-t border-slate-300/80 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">

                    {/* Col 1: Brand Info (Full width on mobile/tablet, 4 cols on desktop) */}
                    <div className="col-span-2 lg:col-span-4 space-y-4">
                        <Logo size="lg" variant="color" align="left" className="!justify-start" />
                        <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed max-w-sm">
                            Bahawalpur's premier genuine auto spare parts store. Supplying authentic Japanese OEM brake pads, suspensions, spark plugs, filters, and body parts across South Punjab.
                        </p>

                        <div className="pt-2 space-y-2 text-xs font-machina text-slate-700">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#e03627] shrink-0" />
                                <span>{shopInfo.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#e03627] shrink-0" />
                                <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-[#e03627] transition-colors">
                                    {shopInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#e03627] shrink-0" />
                                <span>{shopInfo.timings} ({shopInfo.days})</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Car Brands (1 col in 2-column mobile grid) */}
                    <div className="col-span-1 lg:col-span-3 space-y-3">
                        <h4 className="font-druk text-xs sm:text-sm uppercase tracking-wider text-[#0f1115]">
                            Car Brands
                        </h4>
                        <ul className="space-y-2 text-[11px] sm:text-xs font-machina text-slate-600">
                            {carBrands.map((b) => (
                                <li key={b.id}>
                                    <a href="#brands" className="hover:text-[#e03627] transition-colors block">
                                        {b.name} Genuine Parts
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Departments (1 col in 2-column mobile grid) */}
                    <div className="col-span-1 lg:col-span-3 space-y-3">
                        <h4 className="font-druk text-xs sm:text-sm uppercase tracking-wider text-[#0f1115]">
                            Departments
                        </h4>
                        <ul className="space-y-2 text-[11px] sm:text-xs font-machina text-slate-600">
                            {partCategories.map((c) => (
                                <li key={c.id}>
                                    <a href="#categories" className="hover:text-[#e03627] transition-colors block">
                                        {c.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Local SEO Hub Areas */}
                    <div className="col-span-2 lg:col-span-2 space-y-3 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                        <h4 className="font-druk text-xs sm:text-sm uppercase tracking-wider text-[#0f1115]">
                            Areas Served
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-[11px] sm:text-xs font-machina text-slate-600">
                            <li><a href="#bahawalpur" className="hover:text-[#e03627] transition-colors block">Bahawalpur City</a></li>
                            <li><a href="#bahawalpur" className="hover:text-[#e03627] transition-colors block">Ayyoub Chowk</a></li>
                            <li><a href="#bahawalpur" className="hover:text-[#e03627] transition-colors block">Cheeka Wala Chowk</a></li>
                            <li><a href="#bahawalpur" className="hover:text-[#e03627] transition-colors block">Model Town</a></li>
                            <li><a href="#bahawalpur" className="hover:text-[#e03627] transition-colors block">Ahmedpur East</a></li>
                            <li><a href="#bahawalpur" className="hover:text-[#e03627] transition-colors block">Yazman & Lodhran</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-machina text-slate-500 text-center sm:text-left">
                    <div>
                        © {new Date().getFullYear()} Auto Parts & Accessories PK. All Rights Reserved.
                    </div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4 text-slate-600 text-[11px] sm:text-xs">
                        <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#e03627]" />
                            Genuine & OEM Replacement Spares
                        </span>
                        <span className="hidden sm:inline text-slate-400">•</span>
                        <span>Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
