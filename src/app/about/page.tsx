'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { AboutHero } from '@/components/about/AboutHero';
import AboutTwo from '@/components/about/AboutTwo';
import ProcessAreaOne from '@/components/about/ProcessAreaOne';
import { BrandsSpecialization } from '@/components/about/BrandsSpecialization';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full">
            {/* Global Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="w-full flex-1 flex flex-col items-center">
                {/* 1. Page Header */}
                <AboutHero />

                {/* 2. Intro Section */}
                <AboutTwo />

                {/* 3. Work Process */}
                <ProcessAreaOne />

                {/* 4. Brands We Deal In (Confirmed Toyota, Honda, Suzuki) */}
                <BrandsSpecialization />

                {/* 5. Main Reusable FAQ Section (Same as Landing Page) */}
                <FaqSection />

                {/* 6. Call To Action Section (Directly Above Footer) */}
                <CtaSection />
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
