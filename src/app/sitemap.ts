import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autopartsbahawalpur.pk';
    const lastModified = new Date();

    const mainRoutes = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified,
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ];

    // Dedicated Local SEO Brand Landing Pages (Strongest Ranking Power for Google)
    const brandLandingPages = [
        {
            url: `${baseUrl}/toyota-parts-bahawalpur`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/honda-parts-bahawalpur`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/suzuki-parts-bahawalpur`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    return [...mainRoutes, ...brandLandingPages];
}
