import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.lieschristiaens.be'

  return {
    rules: {
      userAgent: '*',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

