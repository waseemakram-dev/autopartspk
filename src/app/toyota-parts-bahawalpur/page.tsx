import React from 'react';
import type { Metadata } from 'next';
import { BrandPageClient } from '@/components/brands/BrandPageClient';
import { shopInfo } from '@/data/partsData';

export const metadata: Metadata = {
    title: 'Toyota Genuine Spare Parts Bahawalpur | Corolla, Yaris, Fortuner OEM',
    description: '100% genuine Japanese Toyota OEM brake pads, KYB shocks, Denso filters & spark plugs in Bahawalpur. Fast Ayyoub Chowk counter pickup & WhatsApp pricing.',
    keywords: [
        'Toyota Spare Parts Bahawalpur',
        'Toyota Corolla Brake Pads Bahawalpur',
        'Toyota Yaris Genuine Parts',
        'Denso Air Filter Toyota Bahawalpur',
        'Toyota OEM Counter Ayyoub Chowk'
    ],
    openGraph: {
        title: 'Toyota Genuine Spare Parts Bahawalpur | OEM Stock',
        description: 'Authentic Japanese Toyota spare parts at Ayyoub Chowk counter near Cheeka Wala Chowk, Bahawalpur.',
        url: 'https://autopartsbahawalpur.pk/toyota-parts-bahawalpur',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
};

export default function ToyotaPartsPage() {
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
                "name": "Toyota Parts Bahawalpur",
                "item": "https://autopartsbahawalpur.pk/toyota-parts-bahawalpur"
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
                brandName="Toyota"
                brandSlug="toyota-parts-bahawalpur"
                pageTitle="Genuine Toyota Parts in Bahawalpur"
                pageSubtitle="Authentic Japanese OEM Akebono Brake Pads, KYB Shock Absorbers, Denso Cabin Filters & NGK Iridium Spark Plugs for all Toyota models."
                popularModels={[
                    { name: 'Corolla GLi / Altis', years: '2008 - 2024', badge: 'High Demand' },
                    { name: 'Corolla Grande 1.8', years: '2014 - 2024', badge: '100% OEM' },
                    { name: 'Toyota Yaris 1.3/1.5', years: '2020 - 2024', badge: 'In Stock' },
                    { name: 'Fortuner / Revo 2.8', years: '2016 - 2024', badge: 'Heavy Duty' },
                    { name: 'Prius & Aqua Hybrid', years: '2011 - 2022', badge: 'Japanese Imports' },
                    { name: 'Hilux Vigo D-4D', years: '2005 - 2016', badge: '4x4 Suspension' },
                ]}
                buyerGuideTitle="Toyota Genuine Parts Buyers Guide in Bahawalpur"
                buyerGuideContent={[
                    "Bahawalpur ki garmi aur dusty roads par Toyota vehicles ki performance direct original Japanese OEM parts par depend karti hai. Counter par nakli ya low-grade Chinese copy parts lagane se brake disc rotor overheat ho jate hain aur suspension bushings jald phat jati hain.",
                    "Auto Parts & Accessories PK par hum sirf authentic Akebono Japan ceramic brake pads, Genuine Denso filters (17801-21050), aur KYB Excel-G gas shocks provide karte hain jo Toyota Indus Motors factory specifications ke sath 100% align hain.",
                    `Aap apni Corolla, Yaris, ya Fortuner ka chassis frame number humare WhatsApp desk (${shopInfo.phone}) par share karke exact OEM part code verification hasil kar sakte hain.`
                ]}
                brandFaqs={[
                    {
                        question: "Kya aapke paas Toyota Corolla Altis aur Grande ke original Japanese brake pads hain?",
                        answer: "Haan! Humare Ayyoub Chowk shop counter par Akebono Ceramic (AN-634WK) aur Toyota Genuine OEM front/rear brake pads hamesha stock mein available hote hain jo zero squeaking noise aur ultra-low dust grip dete hain."
                    },
                    {
                        question: "Toyota Yaris aur Prius ke parts ka counter price WhatsApp par mil sakta hai?",
                        answer: `Ji bilkul. Aap humare WhatsApp desk (${shopInfo.phone}) par part name ya picture bhejin, hum 5-10 mints mein exact live counter PKR price confirm kar denge.`
                    },
                    {
                        question: "Kya electronic sensors ya ECU returnable hain?",
                        answer: "Toyota electrical components (sensors/coils) delivery se pehle counter par fully tested hote hain. Electrical parts unsealed ya fit hone ke baad non-returnable hote hain."
                    }
                ]}
            />
        </>
    );
}
