<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>Composition API</h2>
    </v-col>
    <v-col cols="12">
      <Composition />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Composition from '@/components/Compos.vue'

export default {
  components: { Composition },
}
</script>
