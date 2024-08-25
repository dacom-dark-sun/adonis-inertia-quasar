<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
</script>

<template lang="pug">
q-layout
  q-header
    q-toolbar
      q-btn(icon="menu" dense @click="drawer = !drawer")

  q-drawer(v-model="drawer" show-if-above)
    p drawer

  q-page-container
    slot
</template>
