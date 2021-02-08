import { createLocalVue, shallowMount } from '@vue/test-utils'
import PParent from '@/components/providerDemo/PParent.vue'
import PCounter from '@/components/providerDemo/PCounter.vue'
import PCounterBtn from '@/components/providerDemo/PCounterBtn.vue'

import VueCompositionApi from '@vue/composition-api'
const localVue = createLocalVue()
localVue.use(VueCompositionApi)

const sel = (id) => `[data-testid="${id}"]`
const factory = (values = {}) => {
  return shallowMount(PParent, {
    data() {
      return {
        ...values,
      }
    },
  })
}
describe(`${PParent.name}.vue`, () => {
  test('PParent.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
  test('Titleの確認', () => {
    const wrapper = factory()
    const title = 'Provider Pattern'
    expect(wrapper.find(sel('title')).text()).toEqual(title)
  })
  test('子コンポーネントの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.findAllComponents(PCounter).exists()).toBeTruthy()
  })
  test('子コンポーネントの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.findAllComponents(PCounterBtn).exists()).toBeTruthy()
  })
})

// TODO:
describe('composition api周り', () => {
  test('setup関数呼び出し', () => {
    expect(PParent.setup()).toBeTruthy()
  })
})
