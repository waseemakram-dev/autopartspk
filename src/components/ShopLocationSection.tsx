'use client';

import React from 'react';
import { shopInfo } from '@/data/partsData';
import { MapPin, Navigation, Phone, MessageSquare, Clock, ShieldCheck, CheckCircle2, Wrench, PackageCheck, Eye, Store } from 'lucide-react';
import { BookCallButton, GrowthPlanButton } from './Button';
import { GsapAnimatedHeader } from './GsapAnimatedHeader';

export const ShopLocationSection: React.FC = () => {
    return (
        <section id="bahawalpur" className="w-full bg-[#f4f7f8] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-300/60 shadow-sm">
            <div className="w-full max-w-[1400px] mx-auto">

                {/* GSAP Character Split Header */}
                <GsapAnimatedHeader
                    badgeText="WALK-IN STORE & COUNTER DESK"
                    badgeIcon={<MapPin className="w-3.5 h-3.5" />}
                    titleText="PHYSICAL STORE"
                    highlightText="LOCATION"
                    descriptionText="Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur par hamare walk-in counter par tashreef layein. Tamam Japanese aur Pakistani replacement spares live inspect karein."
                    align="center"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">

                    {/* Left 7 Cols: Store Details & Google Map Embed */}
                    <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 border border-slate-200/90 shadow-xl space-y-5 sm:space-y-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
                                <div>
                                    <span className="text-[10px] font-machina uppercase tracking-widest text-[#e03627] font-bold block">
                                        PHYSICAL WALK-IN COUNTER
                                    </span>
                                    <h3 className="font-druk text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-[#0f1115]">
                                        {shopInfo.name}
                                    </h3>
                                </div>
                                <span className="w-max px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-machina font-bold border border-slate-200 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#e03627] animate-pulse" />
                                    Counter Open Now
                                </span>
                            </div>

                            {/* Store Info Cards Grid with Custom Styled Icon Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-4 sm:my-6 font-machina text-xs">
                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs">
                                        <MapPin className="w-3.5 h-3.5 text-[#e03627]" />
                                        <span>Shop Address</span>
                                    </div>
                                    <span className="text-slate-800 font-bold leading-snug block pt-0.5 text-xs sm:text-[13px]">
                                        {shopInfo.address}
                                    </span>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs">
                                        <Clock className="w-3.5 h-3.5 text-[#e03627]" />
                                        <span>Business Timings</span>
                                    </div>
                                    <span className="text-slate-800 font-bold block pt-0.5 text-xs sm:text-[13px]">
                                        {shopInfo.timings}
                                    </span>
                                    <span className="text-[10px] text-slate-500 block">
                                        {shopInfo.days}
                                    </span>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs">
                                        <Phone className="w-3.5 h-3.5 text-[#e03627]" />
                                        <span>Phone Helpline</span>
                                    </div>
                                    <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="text-slate-900 font-bold block pt-0.5 hover:text-[#e03627] transition-colors text-xs sm:text-[13px]">
                                        {shopInfo.phone}
                                    </a>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                                    <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs">
                                        <MessageSquare className="w-3.5 h-3.5 text-[#e03627]" />
                                        <span>WhatsApp Desk</span>
                                    </div>
                                    <a href={`https://wa.me/${shopInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold block pt-0.5 hover:text-[#e03627] transition-colors text-xs sm:text-[13px]">
                                        {shopInfo.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 h-48 sm:h-64 md:h-72 relative bg-slate-100 shadow-inner">
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

                        {/* Signature Matching Button Components */}
                        <div className="pt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                            <GrowthPlanButton
                                text="Directions on Maps"
                                href={shopInfo.googleMapsUrl}
                                variant="dark"
                                className="w-full sm:w-auto text-center justify-center shadow-md"
                            />

                            <GrowthPlanButton
                                text="Share Location Pin"
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Baraye meherbani apne Bahawalpur counter ki Google Maps location pin share kar dein.")}`}
                                variant="red"
                                className="w-full sm:w-auto text-center justify-center shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right 5 Cols: Walk-in Counter Advantages & Guidance */}
                    <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6 hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider">
                                    <Store className="w-3.5 h-3.5" />
                                    <span>WALK-IN ADVANTAGES</span>
                                </div>
                                <span className="w-max text-[10px] font-machina text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 font-bold">
                                    ● Hand-to-Hand Pickup
                                </span>
                            </div>

                            <h3 className="font-druk text-xl sm:text-2xl uppercase tracking-tight text-[#0f1115] mb-1">
                                In-Store Counter Benefits
                            </h3>
                            <p className="text-[11px] sm:text-xs font-machina text-slate-500 leading-relaxed">
                                Shop par direct aane ke faiday:
                            </p>

                            {/* 4 Authentic In-Store Features (Unified Brand Red Palette) */}
                            <div className="space-y-2.5 sm:space-y-3 mt-4 sm:mt-5">
                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#e03627]/10 text-[#e03627] flex items-center justify-center shrink-0 mt-0.5">
                                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-machina font-bold text-xs text-[#0f1115]">Physical Inspection</h4>
                                        <p className="text-[10px] sm:text-[11px] font-machina text-slate-500 mt-0.5 leading-snug">
                                            Part ko khareedne se pehle khud inspect karein, seal aur fitment tasalli se check karein.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#e03627]/10 text-[#e03627] flex items-center justify-center shrink-0 mt-0.5">
                                        <PackageCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-machina font-bold text-xs text-[#0f1115]">Sample Part Matching</h4>
                                        <p className="text-[10px] sm:text-[11px] font-machina text-slate-500 mt-0.5 leading-snug">
                                            Apna purana kharab part sath layein, hamare staff exact replacement match kar denge.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#e03627]/10 text-[#e03627] flex items-center justify-center shrink-0 mt-0.5">
                                        <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-machina font-bold text-xs text-[#0f1115]">Mechanic & Model Advice</h4>
                                        <p className="text-[10px] sm:text-[11px] font-machina text-slate-500 mt-0.5 leading-snug">
                                            Chassis number aur car variant ke mutabiq 100% accurate part guidance.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#e03627]/10 text-[#e03627] flex items-center justify-center shrink-0 mt-0.5">
                                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-machina font-bold text-xs text-[#0f1115]">Instant Handover</h4>
                                        <p className="text-[10px] sm:text-[11px] font-machina text-slate-500 mt-0.5 leading-snug">
                                            Zero delivery wait time — direct counter payment aur hand-to-hand delivery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Visit Inquiry Button */}
                        <div className="pt-3.5 border-t border-slate-100">
                            <GrowthPlanButton
                                text="Inquire Before Visiting"
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Main aap ke Ayyoub Chowk counter par visit karna chahta hoon, part ki availability confirm karni hai.")}`}
                                variant="red"
                                className="w-full text-center justify-center shadow-lg shadow-red-500/25"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ShopLocationSection;
