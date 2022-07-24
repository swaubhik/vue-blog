<template>
  <div
    role="status"
    class="space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex"
  >
    <div
      class="flex justify-center items-center w-28 h-5 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
    ></div>
    <div class="w-full">
      <div class="h-8 bg-gray-200 rounded dark:bg-gray-700 w-full mb-4"></div>
      <div
        class="h-2 mt-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
      ></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div
        class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
      ></div>
      <div
        class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
      ></div>
      <div
        class="h-6 w-28 mt-5 bg-gray-200 rounded dark:bg-gray-700 max-w-[360px]"
      ></div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "SkeletonComponent",
};
</script>

<style></style>
