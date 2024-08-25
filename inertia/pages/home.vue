<script setup lang="ts">
defineProps<{ version: number }>()
import { MainLayout } from '~/shared/ui'
</script>

<template lang="pug">
MainLayout
  q-page
    h3 Home Page
    p version: {{version}}

</template>
