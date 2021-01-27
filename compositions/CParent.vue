<template>
  <div>
    <h2 data-testid="title">{{ title }}</h2>
    <p>
      count :
      <span data-testid="count">{{ state.count }}</span>
    </p>
    <CChild :title="childTitle" @countUp="clickEvent" />
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'
import CChild from '@/compositions/CChild.vue'

export default defineComponent({
  components: { CChild },
  setup() {
    const title = 'Parent Title'
    const childTitle = 'Child Title'
    const state = reactive({
      count: 0,
    })
    function clickEvent(): number {
      return state.count++
    }
    return { title, childTitle, state, clickEvent }
  },
})
</script>
