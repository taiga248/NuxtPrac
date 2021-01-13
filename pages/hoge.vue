<template>
  <v-row justify="center" align="center">
    <v-col>
      <h2>Hoge</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="pa-3">
        <Equal />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="pa-3">
        <Welcome />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Welcome from '@/components/Welcome.vue'
import Equal from '~/components/Equal.vue'
export default Vue.extend({
  components: {
    Welcome,
    Equal,
  },
})
</script>
