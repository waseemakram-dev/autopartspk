import React, { useEffect } from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';

export default function App() {
    // Inject AutoPartsStore JSON-LD Local SEO Schema
    useEffect(() => {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            "@id": "https://autopartsbahawalpur.pk/#store",
            "name": "Auto Parts & Accessories PK",
            "image": "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200",
            "telephone": "+923008687890",
            "priceRange": "PKR",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Dubai Chowk, Model Town",
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
                "Lodhran"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#e2e8ea] text-[#12161f] flex flex-col items-center">
            <Navbar />
            <main className="w-full flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6">
                <Hero />
            </main>
        </div>
    );
}

