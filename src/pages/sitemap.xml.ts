import type { APIRoute } from 'astro';
import { BLOG_POSTS } from '../data/blogPosts';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://www.zagdigitalid.com';

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastmod: '2026-10-06T16:00:00+07:00',
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: '2026-10-06T16:00:00+07:00',
      changefreq: 'daily',
      priority: '0.9'
    }
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.isoDate,
    changefreq: 'weekly',
    priority: '0.8'
  }));

  const allPages = [...staticPages, ...blogPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
