export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    css: ["@/assets/css/main.css"],

    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", lang: "en" },
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { hid: "icon-svg", rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { hid: "icon-png", rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }
            ]
        },

    },
    image: {
        domains: ['ipfs-gw.stargaze-apis.com']
    }
});