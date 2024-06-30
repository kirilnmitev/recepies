<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <div class="column full-height">
    <SearchBar />
    <RecipeList />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}
</style>
