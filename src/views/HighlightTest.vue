<template>
  <div class="relative">
    <button
      class="bg-primary-500 px-4 py-2 rounded-lg mb-8 text-gray-900"
      @click="highlight"
    >
      highlight
    </button>
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
      delectus ipsum tempore odio ullam vel? Facere ab, iusto eius recusandae
      tempore facilis unde harum, cum repudiandae, ut maiores? Dolor, earum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam debitis
      architecto eius reiciendis provident illo sint neque ullam excepturi
      pariatur commodi ipsum dolor, quisquam dolores nemo cumque quam saepe
      quaerat.
    </div>
  </div>
</template>

<script>
import rangy from "rangy";
import "rangy/lib/rangy-highlighter";
import "rangy/lib/rangy-classapplier";

export default {
  methods: {
    highlight() {
      var highlighter;
      rangy.init();
      highlighter = rangy.createHighlighter();
      highlighter.addClassApplier(rangy.createClassApplier("highlight"));
      const alphaNumeric = new RegExp(/^[a-zA-Z0-9]+$/);
      let string = rangy.getSelection().toString();
      if (alphaNumeric.test(string)) {
        highlighter.highlightSelection("highlight");
        // var selTxt = rangy.getSelection();
        // console.log("selTxt: " + selTxt);
        rangy.getSelection().removeAllRanges();
      }
    },
  },
};
</script>

<style>
.highlight {
  background: rgb(20, 184, 166);
  color: white;
  font-weight: bold;
}
</style>
