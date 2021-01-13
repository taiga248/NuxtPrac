import { mount } from '@vue/test-utils'
import hoge from '@/pages/hoge.vue'

describe('hoge', () => {
  test('hoge.vueが存在確認', () => {
    const wrapper = mount(hoge)
    expect(wrapper.vm).toBeTruthy()
  })
})
