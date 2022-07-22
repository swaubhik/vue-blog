<template>
  <div
    class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0mx-auto xl:px-0"
  >
    <article>
      <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header class="pt-6 xl:pb-6">
          <div class="space-y-1 text-center">
            <dl class="space-y-10">
              <div>
                <dt class="sr-only">Published on</dt>
                <dd
                  class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                >
                  <time :datetime="post.createdAt">{{
                    formatDate(post.createdAt)
                  }}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
              >
                {{ post.title }}
              </h1>
            </div>
          </div>
        </header>
        <div
          class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
          style="grid-template-rows: auto 1fr"
        >
          <dl
            class="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"
          >
            <dt class="sr-only">Authors</dt>
            <dd>
              <ul
                class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
              >
                <li class="flex items-center space-x-2">
                  <dl class="whitespace-nowrap text-sm font-medium leading-5">
                    <dt class="sr-only">Name</dt>
                    <dd class="text-gray-900 dark:text-gray-100">
                      {{ post.author }}
                    </dd>
                  </dl>
                </li>
              </ul>
            </dd>
          </dl>
          <div
            class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
          >
            <div
              v-html="post.content"
              class="prose max-w-none pt-10 pb-8 dark:prose-dark"
            ></div>
          </div>
          <footer>
            <div class="pt-4 xl:pt-8">
              <router-link
                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                :to="{ name: 'Blogs' }"
                >← Back to the blog</router-link
              >
            </div>
            <div class="pt-4 xl:pt-8">
              <router-link
                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                :to="{ name: 'Blogs' }"
              >
                Edit blog &rarr;</router-link
              >
            </div>
          </footer>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import formatDate from "@/lib/utils/formatDate";
import { storeToRefs } from "pinia";
import { usePostStore } from "@/stores/postStore";
import { useRoute } from "vue-router";
// import Post from "@/components/Post.vue";

export default {
  setup() {
    const { post, loading, error } = storeToRefs(usePostStore());
    const { fetchPost } = usePostStore();
    fetchPost(useRoute().params.id);
    return {
      formatDate,
      post,
      loading,
      error,
    };
  },
};
</script>
