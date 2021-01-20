import Vuetify from 'vuetify'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Toggle from '@/components/Toggle.vue'

// class, idで要素を探すのではなく、data-testid属性でハンドリング
const sel = (id) => `[data-testid="${id}"]`

const factory = (values = {}) => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  return shallowMount(Toggle, {
    localVue,
    vuetify,
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Toggle.vue', () => {
  const wrapper = factory()
  // const event = jest.fn()
  test('button デフォルトがOFFかどうか', () => {
    expect(wrapper.find(sel('status')).text()).toBe('OFF')
  })

  test('v-btn デフォルトがOFFかどうか', () => {
    expect(wrapper.find(sel('v-status')).text()).toBe('OFF')
  })

  test('button クリックでONになるか', async () => {
    wrapper.find(sel('toggle-btn')).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find(sel('status')).text()).toBe('ON')
  })

  test('v-btn クリックでONになるか', async () => {
    wrapper.find(sel('toggle-vbtn')).trigger('click')
    // console.log(wrapper.find(sel('toggle-vbtn')).selector)
    await wrapper.vm.$nextTick()
    // TODO: ONにならない
    expect(wrapper.find(sel('v-status')).text()).toBe('ON')
  })
})
