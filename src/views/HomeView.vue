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
      <li
        v-for="post in posts.slice(0, 2).reverse()"
        :key="post.id"
        className="py-12"
      >
        <article>
          <SkeletonComponent v-if="loading" />
          <div
            v-else
            className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
          >
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd
                className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
              >
                <time :dateTime="post.date">{{
                  formatDate(post.createdAt)
                }}</time>
              </dd>
            </dl>
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold leading-8 tracking-tight">
                    <router-link
                      :to="{ name: 'BlogView', params: { id: post.id } }"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {{ post.title }}
                    </router-link>
                  </h2>
                </div>
                <div
                  v-html="post.content"
                  className="prose line-clamp-2 text-ellipsis prose-headings:text-lg dark:prose-dark max-w-none h-28 text-gray-500 dark:text-gray-400"
                ></div>
              </div>
              <div className="text-base font-medium leading-6">
                <router-link
                  :to="{ name: 'BlogView', params: { id: post.id } }"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Read more &rarr;
                </router-link>
              </div>
            </div>
          </div>
        </article>
      </li>
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
import formatDate from "@/lib/utils/formatDate";
import { usePostStore } from "../stores/postStore";
import SkeletonComponent from "../components/SkeletonComponent.vue";
export default {
  setup() {
    const { posts } = usePostStore();

    return {
      formatDate,
      posts,
    };
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
  components: { SkeletonComponent },
};
</script>

<style></style>
