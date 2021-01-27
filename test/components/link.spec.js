import { mount, RouterLinkStub } from '@vue/test-utils'
import Link from '@/components/Link.vue'

// class, idで要素を探すのではなく、data-testid属性でハンドリング
const sel = (id) => `[data-testid="${id}"]`

const factory = (values = {}) => {
  return mount(Link, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Link.vue', () => {
  // TODO: リンクのボタンがクリックされたら$route.pathの値を見て遷移されているかチェック
  test('Link.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
  // TODO: 一旦後回し
  //   const routes = ['', 'hoge', 'compositions']
  //   test('nuxt-link ルートページに遷移', () => {
  //     const wrapper = factory()
  //     wrapper.find(sel(routes[0])).trigger('click')
  //     expect(wrapper.findComponent(RouterLinkStub).props().to()).toBe(routes[0])
  //   })
  //   test('nuxt-link hogeページに遷移', () => {
  //     const wrapper = factory()
  //     wrapper.find(sel(routes[1])).trigger('click')
  //     expect(wrapper.findComponent(RouterLinkStub).props().to()).toBe(routes[1])
  //   })
  //   test('nuxt-link compositionsページに遷移', () => {
  //     const wrapper = factory()
  //     wrapper.find(sel(routes[2])).trigger('click')
  //     expect(wrapper.findComponent(RouterLinkStub).props().to()).toBe(routes[2])
  //   })
})
