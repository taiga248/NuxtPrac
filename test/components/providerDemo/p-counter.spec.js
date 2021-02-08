import VueCompositionApi from '@vue/composition-api'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import PCounter from '@/components/providerDemo/PCounter.vue'
import { useCounter } from '@/compositions/providerDemo/useCounter'

// TODO: UI部分とComposition API部分の切り分け,コンポーネントを跨ぐテスト
const localVue = createLocalVue()
localVue.use(VueCompositionApi)

const sel = (id) => `[data-testid="${id}"]`
const factory = (values = {}) => {
  return shallowMount(PCounter, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe(`${PCounter.name}.vue`, () => {
  test(`${PCounter.name}の存在確認`, () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
  test('Countの確認', () => {
    const wrapper = factory()
    const { count } = useCounter()
    const mockCountValue = {
      count: 0,
    }
    expect(count.value).toEqual(mockCountValue.count)
    expect(wrapper.find(sel('count')).text()).toEqual(mockCountValue.count)
  })
})

// TODO:
describe('composition api周り', () => {
  test('setup関数呼び出し', () => {
    expect(PCounter.setup()).toBeTruthy()
  })
})
