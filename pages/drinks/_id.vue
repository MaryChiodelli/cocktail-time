<template>
  <main>
    <section class="flex">
      <div class="w-1/2 pr-5">
        <img class="w-full object-cover max-h-[700px]" :src="drink.strDrinkThumb" :alt="drink.strDrink">
      </div>
      <div class="w-1/2 py-20 px-32">
        <ul class="flex mb-10 text-sm">
          <li class="after:content-['/'] after:mx-2">Home</li>
          <li>{{ drink.strDrink }}</li>
        </ul>
        <h1 class="mb-9 text-xl">{{ drink.strDrink }}</h1>
        <h2 class="mb-4 text-lg">Instructions:</h2>
        <ul class="mb-9 list-disc	list-inside">
          <li v-for="(info, index) in instructions" :key="'info' + index">{{ info }}</li>
        </ul>
        <h2 class="mb-4 text-lg">Glass:</h2>
        <p>Serve: {{ drink.strGlass }}</p>
      </div>
    </section>
    <section class="py-10">
      <div class="w-1/2 pr-5 text-center">
        <h2 class="mb-10 text-lg text-black-700">Ingredients ({{ ingredients.length }})</h2>
        <ul class="grid grid-cols-2 gap-2">
          <li class="w-full aspect-square max-h-[350px] object-cover flex flex-col justify-center items-center bg-gray-500" v-for="(ingredient, index) in ingredients" :key="index">
            <img class="w-[175px] mb-10" :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`" :alt="ingredient">
            <div class="font-semibold text-black-700">{{ ingredient }}</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="pt-10 pb-20">
      <div class="wrapper">
        <h2 class="mb-20 text-lg text-black-700 text-center">Browse more</h2>
        <ul class="flex -mx-5">
          <li class="w-1/4 px-5" v-for="drink in moreDrinks" :key="drink.idDrink">
            <NuxtLink :to="{ name: 'drinks-id', params: { id: drink.idDrink } }">
              <DrinkCard :drink="drink" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { drinks } = await $axios.$get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    const drink = drinks[0]
    const ingredients = []
    const instructions = drink.strInstructions.split('. ')
    for (let i = 1; i <= 15; i++) {
      const item = drink[`strIngredient${i}`]
      if (item) ingredients.push(item)
    }
    const moreDrinks = await $axios.$get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients[0]}`)
    return { drink, instructions, ingredients, moreDrinks: moreDrinks.drinks.slice(0, 4) }
  }
}
</script>