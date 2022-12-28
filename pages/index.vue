<template>
  <main>
    <SearchBar />
    <section class="pt-15 pb-20">
      <div class="wrapper">
        <h1 class="mb-15 text-center text-2xl leading-9">&#127865; <span class="font-semibold">Total Drinks:</span> 612 | &#127819; <span class="font-semibold">Total Ingredients:</span> 484 | &#127864; <span class="font-semibold">Drink Images:</span> 611(87cc)</h1>
        <ul class="mb-15 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <li v-for="drink in drinks" :key="drink.idDrink">
            <NuxtLink :to="{ name: 'drinks-id', params: { id: drink.idDrink } }">
              <DrinkCard :drink="drink" />
            </NuxtLink>
          </li>
        </ul>
        <div class="text-center">
          <button class="btn btn--dark">Load more +</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { drinks } = await $axios.$get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lime')
    const moreDrinks = drinks.splice(12)
    return { drinks, moreDrinks }
  }
}
</script>
