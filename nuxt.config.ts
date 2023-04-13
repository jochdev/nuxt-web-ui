import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  srcDir: "src",
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    resolve('./src/assets/fonts/rubik.css')
  ]
})
