// TODO 優先度低

// import { mount, RouterLinkStub } from '@vue/test-utils'
// import Component from '@/components/atoms/Link.vue'
// const factory = (values = {}) => {
//   return mount(Component, {
//     data() {
//       return {
//         ...values,
//       }
//     },
//   })
// }
// const propsFactory = (values = {}) => {
//   return mount(Component, {
//     propsData: {
//       ...values,
//     },
//   })
// }
// describe(`${Component.name}.vueのテスト`, () => {
//   test(`${Component.name}.vueの存在確認`, () => {
//     const wrapper = factory()
//     expect(wrapper.exists()).toBeTruthy()
//   })

//   test('リンク先が "/"', () => {
//     const wrapper = propsFactory({
//       item: {
//         to: '/',
//       },
//     })
//     wrapper.setProps({ to: '/' })
//     expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
//   })
//   test('リンク先が "/hoge"', () => {
//     const wrapper = propsFactory({
//       item: {
//         to: '/hoge',
//       },
//     })
//     wrapper.setProps({ to: '/hoge' })
//     expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/hoge')
//   })
//   test('リンク先が "/compositions"', () => {
//     const wrapper = propsFactory({
//       item: {
//         to: '/compositions',
//       },
//     })
//     wrapper.setProps({ to: '/compositions' })
//     expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(
//       '/compositions'
//     )
//   })
// })
