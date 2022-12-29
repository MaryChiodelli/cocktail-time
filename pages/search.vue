<template>
  <main>
    <SearchBar />
    <section class="pt-15 pb-20">
      <div class="wrapper">
        <h1 class="mb-15 text-center text-lg">&#127865; Total Drinks: <span class="font-normal">{{ drinks.length }}</span></h1>
        <ul class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <li v-for="drink in drinks" :key="drink.idDrink">
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
  // async asyncData({ query, $axios }) {
  //   const { drinks } = await $axios.$get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query.name}`)
  //   return { drinks }
  // },
  data() {
    return {
      drinks: []
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    const { drinks } = await this.$axios.$get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.$route.query.name}`)
    this.drinks = drinks
  }
}
</script>