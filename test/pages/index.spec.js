import { mount } from '@vue/test-utils'
import Index from '@/pages/Index.vue'

describe('Index', () => {
  test('Index.vueの存在確認', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})
