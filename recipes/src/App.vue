<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useRecipesStore } from './stores/recipesStore'

const router = useRouter()
const { setQuery, setOffset, fetchRecipes } = useRecipesStore()

onBeforeMount(async () => {
  await router.isReady()
  const { search, offset } = router.currentRoute.value.query
  setQuery(search?.toString() || '')
  setOffset(offset ? Number(offset) : 0)
  fetchRecipes()
})
</script>

<template>
  <div class="full-height">
    <RouterView />
  </div>
</template>

<style scoped></style>
