import { ref } from '@vue/composition-api'

export const useCount = () => {
  const countValue = ref<number>(0)
  const increment = (): void => {
    countValue.value += 1
  }
  const decrement = (): void => {
    countValue.value -= 1
  }
  return {
    countValue,
    increment,
    decrement,
  }
}
