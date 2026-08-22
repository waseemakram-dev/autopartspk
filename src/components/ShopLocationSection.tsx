'use client';

import React from 'react';
import { areasServed, AreaServed, shopInfo } from '@/data/partsData';
import { MapPin, Navigation, Phone, MessageSquare, Truck, Clock, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { GrowthPlanButton } from './Button';

export const ShopLocationSection: React.FC = () => {
    return (
        <section id="bahawalpur" className="w-full bg-[#f4f7f8] py-14 px-4 sm:px-8 border-y border-slate-300/60 shadow-sm">
            <div className="w-full max-w-[1400px] mx-auto">
                
                {/* Clean Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e03627]/10 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider mb-2">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>WALK-IN STORE & REGIONAL DELIVERY</span>
                        </div>
                        <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0f1115]">
                            STORE LOCATION & DELIVERY HUB
                        </h2>
                    </div>
                    <p className="text-slate-600 font-machina text-xs sm:text-sm max-w-md">
                        Visit our physical counter at Model Town, Dubai Chowk or request same-day courier dispatch to Ahmedpur, Yazman, Lodhran, and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left 7 Cols: Store Details & Google Map Embed */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                                <div>
                                    <span className="text-[10px] font-machina uppercase tracking-widest text-[#e03627] font-bold">
                                        PHYSICAL WALK-IN COUNTER
                                    </span>
                                    <h3 className="font-druk text-2xl uppercase tracking-tight text-[#0f1115]">
                                        {shopInfo.name}
                                    </h3>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-machina font-bold border border-emerald-200 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Counter Open Now
                                </span>
                            </div>

                            {/* Store Info Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 font-machina text-xs">
                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <span className="text-slate-400 block font-normal">📍 Shop Address:</span>
                                    <span className="text-slate-800 font-semibold leading-normal block">
                                        {shopInfo.address}
                                    </span>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <span className="text-slate-400 block font-normal">⏰ Business Timings:</span>
                                    <span className="text-slate-800 font-semibold block">
                                        {shopInfo.timings}
                                    </span>
                                    <span className="text-[10px] text-slate-500 block">
                                        {shopInfo.days}
                                    </span>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <span className="text-slate-400 block font-normal">📞 Phone Line:</span>
                                    <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="text-slate-900 font-bold block hover:text-[#e03627]">
                                        {shopInfo.phone}
                                    </a>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <span className="text-slate-400 block font-normal">💬 WhatsApp Inquiries:</span>
                                    <a href={`https://wa.me/${shopInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold block hover:underline">
                                        +92 300 8687890
                                    </a>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="rounded-2xl overflow-hidden border border-slate-200 h-60 relative bg-slate-100 shadow-inner">
                                <iframe
                                    title="Auto Parts Bahawalpur Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110940.82038753444!2d71.60334812328659!3d29.39578278278385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c4fb34e183%3A0xe7261d7b30960d2b!2sBahawalpur%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                            <a
                                href={shopInfo.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 rounded-2xl bg-[#0f1115] hover:bg-[#1a202c] text-white font-machina font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
                            >
                                <Navigation className="w-4 h-4 text-[#e03627]" />
                                <span>Get Directions on Google Maps</span>
                            </a>

                            <GrowthPlanButton
                                text="Share Location Pin"
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Hello! Please share the exact Google Maps location pin for your Bahawalpur store on WhatsApp.")}`}
                                className="!py-2.5 !px-5 !text-xs !bg-[#e03627] !text-white !border-[#e03627] shadow-md shadow-red-500/25"
                            />
                        </div>
                    </div>

                    {/* Right 5 Cols: High-End Light Delivery Hub Card ("Shashke") */}
                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="inline-flex items-center gap-2 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider">
                                    <Truck className="w-4 h-4" />
                                    <span>REGIONAL DELIVERY HUB</span>
                                </div>
                                <span className="text-[10px] font-machina text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                                    ● Daily Dispatch Active
                                </span>
                            </div>

                            <h3 className="font-druk text-2xl uppercase tracking-tight text-[#0f1115] mb-1">
                                Surrounding Tehsils Delivery
                            </h3>
                            <p className="text-xs font-machina text-slate-500 leading-relaxed">
                                Fast rider delivery within Bahawalpur city & express daily bus cargo to surrounding districts:
                            </p>

                            {/* Interactive Areas Hover List */}
                            <div className="space-y-2.5 mt-5">
                                {areasServed.map((area: AreaServed, idx: number) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-2xl bg-slate-50 hover:bg-[#0f1115] text-slate-800 hover:text-white border border-slate-200/80 hover:border-[#0f1115] flex items-center justify-between text-xs font-machina transition-all duration-300 cursor-pointer shadow-sm group/area"
                                    >
                                        <div className="space-y-0.5">
                                            <span className="font-bold block tracking-tight">
                                                {area.name}
                                            </span>
                                            <span className="text-[11px] text-slate-500 group-hover/area:text-slate-300 block">
                                                {area.deliveryTime}
                                            </span>
                                        </div>

                                        <div className="text-right shrink-0">
                                            <span className="text-[10px] bg-slate-200/80 group-hover/area:bg-white/20 text-slate-700 group-hover/area:text-white px-2.5 py-0.5 rounded-full block font-bold mb-1">
                                                {area.distance}
                                            </span>
                                            <span className="text-[10px] text-emerald-600 group-hover/area:text-emerald-400 font-bold flex items-center justify-end gap-1">
                                                <span>{area.status}</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Urgent Dispatch Schedule Alert */}
                        <div className="pt-4 border-t border-slate-100 space-y-3">
                            <div className="p-4 rounded-2xl bg-[#e03627]/5 border border-[#e03627]/20 text-xs font-machina text-slate-700 space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[#e03627] font-bold">
                                    <Zap className="w-4 h-4 fill-current" />
                                    <span>URGENT OUT-OF-CITY DISPATCH SCHEDULE</span>
                                </div>
                                <p className="text-[11px] text-slate-600 leading-normal">
                                    Morning dispatch at <strong className="text-[#0f1115]">11:00 AM</strong> & Afternoon dispatch at <strong className="text-[#0f1115]">3:30 PM</strong> for same-day delivery.
                                </p>
                            </div>

                            <GrowthPlanButton
                                text="Book Cargo Dispatch"
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Hello! I would like to book an urgent cargo dispatch for auto spare parts from your Bahawalpur store.")}`}
                                className="w-full !py-3.5 !px-6 !text-xs !bg-[#e03627] !text-white !border-[#e03627] shadow-lg shadow-red-500/25"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ShopLocationSection;
