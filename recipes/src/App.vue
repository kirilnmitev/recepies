<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="fullHeight">
    <RouterView />
  </div>
</template>

<style scoped>
.fullHeight {
  height: 100%;
}
</style>
