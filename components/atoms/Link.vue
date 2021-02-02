<template>
  <v-btn class="ma-4" primary :to="item.to">
    {{ item.title }}
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    item: { type: String, default: '/', required: true },
  },
}
</script>
