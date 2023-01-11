export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    mode: "universal",
    css: ["@/assets/css/main.css"],
    app: {
        head: {
            htmlAttrs: { "data-theme": "luxury", }
        }
    }
});