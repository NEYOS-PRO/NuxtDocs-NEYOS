// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui','@nuxt/devtools'],
  app: {
    head: {
      meta: [
        {
          property: 'og:image',
          content: '/images/preview.png', // Chemin de l'image dans `public/`
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo/logo_white.png', // Chemin du fichier favicon
        },
      ],
    },
  },
  
  routeRules: {
    '/': { prerender: true }
  },

  content: {  
    // experimental: {
    //   indexed: true
    // },
    // ...options
    highlight: {
      langs: [
        'c',
        'cpp',
        'java',
        'html',
        'css',
        'javascript',
      ], 
      theme: "github-dark", 
      
    }, 
    documentDriven: true,
    markdown: {
      rehypePlugins: [],
      remarkPlugins: [], 
    },
  
  },

  compatibilityDate: '2024-12-11',
});