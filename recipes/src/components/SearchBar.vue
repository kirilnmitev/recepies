<script setup lang="ts">
import { AUTOCOMPLETE_START_LENGTH, ENTER_KEY_CODE } from '@/constants'
import { getRecipesAutocomplete } from '@/services/recepiesService'
import { useRecipesStore } from '@/stores/recipesStore'
import { mdiSearchWeb } from '@quasar/extras/mdi-v4'
import { storeToRefs } from 'pinia'
import { computed, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const autocompleteSuggestions = ref<string[]>([])
const allAutocompleteValues = ref<string[]>([])
const isAutocompleteLoading = ref(false)

const { fetchRecipes, setOffset, setQuery } = useRecipesStore()
const { getQuery } = storeToRefs(useRecipesStore())
const router = useRouter()

const handleInputChange = (value: string) => {
  searchQuery.value = value
}

const handleSelectEnter = (code?: string) => {
  if ((!code || code === ENTER_KEY_CODE) && getQuery.value.trim() !== searchQuery.value.trim()) {
    setQuery(searchQuery.value)

    setOffset(0)
    fetchRecipes()

    router.push({ query: { search: searchQuery.value, offset: 0 } })
  }
}

const isQueryInAutocompleteValues = computed(() =>
  allAutocompleteValues.value.some((val) =>
    val.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
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

const clearSearch = () => {
  searchQuery.value = ''
  handleSelectEnter()
}

onBeforeMount(async () => {
  await router.isReady()
  const { search } = router.currentRoute.value.query
  searchQuery.value = search?.toString() || ''
})
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
      clearable
      @filter="fetchAutocompleteOptions"
      @input-value="handleInputChange"
      @keyup.stop="({ code }: KeyboardEvent) => handleSelectEnter(code)"
      @clear="clearSearch"
    />
    <q-btn class="col-1" outline @click="() => handleSelectEnter()"
      ><q-icon :name="mdiSearchWeb"
    /></q-btn>
  </div>
</template>

<style lang="scss"></style>
