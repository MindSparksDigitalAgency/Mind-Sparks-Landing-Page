// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: true,
  target: 'static',
  generate: {
    dir: "dist",
    cache: {
      ignore: ["renovate.json"],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-icon"],
  compatibilityDate: "2025-01-09",
});