import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ProductsCatalogHero } from '@/components/products/ProductsCatalogHero';
import { ProductsCatalogClient } from '@/components/products/ProductsCatalogClient';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { allProducts } from '@/data/partsData';

export const metadata: Metadata = {
    title: 'Genuine Auto Spare Parts Catalog Bahawalpur | Toyota, Honda, Suzuki, KIA',
    description: 'Browse 100% genuine Japanese OEM brake pads, suspensions, spark plugs, filters & clutch kits in Bahawalpur. Check PKR prices & order on WhatsApp.',
    keywords: [
        'Auto Parts Catalog Bahawalpur',
        'Toyota Genuine Parts Bahawalpur',
        'Honda Spare Parts Pakistan',
        'Suzuki OEM Parts Bahawalpur',
        'Car Brake Pads Price PKR',
        'KYB Shock Absorbers Bahawalpur'
    ],
    openGraph: {
        title: 'Genuine Auto Parts Catalog Bahawalpur | Toyota, Honda, Suzuki',
        description: 'Browse authentic Japanese OEM & high-grade replacement parts at Ayyoub Chowk counter, Bahawalpur.',
        url: 'https://autopartsbahawalpur.pk/products',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function ProductsPage() {
    // Schema 1: ItemList Product Catalog JSON-LD
    const productListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Genuine Car Spare Parts Catalog Bahawalpur",
        "description": "Authentic Toyota, Honda, Suzuki, Hyundai, KIA, Daihatsu spare parts in Bahawalpur",
        "itemListElement": allProducts.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "image": product.image,
                "description": product.description,
                "sku": product.partNumber,
                "brand": {
                    "@type": "Brand",
                    "name": product.brand
                },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "PKR",
                    "price": product.pricePKR,
                    "itemCondition": product.condition.includes('OEM') ? "https://schema.org/NewCondition" : "https://schema.org/RefurbishedCondition",
                    "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                    "seller": {
                        "@type": "AutoPartsStore",
                        "name": "Auto Parts & Accessories PK"
                    }
                }
            }
        }))
    };

    // Schema 2: BreadcrumbList JSON-LD
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
                "name": "Products Catalog",
                "item": "https://autopartsbahawalpur.pk/products"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-[#0f1115] flex flex-col items-center w-full">
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Global Navbar */}
            <Navbar />

            {/* Main Page Content */}
            <main className="w-full flex-1 flex flex-col items-center">
                {/* 1. Page Header (Compact Dark Banner) */}
                <ProductsCatalogHero />

                {/* 2. Sticky Filter/Search Bar + Products Grid + Pagination + Empty State */}
                <ProductsCatalogClient />

                {/* 3. Local Roman Urdu FAQs */}
                <FaqSection />

                {/* 4. CTA Towing Scroll Banner */}
                <CtaSection />
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
