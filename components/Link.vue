<template>
  <div class="text-center">
    <v-layout wrap>
      <v-flex v-for="route in routes" :key="route.id" class="mx-auto" xs3>
        <nav>
          <nuxt-link :to="'/' + route">
            <v-btn primary> {{ route === '' ? 'index' : route }}へ </v-btn>
          </nuxt-link>
        </nav>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const routes = ['', 'hoge', 'compositions']

    return {
      routes,
    }
  },
}
</script>
