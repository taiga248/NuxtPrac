import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/Index.vue'

describe('index.vue', () => {
  test('Index.vueの存在確認', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.exists()).toBeTruthy()
  })
})
