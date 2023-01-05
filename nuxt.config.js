export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    mode: "universal",

    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", }
        }
    }
});