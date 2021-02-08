<template>
  <div>
    <h2 data-testid="title">Provider Pattern</h2>
    <PCounter />
    <PCounterBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api'
import PCounter from '@/components/providerDemo/PCounter.vue'
import PCounterBtn from '@/components/providerDemo/PCounterBtn.vue'

import CounterKey from '@/compositions/providerDemo/useCounterKey'
import useCounter from '@/compositions/providerDemo/useCounter'

export default defineComponent({
  components: {
    PCounter,
    PCounterBtn,
  },
  setup() {
    // 親でuseCounterにKeyタグを与える → PCounter, PCounterbtnでinject
    provide(CounterKey, useCounter())
    return {}
  },
})
</script>
