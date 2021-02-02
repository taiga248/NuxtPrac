<template>
  <div>
    <h2>Input test</h2>
    <div class="message">
      {{ message }}
    </div>
    <v-text-field v-model="name" label="ユーザー名"></v-text-field>
    <div v-if="error" class="error">7文字以上で入力してください</div>
    <div v-else>
      <p>name：{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'ようこそ！！',
      name: '',
    }
  },
  computed: {
    error() {
      return this.name.trim().length < 7
    },
  },
}
</script>
