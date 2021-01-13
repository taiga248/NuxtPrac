import { shallowMount } from '@vue/test-utils'
import Welcome from '@/components//Welcome.vue'

const factory = (values = {}) => {
  return shallowMount(Welcome, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Welcome', () => {
  it('welcome メッセージを描画する', () => {
    const wrapper = factory()
    expect(wrapper.find('.message').text()).toEqual('ようこそ！！')
    // expect(wrapper.find('.message').text()).toEqual('ようこそ！') // !が一つ少ない場合
  })

  it('usernameが7未満のときエラーを描画する', () => {
    const wrapper = factory({ username: '' })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('usernameが空白のときエラーを描画する', () => {
    const wrapper = factory({ username: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('usernameが7文字かそれ以上のとき、エラーが描画されない', () => {
    const wrapper = factory({ username: 'Lachlan' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
