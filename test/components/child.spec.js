import { shallowMount } from '@vue/test-utils'
import Child from '@/components/jestDemo/Child.vue'

const factory = (values = {}) => {
  return shallowMount(Child, {
    data() {
      return {
        ...values,
      }
    },
  })
}
const propsFactory = (values = {}) => {
  return shallowMount(Child, {
    propsData: {
      ...values,
    },
  })
}

describe('Child', () => {
  test('Child.vueの存在確認', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBeTruthy()
  })
  test('ChildのProps確認', () => {
    const childTitle = 'Child'
    const wrapper = propsFactory({
      title: childTitle,
    })
    expect(wrapper.props().title).toEqual('Child')
  })
})
