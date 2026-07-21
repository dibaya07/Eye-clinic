import { MetadataRoute } from 'next';
import { seo } from '@/data/doctorData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seo.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
