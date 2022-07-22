<template>
  <div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex h-screen flex-col justify-between">
      <HeaderComponent />
      <main class="mb-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    RouterView,
  },
};
</script>
