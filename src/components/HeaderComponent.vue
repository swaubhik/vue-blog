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
            active-class="text-gray-900 !font-bold"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'Blogs' }"
            active-class="text-gray-900 !font-bold"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Blogs</router-link
          >
          <router-link
            :to="{ name: 'AddPost' }"
            active-class="text-gray-900 !font-bold"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Create Blogs</router-link
          >
          <router-link
            :to="{ name: 'Highlights' }"
            active-class="text-gray-900 !font-bold"
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >Highlights</router-link
          >
        </div>
        <DarkModeComponent />
        <!-- Mobile Nav -->
        <div class="sm:hidden">
          <button
            type="button"
            class="ml-1 mr-1 h-8 w-8 rounded py-1"
            @click="mobileNav = !mobileNav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="text-gray-900 dark:text-gray-100"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            :class="mobileNav ? 'translate-x-0' : 'translate-x-full'"
            class="fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800"
          >
            <div class="flex justify-end">
              <button
                type="button"
                class="mr-5 mt-11 h-8 w-8 rounded"
                @click="mobileNav = !mobileNav"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-gray-900 dark:text-gray-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav class="fixed mt-8 h-full">
              <div class="px-12 py-4">
                <router-link
                  class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  :to="{ name: 'Home' }"
                  >Home</router-link
                >
              </div>
              <div class="px-12 py-4">
                <router-link
                  class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  :to="{ name: 'Blogs' }"
                  >Blogs</router-link
                >
              </div>
              <div class="px-12 py-4">
                <router-link
                  class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  :to="{ name: 'AddPost' }"
                  >Create post</router-link
                >
              </div>
              <div class="px-12 py-4">
                <router-link
                  class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  :to="{ name: 'Home' }"
                  >About</router-link
                >
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import BrandLogo from "./icons/BrandLogo.vue";
import DarkModeComponent from "./DarkModeComponent.vue";
export default {
  components: { BrandLogo, DarkModeComponent },
  data() {
    return {
      mobileNav: false,
    };
  },
};
</script>

<style></style>
