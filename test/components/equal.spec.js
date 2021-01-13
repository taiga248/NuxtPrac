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
  it('Equal.vueが存在確認', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
  it('titleの文字数確認', () => {
    const title = 'Equal Title'
    const subTitle = 'Sub'
    const wrapper = factory({ title, subTitle })
    expect(wrapper.find('.title').text()).toEqual(title)
    expect(wrapper.find('.sub-title').text()).toEqual(subTitle)
  })
})
