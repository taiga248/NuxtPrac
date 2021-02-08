<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>Index</h2>
    </v-col>
    <v-col cols="12">
      <Parent />
    </v-col>
    <v-col>
      <Toggle />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Parent from '@/components/jestDemo/Parent.vue'
import Toggle from '@/components/jestDemo/Toggle.vue'

export default {
  components: {
    Parent,
    Toggle,
  },
}
</script>
