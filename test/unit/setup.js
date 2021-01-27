import Vue from 'vue'
import Vuetify from 'vuetify'
import { config, RouterLinkStub } from '@vue/test-utils'

Vue.use(Vuetify)
// Nuxtが提供するコンポーネントはスタブしておく
config.stubs['nuxt-link'] = RouterLinkStub
config.stubs['router-link'] = RouterLinkStub
