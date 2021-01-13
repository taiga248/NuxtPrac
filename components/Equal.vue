<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="sub-title">{{ subTitle }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: 'Sapmle Title',
      subTitle: 'Sub',
    }
  },
})
</script>
