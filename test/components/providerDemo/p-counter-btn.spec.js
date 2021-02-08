import { shallowMount } from '@vue/test-utils'
import PCounterBtn from '@/components/providerDemo/PCounterBtn.vue'

// const sel = (id) => `[data-testid="${id}"]`
const factory = (values = {}) => {
  return shallowMount(PCounterBtn, {
    data() {
      return {
        ...values,
      }
    },
  })
}
describe(`${PCounterBtn.name}.vue`, () => {
  test(`${PCounterBtn.name}の存在確認`, () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
})

// TODO:
describe('composition api周り', () => {
  test('setup関数呼び出し', () => {
    expect(PCounterBtn.setup()).toBeTruthy()
  })
})
