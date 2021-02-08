<template>
  <div>
    <h1 data-testid="count">{{ countValue }}</h1>
    <div>
      <v-btn class="primary" data-testid="plus" @click="increment">+</v-btn>
      <v-btn class="primary" data-testid="minus" @click="decrement">-</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCount } from '@/compositions/compos.ts'

export default defineComponent({
  name: 'Count',
  setup() {
    const { countValue, increment, decrement } = useCount()
    return {
      countValue,
      increment,
      decrement,
    }
  },
})
</script>
