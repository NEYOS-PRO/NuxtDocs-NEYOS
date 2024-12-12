// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {  
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