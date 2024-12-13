// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui','@nuxt/devtools'],
  app: {
    head: {
      meta: [
        {
          property: 'og:image',
          content: '/images/preview.png', // Chemin de l'image dans `public/`
        },
          {
            'http-equiv': 'Content-Security-Policy',
            content: "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval';"
          },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo_white.png', // Chemin du fichier favicon
        },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true }
  },

  content: {  

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

  compatibilityDate: '2024-12-13',
});