export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: true,
    target: "static",
    mode: "ssr",

    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", }
        }
    }
});