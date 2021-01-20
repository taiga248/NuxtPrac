<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2>Hoge</h2>
    </v-col>
    <v-col cols="12">
      <v-card class="pa-3">
        <Equal />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="pa-3">
        <Input />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="pa-3">
        <Link />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Equal from '@/components/Equal.vue'
import Input from '@/components/Input.vue'
import Link from '@/components/Link.vue'

export default Vue.extend({
  components: {
    Equal,
    Input,
    Link,
  },
})
</script>
