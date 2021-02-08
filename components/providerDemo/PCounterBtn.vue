<template>
  <div>
    <v-btn class="primary" @click="increment">+</v-btn>
    <v-btn class="primary" @click="decrement">-</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import { CounterStore } from '@/compositions/providerDemo/useCounter'
import CounterKey from '@/compositions/providerDemo/useCounterKey'

export default defineComponent({
  setup() {
    const { increment, decrement } = inject(CounterKey) as CounterStore
    return {
      increment,
      decrement,
    }
  },
})
</script>
