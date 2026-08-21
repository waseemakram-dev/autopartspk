'use client';

import React from 'react';
import { Logo } from './logo';
import { shopInfo, carBrands, partCategories } from '@/data/partsData';
import { MapPin, Phone, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#0c1017] text-white border-t border-white/10 pt-16 pb-12">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

                    {/* Col 1 & 2: Brand Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <Logo size="lg" variant="light" />
                        <p className="text-xs sm:text-sm font-sans text-slate-400 leading-relaxed max-w-sm">
                            Bahawalpur's premier genuine auto spare parts store. Supplying 100% authentic Japanese OEM brake pads, suspensions, spark plugs, filters, and body parts across South Punjab.
                        </p>

                        <div className="pt-2 space-y-2 text-xs font-machina text-slate-300">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#e23b2c] shrink-0" />
                                <span>{shopInfo.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#e23b2c] shrink-0" />
                                <span>{shopInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>{shopInfo.timings} ({shopInfo.days})</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 3: Car Brands */}
                    <div className="space-y-3">
                        <h4 className="font-druk text-sm uppercase tracking-wider text-white">
                            Car Brands
                        </h4>
                        <ul className="space-y-2 text-xs font-machina text-slate-400">
                            {carBrands.map((b) => (
                                <li key={b.id}>
                                    <a href="#brands" className="hover:text-[#e23b2c] transition-colors">
                                        {b.name} Genuine Parts
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Categories */}
                    <div className="space-y-3">
                        <h4 className="font-druk text-sm uppercase tracking-wider text-white">
                            Departments
                        </h4>
                        <ul className="space-y-2 text-xs font-machina text-slate-400">
                            {partCategories.map((c) => (
                                <li key={c.id}>
                                    <a href="#categories" className="hover:text-[#e23b2c] transition-colors">
                                        {c.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: Local SEO Hub Areas */}
                    <div className="space-y-3">
                        <h4 className="font-druk text-sm uppercase tracking-wider text-white">
                            Areas Served
                        </h4>
                        <ul className="space-y-2 text-xs font-machina text-slate-400">
                            <li><a href="#bahawalpur" className="hover:text-white">Bahawalpur City & Model Town</a></li>
                            <li><a href="#bahawalpur" className="hover:text-white">Satellite Town & Dubai Chowk</a></li>
                            <li><a href="#bahawalpur" className="hover:text-white">Ahmedpur East (Daily Cargo)</a></li>
                            <li><a href="#bahawalpur" className="hover:text-white">Yazman & Channigoth</a></li>
                            <li><a href="#bahawalpur" className="hover:text-white">Lodhran & Dunyapur</a></li>
                            <li><a href="#bahawalpur" className="hover:text-white">Hasilpur & Khairpur</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-machina text-slate-500">
                    <div>
                        © {new Date().getFullYear()} Auto Parts & Accessories PK. All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            100% Genuine Guaranteed
                        </span>
                        <span>•</span>
                        <span>Bahawalpur, Punjab, Pakistan</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
