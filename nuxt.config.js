export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'TCG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tcg Site' },
       // Twitter Card
       {hid: 'twitter:card',name: 'twitter:card', content: 'summary'},
       {hid: 'twitter:title' ,name: 'twitter:title', content: 'Vue Social Cards Example'},
       {name: 'twitter:description', content: 'Third Culture Group'},
       // image must be an absolute path
       {name: 'twitter:image', content:'/_nuxt/img/1e4ffe8-1440.png'},
       // Facebook OpenGraph
       {hid:'og:title',property: 'og:title', content: 'Vue Social Cards Example'},
       {hid:'og:site_name',property: 'og:site_name', content: 'Vue Example'},
       {hid:'og:type',property: 'og:type', content: 'website'},
       {hid:'og:type',property: 'og:image', content: '/_nuxt/img/1e4ffe8-1440.png' },
       {hid:'og:description',property: 'og:description', content: 'Third Culture Group'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //  { rel: 'stylesheet', href: 'assets/css/bootstrap.min.css' },
    //{ rel: 'stylesheet', href: 'assets/css/bootstrap.min.css' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css',
      // },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     '/assets/fonts/stylesheet.css',
      // },
    ],
    script: [
      // {
      //   crossorigin: 'anonymous',
      //   src:
      //     'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js',
      //   integrity:
      //     'sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD',
      // },
      {
        src:'/assets/js/main.js'
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['@/assets/scss/main.scss'],
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/vue-lazyload.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
     '@nuxt/content',
    'nuxt-responsive-loader',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    ['nuxt-mail', {
      smtp: {
        host: "smtp.hostinger.in",
        port: 587,
        secure:true,
        requireTLS:true,
        
        auth: {
          user: "info@ytsubme.com",
          pass: "niamster97"
        }
      },
    },
  ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  purgeCSS: {
    // your purgesettings here
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: {
      allChunks: true
    },
    parallel: true,
    cache: true,
    // hardSource: true,
  },
  generate: {
    routes: [
     
    ],
  },
  
  server: {     
    // port: 8000, // default: 3000     
    // host: '0.0.0.0', // default: localhost  
   // other configs 
  
  },

  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    min: 640,// minimum image width generated
    max: 1440,// maximum image width generated
    placeholder: false, // no placeholder will be generated
    quality: 98, // choose a lonnpwer value if you want to reduce filesize further
    disable: true,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://thirdculturegroup.com',
    // generate: true, // Enable me when using nuxt generate
    exclude: [],
    routes: []
},

}

