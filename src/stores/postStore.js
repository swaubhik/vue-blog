import { defineStore } from "pinia";
import axios from "axios";
export const usePostStore = defineStore({
  id: "postStore",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),

  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async fetchPosts() {
      this.loading = true;
      try {
        const data = await axios.get("http://localhost:3000/posts");
        this.posts = data.data;
      } catch (error) {
        alert(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(id) {
      this.post = [];
      this.loading = true;
      try {
        this.post = await axios
          .get(`http://localhost:3000/posts${id}`)
          .then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
