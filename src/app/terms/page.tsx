import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';
import { shopInfo } from '@/data/partsData';
import { FileText, Calendar, AlertCircle, RefreshCw, CheckCircle2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service | Auto Parts & Accessories PK Bahawalpur',
    description: 'Store counter policies, 7-day part exchange rules, PKR catalog pricing terms & vehicle fitment guidelines for Auto Parts PK Bahawalpur.',
    openGraph: {
        title: 'Terms of Service | Auto Parts & Accessories PK',
        description: 'Shop counter policies, 7-day OEM part exchange guidelines & vehicle compatibility rules.',
        url: 'https://autopartsbahawalpur.pk/terms',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function TermsOfServicePage() {
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
                "name": "Terms of Service",
                "item": "https://autopartsbahawalpur.pk/terms"
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
                            Terms of <span className="text-[#d31826]">Service</span>
                        </h1>

                        <ul className="flex items-center justify-center sm:justify-start space-x-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-[#d31826] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li className="text-[#d31826]">•</li>
                            <li className="text-[#d31826]">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Main Terms Content Container */}
            <main className="w-full flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 text-slate-800">
                    
                    {/* Last Updated Badge */}
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full w-fit border border-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-[#d31826]" />
                        <span>Last Updated: August 30, 2026</span>
                    </div>

                    {/* Section 1: Business Model Notice */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[#d31826]" />
                            1. Digital Catalog & Walk-in Store Model
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            This website is operated by <strong>Auto Parts & Accessories PK</strong> as a digital showcase catalog. All final purchases, payment transactions, and physical part handovers take place at our store counter at Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur, or via direct WhatsApp confirmation.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 2: Catalog Pricing & Stock Availability */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-[#d31826]" />
                            2. Catalog Pricing & Stock Availability
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                            <li>
                                <strong>Indicative Pricing:</strong> Prices listed on this website in PKR are catalog estimates based on recent stock imports. Due to currency fluctuations and Japanese shipment arrivals, exact final prices must be confirmed with our counter team via WhatsApp ({shopInfo.phone}) prior to ordering.
                            </li>
                            <li>
                                <strong>Stock Availability:</strong> Catalog items are subject to physical walk-in counter sales. We recommend checking current availability with our team before visiting the shop for specific rare OEM items.
                            </li>
                        </ul>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 3: Vehicle Compatibility */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d31826]" />
                            3. Vehicle Fitment & Chassis Verification
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            While our counter team offers expert advice for Toyota, Honda, Suzuki, Hyundai, KIA, Daihatsu, and Changan parts, customers are encouraged to provide their vehicle’s <strong>Chassis Number / Frame Number</strong> on WhatsApp to verify exact OEM part code alignment before purchase.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 4: Return & Exchange Policy */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-[#0f1115] uppercase tracking-tight flex items-center gap-2">
                            <RefreshCw className="w-5 h-5 text-[#d31826]" />
                            4. Shop Counter Return & Exchange Policy
                        </h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <div className="font-bold text-[#0f1115] uppercase tracking-wider text-xs">
                                Counter Exchange Guidelines:
                            </div>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>
                                    <strong>7-Day Counter Exchange:</strong> Unopened genuine parts in original Japanese factory packaging can be exchanged at our shop counter within 7 days of purchase, provided the original shop invoice is produced.
                                </li>
                                <li>
                                    <strong>Electrical / Electronic Components:</strong> Electronic items (e.g. ECUs, engine sensors, ignition coils, and relays) are tested prior to delivery and are non-returnable once unsealed or fitted.
                                </li>
                                <li>
                                    <strong>Condition Requirements:</strong> Items showing installation marks, oil stains, altered serial tags, or damaged boxes will not be eligible for exchange.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Section 5: Store Contact */}
                    <section className="space-y-3 bg-slate-900 text-white rounded-2xl p-6">
                        <h3 className="text-lg font-bold font-['Rajdhani',sans-serif] uppercase text-white flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#d31826]" />
                            Shop Counter & Inquiry Details
                        </h3>
                        <div className="text-xs text-gray-300 space-y-1 font-mono pt-1">
                            <div>• Shop Name: Auto Parts & Accessories PK</div>
                            <div>• Location: Ayyoub Chowk near Cheeka Wala Chowk, Bahawalpur</div>
                            <div>• Direct Phone / WhatsApp: {shopInfo.phone}</div>
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
