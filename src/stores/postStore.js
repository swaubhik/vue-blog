import { defineStore } from "pinia";
import router from "@/router/index.js";
import { v4 } from "uuid";
import postData from "@/data/posts.json";

function getData(key) {
  const dataFromLocalStorage = window.localStorage.getItem(key);
  const dataFromDemo = postData[key];
  return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : dataFromDemo;
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const usePostStore = defineStore({
  id: "postStore",
  state: () => ({
    posts: getData("posts").reverse(),
    post: null,
    highlight: null,
    highlights: getData("highlights"),
  }),

  getters: {
    getHighlight(state) {
      return (id) => {
        this.highlight = state.highlights.find(
          (highlight) => highlight.id === id
        );
        return this.highlight;
      };
    },
  },
  actions: {
    createPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        createdAt: new Date().toISOString(),
        ...post,
      });
      saveToLocalStorage("posts", this.posts);
      router.push({
        name: "BlogView",
        params: { id: this.posts.length },
      });
    },
    fetchPost(id) {
      this.post = this.posts.find((post) => post.id == id);
    },
    addHighlight(highlight) {
      this.highlights.push({
        id: v4(),
        ...highlight,
      });
      saveToLocalStorage("highlights", this.highlights);
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
      saveToLocalStorage("posts", this.posts);
    },
  },
});
