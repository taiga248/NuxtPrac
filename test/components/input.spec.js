import { shallowMount } from '@vue/test-utils'
import Input from '@/components/jestDemo/Input.vue'

const factory = (values = {}) => {
  return shallowMount(Input, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Input', () => {
  test(`${Input.name}メッセージを描画する`, () => {
    const wrapper = factory()
    expect(wrapper.find('.message').text()).toEqual('ようこそ！！')
  })

  test('nameが7未満のとき', () => {
    const wrapper = factory({ name: '' })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  test('nameが7文字かそれ以上のとき', () => {
    const sampleName = 'はしもとかんな'
    const wrapper = factory({ name: sampleName })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
