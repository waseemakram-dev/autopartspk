import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
    title: 'Auto Parts & Accessories PK | Genuine Car Spare Parts Bahawalpur',
    description: 'Bahawalpur #1 genuine Toyota, Honda, Suzuki auto spare parts store. Fast counter pickup at Dubai Chowk Model Town & same-day delivery across Ahmedpur, Yazman & Lodhran.',
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
        description: 'Toyota, Honda, Suzuki ke 100% genuine spare parts. WhatsApp par part photo send karein aur direct rate hasil karein.',
        url: 'https://autopartsbahawalpur.pk',
        siteName: 'Auto Parts & Accessories PK',
        locale: 'en_PK',
        type: 'website',
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
        "@id": "https://autopartsbahawalpur.pk/#store",
        "name": "Auto Parts & Accessories PK",
        "image": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200",
        "telephone": "+923008687890",
        "priceRange": "PKR",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop #4-5, Near Dubai Chowk, Model Town",
            "addressLocality": "Bahawalpur",
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
            <body className="min-h-screen bg-[#e2e8ea] text-[#12161f] antialiased">
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
