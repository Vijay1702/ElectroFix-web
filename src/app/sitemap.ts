import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://srisenthilspares.in'

  // Define all routes manually
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/motor-repair-pattukkottai',
    '/fan-repair-pattukkottai',
    '/mixer-grinder-service-pattukkottai',
    '/submersible-pump-repair-pattukkottai',
    '/water-motor-repair-pattukkottai',
    '/electrical-spare-parts-pattukkottai',
    '/mixie-spares-pattukkottai',
    '/fan-spares-pattukkottai'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
