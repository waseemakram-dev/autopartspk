'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { shopInfo } from '@/data/partsData';
import { MapPin, Phone, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#f8f9fa] text-[#0f1115] border-t border-slate-300/80 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-['Space_Grotesk',sans-serif]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">

                    {/* Col 1: Brand Info & Store Desk */}
                    <div className="col-span-2 lg:col-span-4 space-y-4">
                        <Link href="/" className="inline-block">
                            <Logo size="xl" variant="color" align="left" className="!justify-start" />
                        </Link>
                        <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed max-w-sm">
                            Bahawalpur's premier genuine auto spare parts store. Supplying authentic Japanese OEM brake pads, suspensions, spark plugs, filters, and clutch kits across South Punjab.
                        </p>

                        <div className="pt-2 space-y-2 text-xs text-slate-700">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#d31826] shrink-0" />
                                <span>{shopInfo.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#d31826] shrink-0" />
                                <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-[#d31826] transition-colors">
                                    {shopInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#d31826] shrink-0" />
                                <span>{shopInfo.timings} ({shopInfo.days})</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Quick Links (Only Existing Pages) */}
                    <div className="col-span-1 lg:col-span-3 space-y-3">
                        <h4 className="font-['Rajdhani',sans-serif] text-sm font-bold uppercase tracking-wider text-[#0f1115]">
                            Quick Navigation
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600 font-medium">
                            <li>
                                <Link href="/" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Home Page
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Products Catalog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> About Our Store
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Contact & Directions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Dedicated Car Brand Pages */}
                    <div className="col-span-1 lg:col-span-3 space-y-3">
                        <h4 className="font-['Rajdhani',sans-serif] text-sm font-bold uppercase tracking-wider text-[#0f1115]">
                            Brand Catalogs
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600 font-medium">
                            <li>
                                <Link href="/toyota-parts-bahawalpur" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Toyota Genuine Parts
                                </Link>
                            </li>
                            <li>
                                <Link href="/honda-parts-bahawalpur" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Honda Genuine Parts
                                </Link>
                            </li>
                            <li>
                                <Link href="/suzuki-parts-bahawalpur" className="hover:text-[#d31826] transition-colors flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3 text-[#d31826]" /> Suzuki Genuine Parts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Shop Counter & Delivery Hubs */}
                    <div className="col-span-2 lg:col-span-2 space-y-3 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                        <h4 className="font-['Rajdhani',sans-serif] text-sm font-bold uppercase tracking-wider text-[#0f1115]">
                            Store Hub
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600 font-medium">
                            <li>
                                <Link href="/contact" className="hover:text-[#d31826] transition-colors block">
                                    Ayyoub Chowk Counter
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#d31826] transition-colors block">
                                    Cheeka Wala Chowk
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#d31826] transition-colors block">
                                    Bahawalpur Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#d31826] transition-colors block">
                                    Ahmedpur & Lodhran Cargo
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
                    <div>
                        © {new Date().getFullYear()} Auto Parts & Accessories PK. All Rights Reserved.
                    </div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-slate-600 text-xs">
                        <Link href="/privacy" className="hover:text-[#d31826] transition-colors font-medium">
                            Privacy Policy
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link href="/terms" className="hover:text-[#d31826] transition-colors font-medium">
                            Terms of Service
                        </Link>
                        <span className="text-slate-400">•</span>
                        <span className="flex items-center gap-1 text-slate-800 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#d31826]" />
                            Genuine OEM Spares Only
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
