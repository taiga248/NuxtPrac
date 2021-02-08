import { ref } from '@vue/composition-api'

export default function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  return {
    count,
    increment,
    decrement,
  }
}

export type CounterStore = ReturnType<typeof useCounter>
