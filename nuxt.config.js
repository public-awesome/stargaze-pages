export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    mode: "universal",

    css: ["@/assets/css/main.css"],
    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", lang: "en" }
        },

    },
    image: {
        domains: ['ipfs-gw.stargaze-apis.com']
    }
});