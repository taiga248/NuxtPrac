<template>
  <div>
    <h2>Parent</h2>
    <Child :title="childTitle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Child from '@/components/Child.vue'
export default Vue.extend({
  components: {
    Child,
  },
  data() {
    return {
      childTitle: 'Child',
    }
  },
})
</script>
