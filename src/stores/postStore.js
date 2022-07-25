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
        createdAt: "2022-07-22T08:45:32Z",
        author: "Swaubhik",
        content:
          "<h1>Introduction</h1><p>Markdown and Mdx parsing is supported via <code>unified</code>, and other remark and rehype packages. <code>next-mdx-remote</code> allows us to parse <code>.mdx</code> and <code>.md</code> files in a more flexible manner without touching webpack.</p><p>GitHub flavored markdown is used. <code>mdx-prism</code> provides syntax highlighting capabilities for code blocks. Here's a demo of how everything looks.</p><p>The following markdown cheatsheet is adapted from: <a href='https://guides.github.com/features/mastering-markdown/' rel='noopener noreferrer' target='_blank'>https://guides.github.com/features/mastering-markdown/</a></p><h1>What is Markdown?</h1><p>Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like <code>#</code> or <code>*</code>.</p><h1>Syntax guide</h1><p>Here’s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.</p><p><br></p><h2>Headers</h2><pre class='ql-syntax' spellcheck='false'># This is a h1 tag## This is a h2 tag#### This is a h4 tag</pre><h1>This is a h1 tag</h1><h2>This is a h2 tag</h2><h4>This is a h4 tag</h4><h2>Emphasis</h2><pre class='ql-syntax' spellcheck='false'>_This text will be italic_**This text will be bold**_You **can** combine them_</pre><p><em>This text will be italic</em></p><p><strong>This text will be bold</strong></p><p><em>You </em><strong><em>can</em></strong><em> combine them</em></p><p><br></p><h2>Lists</h2><h3>Unordered</h3><pre class='ql-syntax' spellcheck='false'>- Item 1- Item 2 - Item 2a - Item 2b</pre><ul><li>Item 1</li><li>Item 2</li><li class='ql-indent-1'>Item 2a</li><li class='ql-indent-1'>Item 2b</li></ul><h3>Ordered</h3><pre class='ql-syntax' spellcheck='false'>1. Item 11. Item 21. Item 3 1. Item 3a 1. Item 3b</pre><ol><li>Item 1</li><li>Item 2</li><li>Item 3</li><li class='ql-indent-1'>Item 3a</li><li class='ql-indent-1'>Item 3b</li></ol><h2>Images</h2><pre class='ql-syntax' spellcheck='false'>![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)Format: ![Alt Text](url)</pre><p><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='GitHub Logo'></p><p><br></p><h2>Links</h2><pre class='ql-syntax' spellcheck='false'>http://github.com - automatic![GitHub](http://github.com)</pre><p><a href='http://github.com' rel='noopener noreferrer' target='_blank'>http://github.com</a> - automatic! <a href='http://github.com' rel='noopener noreferrer' target='_blank'>GitHub</a></p><p><br></p><h2>Blockquotes</h2><pre class='ql-syntax' spellcheck='false'>As Kanye West said:&gt; We're living the future so&gt; the present is our past.</pre><p>As Kanye West said:</p><p><br></p><blockquote>We're living the future so the present is our past.</blockquote><h2>Inline code</h2><pre class='ql-syntax' spellcheck='false'>I think you should use an`&lt;addr&gt;` element here instead.</pre><p>I think you should use an <code>&lt;addr&gt;</code> element here instead.</p><p><br></p><h2>Syntax highlighting</h2><p>Here’s an example of how you can use syntax highlighting with <a href='https://help.github.com/articles/basic-writing-and-formatting-syntax/' rel='noopener noreferrer' target='_blank'>GitHub Flavored Markdown</a>:</p><p><br></p><pre class='ql-syntax' spellcheck='false'>```js:fancyAlert.jsfunction fancyAlert(arg){if (arg){$.facebox({div: '#foo'})}}```</pre><p>And here's how it looks - nicely colored with styled code titles!</p><p>fancyAlert.js</p><p><br></p><pre class='ql-syntax' spellcheck='false'>function fancyAlert(arg){if (arg){$.facebox({div: '#foo'})}}</pre><h2>Footnotes</h2><pre class='ql-syntax' spellcheck='false'>Here is a simple footnote[^1]. With some additional text after it.[^1]: My reference.</pre><p>Here is a simple footnote<a href='https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide#user-content-fn-1' rel='noopener noreferrer' target='_blank'><sup>1</sup></a>. With some additional text after it.</p><p><br></p><h2>Task Lists</h2><pre class='ql-syntax' spellcheck='false'>- [x] list syntax required (any unordered or ordered list supported)- [x] this is a complete item- [] this is an incomplete item</pre><ul><li><br></li></ul><p>list syntax required (any unordered or ordered list supported)</p><p><br></p><p>this is a complete item</p><p><br></p><p><br></p><ul><li>this is an incomplete item</li></ul><h2>Tables</h2><p>You can create tables by assembling a list of words and dividing them with hyphens <code>-</code> (for the first row), and then separating each column with a pipe <code>|</code>:</p><p><br></p><p><br></p><pre class='ql-syntax' spellcheck='false'>| First Header | Second Header || --------------------------- | ---------------------------- || Content from cell 1 | Content from cell 2 || Content in the first column | Content in the second column |</pre><p>First HeaderSecond HeaderContent from cell 1Content from cell 2Content in the first columnContent in the second column</p><p><br></p><h2>Strikethrough</h2><p>Any word wrapped with two tildes (like <code>~~this~~</code>) will appear crossed out.</p>",
        title: "Markdown Guide 📝",
        excerpt:
          "Markdown and Mdx parsing is supported via unified, and other remark and rehype packages. next-mdx-remote allows us to parse .mdx and .md files in a more flexible manner without touching webpack.",
      },
      {
        id: 2,
        createdAt: "2022-07-23T23:43:35.726Z",
        author: "Swaubhik",
        content:
          "<h2>Installation <a href='https://pinia.vuejs.org/getting-started.html#installation' rel='noopener noreferrer' target='_blank'>#</a></h2><p>Install <code>pinia</code> with your favorite package manager:</p><pre class='ql-syntax' spellcheck='false'>yarn add pinia# or with npmnpm install pinia</pre><p>TIP</p><p>If your app is using Vue 2, you also need to install the composition api: <code>@vue/composition-api</code>. If you are using Nuxt, you should follow <a href='https://pinia.vuejs.org/ssr/nuxt.html' rel='noopener noreferrer' target='_blank'>these instructions</a>.</p><p>If you are using the Vue CLI, you can instead give this <a href='https://github.com/wobsoriano/vue-cli-plugin-pinia' rel='noopener noreferrer' target='_blank'><strong>unofficial plugin</strong></a> a try.</p><p>Create a pinia instance (the root store) and pass it to the app as a plugin:</p><pre class='ql-syntax' spellcheck='false'>import{createApp}from 'vue'import{createPinia}from 'pinia'import App from './App.vue'const pinia=createPinia()const app=createApp(App)app.use(pinia)app.mount('#app')</pre><p>If you are using Vue 2, you also need to install a plugin and inject the created <code>pinia</code> at the root of the app:</p><pre class='ql-syntax' spellcheck='false'>import{createPinia, PiniaVuePlugin}from 'pinia'Vue.use(PiniaVuePlugin)const pinia=createPinia()new Vue({el: '#app', // other options... // ... // note the same `pinia` instance can be used across multiple Vue apps on // the same page pinia,})</pre><p>This will also add devtools support. In Vue 3, some features like time traveling and editing are still not supported because vue-devtools doesn't expose the necessary APIs yet but the devtools have way more features and the developer experience as a whole is far superior. In Vue 2, Pinia uses the existing interface for Vuex (and can therefore not be used alongside it).</p><h2>What is a Store? <a href='https://pinia.vuejs.org/getting-started.html#what-is-a-store' rel='noopener noreferrer' target='_blank'>#</a></h2><p>A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree. In other words, <strong>it hosts global state</strong>. It's a bit like a component that is always there and that everybody can read off and write to. It has <strong>three concepts</strong>, the <a href='https://pinia.vuejs.org/core-concepts/state.html' rel='noopener noreferrer' target='_blank'>state</a>, <a href='https://pinia.vuejs.org/core-concepts/getters.html' rel='noopener noreferrer' target='_blank'>getters</a> and <a href='https://pinia.vuejs.org/core-concepts/actions.html' rel='noopener noreferrer' target='_blank'>actions</a> and it's safe to assume these concepts are the equivalent of <code>data</code>, <code>computed</code> and <code>methods</code> in components.</p><h2>When should I use a Store <a href='https://pinia.vuejs.org/getting-started.html#when-should-i-use-a-store' rel='noopener noreferrer' target='_blank'>#</a></h2><p>A store should contain data that can be accessed throughout your application. This includes data that is used in many places, e.g. User information that is displayed in the navbar, as well as data that needs to be preserved through pages, e.g. a very complicated multi-step form.</p><p>On the other hand, you should avoid including in the store local data that could be hosted in a component instead, e.g. the visibility of an element local to a page.</p><p>Not all applications need access to a global state, but if yours need one, Pinia will make your life easier</p>",
        title: "Getting started with Pinia 🍍",
        excerpt:
          "Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({}). This is true for single page applications but exposes your application to security vulnerabilities if it is server side rendered. ",
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
        name: "BlogView",
        params: { id: this.posts.length },
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
