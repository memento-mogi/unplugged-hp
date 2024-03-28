import allPosts from './plugins/allPosts.js';
import years from './plugins/years.js';
import categories from './plugins/categories.js';

const generateDynamicRoutes = callback => {
  var routes = [];
  allPosts.forEach (post => {
    routes.push (post.url);
  });
  years.years.forEach (year => {
    routes.push ('/years/' + year);
  });
  Object.keys (categories).forEach (function (key) {
    routes.push ('/categories/' + key);
  });
  callback (null, routes);
};

// 設定. デフォのを読み込んでる.
export default {
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: '京大アンプラグド',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '京大, サークル, 軽音, アンプラグド, アコースティック',
      },
      {
        hid: 'twitter-card-type',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter-site-creator',
        name: 'twitter:creator',
        content: '@kyodaiunplugged'
      },
      {
        hid: 'twitter-title',
        name: 'og:title',
        content: '京大アンプラグド'
      },
      {
        hid: 'twitter-description',
        name: 'og:description',
        content: process.env.npm_package_description || '',
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/categoriesDI.js', '~/plugins/yearsDI.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    'nuxt-fontawesome',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {},
  },
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    xhtmlOut: true,
    langPrefix: 'language-',
    quotes: '“”‘’',
    highlight: function (/*str, lang*/) {
      return '';
    },
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  moment: {
    locales: ['ja'],
  },
  generate: {
    routes: generateDynamicRoutes,
  },
};
