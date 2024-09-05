// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-09-04",
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt MirKun',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=MaterialIcons' }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})