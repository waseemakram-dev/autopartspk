'use client';

import React from 'react';
import Link from 'next/link';

export const ProductsCatalogHero: React.FC = () => {
    return (
        <section className="breadcumb-wrapper relative w-full bg-[#0f1115] text-white pt-28 pb-10 sm:pt-36 lg:pb-0 border-b border-gray-800 overflow-hidden">
            {/* Top Red Racing Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d31826]" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    
                    {/* Left Column: Breadcrumb Content */}
                    <div className="lg:col-span-6 space-y-4 text-center sm:text-left pb-10 sm:pb-16">
                        <div className="breadcumb-content">
                            {/* Breadcrumb Title */}
                            <h1 className="breadcumb-title text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase font-['Chakra_Petch',sans-serif] leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#d31826]">Products</span>
                            </h1>

                            {/* Breadcrumb Menu */}
                            <ul className="breadcumb-menu flex items-center justify-center sm:justify-start space-x-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-400 mt-4">
                                <li>
                                    <Link href="/" className="hover:text-[#d31826] transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-[#d31826]">•</li>
                                <li className="active text-[#d31826]">Products Catalog</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Hero Image requested by user */}
                    <div className="lg:col-span-6 hidden lg:flex justify-end items-end self-end">
                        <div className="breadcumb-thumb flex items-end">
                            <img
                                src="https://laravel-servixa.mnsithub.com/assets/images/resources/page-header-img-1.png"
                                alt="Auto Parts Catalog"
                                className="max-h-[300px] sm:max-h-[360px] object-contain block mb-0 leading-none drop-shadow-[0_10px_30px_rgba(211,24,38,0.3)]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductsCatalogHero;
