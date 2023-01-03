<template>
  <main>
    <SearchBar />
    <section class="pt-15 pb-20">
      <div class="wrapper">
        <h1 class="mb-15 text-center text-lg text-black-700">&#127865; Total Drinks: <span class="font-normal">612 |</span> &#127819; Total Ingredients: <span class="font-normal">484 |</span> &#127864; Drink Images: <span class="font-normal">611(87cc)</span></h1>
        <ul class="mb-15 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
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
