import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

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
  it('Parent.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
