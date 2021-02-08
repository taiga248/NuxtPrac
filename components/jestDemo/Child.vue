<template>
  <div>
    <v-card class="ma-3">
      <h2>{{ title }}</h2>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '子コンポーネントタイトル',
    },
  },
}
</script>
