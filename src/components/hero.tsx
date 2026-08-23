'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { shopInfo } from '@/data/partsData';
import { BookCallButton, GrowthPlanButton } from '@/components/Button';

export const Hero: React.FC = () => {
    const whatsappLink = `https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Mujhe Auto Parts & Accessories PK Bahawalpur se replacement parts ki availability aur rate confirm karna hai.")}`;
    const phoneLink = `tel:${shopInfo.phone.replace(/\s+/g, '')}`;

    return (
        <section id="hero" className="relative w-full h-screen min-h-screen sm:h-screen sm:min-h-screen h-[100dvh] min-h-[100dvh] bg-[#08080a] text-white flex items-center overflow-hidden">
            {/* Background Dark Car Image on Right Side */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop"
                    alt="Genuine Car Spare Parts"
                    className="w-full h-full object-cover object-right filter brightness-95 contrast-125 scale-105"
                />
                
                {/* Left Fade Gradient Overlays (Ensures Left Text is 100% High-Contrast Crisp) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/90 via-50% to-transparent w-full lg:w-3/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-[#08080a]/40" />

                {/* Bottom Seamless Blend Gradient into #0c1017 */}
                <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/85 to-transparent pointer-events-none z-10" />
            </div>

            {/* Content Container (Full Width Edge-to-Edge Container) */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-28 sm:pt-36 pb-20 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-2xl"
                >
                    {/* Trust & Location Badge */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-machina font-extrabold text-[#e03627] tracking-[0.2em] uppercase mb-4">
                        <ShieldCheck className="w-4 h-4 text-[#e03627]" />
                        <span>GENUINE & OEM REPLACEMENT SPARES • BAHAWALPUR</span>
                    </div>

                    {/* Headline: GENUINE PARTS • SAME DAY */}
                    <h1 className="font-druk text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] font-black select-none drop-shadow-xl">
                        GENUINE PARTS<br />
                        <span className="text-white">SAME DAY</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-sm sm:text-base text-slate-300 font-machina max-w-lg leading-relaxed font-medium">
                        Authorized replacement spare parts for Toyota, Honda & Suzuki. Genuine Japanese brake pads, suspension shocks, filters & engine spares with instant counter pickup at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur.
                    </p>

                    {/* Action Buttons: Signature Button Components */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                        <BookCallButton
                            text="Inquire on WhatsApp"
                            href={whatsappLink}
                            variant="red"
                            className="shadow-xl shadow-red-500/30 !py-2.5 !px-4 sm:!py-3.5 sm:!px-7 !text-xs sm:!text-sm"
                        />

                        <GrowthPlanButton
                            text={`Call: ${shopInfo.phone}`}
                            href={phoneLink}
                            variant="outline"
                            className="!py-2.5 !px-4 sm:!py-3.5 sm:!px-7 !text-xs sm:!text-sm"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

