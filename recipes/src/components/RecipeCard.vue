<script setup lang="ts">
import type { RecipeSearch } from '@/models/recipes'
import fallbackImage from '@/assets/default-fallback-image.png'

const props = defineProps<{ recipe: RecipeSearch }>()
const { recipe } = props

const redirect = () => {}
</script>

<template>
  <div class="card-styling">
    <q-btn no-caps class="glassmorphism card-styling q-pa-sm full-height full-width">
      <div>
        <div class="img-wrapper q-mb-sm">
          <q-img :src="recipe.image" fit="contain" :error-src="fallbackImage" />
        </div>
        <div class="recipe-text-elipsis">{{ recipe.title }}</div>
      </div>
    </q-btn>
  </div>
</template>

<style lang="scss">
.card-styling {
  height: 100%;
  font-size: 1dvw;
  cursor: pointer;
  transition: all 0.3s;
}

.card-styling > .q-btn__content {
  display: block !important;
  text-align: left;
}

.card-styling:hover {
  transform: scale(103%);
}

.img-wrapper {
  border-radius: 0.7rem;
  overflow: hidden;
}

.recipe-text-elipsis {
  display: -webkit-box;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  max-height: 3em;
}
</style>
