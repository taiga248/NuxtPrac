import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

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
  test('Input メッセージを描画する', () => {
    const wrapper = factory()
    expect(wrapper.find('.message').text()).toEqual('ようこそ！！')
    // expect(wrapper.find('.message').text()).toEqual('ようこそ！') // !が一つ少ない場合
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
