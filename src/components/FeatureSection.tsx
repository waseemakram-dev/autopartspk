'use client';

import React from 'react';
import { Camera, ArrowRight, MessageSquare, Phone, CheckCircle2, Clock, ShieldCheck, CheckCheck, Smile, Paperclip, Send, Video, MoreVertical, Check } from 'lucide-react';
import { shopInfo } from '@/data/partsData';
import { GrowthPlanButton } from './Button';

export const FeatureSection: React.FC = () => {
    const whatsappLink = `https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Yeh mere car part ki photo hai. Baraye meherbani iska exact rate aur availability confirm kar dein.")}`;
    const phoneLink = `tel:${shopInfo.phone.replace(/\s+/g, '')}`;

    return (
        <section id="snap-send" className="w-full bg-[#0c1017] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Heading & Human-Centric Guidance */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e03627]/15 border border-[#e03627]/40 text-xs font-machina font-bold text-[#ff5747] uppercase tracking-wider">
                            <Camera className="w-3.5 h-3.5" />
                            <span>Bahawalpur WhatsApp Photo Helpline</span>
                        </div>

                        {/* Bold Main Headline */}
                        <h2 className="font-druk text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.02]">
                            DON'T KNOW THE PART NAME? <br />
                            <span className="text-[#e03627]">JUST SEND A PHOTO.</span>
                        </h2>

                        {/* Practical Explanatory Copy */}
                        <p className="text-slate-300 font-machina text-sm sm:text-base leading-relaxed max-w-xl">
                            Aksar car ke purane spare parts par number mit jaate hain ya technical naam yaad nahi rehta. Apne mobile se part ki photo le kar hamare WhatsApp counter pe send karein — hum 5 minute mein genuine Japanese part verify kar ke price bata denge.
                        </p>

                        {/* 3 Step Streamlined Workflow */}
                        <div className="pt-3 pb-2">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {/* Step 1 */}
                                <div className="relative overflow-hidden p-4 sm:p-5 md:p-6 rounded-3xl bg-white/[0.05] border border-white/15 transition-all duration-500 flex flex-col justify-between min-h-[auto] sm:min-h-[210px] group shadow-lg cursor-pointer before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:translate-y-1/2 before:w-12 before:h-12 before:rounded-[100%] before:bg-gradient-to-t before:from-[#e03627] before:to-[#ff4d3d] before:opacity-0 hover:before:opacity-100 hover:before:w-[350%] hover:before:h-[350%] hover:before:rounded-none before:transition-all before:duration-500 before:ease-out">
                                    <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5">
                                        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#e03627]/30 group-hover:bg-white/20 border border-[#e03627]/50 group-hover:border-white/40 text-white flex items-center justify-center font-machina font-black text-sm shadow-inner transition-colors duration-300">
                                            01
                                        </span>
                                        <Camera className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="relative z-10 space-y-1.5 sm:space-y-2">
                                        <h4 className="font-machina font-black text-base sm:text-lg text-white tracking-wide">
                                            Snap Part Photo
                                        </h4>
                                        <p className="font-sans text-xs text-slate-300 group-hover:text-white leading-relaxed">
                                            Purane kharab part ya gaari ki chassis plate ki clear tasveer banayein.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative overflow-hidden p-4 sm:p-5 md:p-6 rounded-3xl bg-white/[0.05] border border-white/15 transition-all duration-500 flex flex-col justify-between min-h-[auto] sm:min-h-[210px] group shadow-lg cursor-pointer before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:translate-y-1/2 before:w-12 before:h-12 before:rounded-[100%] before:bg-gradient-to-t before:from-[#e03627] before:to-[#ff4d3d] before:opacity-0 hover:before:opacity-100 hover:before:w-[350%] hover:before:h-[350%] hover:before:rounded-none before:transition-all before:duration-500 before:ease-out">
                                    <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5">
                                        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#e03627]/30 group-hover:bg-white/20 border border-[#e03627]/50 group-hover:border-white/40 text-white flex items-center justify-center font-machina font-black text-sm shadow-inner transition-colors duration-300">
                                            02
                                        </span>
                                        <MessageSquare className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="relative z-10 space-y-1.5 sm:space-y-2">
                                        <h4 className="font-machina font-black text-base sm:text-lg text-white tracking-wide">
                                            Send on WhatsApp
                                        </h4>
                                        <p className="font-sans text-xs text-slate-300 group-hover:text-white leading-relaxed">
                                            Photo hamare WhatsApp counter pe send karein. Hum 5 min mein price quote denge.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative overflow-hidden p-4 sm:p-5 md:p-6 rounded-3xl bg-white/[0.05] border border-white/15 transition-all duration-500 flex flex-col justify-between min-h-[auto] sm:min-h-[210px] group shadow-lg cursor-pointer before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:translate-y-1/2 before:w-12 before:h-12 before:rounded-[100%] before:bg-gradient-to-t before:from-[#e03627] before:to-[#ff4d3d] before:opacity-0 hover:before:opacity-100 hover:before:w-[350%] hover:before:h-[350%] hover:before:rounded-none before:transition-all before:duration-500 before:ease-out">
                                    <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5">
                                        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#e03627]/30 group-hover:bg-white/20 border border-[#e03627]/50 group-hover:border-white/40 text-white flex items-center justify-center font-machina font-black text-sm shadow-inner transition-colors duration-300">
                                            03
                                        </span>
                                        <ShieldCheck className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="relative z-10 space-y-1.5 sm:space-y-2">
                                        <h4 className="font-machina font-black text-base sm:text-lg text-white tracking-wide">
                                            Counter Pickup
                                        </h4>
                                        <p className="font-sans text-xs text-slate-300 group-hover:text-white leading-relaxed">
                                            Ayyoub Chowk counter se live inspect kar ke original part hand-to-hand lein.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reusable Button Components from Button.tsx */}
                        <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                            <GrowthPlanButton
                                text="SEND PHOTO ON WHATSAPP"
                                href={whatsappLink}
                                variant="red"
                                className="!py-2.5 !px-4 sm:!py-3.5 sm:!px-7 font-machina font-bold !text-[11px] sm:!text-xs uppercase tracking-wider shadow-xl shadow-red-500/30"
                            />

                            <GrowthPlanButton
                                text={`CALL: ${shopInfo.phone}`}
                                href={phoneLink}
                                variant="outline"
                                className="!py-2.5 !px-4 sm:!py-3.5 sm:!px-7 font-machina font-bold !text-[11px] sm:!text-xs uppercase tracking-wider"
                            />
                        </div>
                    </div>

                    {/* Right Column: 100% Authentic WhatsApp Chat Simulation Mockup */}
                    <div className="lg:col-span-5 w-full">
                        <div className="rounded-2xl sm:rounded-3xl bg-[#0b141a] border border-white/15 overflow-hidden shadow-2xl flex flex-col transition-all duration-300 hover:border-white/25">
                            
                            {/* WhatsApp Header Bar */}
                            <div className="bg-[#202c33] px-3.5 py-3 border-b border-black/30 flex items-center justify-between">
                                <div className="flex items-center gap-3 min-w-0">
                                    {/* WhatsApp Profile Avatar */}
                                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#128c7e] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-md">
                                        AP
                                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25d366] border-2 border-[#202c33]" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <h4 className="font-sans font-bold text-xs sm:text-sm text-white truncate">
                                                Auto Parts PK Counter
                                            </h4>
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366] fill-[#25d366]/20 shrink-0" />
                                        </div>
                                        <span className="text-[11px] font-sans text-[#25d366] block truncate font-medium">
                                            online
                                        </span>
                                    </div>
                                </div>

                                {/* WhatsApp Header Action Icons */}
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Video className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                                    <Phone className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                                    <MoreVertical className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                                </div>
                            </div>

                            {/* WhatsApp Chat Body with Subtle Chat Wallpaper Pattern */}
                            <div
                                className="p-3.5 sm:p-4 space-y-3 relative text-xs font-sans min-h-[340px] flex flex-col justify-between"
                                style={{
                                    backgroundColor: '#0b141a',
                                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}
                            >
                                {/* Centered Date Pill */}
                                <div className="flex justify-center mb-1">
                                    <span className="bg-[#182229] text-[10px] text-slate-400 font-sans px-3 py-1 rounded-md shadow-sm uppercase tracking-wider font-semibold border border-white/5">
                                        TODAY
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    {/* 1. Customer Message (Outgoing Bubble - WhatsApp Dark Green #005c4b) */}
                                    <div className="flex justify-end">
                                        <div className="max-w-[88%] sm:max-w-[82%] bg-[#005c4b] text-white p-2 rounded-xl rounded-tr-xs shadow-md space-y-1.5 border border-[#005c4b]/50">
                                            {/* Photo Attachment Container */}
                                            <div className="w-full h-32 sm:h-38 rounded-lg overflow-hidden bg-black/40 relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop"
                                                    alt="Corolla Japanese Brake Pad Part Sample"
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                                <span className="absolute bottom-1.5 right-2 text-[9px] bg-black/75 px-1.5 py-0.5 rounded text-slate-200 backdrop-blur-xs font-sans font-medium flex items-center gap-1">
                                                    📷 Photo
                                                </span>
                                            </div>

                                            {/* Caption Message */}
                                            <p className="leading-snug text-[11px] sm:text-xs text-slate-100 px-1 pt-0.5">
                                                "Bhai Corolla 2018 ka front brake pad kharab ho gaya hai, genuine Japanese mil jayega?"
                                            </p>

                                            {/* Timestamp + Blue Double Checks */}
                                            <div className="flex items-center justify-end gap-1 text-[9px] text-slate-300/80 px-1">
                                                <span>10:42 PM</span>
                                                <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. Store Response (Incoming Bubble - WhatsApp Dark Slate #202c33) */}
                                    <div className="flex justify-start">
                                        <div className="max-w-[90%] sm:max-w-[85%] bg-[#202c33] text-slate-200 p-2.5 sm:p-3 rounded-xl rounded-tl-xs shadow-md space-y-1.5 border border-white/5">
                                            <div className="flex items-center gap-1.5 text-[#25d366] font-bold text-[10px] sm:text-[11px]">
                                                <ShieldCheck className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                                                <span>Genuine Advics / Akebono In Stock</span>
                                            </div>
                                            <p className="leading-snug text-[11px] sm:text-xs text-slate-200">
                                                "G bhai, bilkul counter stock mein available hai! Ayyoub Chowk counter par kisi bhi waqt aakar inspect karein aur hand-to-hand le jayein."
                                            </p>
                                            
                                            {/* Status & Timestamp */}
                                            <div className="pt-1 text-[9px] sm:text-[10px] text-slate-400 flex items-center justify-between border-t border-white/5">
                                                <span className="text-[#25d366] font-bold">✓ Counter Pickup Ready</span>
                                                <span>10:44 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp Bottom Input Message Bar */}
                                <div className="mt-2 bg-[#202c33] rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/5 shadow-inner">
                                    <Smile className="w-4 h-4 text-slate-400 shrink-0 cursor-pointer" />
                                    <span className="text-slate-400 text-[11px] flex-1 truncate select-none">
                                        Type a message or send photo...
                                    </span>
                                    <Paperclip className="w-4 h-4 text-slate-400 shrink-0 cursor-pointer" />
                                    <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md cursor-pointer hover:bg-[#25d366] transition-colors">
                                        <Send className="w-3.5 h-3.5" />
                                    </div>
                                </div>

                            </div>

                            {/* Trust Bar at bottom of card */}
                            <div className="bg-[#111b21] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-machina text-slate-400">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3 text-[#25d366] shrink-0" />
                                    <span>Average Reply Time: <strong className="text-white">~2 Mins</strong></span>
                                </span>
                                <span className="text-[#25d366] font-bold uppercase tracking-wider">Free Part Matching</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
