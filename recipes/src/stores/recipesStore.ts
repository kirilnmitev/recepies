import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { RecipeSearch } from '@/models/recipes'
import { getRecipes } from '@/services/recepiesService'

export const useRecipesStore = defineStore('recipesStore', () => {
  // State
  const recipes = ref<RecipeSearch[]>([])
  const offset = ref<number>(0)
  const totalResults = ref<number>(0)
  const query = ref<string>('')
  const isRecipesListLoading = ref(true)

  // Getters
  const getRecipesList = computed(() => recipes.value)
  const getOffset = computed(() => offset.value)
  const getTotalResults = computed(() => totalResults.value)
  const getQuery = computed(() => query.value)
  const getIsRecipesListLoading = computed(() => isRecipesListLoading.value)

  // Setters
  const setRecipes = (newVal: RecipeSearch[]) => (recipes.value = newVal)
  const setOffset = (newVal: number) => (offset.value = newVal)
  const setTotalResults = (newVal: number) => (totalResults.value = newVal)
  const setQuery = (newVal: string) => (query.value = newVal)
  const setIsRecipesListLoading = (newVal: boolean) => (isRecipesListLoading.value = newVal)

  // Actions
  const fetchRecipes = async () => {
    setIsRecipesListLoading(true)
    const response = await getRecipes({ query: getQuery.value, offset: offset.value })
    setRecipes(response.results)
    setTotalResults(response.totalResults)
    setIsRecipesListLoading(false)
  }

  return {
    // Getters
    getRecipesList,
    getOffset,
    getTotalResults,
    getQuery,
    getIsRecipesListLoading,
    // Setters
    setRecipes,
    setOffset,
    setTotalResults,
    setQuery,
    setIsRecipesListLoading,
    // Actions
    fetchRecipes
  }
})
