<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>Index</h2>
    </v-col>
    <v-col cols="12">
      <Parent />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Parent from '@/components/Parent.vue'
export default Vue.extend({
  components: {
    Parent,
  },
})
</script>
