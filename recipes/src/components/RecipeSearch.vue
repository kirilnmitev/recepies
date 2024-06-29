<script setup lang="ts">
import { AUTOCOMPLETE_START_LENGTH, ENTER_KEY_CODE } from '@/constants'
import { getRecipesAutocomplete } from '@/services/recepiesService'
import { mdiSearchWeb } from '@quasar/extras/mdi-v4'
import { computed, ref } from 'vue'

const currentInput = ref('')
const searchQuery = ref('')
const submittedQuery = ref('')
const autocompleteSuggestions = ref<string[]>([])
const allAutocompleteValues = ref<string[]>([])
const isAutocompleteLoading = ref(false)

const handleInputChange = (value: string) => {
  currentInput.value = value
  searchQuery.value = value
}

const handleSelectEnter = ({ code }: KeyboardEvent) => {
  if (
    code === ENTER_KEY_CODE &&
    isQueryInAutocompleteValues.value &&
    submittedQuery.value.trim() !== currentInput.value.trim()
  ) {
    searchQuery.value = currentInput.value
    submittedQuery.value = currentInput.value
  }
}

const isQueryInAutocompleteValues = computed(() =>
  allAutocompleteValues.value.some((val) =>
    val.toLowerCase().includes(currentInput.value.trim().toLowerCase())
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
  <div class="row justify-between">
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
      class="col-11 q-gutter-x-lg"
      popup-content-class="glassmorphism"
      @filter="fetchAutocompleteOptions"
      @input-value="handleInputChange"
      @keyup.stop="handleSelectEnter"
    />
    <q-btn class="col-1" outline><q-icon :name="mdiSearchWeb" /></q-btn>
  </div>
</template>

<style lang="scss"></style>
