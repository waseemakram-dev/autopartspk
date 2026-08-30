import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ContactClient } from '@/components/contact/ContactClient';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Contact Auto Parts PK Bahawalpur | Ayyoub Chowk Counter & WhatsApp',
    description: `Visit our spare parts store counter at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur or call ${process.env.NEXT_PUBLIC_PHONE_NUMBER || "0304 5759687"} for direct WhatsApp inquiries.`,
    keywords: [
        'Contact Auto Parts Bahawalpur',
        'Ayyoub Chowk Spare Parts Shop',
        'Auto Parts WhatsApp Bahawalpur',
        'Cheeka Wala Chowk Spare Store Phone'
    ],
    openGraph: {
        title: 'Contact Auto Parts & Accessories PK | Bahawalpur Counter',
        description: `Get directions to Ayyoub Chowk counter or chat directly on WhatsApp ${process.env.NEXT_PUBLIC_PHONE_NUMBER || "0304 5759687"}.`,
        url: 'https://autopartsbahawalpur.pk/contact',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function ContactPage() {
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
                "name": "Contact Us",
                "item": "https://autopartsbahawalpur.pk/contact"
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
                <ContactClient />
                <FaqSection />
                <CtaSection />
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
