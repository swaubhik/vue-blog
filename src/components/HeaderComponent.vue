<template>
  <div className="flex h-screen flex-col justify-between">
    <header className="flex items-center justify-between py-10">
      <div>
        <router-link :to="{ name: 'Home' }">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <BrandLogo />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              VueBlogs
            </div>
          </div>
        </router-link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          <router-link
            :to="{ name: 'Home' }"
            active-class="text-slate-50"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'Blogs' }"
            active-class="text-slate-50"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Blogs</router-link
          >
          <router-link
            :to="{ name: 'Home' }"
            active-class="text-slate-50"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Create Blogs</router-link
          >
          <router-link
            :to="{ name: 'Home' }"
            active-class="text-slate-50"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Edit Blogs</router-link
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import BrandLogo from "./icons/BrandLogo.vue";
export default { components: { BrandLogo } };
</script>

<style></style>
