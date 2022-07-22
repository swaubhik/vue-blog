<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-100">Add post</h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="title"
                  class="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    v-model="post.title"
                    type="text"
                    name="title"
                    id="title"
                    class="focus:ring-cyan-500 text-gray-800 focus:border-cyan-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Post Title"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="author"
                  class="block text-sm font-medium text-gray-700"
                >
                  Author
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    v-model="post.author"
                    type="text"
                    name="author"
                    id="author"
                    class="focus:ring-cyan-500 text-gray-800 focus:border-cyan-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Author name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                for="about"
                class="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <div class="mt-1">
                <textarea
                  v-model="post.content"
                  id="about"
                  name="about"
                  rows="5"
                  class="shadow-sm focus:ring-cyan-500 text-gray-800 focus:border-cyan-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Lorem ipsum"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your blog.
              </p>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              @click="addPost"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const post = ref({
      title: "",
      author: "",
      content: "",
      createdAt: "",
    });

    const addPost = () => {
      axios.post("http://localhost:3000/posts", post.value).then((res) => {
        axios.patch("http://localhost:3000/posts/" + res.data.id, {
          createdAt: new Date().toISOString(),
        });
        router.push("/");
      });
    };
    return { post, addPost };
  },
};
</script>

<style></style>
