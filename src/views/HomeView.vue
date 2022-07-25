<template>
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1
        className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Latest
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        A site created with Vue.js and Tailwind CSS.
      </p>
    </div>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
  <div className="flex justify-end text-base font-medium leading-6">
    <router-link
      :to="{ name: 'Blogs' }"
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label="all posts"
    >
      All Posts &rarr;
    </router-link>
  </div>
</template>

<script>
import { usePostStore } from "../stores/postStore";
import PostCard from "@/components/PostCard.vue";
export default {
  setup() {
    const { posts } = usePostStore();
    return {
      posts,
    };
  },
  components: { PostCard },
};
</script>

<style></style>
