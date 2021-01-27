import { shallowMount } from '@vue/test-utils'
import Compositions from '@/pages/Compositions.vue'

describe('compositions.vue', () => {
  test('compositions.vueの存在確認', () => {
    const wrapper = shallowMount(Compositions)
    expect(wrapper.exists()).toBeTruthy()
  })
})
