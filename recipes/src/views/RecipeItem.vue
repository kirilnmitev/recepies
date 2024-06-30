<script setup lang="ts">
import type { RecipeInformation } from '@/models/recipesInformation'
import { getRecipeInformation } from '@/services/recepiesService'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import fallbackImage from '@/assets/default-fallback-image.png'
import RecipeIngredients from '@/components/RecipeIngredients.vue'
import RecipeInstructions from '@/components/RecipeInstructions.vue'

const route = useRoute()
const recipe = ref<RecipeInformation>()

onBeforeMount(async () => {
  const response = await getRecipeInformation(Number(route.params.recipeId))
  recipe.value = response
})
</script>
<template>
  <div v-if="recipe" class="column full-height justify-between">
    <div class="q-mb-lg row">
      <div class="image-container img-wrapper">
        <q-img class="full-height" :src="recipe.image" :error-src="fallbackImage" />
      </div>
      <div class="col q-pl-lg">
        <div class="glassmorphism full-height q-py-sm q-px-md">
          <h3 class="q-my-md">{{ recipe.title }}</h3>
          <div v-html="recipe.summary"></div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row full-height">
        <div class="col-5 glassmorphism full-height column q-py-xs q-px-md">
          <RecipeIngredients :ingredients="recipe.extendedIngredients" />
        </div>
        <div class="col q-ml-lg glassmorphism full-height column q-py-xs q-px-md">
          <RecipeInstructions
            :simple-instructions="recipe.instructions"
            :analyzed-instructions="recipe.analyzedInstructions"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="full-height full-width flex justify-center items-center">
    <div><q-spinner-tail color="primary" size="3rem" /></div>
  </div>
</template>

<style scoped lang="scss">
.image-container {
  width: 20%;
}
</style>
