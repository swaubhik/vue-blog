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
                  <span
                    style="
                      box-sizing: border-box;
                      display: inline-block;
                      overflow: hidden;
                      width: initial;
                      height: initial;
                      background: none;
                      opacity: 1;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      position: relative;
                      max-width: 100%;
                    "
                    ><span
                      style="
                        box-sizing: border-box;
                        display: block;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        max-width: 100%;
                      "
                      ><img
                        style="
                          display: block;
                          max-width: 100%;
                          width: initial;
                          height: initial;
                          background: none;
                          opacity: 1;
                          border: 0;
                          margin: 0;
                          padding: 0;
                        "
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e" /></span
                    ><img
                      alt="avatar"
                      src="https://avatars.githubusercontent.com/u/71642879?v=4"
                      decoding="async"
                      data-nimg="intrinsic"
                      class="h-10 w-10 rounded-full"
                      style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        box-sizing: border-box;
                        padding: 0;
                        border: none;
                        margin: auto;
                        display: block;
                        width: 0;
                        height: 0;
                        min-width: 100%;
                        max-width: 100%;
                        min-height: 100%;
                        max-height: 100%;
                      "
                      srcset="
                        https://avatars.githubusercontent.com/u/71642879?s=40&v=4 1x,
                        https://avatars.githubusercontent.com/u/71642879?v=4      2x
                      " /><noscript></noscript
                  ></span>
                  <dl class="whitespace-nowrap text-sm font-medium leading-5">
                    <dt class="sr-only">Name</dt>
                    <dd class="text-gray-900 dark:text-gray-100">
                      {{ post.author }}
                    </dd>
                    <dt class="sr-only">Github</dt>
                    <dd>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/swaubhik"
                        class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >👨‍💻 Github</a
                      >
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
            <HighlightComponent @add-highlight="highlight" />
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

import HighlightComponent from "@/components/HighlightComponent.vue";

export default {
  setup() {
    const id = useRoute().params.id;
    const { addHighlight } = usePostStore();
    const { post } = storeToRefs(usePostStore());
    const { fetchPost } = usePostStore();
    fetchPost(id);
    return {
      formatDate,
      post,
      addHighlight,
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
        "<mark class='highlight'>$&</mark>"
      );
      return `<mark class="highlightText">${highlights}</mark>`;
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
  methods: {
    highlight(content) {
      this.addHighlight({
        ...content,
        postId: this.post.id,
        title: this.post.title,
      });
    },
  },
  components: { HighlightComponent },
};
</script>
