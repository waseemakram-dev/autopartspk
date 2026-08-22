'use client';

import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Store, Clock, Phone, MapPin } from 'lucide-react';
import { shopInfo } from '@/data/partsData';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="w-full max-w-[1440px] mx-auto py-16 px-4 sm:px-6">
            <div className="bg-[#11141a] text-white rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#e23b2c]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-slate-300 font-machina">
                            <ShieldCheck className="w-4 h-4 text-[#e23b2c]" />
                            <span>ABOUT AUTO PARTS & ACCESSORIES PK</span>
                        </div>

                        <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                            Bahawalpur's Most Trusted <br />
                            <span className="text-[#e23b2c]">Japanese Auto Spares</span> Hub
                        </h2>

                        <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                            Auto Parts & Accessories PK is the trusted automotive partner for vehicle owners, professional mechanics, and fleet managers across Bahawalpur and South Punjab. We stand firmly against counterfeits, supplying exclusively genuine Japanese and verified OEM Pakistani parts.
                        </p>

                        {/* 4 Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-[#e23b2c]" />
                                    <span className="font-druk text-sm uppercase text-white tracking-tight">100% Genuine OEM</span>
                                </div>
                                <p className="text-xs text-slate-400 font-sans">
                                    Factory-sealed components from Toyota, Honda, Suzuki, Denso, and Aisin.
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Store className="w-4 h-4 text-[#e23b2c]" />
                                    <span className="font-druk text-sm uppercase text-white tracking-tight">Direct Counter Pickup</span>
                                </div>
                                <p className="text-xs text-slate-400 font-sans">
                                    Visit our Model Town Dubai Chowk counter to inspect parts in person.
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#e23b2c]" />
                                    <span className="font-druk text-sm uppercase text-white tracking-tight">Same Day Dispatch</span>
                                </div>
                                <p className="text-xs text-slate-400 font-sans">
                                    Daily cargo dispatches to Ahmedpur, Yazman, Lodhran, and Hasilpur.
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-[#e23b2c]" />
                                    <span className="font-druk text-sm uppercase text-white tracking-tight">Expert Mechanic Advice</span>
                                </div>
                                <p className="text-xs text-slate-400 font-sans">
                                    Chassis and VIN verification guaranteeing zero-error model compatibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (5 cols) - Shop Highlights Box */}
                    <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
                        <h3 className="font-druk text-2xl uppercase tracking-tight text-white border-b border-white/10 pb-3">
                            Store Highlights
                        </h3>

                        <div className="space-y-4 text-xs font-machina">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#e23b2c] shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-slate-400 block font-normal">Physical Store Location:</span>
                                    <span className="text-white font-semibold">{shopInfo.address}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-slate-400 block font-normal">Operating Hours:</span>
                                    <span className="text-white font-semibold">{shopInfo.timings} ({shopInfo.days})</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#e23b2c] shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-slate-400 block font-normal">Helpline & WhatsApp:</span>
                                    <span className="text-white font-bold">{shopInfo.phone}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <a
                                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Hello! I would like to get information regarding AutoParts PK Bahawalpur.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 rounded-xl bg-[#e23b2c] hover:bg-[#cf3224] text-white font-machina font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-transform active:scale-95"
                            >
                                <span>Connect with Store Manager</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
