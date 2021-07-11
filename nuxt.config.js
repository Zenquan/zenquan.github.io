import { join } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Zenquan的空间站',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'This is the generic description.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/index.less',
    'swiper/swiper-bundle.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vant.js',
    '~/plugins/octokit.js',
    '~/plugins/global.js',
    {src: '~/plugins/swiper.js', ssr: false}
  ],

  loader:[
    {
        test:/\.less$/,
        loaders:'style-loader!css-loader!less-loader'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true
  },
  proxy: {
    '/api/splider': {
      target: 'http://localhost:4000',
      pathRewrite: {
        '^/api/splider' : '/'
      }
    },
    '/api/zhihu': {
      // target: 'http://zhihu.joyenjoy.tech',
      target: 'http://localhost:5000',
      pathRewrite: {
        '^/api/zhihu' : '/'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 添加这个是关键，添加后babel才会处理依赖包vant里面的代码
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        ['import', {
          libraryName: 'vant',
          "style": (name) => {
            return `${name}/style/less.js`
          }
        }, 'vant']
      ],
    },
    postcss: {
      plugins: {
        'postcss-import': {

        },
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        'postcss-pxtorem': {
          propList: ['*', '!border*']
        }
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
