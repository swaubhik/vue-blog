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
      <div v-for="item in highlights" :key="item.id" class="mt-2 mb-2 mr-5">
        <router-link
          :to="{ name: 'HighlightContentView', params: { id: item.id } }"
          class="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >{{ item.word }}</router-link
        ><span
          class="-ml-2 text-sm font-semibold text-gray-600 dark:text-gray-300"
        >
          ({{ item.title }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { usePostStore } from "@/stores/postStore";

export default {
  setup() {
    const { highlights } = usePostStore();
    return {
      highlights,
    };
  },
};
</script>

<style></style>
