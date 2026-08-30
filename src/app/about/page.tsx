import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { AboutHero } from '@/components/about/AboutHero';
import AboutTwo from '@/components/about/AboutTwo';
import ProcessAreaOne from '@/components/about/ProcessAreaOne';
import { BrandsSpecialization } from '@/components/about/BrandsSpecialization';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: 'About Auto Parts PK | 15+ Years Genuine Auto Parts Counter Bahawalpur',
    description: 'Learn about Auto Parts & Accessories PK counter history at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur. Trusted OEM supplier since 2011.',
    keywords: [
        'About Auto Parts Bahawalpur',
        'Ayyoub Chowk Auto Spare Store',
        'Toyota OEM Supplier Bahawalpur',
        'Honda Genuine Spares Counter'
    ],
    openGraph: {
        title: 'About Auto Parts & Accessories PK | Bahawalpur Auto Store',
        description: '15+ years supplying authentic Japanese spare parts to mechanics and car owners across South Punjab.',
        url: 'https://autopartsbahawalpur.pk/about',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function AboutPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://autopartsbahawalpur.pk"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://autopartsbahawalpur.pk/about"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

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
