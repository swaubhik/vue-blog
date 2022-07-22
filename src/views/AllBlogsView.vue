<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        All Posts
      </h1>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id" class="py-4">
        <article
          class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
        >
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd
              class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              <time :dateTime="post.date">{{ formatDate(post.date) }}</time>
            </dd>
          </dl>
          <div class="space-y-3 xl:col-span-3">
            <div>
              <h3 class="text-2xl font-bold leading-8 tracking-tight">
                <router-link
                  class="text-gray-900 dark:text-gray-100"
                  :to="{ name: 'BlogView', params: { blogid: post.id } }"
                  >{{ post.title }}</router-link
                >
              </h3>
              <div class="flex flex-wrap">
                <router-link
                  v-for="tags in post.tags"
                  :key="tags.id"
                  to="#"
                  class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >{{ tags }}</router-link
                >
              </div>
            </div>
            <div
              class="prose max-w-none h-20 overflow-hidden text-ellipsis text-gray-500 dark:text-gray-400"
            >
              {{ post.body }}
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import formatDate from "@/lib/utils/formatDate";
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/postStore";
export default {
  setup() {
    const { posts, loading, error } = storeToRefs(usePostStore());
    const { fetchPosts } = usePostStore();
    fetchPosts();
    return {
      formatDate,
      posts,
      loading,
      error,
    };
  },
};
</script>

<style></style>
