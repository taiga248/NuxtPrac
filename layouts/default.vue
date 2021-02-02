<template>
  <v-app dark>
    <v-navigation-drawer permanent fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
        <Nav :items="items" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from '@/components/molecules/Nav.vue'
export default {
  components: { Nav },
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'index',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Hoge',
          to: '/hoge',
        },
        {
          icon: 'mdi-api',
          title: 'Compositions',
          to: '/compositions',
        },
      ],
      title: 'NuxtPrac',
    }
  },
}
</script>
