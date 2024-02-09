// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
    },
  },
  modules: ["@element-plus/nuxt"],
  devServer: {
    host: "0.0.0.0",
  },
});
