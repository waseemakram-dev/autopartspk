'use client';

import React from 'react';
import { Camera, ArrowRight, MessageSquare, Phone, Zap } from 'lucide-react';
import { shopInfo } from '@/data/partsData';

export const FeatureSection: React.FC = () => {
    const handleSnapSendWhatsApp = () => {
        const text = "Hello! Here is a photo of my old/damaged car part. Please provide the exact OEM price and availability at your Bahawalpur store.";
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const phoneLink = `tel:${shopInfo.phone.replace(/\s+/g, '')}`;

    return (
        <section id="snap-send" className="w-full bg-[#e8eeee] py-12 px-4 sm:px-8 border-y border-slate-300/60">
            <div className="w-full max-w-[1400px] mx-auto">
                
                {/* Clean Human-Designed Snap & Send Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
                    
                    {/* Left: Text & 3 Modern Step Cards */}
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e03627]/10 text-xs font-machina font-bold text-[#e03627] uppercase tracking-wider">
                            <Camera className="w-3.5 h-3.5" />
                            <span>INSTANT PHOTO IDENTIFIER</span>
                        </div>

                        <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0f1115] leading-tight">
                            DON'T KNOW THE PART NAME? <br />
                            <span className="text-[#e03627]">SEND A PHOTO!</span>
                        </h2>

                        <p className="text-slate-600 font-machina text-xs sm:text-sm leading-relaxed">
                            OEM part numbers often wear off or technical names can be tricky. Simply snap a photo of your old part with your phone and send it to our Bahawalpur WhatsApp helpline for an instant price quote.
                        </p>

                        {/* Ultra-Modern 3-Step Timeline Flow */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                            
                            {/* Step 1 */}
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-2 group hover:border-[#e03627]/40 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="font-druk text-lg text-[#e03627] font-bold">01</span>
                                    <div className="w-7 h-7 rounded-lg bg-red-100/80 text-[#e03627] flex items-center justify-center text-xs font-bold">
                                        <Camera className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-druk text-sm uppercase text-[#0f1115]">1. Snap Photo</h4>
                                    <p className="text-[11px] font-machina text-slate-500 mt-0.5">Take a picture of your old or broken part</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-2 group hover:border-emerald-500/40 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="font-druk text-lg text-emerald-600 font-bold">02</span>
                                    <div className="w-7 h-7 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center text-xs font-bold">
                                        <MessageSquare className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-druk text-sm uppercase text-[#0f1115]">2. WhatsApp Us</h4>
                                    <p className="text-[11px] font-machina text-slate-500 mt-0.5">Send directly to our counter desk</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-2 group hover:border-amber-500/40 transition-colors">
                                <div className="flex items-center justify-between">
                                    <span className="font-druk text-lg text-amber-600 font-bold">03</span>
                                    <div className="w-7 h-7 rounded-lg bg-amber-100/80 text-amber-600 flex items-center justify-center text-xs font-bold">
                                        <Zap className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-druk text-sm uppercase text-[#0f1115]">3. Instant Quote</h4>
                                    <p className="text-[11px] font-machina text-slate-500 mt-0.5">Get stock status & rate in 5 mins</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Action CTA Box */}
                    <div className="w-full lg:w-auto shrink-0 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4 text-center lg:text-left">
                        <div>
                            <span className="text-[11px] font-machina text-emerald-600 font-bold uppercase tracking-wider block mb-1">
                                ● WhatsApp Live Help Desk Active
                            </span>
                            <h3 className="font-druk text-xl uppercase tracking-tight text-[#0f1115]">
                                Send Photo on WhatsApp
                            </h3>
                        </div>

                        <button
                            onClick={handleSnapSendWhatsApp}
                            className="w-full px-6 py-4 rounded-2xl bg-[#e03627] hover:bg-[#cf2f20] text-white font-machina font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-transform active:scale-95 cursor-pointer"
                        >
                            <Camera className="w-4 h-4" />
                            <span>Send Photo via WhatsApp</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs font-machina text-slate-500">
                            <span>Direct Call Helpline:</span>
                            <a href={phoneLink} className="text-[#0f1115] font-bold hover:underline flex items-center gap-1">
                                <Phone className="w-3 h-3 text-[#e03627]" />
                                <span>{shopInfo.phone}</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FeatureSection;
