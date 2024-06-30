<script setup lang="ts">
import { INSTRUCTION_TYPES } from '@/constants'
import type { AnalyzedInstruction } from '@/models/recipesInformation'
import { computed, ref } from 'vue'

defineProps<{ simpleInstructions: string; analyzedInstructions: AnalyzedInstruction[] }>()

const instructionsType = ref<INSTRUCTION_TYPES>(INSTRUCTION_TYPES.instructions)

const isSimpleInstType = computed(() => instructionsType.value === INSTRUCTION_TYPES.instructions)

const scrollBarThumbStyle = {
  backgroundColor: 'var(--q-secondary)'
}
</script>

<template>
  <div class="col column">
    <h5 class="q-my-sm">{{ $t('instructionsSection') }}</h5>
    <q-btn-toggle
      v-model="instructionsType"
      flat
      rounded
      toggle-color="secondary"
      :options="[
        { label: $t(INSTRUCTION_TYPES.instructions), value: INSTRUCTION_TYPES.instructions },
        {
          label: $t(INSTRUCTION_TYPES.analyzedInstructions),
          value: INSTRUCTION_TYPES.analyzedInstructions
        }
      ]"
    />
    <div class="col">
      <q-scroll-area visible class="scroll-area" :vertical-thumb-style="scrollBarThumbStyle">
        <div v-if="isSimpleInstType" v-html="simpleInstructions"></div>
        <div v-else>
          <div v-for="part in analyzedInstructions" :key="part.name">
            <div>{{ part.name }}</div>
            <div v-for="step in part.steps" :key="step.number" class="flex">
              <div class="full-height">{{ step.number }}.</div>
              <div class="col q-ml-xs">
                <span>{{ step.step }}</span>
                <div v-if="step.ingredients.length" class="q-ml-md">
                  <div>{{ $t('ingredientsSection') }}</div>
                  <div v-for="ingredient in step.ingredients" :key="ingredient.id" class="q-ml-md">
                    -<span class="q-ml-xs">{{ ingredient.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-area {
  height: 100%;
  padding-right: 1rem;
}
</style>
