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
  // TODO: propsを引数に指定していないとcontextを使用できない？
  setup(props, context) {
    const clickEvent = (): void => {
      context.emit('countUp')
    }
    // 無理矢理propsの出番を用意してあげてる
    const log = () => {
      alert(props)
    }
    return {
      log,
      clickEvent,
    }
  },
}
</script>
