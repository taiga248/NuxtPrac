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
  </v-row>
</template>

<script lang="ts">
import Equal from '@/components/jestDemo/Equal.vue'
import Input from '@/components/jestDemo/Input.vue'

export default {
  components: {
    Equal,
    Input,
  },
}
</script>
