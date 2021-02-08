import VueCompositionApi from '@vue/composition-api'
import { createLocalVue } from '@vue/test-utils'
import { useCount } from '@/compositions/compos.ts'
import Compos from '@/components/Compos.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('Compos.ts', () => {
  test('カウントの値が正しくセットできるか', () => {
    const { countValue } = useCount()
    const mockCountValue = {
      count: 0,
    }
    expect(countValue.value).toEqual(mockCountValue.count)
  })
  test('プラスボタンクリックでインクリメント', () => {
    const { countValue, increment } = useCount()
    increment()
    expect(countValue.value).toEqual(1)
  })
  test('マイナスボタンクリックでデクリメント', () => {
    const { countValue, decrement } = useCount()
    decrement()
    expect(countValue.value).toEqual(-1)
  })
})

// TODO:
describe('composition api周り', () => {
  test('setup関数呼び出し', () => {
    expect(Compos.setup()).toBeTruthy()
  })
})
