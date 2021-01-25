<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>Composition API</h2>
    </v-col>
    <v-col cols="12">
      <CParent />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import CParent from '@/compositions/CParent.vue'
export default {
  components: { CParent },
}
</script>
