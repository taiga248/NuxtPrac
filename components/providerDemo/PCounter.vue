<template>
  <h1 data-testid="count">{{ count }}</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import { CounterStore } from '@/compositions/providerDemo/useCounter'
import CounterKey from '@/compositions/providerDemo/useCounterKey'

export default defineComponent({
  setup() {
    const { count } = inject(CounterKey) as CounterStore
    return {
      count,
    }
  },
})
</script>
