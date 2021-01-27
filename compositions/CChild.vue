<template>
  <div>
    <h3>{{ title }}</h3>
    <v-btn class="primary" @click="clickEvent">count up</v-btn>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: 'タイトル',
    },
  },
  setup(_: any, ctx: any) {
    const clickEvent = (): void => {
      ctx.emit('countUp')
    }
    return {
      clickEvent,
    }
  },
}
</script>
