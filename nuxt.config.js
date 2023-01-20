export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ["@/assets/css/main.css"],
    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", lang: "en" },
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
            ]
        },

    },
    image: {
        domains: ['ipfs-gw.stargaze-apis.com']
    }
});