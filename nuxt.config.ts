import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
                rel: "stylesheet",
            },
            {
                href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
                rel: "stylesheet",
            },
        ],
    },    
    modules: [
        '@nuxt/content', '@nuxtjs/tailwindcss'
    ],
    content: {
    // https://content.nuxtjs.org/api/configuration
    }, 
})
