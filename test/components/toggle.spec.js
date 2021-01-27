import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import Toggle from '@/components/Toggle.vue'

// class, idで要素を探すのではなく、data-testid属性でハンドリング
const sel = (id) => `[data-testid="${id}"]`

const factory = (values = {}) => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  return mount(Toggle, {
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

  test('buttonが存在するかどうか', () => {
    expect(wrapper.find(sel('toggle-btn')).exists()).toBeTruthy()
  })
  test('v-btnが存在するかどうか', () => {
    expect(wrapper.find(sel('toggle-vbtn')).exists()).toBeTruthy()
  })

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
    await wrapper.vm.$nextTick()
    expect(wrapper.find(sel('v-status')).text()).toBe('ON')
  })
})
