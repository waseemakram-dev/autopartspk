import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { SpeedometerLoader } from '@/components/SpeedometerLoader';

export const metadata: Metadata = {
    title: 'Auto Parts & Accessories PK | Genuine Car Spare Parts Bahawalpur',
    description: 'Bahawalpur #1 genuine Toyota, Honda, Suzuki auto spare parts store. Fast counter pickup at Ayyoub Chowk near Cheeka Wala Chowk & same-day delivery across Ahmedpur, Yazman & Lodhran.',
    keywords: [
        'Auto Parts Bahawalpur',
        'Toyota Spare Parts Bahawalpur',
        'Honda Genuine Parts Bahawalpur',
        'Suzuki Spare Parts Bahawalpur',
        'Car Brake Pads Bahawalpur',
        'Shock Absorbers Bahawalpur',
        'Auto Accessories Pakistan'
    ],
    openGraph: {
        title: 'Auto Parts & Accessories PK | Genuine Car Parts in Bahawalpur',
        description: '100% genuine spare parts for Toyota, Honda, and Suzuki. Send a photo of your part on WhatsApp for instant pricing.',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://autopartsbahawalpur.pk',
        siteName: process.env.NEXT_PUBLIC_SHOP_NAME || 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
    },
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
            { url: '/favicon.ico' },
        ],
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Local SEO Schema for Bahawalpur Auto Parts Store
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "AutoPartsStore",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://autopartsbahawalpur.pk'}/#store`,
        "name": process.env.NEXT_PUBLIC_SHOP_NAME || "Auto Parts & Accessories PK",
        "image": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200",
        "telephone": `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923045759687"}`,
        "priceRange": "PKR",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": process.env.NEXT_PUBLIC_SHOP_ADDRESS || "Ayyoub Chowk near Cheeka Wala Chowk",
            "addressLocality": process.env.NEXT_PUBLIC_SHOP_CITY || "Bahawalpur",
            "addressRegion": "Punjab",
            "postalCode": "63100",
            "addressCountry": "PK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "29.3957",
            "longitude": "71.6833"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "21:30"
            }
        ],
        "areaServed": [
            "Bahawalpur",
            "Satellite Town Bahawalpur",
            "Model Town Bahawalpur",
            "Ahmedpur East",
            "Yazman",
            "Lodhran",
            "Hasilpur"
        ]
    };

    return (
        <html lang="en">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Noto+Nastaliq+Urdu:wght@400;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Rajdhani:wght@500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </head>
            <body className="min-h-screen bg-white text-[#0f1115] antialiased selection:bg-[#e03627] selection:text-white">
                <SpeedometerLoader />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
