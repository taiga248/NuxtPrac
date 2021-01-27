// import Vuetify from 'vuetify'
// import { createLocalVue, mount } from '@vue/test-utils'
// import CParent from '@/compositions/CParent.vue'

// // class, idで要素を探すのではなく、data-testid属性でハンドリング
// const sel = (id) => `[data-testid="${id}"]`

// const factory = (values = {}) => {
//   const localVue = createLocalVue()
//   const vuetify = new Vuetify()
//   return mount(CParent, {
//     localVue,
//     vuetify,
//     data() {
//       return {
//         ...values,
//       }
//     },
//   })
// }

// describe('CParent.vue', () => {
//   const wrapper = factory()

//   test('タイトルが存在するかどうか', () => {
//     expect(wrapper.find(sel('title')).exists()).toBeTruthy()
//   })
//   test('state.countの初期値が0か', () => {
//     expect(wrapper.find(sel('count')).text()).toBe(0)
//   })

//   test('v-btn クリックでONになるか', async () => {
//     wrapper.find(sel('toggle-vbtn')).trigger('click')
//     await wrapper.vm.$nextTick()
//     expect(wrapper.find(sel('v-status')).text()).toBe('ON')
//   })
// })
