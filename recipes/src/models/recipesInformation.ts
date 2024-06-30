export interface RecipeInformation {
  id: number
  title: string
  image: string
  imageType: string
  servings: number
  readyInMinutes: number
  sourceName: string
  sourceUrl: string
  spoonacularSourceUrl: string
  healthScore: number
  originalId: number | null
  preparationMinutes: number
  cookingMinutes: number
  aggregateLikes: number
  spoonacularScore: number
  pricePerServing: number
  analyzedInstructions: AnalyzedInstruction[]
  cheap: boolean
  creditsText: string
  cuisines: string[]
  dairyFree: boolean
  diets: string[]
  gaps: string
  glutenFree: boolean
  instructions: string
  lowFodmap: boolean
  occasions: string[]
  sustainable: boolean
  vegan: boolean
  vegetarian: boolean
  veryHealthy: boolean
  veryPopular: boolean
  weightWatcherSmartPoints: number
  dishTypes: string[]
  extendedIngredients: ExtendedIngredient[]
  summary: string
}

export interface ExtendedIngredient {
  aisle: string | null
  amount: number
  consistency: string
  nameClean: string | null
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

interface Equipment {
  id: number
  name: string
  localizedName: string
  image: string
}

interface Ingredient {
  id: number
  name: string
  localizedName: string
  image: string
}

interface Step {
  number: number
  step: string
  ingredients: Ingredient[]
  equipment: Equipment[]
  length?: {
    number: number
    unit: string
  }
}

export interface AnalyzedInstruction {
  name: string
  steps: Step[]
}
