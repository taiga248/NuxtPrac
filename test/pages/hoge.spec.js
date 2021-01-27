import { shallowMount } from '@vue/test-utils'
import hoge from '@/pages/hoge.vue'

describe('hoge.vue', () => {
  test('hoge.vueの存在確認', () => {
    const wrapper = shallowMount(hoge)
    expect(wrapper.exists()).toBeTruthy()
  })
})
