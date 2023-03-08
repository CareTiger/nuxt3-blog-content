export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Nuxt 3" },
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Material+Icons+Outlined",
          rel: "stylesheet",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
});
