<script setup lang="ts">
import { MEASUREMENT_SYSTEMS } from '@/constants'
import type { ExtendedIngredient } from '@/models/recipesInformation'
import { ref } from 'vue'

defineProps<{ ingredients: ExtendedIngredient[] }>()

const measurementSystem = ref<MEASUREMENT_SYSTEMS>(MEASUREMENT_SYSTEMS.metric)
</script>

<template>
  <div class="full-height column">
    <h5 class="q-my-sm">{{ $t('ingredientsSection') }}</h5>
    <div class="flex">
      <q-btn-toggle
        v-model="measurementSystem"
        flat
        rounded
        toggle-color="secondary"
        :options="[
          { label: $t(MEASUREMENT_SYSTEMS.metric), value: MEASUREMENT_SYSTEMS.metric },
          { label: $t(MEASUREMENT_SYSTEMS.us), value: MEASUREMENT_SYSTEMS.us }
        ]"
      />
    </div>
    <div class="col">
      <div class="ingredients-list">
        <div v-for="(ingredient, index) in ingredients" :key="ingredient.id">
          <div>
            <span>{{ index + 1 }}. </span>
            <span>
              {{ ingredient.name }}
            </span>
          </div>
          <div class="q-ml-md">
            - {{ ingredient.measures[measurementSystem].amount }}
            {{ ingredient.measures[measurementSystem].unitShort }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped land="scss">
.ingredients-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}
</style>
