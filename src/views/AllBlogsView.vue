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
      <li v-for="post in posts.reverse()" :key="post.id" class="py-4 cards">
        <SkeletonComponent v-if="loading" />
        <article
          v-else
          class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
        >
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd
              class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              <time :dateTime="post.createdAt">{{
                formatDate(post.createdAt)
              }}</time>
            </dd>
          </dl>
          <div class="space-y-3 xl:col-span-3">
            <div>
              <h3 class="text-2xl font-bold leading-8 tracking-tight">
                <router-link
                  class="text-gray-900 dark:text-gray-100"
                  :to="{ name: 'BlogView', params: { id: post.id } }"
                  >{{ post.title }}</router-link
                >
              </h3>
              <div class="flex flex-wrap">
                <span
                  class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >by {{ post.author }}</span
                >
              </div>
            </div>
            <div
              v-html="post.content"
              class="prose prose-headings:text-lg line-clamp-1 max-w-none dark:prose-dark h-24 text-gray-500 dark:text-gray-400"
            ></div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import formatDate from "@/lib/utils/formatDate";
import { usePostStore } from "../stores/postStore";
import SkeletonComponent from "../components/SkeletonComponent.vue";

export default {
  components: { SkeletonComponent },
  setup() {
    const { posts, fetchAllPosts } = usePostStore();

    fetchAllPosts();
    return {
      posts,
      formatDate,
    };
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
};
</script>
