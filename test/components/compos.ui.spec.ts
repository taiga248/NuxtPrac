import VueCompositionAPI from '@vue/composition-api'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Compos from '@/components/Compos.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionAPI)

const sel = (id: string) => `[data-testid="${id}"]`
const factory = (values = {}) => {
  return shallowMount(Compos, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Compos', () => {
  test('Compos.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
  test('UIテスト', () => {
    const wrapper = factory()
    const plus = '+'
    const minus = '-'
    expect(wrapper.find(sel('count')).exists())
    expect(wrapper.find(sel('plus')).text()).toEqual(plus)
    expect(wrapper.find(sel('minus')).text()).toEqual(minus)
  })
})

// TODO:
// describe('composition api周り', () => {
//   test('setup関数呼び出し', () => {
//   })
// })
