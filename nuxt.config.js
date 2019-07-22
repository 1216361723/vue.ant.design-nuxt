
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/css/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    { src: '~plugins/api', ssr: true },
    { src: '~plugins/auth', ssr: false },
    { src: '~plugins/i18n', ssr: true }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en'
        },
        {
          code: 'zh',
          iso: 'zh-CN'
        }
      ],
      defaultLocale: 'zh',
      seo: true,
      vueI18n: {
        fallbackLocale: 'zh',
        messages: {
          zh: Object.assign(require('./assets/json/locale_zh.json')),
          en: Object.assign(require('./assets/json/locale_en.json'))
        }
      }
    }]
  ],
  // router: {
  //   middleware: ['auth']
  // },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
    // https: false,
    // timeout: 1000,
    // baseURL: 'http://blog.yangser.cn/',
    // withCredentials: true,
    // proxy: {
    //   '/api': 'http://localhost:8091/'
    // } // 代理
    // retry: { retries: 3 }, // 自动拦截失败请求，并重新请求次数
    // credentials: true, // 添加拦截器，自动设置axios的配置，允许将身份验证请求头传给后端。
    // proxyHeaders: true,
    // proxyHeadersIgnore: ['host', 'accept', 'content-length']
  },
  proxy: {
    '/api/': { target: 'http://localhost:8091', pathRewrite: { '^/api/': '' } }
  }, // 代理
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
