import { mount } from '@vue/test-utils'
import hoge from '@/pages/hoge.vue'

describe('hoge', () => {
  test('hoge.vueの存在確認', () => {
    const wrapper = mount(hoge)
    expect(wrapper.vm).toBeTruthy()
  })
})
