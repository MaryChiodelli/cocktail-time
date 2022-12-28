<template>
  <main>
    <section class="flex">
      <div class="w-1/2 pr-5">
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink">
      </div>
      <div class="w-1/2">
        <ul class="flex">
          <li>Home</li>
          <li>{{ drink.strDrink }}</li>
        </ul>
        <h1>{{ drink.strDrink }}</h1>
        <h2>Instructions:</h2>
        <ul>
          <li>{{ drink.strInstructionsIT }}</li>
        </ul>
        <h2>Glass:</h2>
        <p>Serve: {{ drink.strGlass }}</p>
      </div>
    </section>
    <section>
      <h2>Ingredients(4)</h2>
      <ul>
        <li>
          <div>
            <img src="" alt="ingredient">
            <div>Ingredient name</div>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <div class="wrapper">
        <h2>Title</h2>
        <ul>
          <li>card</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { drinks } = await $axios.$get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    return { drink: drinks[0] }
  }
}
</script>