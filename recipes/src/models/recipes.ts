export interface RecipeAutocompleteResult {
  id: number
  title: string
  imageType: string
}

export interface RecipeSearch extends RecipeAutocompleteResult {
  image: string
}

export interface RecipeSearchResult {
  offset: number
  number: number
  results: RecipeSearch[]
  totalResults: number
}
