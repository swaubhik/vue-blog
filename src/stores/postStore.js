import { defineStore } from "pinia";
import router from "@/router/index.js";
export const usePostStore = defineStore({
  id: "postStore",
  state: () => ({
    selectedWord: {
      value: "",
      blogId: "",
      wordId: "",
      popupPosition: {},
    },
    highlights: [],
    isPopupOpen: false,
    posts: [
      {
        id: 1,
        createdAt: "2022-05-24T08:45:32Z",
        author: "Swaubhik",
        content:
          "Praesentium odit sapiente, facere nam maxime, perspiciatis dignissimos accusantium qui. Reprehenderit cum velit aut, perferendis a quos, consequatur doloribus vitae repellat. Perferendis assumenda a, officia voluptatibus, a consequatur laboriosam itaque fuga. Quibusdam a reprehenderit consequuntur, reprehenderit voluptatibus pariatur rerum, doloribus fuga. Tempora alias qui delectus facilis, deleniti cum nulla sequi, placeat est quisquam ea odit.\n\nVeniam perferendis a commodi tempora iusto, provident libero praesentium ipsa. Assumenda veniam sunt ut a, a quod repudiandae illum, facere adipisci blanditiis nemo. Reprehenderit qui voluptas, veniam aspernatur voluptas at qui non, sint molestias. Consequuntur reprehenderit magni expedita, assumenda officiis perspiciatis, temporibus ratione totam corrupti, a inventore saepe voluptatibus officia veniam.\n\nIllo quas sapiente ea ab facere necessitatibus, corrupti reprehenderit ducimus. Perspiciatis reprehenderit ab excepturi libero, reprehenderit eum perspiciatis id, ratione a doloribus sit a, sequi placeat cumque omnis molestias.\n\nId assumenda sapiente iusto aliquid a, minima consectetur tempora quibusdam. Reprehenderit pariatur optio, delectus quidem repellendus impedit a exercitationem. Maxime consequuntur at, officiis delectus ex cum ut, veritatis expedita impedit libero. Quibusdam impedit totam animi inventore, explicabo itaque laboriosam quod ab, itaque ex nam et. Cumque ea repellendus a, reprehenderit eligendi magnam, consequuntur in eos odio expedita.",
        title:
          "Iusto a architecto repellendus a nisi a eligendi, consequuntur voluptate.",
        highlightedWords: [],
      },
      {
        id: 2,
        createdAt: "2022-07-23T23:43:35.726Z",
        author: "Swaubhik",
        content:
          "<h2>Installation <a href='https://pinia.vuejs.org/getting-started.html#installation' rel='noopener noreferrer' target='_blank'>#</a></h2><p>Install <code>pinia</code> with your favorite package manager:</p><pre class='ql-syntax' spellcheck='false'>yarn add pinia# or with npmnpm install pinia</pre><p>TIP</p><p>If your app is using Vue 2, you also need to install the composition api: <code>@vue/composition-api</code>. If you are using Nuxt, you should follow <a href='https://pinia.vuejs.org/ssr/nuxt.html' rel='noopener noreferrer' target='_blank'>these instructions</a>.</p><p>If you are using the Vue CLI, you can instead give this <a href='https://github.com/wobsoriano/vue-cli-plugin-pinia' rel='noopener noreferrer' target='_blank'><strong>unofficial plugin</strong></a> a try.</p><p>Create a pinia instance (the root store) and pass it to the app as a plugin:</p><pre class='ql-syntax' spellcheck='false'>import{createApp}from 'vue'import{createPinia}from 'pinia'import App from './App.vue'const pinia=createPinia()const app=createApp(App)app.use(pinia)app.mount('#app')</pre><p>If you are using Vue 2, you also need to install a plugin and inject the created <code>pinia</code> at the root of the app:</p><pre class='ql-syntax' spellcheck='false'>import{createPinia, PiniaVuePlugin}from 'pinia'Vue.use(PiniaVuePlugin)const pinia=createPinia()new Vue({el: '#app', // other options... // ... // note the same `pinia` instance can be used across multiple Vue apps on // the same page pinia,})</pre><p>This will also add devtools support. In Vue 3, some features like time traveling and editing are still not supported because vue-devtools doesn't expose the necessary APIs yet but the devtools have way more features and the developer experience as a whole is far superior. In Vue 2, Pinia uses the existing interface for Vuex (and can therefore not be used alongside it).</p><h2>What is a Store? <a href='https://pinia.vuejs.org/getting-started.html#what-is-a-store' rel='noopener noreferrer' target='_blank'>#</a></h2><p>A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree. In other words, <strong>it hosts global state</strong>. It's a bit like a component that is always there and that everybody can read off and write to. It has <strong>three concepts</strong>, the <a href='https://pinia.vuejs.org/core-concepts/state.html' rel='noopener noreferrer' target='_blank'>state</a>, <a href='https://pinia.vuejs.org/core-concepts/getters.html' rel='noopener noreferrer' target='_blank'>getters</a> and <a href='https://pinia.vuejs.org/core-concepts/actions.html' rel='noopener noreferrer' target='_blank'>actions</a> and it's safe to assume these concepts are the equivalent of <code>data</code>, <code>computed</code> and <code>methods</code> in components.</p><h2>When should I use a Store <a href='https://pinia.vuejs.org/getting-started.html#when-should-i-use-a-store' rel='noopener noreferrer' target='_blank'>#</a></h2><p>A store should contain data that can be accessed throughout your application. This includes data that is used in many places, e.g. User information that is displayed in the navbar, as well as data that needs to be preserved through pages, e.g. a very complicated multi-step form.</p><p>On the other hand, you should avoid including in the store local data that could be hosted in a component instead, e.g. the visibility of an element local to a page.</p><p>Not all applications need access to a global state, but if yours need one, Pinia will make your life easier</p>",
        title: "Getting started with Pinia 🍍",
        highlightedWords: [],
      },
    ],
    post: null,
  }),

  getters: {
    postByAuthor(state) {
      return (author) => {
        return state.posts.filter((post) => post.author === author);
      };
    },
    postById(posts) {
      return (id) => {
        return posts.find((post) => post.id === id);
      };
    },
  },
  actions: {
    fetchAllPosts() {
      if (localStorage.getItem("posts") == null) {
        return this.posts;
      } else {
        this.posts = JSON.parse(localStorage.getItem("posts"));
        console.log(this.posts);
      }
    },
    createPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        createdAt: new Date().toISOString(),
        ...post,
        highlightedWords: [],
      });
      localStorage.setItem("posts", JSON.stringify(this.posts));
      router.push({
        name: "Blogs",
      });
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    fetchPost(id) {
      this.post = [];
      this.post = this.posts.find((post) => post.id == id);
    },
  },
});
