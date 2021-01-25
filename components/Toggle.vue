<template>
  <div>
    <p>
      vanilla :
      <span data-testid="status">{{ status ? 'ON' : 'OFF' }}</span>
      :
      <button class="btn" data-testid="toggle-btn" @click="toggle">btn</button>
    </p>
    <p>
      Vuetify :
      <span data-testid="v-status">{{ statusVuetify ? 'ON' : 'OFF' }}</span>
      :
      <v-btn class="primary" data-testid="toggle-vbtn" @click="toggleVuetify"
        >btn</v-btn
      >
    </p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      status: false,
      statusVuetify: false,
    }
  },
  methods: {
    toggle() {
      this.status = !this.status
    },
    toggleVuetify() {
      this.statusVuetify = !this.statusVuetify
    },
  },
}
</script>

<style scoped>
.btn {
  border: solid 1px #fff;
  border-radius: 5px;
  padding: 8px 16px;
  outline: none;
}
.btn:hover {
  opacity: 0.9;
}
</style>
