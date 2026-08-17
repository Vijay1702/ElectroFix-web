import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/private/',
    },
    sitemap: 'https://srisenthilelectrofixin.vercel.app/sitemap.xml',
  };
}
