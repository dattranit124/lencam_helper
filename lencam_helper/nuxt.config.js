export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lencam_helper',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet',  href: '/assets/css/styles.css' },

    ],
    script: [
      { src:'/assets/js/bootstrap.bundle.min.js' },
      { src:'/assets/js/bootstrap.main.js' },
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@/modules/integrations"
  ],
  axios: {
    baseURL: process.env.API_URL || "https://api.lencam.com"
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
      port: '8080',
    },
}
