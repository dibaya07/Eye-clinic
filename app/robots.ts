import { MetadataRoute } from 'next';
import { seo } from '@/data/doctorData';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
