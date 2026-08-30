'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { CarCompatibilityFinder } from '@/components/CarCompatibilityFinder';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeatureSection } from '@/components/FeatureSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { ServicesSection } from '@/components/ServicesSection';
import { ShopLocationSection } from '@/components/ShopLocationSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { shopInfo } from '@/data/partsData';
import { Phone, MessageSquare } from 'lucide-react';

export default function Home() {
    const [isPageVisible, setIsPageVisible] = useState(false);

    useEffect(() => {
        // Sync homepage fade-in with speedometer preloader completion (~1.7s)
        const timer = setTimeout(() => {
            setIsPageVisible(true);
        }, 1700);
        return () => clearTimeout(timer);
    }, []);

    const whatsappLink = `https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Mujhe Auto Parts & Accessories PK Bahawalpur se replacement parts ki inquiry karni hai.")}`;
    const phoneLink = `tel:${shopInfo.phone.replace(/\s+/g, '')}`;

    return (
        <div className={`min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full transition-opacity duration-700 ease-in-out ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Floating Glassmorphic Navbar Overlay */}
            <Navbar />

            {/* Main Sections */}
            <main className="w-full flex-1 flex flex-col items-center">
                {/* Hero Showcase (100vh Full Screen with Navbar overlay) */}
                <Hero />

                {/* Vehicle Compatibility Card Section (White Section with Off-White Overlapping Card) */}
                <CarCompatibilityFinder />

                {/* Snap & Send Part Photo Section */}
                <FeatureSection />

                {/* Spare Parts Categories */}
                <CategoryGrid />

                {/* Featured Products Stock */}
                <FeaturedProducts />

                {/* Services Section */}
                <ServicesSection />

                {/* Physical Store & Location Showcase */}
                <ShopLocationSection />

                {/* Roman Urdu FAQs */}
                <FaqSection />

                {/* Car Towing Scroll CTA Section */}
                <CtaSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
