<template>
  <div>
    <img class="w-full aspect-square object-cover mb-5" :src="drink.strDrinkThumb" :alt="drink.strDrink">
    <h3 class="text-2xl">{{ drink.strDrink }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    drink: {
      type: Object,
      required: true
    }
  }
}
</script>
