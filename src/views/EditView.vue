<template>
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1
        className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Edit post
      </h1>
    </div>
    <div class="pt-10">
      <div class="relative z-0 mb-6 w-full group">
        <input
          v-model="post.title"
          type="text"
          class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
          placeholder=" "
          required
        />
        <label
          class="peer-focus:font-semibold absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Title</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          v-model="post.author"
          type="text"
          class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
          placeholder=" "
          required
        />
        <label
          class="peer-focus:font-semibold absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Author</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <textarea
          v-model="post.excerpt"
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
          placeholder=" "
          required
          rows="3"
        />
        <label
          class="peer-focus:font-semibold absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >Excerpt</label
        >
      </div>
      <div class="relative mb-6 w-full group">
        <h2 class="text-gray-500 dark:text-gray-400 font-semibold text-lg mb-2">
          Content
        </h2>
        <div class="bg-gray-200 text-gray-900">
          <QuillEditor
            v-model:content="post.content"
            contentType="html"
            theme="snow"
            placeholder="Write your post here"
            toolbar="full"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-between">
        <button
          @click="editPost"
          class="px-4 py-2 bg-primary-400 text-gray-800 font-semibold text-lg rounded-lg hover:bg-primary-500 float-right"
        >
          Update Post
        </button>
        <button
          @click="deletePost"
          class="px-4 py-2 bg-red-400 text-gray-800 font-semibold text-lg rounded-lg hover:bg-red-500 float-right"
        >
          Delete Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { usePostStore } from "@/stores/postStore";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
export default {
  components: {
    QuillEditor,
  },
  setup() {
    const id = useRoute().params.id;
    const { post } = storeToRefs(usePostStore());
    const { fetchPost } = usePostStore();
    const postStore = usePostStore();
    fetchPost(id);
    return {
      post,
      postStore,
    };
  },
  data() {
    return {
      date: "",
    };
  },
  methods: {
    editPost() {
      this.postStore.editPost({
        id: this.post.id,
        createdAt: this.date,
        author: this.date,
        content: this.content,
        title: this.title,
        excerpt: this.excerpt,
      });
    },
    newDate() {
      this.date = new Date().toISOString();
    },
    deletePost() {
      console.log(this.post.id);
      this.postStore.deletePost(this.post.id);
    },
  },
};
</script>
