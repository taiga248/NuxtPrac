<template>
  <div>
    <h2>{{ title }}</h2>
    <p>count : {{ state.count }}</p>
    <CChild :title="childTitle" @countUp="clickEvent" />
  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/composition-api'
import CChild from '@/compositions/CChild.vue'

export default {
  components: { CChild },
  setup() {
    // 値をリアクティブに
    const title = 'Parent Title'
    const childTitle = 'Child Title'
    const state = reactive({
      count: 123,
    })
    function clickEvent(): number {
      return state.count++
    }
    return { title, childTitle, state, clickEvent }
  },
}
</script>
