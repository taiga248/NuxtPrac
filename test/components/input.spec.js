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
  it('Input メッセージを描画する', () => {
    const wrapper = factory()
    expect(wrapper.find('.message').text()).toEqual('ようこそ！！')
    // expect(wrapper.find('.message').text()).toEqual('ようこそ！') // !が一つ少ない場合
  })

  it('userNameが7未満のとき', () => {
    const wrapper = factory({ userName: '' })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('userNameが空白のとき', () => {
    const wrapper = factory({ userName: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBeTruthy()
    expect(wrapper.find('.error').exists()).toBeTruthy()
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('userNameが7文字かそれ以上のとき', () => {
    const sampleName = 'はしもとかんな'
    const wrapper = factory({ userName: sampleName })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
