<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    <v-text-field v-model="userName" label="ユーザー名"></v-text-field>
    <div v-if="error" class="error">7文字以上で入力してください</div>
    <div v-else>
      <p>userName：{{ userName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      message: 'ようこそ！！',
      userName: '',
    }
  },
  computed: {
    error() {
      return this.userName.trim().length < 7
    },
  },
})
</script>
