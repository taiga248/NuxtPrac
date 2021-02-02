import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/BasicJest/Parent.vue'

const factory = (values = {}) => {
  return shallowMount(Parent, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Parent', () => {
  test('Parent.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
})
