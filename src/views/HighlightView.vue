<template>
  <div
    class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"
  >
    <div class="space-x-2 pt-6 pb-8 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"
      >
        Highlights
      </h1>
    </div>
    <div class="flex max-w-lg flex-wrap">
      <div class="mt-2 mb-2 mr-5">
        <a
          class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          href="/tags/next-js"
          >next-js</a
        ><a
          class="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
          href="/tags/next-js"
        >
          (5)</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    highlight(text) {
      return text.replace(
        /[a-zA-Z0-9]+/g,
        "<span class=bg-primary-400>$1</span>"
      );
    },
  },
};
</script>

<style></style>
