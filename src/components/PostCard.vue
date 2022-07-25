<template>
  <li className="py-12">
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
            <time :dateTime="post.date">{{ formatDate(post.createdAt) }}</time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <router-link
                  :to="{ name: 'BlogView', params: { id: post.id } }"
                  className="text-gray-900 dark:text-gray-100"
                >
                  {{ post.title }}
                </router-link>
              </h2>
            </div>
            <div
              className="prose dark:prose-dark max-w-4xl text-gray-500 dark:text-gray-400"
            >
              {{ exerptTrim }}
            </div>
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
</template>

<script>
import formatDate from "@/lib/utils/formatDate";
import SkeletonComponent from "./SkeletonComponent.vue";
export default {
  components: { SkeletonComponent },
  props: {
    post: Object,
  },
  setup() {
    return {
      formatDate,
    };
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    exerptTrim() {
      return this.post.excerpt.substring(0, 180) + "...";
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
};
</script>

<style></style>
