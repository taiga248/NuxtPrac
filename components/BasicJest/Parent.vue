<template>
  <div>
    <h2>Parent</h2>
    <Child :title="childTitle" />
  </div>
</template>

<script lang="ts">
import Child from '@/components/BasicJest/Child.vue'
export default {
  components: {
    Child,
  },
  data() {
    return {
      childTitle: 'Child',
    }
  },
}
</script>
