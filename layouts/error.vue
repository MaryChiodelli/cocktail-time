<template>
  <main class="py-20 text-center">
    <div class="wrapper">
      <h1 class="text-xl mb-5" v-if="error.statusCode === 404">Page not found</h1>
      <h1 class="text-xl mb-5" v-else>No results found for {{ this.$route.query.name }}</h1>
      <NuxtLink class="btn btn--dark" to="/">Back to Home</NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
}
</script>