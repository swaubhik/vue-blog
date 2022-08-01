<template>
  <footer class="mt-16 flex flex-col items-center">
    <div class="mb-3 flex space-x-4">
      <div
        class="mb-2 flex flex-wrap space-x-2 text-sm text-gray-500 dark:text-gray-400"
      >
        <div>Swaubhik</div>
        <div>•</div>
        <div>&copy; {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <router-link to="/">VueBlog</router-link>
      </div>
    </div>
    <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
      <a target="_blank" href="https://github.com/swaubhik/vue-blog/"> Tailwind Vuejs Starter Blog </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style></style>
