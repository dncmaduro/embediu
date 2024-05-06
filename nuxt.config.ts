// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/index.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  modules: [
    "nuxt-swiper",
    [
      "nuxt-mail",
      {
        message: {
          to: "manhdungtran.vnuuet@gmail.com",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "gunnyrealer12@gmail.com",
            pass: "dmmc thxq minh oapa",
          },
        },
      },
    ],
  ],
  devtools: { enabled: true },
});
