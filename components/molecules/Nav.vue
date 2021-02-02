<template>
  <div>
    <span v-for="(item, i) in items" :key="i">
      <Link :item="item" />
    </span>
  </div>
</template>

<script lang="ts">
import Link from '@/components/atoms/Link.vue'
export default {
  components: {
    Link,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
