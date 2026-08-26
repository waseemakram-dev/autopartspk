'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { shopInfo } from '@/data/partsData';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Send, Sparkles } from 'lucide-react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Assalam o Alaikum! 
Naam: ${name}
Phone: ${phone}
Message: ${message}`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full">
            {/* Global Navbar */}
            <Navbar />

            <main className="w-full flex-1 flex flex-col items-center">
                
                {/* 1. Page Header (About Us Banner Pattern) */}
                <section className="breadcumb-wrapper relative w-full bg-[#0f1115] text-white pt-28 pb-14 sm:pt-36 border-b border-gray-800 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#d31826]" />
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase font-['Chakra_Petch',sans-serif] leading-tight">
                                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#d31826]">Us</span>
                            </h1>
                            <ul className="flex items-center justify-center space-x-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-400 mt-4">
                                <li>
                                    <Link href="/" className="hover:text-[#d31826] transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-[#d31826]">•</li>
                                <li className="active text-[#d31826]">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. Main Contact Block (2-Column Split) */}
                <section className="w-full py-16 sm:py-24 bg-[#fafbfc]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <span className="inline-block text-[#d31826] font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1115] tracking-tight">
                                Visit Our Shop Counter Or <span className="text-[#d31826]">Reach Out Live</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                            
                            {/* Left Column: Shop Details Card */}
                            <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-gray-200 shadow-lg flex flex-col justify-between space-y-8">
                                <div className="space-y-6">
                                    <div className="border-b border-gray-100 pb-5">
                                        <span className="text-xs font-extrabold text-[#d31826] uppercase tracking-wider block mb-1">
                                            Store Counter Details
                                        </span>
                                        <h3 className="text-2xl font-extrabold text-[#0f1115]">
                                            Auto Parts & Accessories PK
                                        </h3>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#d31826] flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-0.5">
                                                Address
                                            </h4>
                                            <p className="text-sm font-bold text-[#0f1115] leading-relaxed">
                                                Ayyoub Chowk, near Cheeka Wala Chowk, Bahawalpur
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#d31826] flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-0.5">
                                                Phone Number
                                            </h4>
                                            <a
                                                href="tel:03045759687"
                                                className="text-sm font-bold text-[#0f1115] hover:text-[#d31826] transition-colors"
                                            >
                                                0304 5759687
                                            </a>
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-11 h-11 rounded-2xl bg-green-50 text-emerald-600 flex items-center justify-center shrink-0">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-0.5">
                                                WhatsApp Live Desk
                                            </h4>
                                            <a
                                                href={`https://wa.me/${shopInfo.whatsapp}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-bold text-emerald-600 hover:underline"
                                            >
                                                0304 5759687 (Click to Chat)
                                            </a>
                                        </div>
                                    </div>

                                    {/* Timings */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#d31826] flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-0.5">
                                                Store Timings
                                            </h4>
                                            <p className="text-sm font-bold text-[#0f1115]">
                                                Monday – Saturday: 9:00 AM – 9:30 PM
                                            </p>
                                            <p className="text-xs text-gray-500 font-medium">
                                                Sunday: Closed (Emergency On-Call Support)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Get Directions Button */}
                                <a
                                    href="https://maps.google.com/?q=Ayyoub+Chowk+Bahawalpur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-[#0f1115] hover:bg-[#d31826] text-white rounded-2xl font-extrabold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors duration-300 shadow-md"
                                >
                                    <Navigation className="w-4 h-4" />
                                    <span>Get Directions</span>
                                </a>
                            </div>

                            {/* Right Column: Google Maps Embed */}
                            <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[420px] lg:min-h-[100%] relative">
                                <iframe
                                    title="Auto Parts Shop Location Ayyoub Chowk Bahawalpur"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.3214589123!2d71.6833!3d29.3957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjknMjMuNzg0Ik4gNzHCsDQwJzU5.84OCJF!5e0!3m2!1sen!2spk!4v1650000000000!5m2!1sen!2spk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '420px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. Contact Form (WhatsApp Direct Integration) */}
                <section className="w-full py-16 sm:py-24 bg-white border-t border-gray-200">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        
                        <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-7 sm:p-12 shadow-sm">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-wider mb-3">
                                    <Sparkles className="w-4 h-4 text-emerald-600" />
                                    <span>Instant WhatsApp Message</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1115]">
                                    Send Us A Direct Inquiry
                                </h3>

                                {/* UX Clarification Note */}
                                <p className="text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-100/60 rounded-xl py-3 px-4 mt-4 leading-relaxed max-w-xl mx-auto border border-emerald-200">
                                    Neeche form fill karein — aap ka message seedha humare WhatsApp par chala jayega, hum turant reply karenge.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-extrabold uppercase text-gray-700 mb-1.5">
                                        Naam (Full Name) *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Apna poora naam likhein..."
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-extrabold uppercase text-gray-700 mb-1.5">
                                        Phone Number (WhatsApp) *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="0300 1234567"
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-extrabold uppercase text-gray-700 mb-1.5">
                                        Message / Part Detail *
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Apni gari ka model (e.g. Corolla 2018) aur required part details likhein..."
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-emerald-600/30 cursor-pointer"
                                >
                                    <MessageSquare className="w-5 h-5 fill-current" />
                                    <span>Send on WhatsApp</span>
                                </button>
                            </form>
                        </div>

                    </div>
                </section>

                {/* 4. Reusable FAQ Section (Same as Landing & About Page) */}
                <FaqSection />

                {/* 5. Call To Action Section (Car Towing CTA directly above Footer) */}
                <CtaSection />

            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
