export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    mode: "universal",
    debug: true,
    css: ["@/assets/css/main.css"],
    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", }
        }
    },
    image: {
        domains: ['ipfs-gw.stargaze-apis.com']
    }
});