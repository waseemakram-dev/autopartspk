'use client';

import React from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { BrandSelector } from '@/components/BrandSelector';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeatureSection } from '@/components/FeatureSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { ServicesSection } from '@/components/ServicesSection';
import { ShopLocationSection } from '@/components/ShopLocationSection';
import { AboutSection } from '@/components/AboutSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { shopInfo } from '@/data/partsData';
import { Phone, MessageSquare } from 'lucide-react';

export default function Home() {
    const whatsappLink = `https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Hello! I would like to inquire about genuine spare parts at AutoParts PK Bahawalpur.")}`;
    const phoneLink = `tel:${shopInfo.phone.replace(/\s+/g, '')}`;

    return (
        <div className="min-h-screen bg-[#e2e8ea] text-[#12161f] flex flex-col items-center">
            {/* Custom Interactive Difference Cursor */}
            <CustomCursor />
            {/* Top Bar info */}
            <div className="w-full bg-[#0c1017] text-slate-400 text-[11px] font-machina py-2 px-4 sm:px-8 border-b border-white/5">
                <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-white">
                            📍 <span>Near Dubai Chowk, Model Town, Bahawalpur</span>
                        </span>
                        <span className="hidden md:inline-block text-slate-500">•</span>
                        <span className="hidden md:inline-block text-emerald-400">
                            ⏰ {shopInfo.timings}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href={phoneLink} className="hover:text-white transition-colors flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#e23b2c]" />
                            <span>{shopInfo.phone}</span>
                        </a>
                        <span>•</span>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
                        >
                            <MessageSquare className="w-3 h-3 fill-current" />
                            <span>Live WhatsApp Desk</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Sections */}
            <main className="w-full flex-1 flex flex-col items-center py-4 space-y-8 sm:space-y-12">
                {/* Hero Showcase */}
                <Hero />

                {/* Car Brand Selector */}
                <BrandSelector />

                {/* Snap & Send Showstopper Feature */}
                <FeatureSection />

                {/* Spare Parts Categories */}
                <CategoryGrid />

                {/* Featured Products Stock */}
                <FeaturedProducts />

                {/* Services Section */}
                <ServicesSection />

                {/* Physical Store & Location Showcase */}
                <ShopLocationSection />

                {/* About & Trust Section */}
                <AboutSection />

                {/* Roman Urdu FAQs */}
                <FaqSection />

                {/* Car Towing Scroll CTA Section */}
                <CtaSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Sticky Mobile Quick Action Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#11141a]/95 backdrop-blur-xl border-t border-white/10 p-3 grid grid-cols-2 gap-3 shadow-2xl">
                <a
                    href={phoneLink}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-machina font-semibold text-xs uppercase tracking-wider border border-white/10"
                >
                    <Phone className="w-4 h-4 text-[#e23b2c]" />
                    <span>Call Store</span>
                </a>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#e23b2c] text-white font-machina font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-500/30"
                >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    );
}
