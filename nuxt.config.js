export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: false,
    target: "static",
    mode: "ssr",

    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", }
        }
    }
});