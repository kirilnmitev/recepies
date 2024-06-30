<script setup lang="ts">
import { useRecipesStore } from '@/stores/recipesStore'
import { storeToRefs } from 'pinia'
import RecipeCard from './RecipeCard.vue'
import { PAGINATION_MAX_VISIBLE_PAGES, SEARCH_RESULTS_LENGTH } from '@/constants'
import { computed } from 'vue'

const { getRecipesList, getTotalResults, getOffset, getIsRecipesListLoading } =
  storeToRefs(useRecipesStore())
const { setOffset, fetchRecipes } = useRecipesStore()

const page = computed(() => Math.ceil(getOffset.value / SEARCH_RESULTS_LENGTH) + 1)
const numberOfPages = computed(() => Math.ceil(getTotalResults.value / SEARCH_RESULTS_LENGTH))

const handlePaginationChange = (newPageValue: number) => {
  setOffset((newPageValue - 1) * SEARCH_RESULTS_LENGTH)
  fetchRecipes()
}
</script>

<template>
  <div class="col">
    <div
      v-if="getIsRecipesListLoading"
      class="full-height full-width flex justify-center items-center"
    >
      <q-spinner-tail color="primary" size="3rem" />
    </div>
    <div v-else class="column col">
      <div>
        <q-pagination
          v-model="page"
          class="q-my-md"
          text-color="accent"
          :max-pages="PAGINATION_MAX_VISIBLE_PAGES"
          :max="numberOfPages"
          @update:model-value="handlePaginationChange"
        ></q-pagination>
      </div>

      <div class="recipe-grid full-width">
        <div v-for="recipe in getRecipesList" :key="recipe.id">
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-grid {
  display: grid;
  flex: 1;
  grid-template-columns: repeat(8, 1fr);
  margin: auto;
  gap: 1rem;
}
</style>
