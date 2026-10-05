import type { MetadataRoute } from 'next';

// Pages are rebuilt on every deploy, so the build date is an honest lastmod.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://easyreimburse.ai';

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/features`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
