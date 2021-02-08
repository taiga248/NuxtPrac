<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>Composition API</h2>
    </v-col>
    <v-col cols="12">
      <Composition />
    </v-col>
    <v-col cols="12">
      <PParent />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Composition from '@/components/Compos.vue'
import PParent from '@/components/providerDemo/PParent.vue'

export default {
  components: { Composition, PParent },
}
</script>
