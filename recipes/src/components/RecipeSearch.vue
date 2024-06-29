<script setup lang="ts">
import { AUTOCOMPLETE_START_LENGTH } from '@/constants'
import { getRecipesAutocomplete } from '@/services/recepiesService'
import { computed, ref } from 'vue'

const currentInput = ref('')
const searchQuery = ref('')
const autocompleteSuggestions = ref<string[]>([])
const allAutocompleteValues = ref<string[]>([])
const isAutocompleteLoading = ref(false)

const handleInputChange = (value: string) => {
  currentInput.value = value
  searchQuery.value = value
}

const handleSelectEnter = ({ code }: KeyboardEvent) => {
  if (code === 'Enter' && isQueryInAutocompleteValues.value) {
    searchQuery.value = currentInput.value
  }
}

const isQueryInAutocompleteValues = computed(() =>
  allAutocompleteValues.value.some((val) =>
    val.toLowerCase().includes(currentInput.value.toLowerCase())
  )
)

const fetchAutocompleteOptions = (
  query: string,
  update: (callback: () => void) => void,
  abort: () => void
) => {
  if (
    query.length < AUTOCOMPLETE_START_LENGTH ||
    (!isQueryInAutocompleteValues.value && allAutocompleteValues.value.length)
  ) {
    abort()
    return
  }

  update(async () => {
    isAutocompleteLoading.value = true
    const result = await getRecipesAutocomplete({ query })
    const options = result.map((option) => option.title)
    allAutocompleteValues.value = options
    isAutocompleteLoading.value = false

    autocompleteSuggestions.value =
      query.length >= AUTOCOMPLETE_START_LENGTH && !allAutocompleteValues.value.includes(query)
        ? [query, ...allAutocompleteValues.value]
        : [...allAutocompleteValues.value]
  })
}
</script>

<template>
  <div>
    <q-select
      v-model="searchQuery"
      :options="autocompleteSuggestions"
      color="accent"
      use-input
      fill-input
      hide-selected
      outlined
      dark
      hide-dropdown-icon
      :loading="isAutocompleteLoading"
      input-debounce="0"
      :options-dark="false"
      popup-content-class="glassmorphism"
      @filter="fetchAutocompleteOptions"
      @input-value="handleInputChange"
      @keyup.stop="handleSelectEnter"
    />
  </div>
</template>

<style lang="scss"></style>
