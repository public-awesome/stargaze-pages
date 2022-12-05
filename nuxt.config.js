export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: false,
    target: "static",
    mode: "spa",

    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", }
        }
    }
});