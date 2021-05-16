export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'moooce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'preload', href: '/fonts/alfaslabone.woff2'},
      {rel: 'preload', href: '/fonts/merriweather-regular.woff2'},
      {rel: 'preload', href: '/fonts/merriweather-bold.woff2'},
      {rel: 'preload', href: '/fonts/merriweather-black.woff2'},
      {rel: 'stylesheet', href: '/css/main.css'},
      {rel: 'stylesheet', href: '/css/tokens.css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  styleResources: {
		scss: [],
	},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/sanity-image-builder.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/sanity/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  router: {
		middleware: ['metaHandler'],
		trailingSlash: true
	},
}
