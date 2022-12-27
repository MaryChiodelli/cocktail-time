<template>
  <main>
    <SearchBar />
    <section class="pt-15 pb-20">
      <div class="wrapper">
        <h1 class="mb-15 text-center">Total Drinks: 612 | Total Ingredients: 484 | Drink Images: 611</h1>
        <ul class="mb-15 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <li v-for="drink in drinks" :key="drink.idDrink">
            <img :src="drink.strDrinkThumb" :alt="drink.strDrink">
            <h3>{{ drink.strDrink }}</h3>
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
