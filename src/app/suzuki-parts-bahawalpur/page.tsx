import React from 'react';
import type { Metadata } from 'next';
import { BrandPageClient } from '@/components/brands/BrandPageClient';

export const metadata: Metadata = {
    title: 'Suzuki Genuine Spare Parts Bahawalpur | Alto, Cultus, Wagon R OEM',
    description: '100% genuine Suzuki OEM clutch kits, Aisin pressure plates, NGK spark plugs & brake pads in Bahawalpur. Fast Ayyoub Chowk shop counter pickup.',
    keywords: [
        'Suzuki Spare Parts Bahawalpur',
        'Suzuki Alto 660cc Parts Bahawalpur',
        'Suzuki Cultus Clutch Kit Price PKR',
        'Aisin Clutch Plate Suzuki Bahawalpur',
        'Suzuki OEM Counter Ayyoub Chowk'
    ],
    openGraph: {
        title: 'Suzuki Genuine Spare Parts Bahawalpur | OEM Stock',
        description: 'Authentic Suzuki spare parts at Ayyoub Chowk counter near Cheeka Wala Chowk, Bahawalpur.',
        url: 'https://autopartsbahawalpur.pk/suzuki-parts-bahawalpur',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function SuzukiPartsPage() {
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
                "name": "Products",
                "item": "https://autopartsbahawalpur.pk/products"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Suzuki Parts Bahawalpur",
                "item": "https://autopartsbahawalpur.pk/suzuki-parts-bahawalpur"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BrandPageClient
                brandName="Suzuki"
                brandSlug="suzuki-parts-bahawalpur"
                pageTitle="Genuine Suzuki Parts in Bahawalpur"
                pageSubtitle="Authentic Japanese Aisin Clutch Kits, NGK Laser Plugs, Suzuki Genuine Engine Oils & Filters for Alto 660cc, Cultus, Wagon R, Swift & Mehran."
                popularModels={[
                    { name: 'Suzuki Alto 660cc', years: '2019 - 2024', badge: '#1 Popular' },
                    { name: 'Cultus K10B / EFI', years: '2008 - 2024', badge: 'High Demand' },
                    { name: 'Wagon R VXL / VXR', years: '2014 - 2024', badge: 'Best Seller' },
                    { name: 'Suzuki Swift 1.2/1.3', years: '2010 - 2024', badge: 'In Stock' },
                    { name: 'Mehran Euro II', years: '1989 - 2019', badge: 'Classic OEM' },
                    { name: 'Bolan Carry & Ravi', years: '1990 - 2024', badge: 'Commercial' },
                ]}
                buyerGuideTitle="Suzuki Genuine Parts Buyers Guide in Bahawalpur"
                buyerGuideContent={[
                    "Pakistani urban roads par Suzuki hatchbacks sab se ziada use hoti hain. Lekin local market mein copy Aisin clutch plates aur duplicate spark plugs ki wajah se fuel average (mileage) drop ho jati hai aur clutch pedal heavy ho jata hai.",
                    "Auto Parts & Accessories PK par hum sirf 100% authentic Japanese Aisin Clutch & Pressure Plate kits (KS-024A) aur genuine NGK Laser Iridium plugs (ILZKR7B-11) supply karte hain jo feather-light pedal feel aur optimal fuel efficiency dete hain.",
                    "Shop counter Ayyoub Chowk near Cheeka Wala Chowk par aap original parts physical verify karke purchase kar sakte hain."
                ]}
                brandFaqs={[
                    {
                        question: "Suzuki Alto 660cc ke genuine spark plugs aur air filter kitne ke hain?",
                        answer: "Alto 660cc ke NGK Laser Iridium Plugs Set of 4 (PKR 8,200) aur genuine air filter counter par in stock available hote hain."
                    },
                    {
                        question: "Suzuki Mehran aur Bolan ke Aisin Clutch Kit in stock hain?",
                        answer: "Ji haan! Aisin Genuine Japanese Clutch & Pressure Plate kit (KS-024A) PKR 7,400 counter price par in stock available hai."
                    }
                ]}
            />
        </>
    );
}
