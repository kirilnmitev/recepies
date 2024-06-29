import type {
  RecipeAutocompleteQuery,
  RecipeInformationQuery,
  RecipeSearchQuery
} from '@/models/utilTypes'
import { apiClient } from './apiService'
import { SEARCH_RESULTS_LENGTH } from '@/constants'
import type { RecipeAutocompleteResult, RecipeSearchResult } from '@/models/recipes'
import type { RecipeInformation } from '@/models/recipesInformation'

export const getRecipes = async ({ query }: RecipeSearchQuery): Promise<RecipeSearchResult> => {
  const params: RecipeSearchQuery = {
    query,
    number: SEARCH_RESULTS_LENGTH
  }
  const response = await apiClient.get('/recipes/complexSearch', {
    params
  })

  return response.data
}

export const getRecipesAutocomplete = async ({
  query
}: RecipeAutocompleteQuery): Promise<RecipeAutocompleteResult[]> => {
  const params: RecipeSearchQuery = {
    query,
    number: SEARCH_RESULTS_LENGTH
  }
  const response = await apiClient.get('/recipes/autocomplete', {
    params
  })

  return response.data
}

export const getRecipeInformation = async (id: number): Promise<RecipeInformation> => {
  const params: RecipeInformationQuery = {
    id
  }
  const response = await apiClient.get('/recipes/autocomplete', {
    params
  })

  return response.data
}
