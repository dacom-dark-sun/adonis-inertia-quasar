<script setup lang="ts">
defineProps<{ error: any }>()
</script>

<template lang="pug">
div.container
  div.title Server Error
  span {{ error.message }}
</template>
