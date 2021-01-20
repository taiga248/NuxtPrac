import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - NuxtPrac',
    title: 'NuxtPrac',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      if (['local', 'development', 'dev'].includes(process.env.NODE_ENV)) {
        // 開発用設定
        config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
      }
      // テスト用に付与しているカスタムデータ属性（data-testid）をbuild時に削除する
      // @see https://mk-engineer.com/posts/vue-test-testid
      const vueLoader = config.module.rules.find(
        (rule) => rule.loader === 'vue-loader'
      )
      vueLoader.options.compilerOptions = {
        modules: [
          {
            preTransformNode(astEl) {
              const key = 'data-testid'
              const { attrsMap, attrsList } = astEl
              if (attrsMap[key]) {
                delete attrsMap[key]
                const index = attrsList.findIndex((x) => x.name === key)
                attrsList.splice(index, 1)
              }
              return astEl
            },
          },
        ],
      }
    },
  },
}
