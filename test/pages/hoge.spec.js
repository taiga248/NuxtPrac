import { mount } from '@vue/test-utils'
import hoge from '@/pages/hoge.vue'

describe('hoge', () => {
  it('hoge.vueの存在確認', () => {
    const wrapper = mount(hoge)
    expect(wrapper.vm).toBeTruthy()
  })
})
