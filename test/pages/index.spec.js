import { mount } from '@vue/test-utils'
import Index from '@/pages/Index.vue'

describe('Index', () => {
  it('Index.vueの存在確認', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})
