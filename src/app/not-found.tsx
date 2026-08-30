'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';
import { shopInfo } from '@/data/partsData';
import { Home, MessageSquare, Wrench } from 'lucide-react';

export default function NotFound() {
    const whatsappLink = `https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Mujhe website par car spare part ya page search karne mein help chahiye.")}`;

    return (
        <div className="min-h-screen bg-[#0f1115] text-white flex flex-col items-center w-full selection:bg-[#d31826] selection:text-white font-['Space_Grotesk',sans-serif]">
            {/* Global Navbar */}
            <Navbar />

            {/* Main Single Centered Column */}
            <main className="w-full flex-1 flex flex-col items-center justify-center relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
                
                {/* Subtle Background Wrench Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <Wrench className="w-[500px] h-[500px] text-white" />
                </div>

                <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
                    
                    {/* 1. Big Visual / Number */}
                    <h1 className="text-8xl sm:text-9xl md:text-[180px] font-extrabold font-['Rajdhani',sans-serif] tracking-tighter text-[#d31826] leading-none select-none drop-shadow-[0_10px_35px_rgba(211,24,38,0.4)]">
                        404
                    </h1>

                    {/* 2. Themed Headline */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Rajdhani',sans-serif] uppercase tracking-tight">
                        YEH PART HAMARE STOCK MEIN NAHI MILA
                    </h2>

                    {/* 3. Subtext */}
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                        Jo page aap dhoond rahe hain wo maujood nahi hai, ho sakta hai link galat ho ya page hata diya gaya ho. Chalo aapko sahi jagah pohanchate hain.
                    </p>

                    {/* 4. Two Action Buttons (Side by Side) */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-7 py-3.5 bg-[#d31826] hover:bg-[#b81320] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:scale-95 shadow-lg shadow-red-600/30"
                        >
                            <Home className="w-4 h-4" />
                            <span>Home Page Par Wapis Jayein</span>
                        </Link>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all active:scale-95"
                        >
                            <MessageSquare className="w-4 h-4 text-[#25D366]" />
                            <span>WhatsApp Par Poochein</span>
                        </a>
                    </div>

                    {/* 5. Chhota Quick Links Strip */}
                    <div className="pt-8 border-t border-white/10 text-xs text-gray-400 space-y-2">
                        <span className="font-bold text-white block sm:inline mr-2">
                            Yeh dekhna chahenge? →
                        </span>
                        <div className="inline-flex flex-wrap items-center justify-center gap-2">
                            <Link href="/products" className="hover:text-[#d31826] transition-colors underline underline-offset-4 font-bold text-white/90">
                                Products
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/products?brand=Toyota" className="hover:text-[#d31826] transition-colors underline underline-offset-4 font-bold text-white/90">
                                Toyota Parts
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/products?brand=Honda" className="hover:text-[#d31826] transition-colors underline underline-offset-4 font-bold text-white/90">
                                Honda Parts
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/products?brand=Suzuki" className="hover:text-[#d31826] transition-colors underline underline-offset-4 font-bold text-white/90">
                                Suzuki Parts
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
