export interface RecipeInformation {
  id: number
  title: string
  image: string
  imageType: string
  servings: number
  readyInMinutes: number
  license: string
  sourceName: string
  sourceUrl: string
  spoonacularSourceUrl: string
  healthScore: number
  spoonacularScore: number
  pricePerServing: number
  analyzedInstructions: any[]
  cheap: boolean
  creditsText: string
  cuisines: string[]
  dairyFree: boolean
  diets: string[]
  gaps: string
  glutenFree: boolean
  instructions: string
  ketogenic: boolean
  lowFodmap: boolean
  occasions: string[]
  sustainable: boolean
  vegan: boolean
  vegetarian: boolean
  veryHealthy: boolean
  veryPopular: boolean
  whole30: boolean
  weightWatcherSmartPoints: number
  dishTypes: string[]
  extendedIngredients: ExtendedIngredient[]
  summary: string
  winePairing: WinePairing
}

export interface ExtendedIngredient {
  aisle: string
  amount: number
  consitency: string
  id: number
  image: string
  measures: {
    metric: {
      amount: number
      unitLong: string
      unitShort: string
    }
    us: {
      amount: number
      unitLong: string
      unitShort: string
    }
  }
  meta: string[]
  name: string
  original: string
  originalName: string
  unit: string
}

export interface WinePairing {
  pairedWines: string[]
  pairingText: string
  productMatches: WineProductMatch[]
}

export interface WineProductMatch {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  averageRating: number
  ratingCount: number
  score: number
  link: string
}
