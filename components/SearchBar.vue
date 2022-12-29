<template>
  <form class="py-9 flex items-start bg-gray">
    <svg class="w-6 h-6 mx-[66px] my-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
    <div class="flex-grow pb-2 border-b border-black">
      <input class="w-10/12 bg-transparent text-2xl font-semibold leading-9" @keyup.enter="goToSearch" v-model="search" type="text" placeholder="Search cocktail">
      <span v-if="search" @click="clearInput" class="float-right text-sm leading-9 cursor-pointer">Clear</span>
    </div>
    <input @click="goToSearch" class="mx-10 cursor-pointer btn btn--dark" type="submit" value="Search">
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    goToSearch(e) {
      e.preventDefault()
      this.$router.push({ name: 'search', query: { name: this.search } })
    },
    clearInput() {
      this.search = ''
    }
  }
}
</script>