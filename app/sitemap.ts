import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://love-fortune-diagnosis.vercel.app';
  const blogArticles = ['furin-shinri-kaiketsu','denwa-uranai-hajimete','kataomoi-tsurai-taisho','fukuen-kanousei-shindan','renai-soudan-dare-ni','tarot-uranai-imi','renai-unmei-shinjiru','furin-kekkon-sentaku','uranai-jouzu-na-tsukaikata','kodoku-na-yoru-norikoekata'];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/diagnosis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...blogArticles.map((slug) => ({ url: `${baseUrl}/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
