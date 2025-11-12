import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // exclusive path
            disallow: '/dashboard',
        },
        sitemap: `${getBaseUrl()}/sitemap.xml`,
    };
}