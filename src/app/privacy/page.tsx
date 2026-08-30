import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';
import { shopInfo } from '@/data/partsData';
import { ShieldCheck, Calendar, Lock, CreditCard, MessageSquare, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Auto Parts & Accessories PK Bahawalpur',
    description: 'Transparent privacy policy for Auto Parts & Accessories PK. Learn how we handle WhatsApp part inquiries with zero online payment storage.',
    openGraph: {
        title: 'Privacy Policy | Auto Parts & Accessories PK',
        description: 'Our transparent data practices for walk-in counter customers and WhatsApp part inquiries.',
        url: 'https://autopartsbahawalpur.pk/privacy',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function PrivacyPolicyPage() {
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
                "name": "Privacy Policy",
                "item": "https://autopartsbahawalpur.pk/privacy"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full font-['Space_Grotesk',sans-serif]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Global Navbar */}
            <Navbar />

            {/* Page Hero Header (Dark Theme matching About/Products) */}
            <section className="relative w-full bg-[#0f1115] text-white pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-gray-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#d31826]" />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-3 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-['Chakra_Petch',sans-serif] leading-tight">
                            Privacy <span className="text-[#d31826]">Policy</span>
                        </h1>

                        <ul className="flex items-center justify-center sm:justify-start space-x-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-[#d31826] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li className="text-[#d31826]">•</li>
                            <li className="text-[#d31826]">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Main Policy Content Container */}
            <main className="w-full flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 text-slate-800">
                    
                    {/* Last Updated Badge */}
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full w-fit border border-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-[#d31826]" />
                        <span>Last Updated: August 30, 2026</span>
                    </div>

                    {/* Section 1: Introduction */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[#d31826]" />
                            1. Introduction & Business Context
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Welcome to <strong>Auto Parts & Accessories PK</strong>. We operate a physical retail spare parts store located at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur, Punjab, Pakistan. This website serves as a digital stock catalog and local inquiry portal for car owners, workshops, and mechanics in Bahawalpur and South Punjab.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Your privacy and trust are paramount to us. This document outlines our straightforward, transparent data practices.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 2: Information We Collect */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-[#d31826]" />
                            2. Information Collection & Usage
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We collect minimal data necessary to answer your spare part inquiries:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                            <li>
                                <strong>WhatsApp Inquiries:</strong> When you initiate a conversation via our WhatsApp button ({shopInfo.phone}), your phone number, name, and message are received directly on our store WhatsApp Business account. We use this information solely to verify part compatibility, confirm PKR pricing, and arrange local pickup or dispatch.
                            </li>
                            <li>
                                <strong>No Customer Database Storage:</strong> We do not store or sell customer contact lists, nor do we run aggressive email marketing databases.
                            </li>
                        </ul>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 3: No Financial Data */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-[#d31826]" />
                            3. No Online Financial Data Collection
                        </h2>
                        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 leading-relaxed">
                            <strong>Explicit Clarification:</strong> This website is not an online e-commerce checkout portal. We <strong>never collect, store, or ask for credit card, debit card, or bank account numbers</strong> on this website. All financial transactions take place in person at our physical shop counter in cash or via direct bank transfer upon part inspection.
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 4: Cookies & Web Performance */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <Lock className="w-5 h-5 text-[#d31826]" />
                            4. Cookies & Browser Caching
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Our website uses basic technical cookies and standard browser caching to improve page rendering speeds over mobile 4G networks in South Punjab. We do not use cross-site tracking pixels or third-party ad network cookies.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 5: Contact Information */}
                    <section className="space-y-3 bg-slate-900 text-white rounded-2xl p-6">
                        <h3 className="text-lg font-bold font-['Rajdhani',sans-serif] uppercase text-white flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#d31826]" />
                            Direct Privacy Questions & Store Counter
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            If you have questions regarding our privacy practices, please contact us directly:
                        </p>
                        <div className="text-xs text-gray-300 space-y-1 font-mono pt-2">
                            <div>• Store Name: Auto Parts & Accessories PK</div>
                            <div>• Location: Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur</div>
                            <div>• Phone / WhatsApp: {shopInfo.phone}</div>
                            <div>• Timings: {shopInfo.timings} ({shopInfo.days})</div>
                        </div>
                    </section>

                </div>
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
