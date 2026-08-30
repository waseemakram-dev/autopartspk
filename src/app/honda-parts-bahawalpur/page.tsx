import React from 'react';
import type { Metadata } from 'next';
import { BrandPageClient } from '@/components/brands/BrandPageClient';
import { shopInfo } from '@/data/partsData';

export const metadata: Metadata = {
    title: 'Honda Genuine Spare Parts Bahawalpur | Civic, City, BR-V OEM',
    description: 'Authentic Japanese Honda OEM brake pads, KYB twin-tube shocks, NGK Laser Iridium plugs & cabin filters in Bahawalpur. Fast Ayyoub Chowk counter pickup.',
    keywords: [
        'Honda Spare Parts Bahawalpur',
        'Honda Civic Rebirth Suspension Bahawalpur',
        'Honda City Genuine Parts Bahawalpur',
        'Honda OEM Counter Ayyoub Chowk',
        'NGK Plugs Honda Civic'
    ],
    openGraph: {
        title: 'Honda Genuine Spare Parts Bahawalpur | OEM Stock',
        description: 'Authentic Japanese Honda spare parts at Ayyoub Chowk counter near Cheeka Wala Chowk, Bahawalpur.',
        url: 'https://autopartsbahawalpur.pk/honda-parts-bahawalpur',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function HondaPartsPage() {
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
                "name": "Honda Parts Bahawalpur",
                "item": "https://autopartsbahawalpur.pk/honda-parts-bahawalpur"
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
                brandName="Honda"
                brandSlug="honda-parts-bahawalpur"
                pageTitle="Genuine Honda Parts in Bahawalpur"
                pageSubtitle="Authentic Japanese OEM Honda Civic Rebirth/Reborn/Turbo, Honda City Aspire/1.2 & BR-V shock absorbers, brake pads & filters."
                popularModels={[
                    { name: 'Civic Rebirth (2012-16)', years: '2012 - 2016', badge: 'High Demand' },
                    { name: 'Civic Reborn (2006-12)', years: '2006 - 2012', badge: 'Best Seller' },
                    { name: 'Civic RS Turbo / XI', years: '2016 - 2024', badge: '100% OEM' },
                    { name: 'Honda City Aspire / 1.2', years: '2009 - 2024', badge: 'In Stock' },
                    { name: 'Honda BR-V & Vezel', years: '2015 - 2024', badge: 'SUV Spares' },
                    { name: 'Honda N-Wgn / N-Box', years: '2014 - 2022', badge: '660cc Imports' },
                ]}
                buyerGuideTitle="Honda Genuine Parts Buyers Guide in Bahawalpur"
                buyerGuideContent={[
                    "Honda vehicles (khass kar Civic aur City) apni precise handling aur stiff suspension for road grip ke liye mashhoor hain. Low quality local shocks ya fake steering racks lagane se ride stiffness khatam ho jati hai aur steering wheel mein vibration aati hai.",
                    "Humare Ayyoub Chowk counter par genuine KYB Excel-G gas shocks, Nissin Japan brake pads, aur NGK Laser Iridium plugs available hote hain jo factory ride quality maintain rakhte hain.",
                    "Agar aap ko apni gari ke part code mein koi confusion ho, toh humare counter desk ko WhatsApp par car engine model B18/R18/L12/L15 send kar ke instant recommendation paen."
                ]}
                brandFaqs={[
                    {
                        question: "Honda Civic Rebirth ke KYB Front Shocks ki counter price kya hai?",
                        answer: `Civic Rebirth KYB Front Shocks Pair (333338-KYB) ka genuine Japanese pair PKR 19,500 mein available hai. Live WhatsApp inquiry (${shopInfo.phone}) par dispatches update ki jati hain.`
                    },
                    {
                        question: "Kya Honda City 1.2 aur Aspire ke air filters in stock mil jaenge?",
                        answer: "Ji haan, genuine Honda OEM engine air filters aur cabin AC filters hamesha ready stock counter par available rehte hain."
                    }
                ]}
            />
        </>
    );
}
