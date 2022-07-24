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

            <div class="relative mt-5 max-w-lg">
              <input
                v-model="search"
                aria-label="Search Keywords"
                type="text"
                placeholder="Search Keywords"
                class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              /><svg
                class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </dl>
          <div
            class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
          >
            <!-- <div>
              Safe:
              <span>
                <template v-for="result in highlights" :key="result">
                  <template v-if="result.match"
                    ><strong class="bg-primary-500">{{
                      result.text
                    }}</strong></template
                  >
                  <template v-else>{{ result.text }}</template>
                </template>
              </span>
            </div> -->
            <div
              v-if="search == ''"
              v-html="post.content"
              class="prose max-w-none pt-10 pb-8 dark:prose-dark"
            ></div>
            <div
              v-else
              v-html="formatedHTML"
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
                :to="{ name: 'EditBlog', params: { id: post.id } }"
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
    const { post } = storeToRefs(usePostStore());
    const { fetchPost } = usePostStore();
    fetchPost(useRoute().params.id);
    return {
      formatDate,
      post,
    };
  },
  data() {
    return {
      source: this.post.content,
      search: "",
    };
  },
  computed: {
    formatedHTML() {
      const regexp = new RegExp(this.search, "ig");
      const highlights = this.source.replace(
        regexp,
        "<strong style='background-color:#14b8a6'>$&</strong>"
      );
      return `<span class="highlightText">${highlights}</span>`;
    },
    highlights() {
      const results = [];
      if (this.search && this.search.length > 0) {
        const regexp = new RegExp(this.search, "ig");

        let start = 0;
        for (let match of this.source.matchAll(regexp)) {
          results.push({
            text: this.source.substring(start, match.index),
            match: false,
          });
          start = match.index;
          results.push({
            text: this.source.substr(start, this.search.length),
            match: true,
          });
          start += this.search.length;
        }

        if (start < this.source.length)
          results.push({ text: this.source.substring(start), match: false });
      }

      if (results.length === 0) {
        results.push({
          text: this.source,
          match: false,
        });
      }

      return results;
    },
  },
};
</script>
