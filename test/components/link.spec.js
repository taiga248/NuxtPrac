import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Link from '@/components/Link.vue'

const factory = (values = {}) => {
  return shallowMount(Link, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Link.vue', () => {
  test('Link.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
  test('nuxt-link を踏むとそれぞれのページに遷移', () => {
    const wrapper = factory()
    const routes = ['/', 'hoge', 'compositions']
    routes.forEach((route) => {
      // コンポーネントを見つけるために `find` や `get` を使うのは非推奨 => findComponent
      // TODO:
      expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(route)
    })
  })
})
