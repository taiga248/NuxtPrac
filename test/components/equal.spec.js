import { shallowMount } from '@vue/test-utils'
import Equal from '@/components/Equal.vue'

const factory = (values = {}) => {
  return shallowMount(Equal, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Equal', () => {
  test('Equal.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
  test('title', () => {
    const title = 'Equal Title'
    const subTitle = 'Sub'
    const wrapper = factory({ title, subTitle })
    expect(wrapper.find('.title').text()).toEqual(title)
    expect(wrapper.find('.sub-title').text()).toEqual(subTitle)
  })
})
