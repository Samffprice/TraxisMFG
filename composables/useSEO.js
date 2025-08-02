export const useSEO = (options = {}) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  
  const {
    title,
    description,
    keywords,
    image = '/home-hero.jpg',
    type = 'website'
  } = options

  const canonicalUrl = `${config.public.siteUrl}${route.path}`
  const fullImageUrl = image.startsWith('http') ? image : `${config.public.siteUrl}${image}`

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: type },
      
      // Twitter
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  })
}