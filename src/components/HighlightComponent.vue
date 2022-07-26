<template>
  <div
    v-show="showTools"
    class="tools"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
    }"
    @mousedown.prevent=""
  >
    <span
      class="item"
      @mousedown.prevent="highlight"
      @click="HighlightSelectedText"
    >
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="#000000"
          d="M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16"
        />
      </svg>
    </span>
  </div>
</template>
<script>
import rangy from "rangy";
import "rangy/lib/rangy-highlighter";
import "rangy/lib/rangy-classapplier";
export default {
  data() {
    return {
      show: false,
      selectedText: undefined,
      selectedNode: undefined,
      x: 0,
      y: 0,
      showTools: false,
    };
  },
  methods: {
    isAlphaNumeric(s) {
      return /^[a-zA-Z0-9]+$/.test(s);
    },
    onMouseup() {
      const selection = window.getSelection();
      const { x, y, width } = selection.getRangeAt(0).getBoundingClientRect();
      if (
        !width ||
        !selection.toString().length ||
        !this.isAlphaNumeric(selection.toString())
      ) {
        this.showTools = false;
        return;
      }
      this.x = x + width / 2;
      this.y = y + window.scrollY - 10;
      this.showTools = true;
      this.selectedText = selection.toString();
      this.selectedNode = selection;
    },

    HighlightSelectedText() {
      const sel = this.selectedNode;
      if (sel && sel.rangeCount) {
        const range = sel.getRangeAt(0);
        var parentElement = range.startContainer.parentElement;
        var highlighter;
        rangy.init();
        highlighter = rangy.createHighlighter();
        highlighter.addClassApplier(
          rangy.createClassApplier("highlight", {
            ignoreWhiteSpace: true,
            elementTagName: "mark",
            tagNames: ["*"],
          })
        );
        const alphaNumeric = new RegExp(/^[a-zA-Z0-9]+$/);
        let string = rangy.getSelection().toString();
        if (alphaNumeric.test(string)) {
          highlighter.highlightSelection("highlight");
          rangy.getSelection().removeAllRanges();
        }
        this.$emit("add-highlight", {
          word: this.selectedText.toLowerCase(),
          paragraph: parentElement.outerHTML,
        });
      }
    },
  },

  mounted() {
    window.addEventListener("mouseup", this.onMouseup);
  },

  beforeUnmount() {
    window.removeEventListener("mouseup", this.onMouseup);
  },
};
</script>
<style scoped>
.tools {
  height: 30px;
  padding: 5px 10px;
  background: #333;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tools:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
}
.item {
  color: #fff;
  cursor: pointer;
}
.item path {
  fill: #fff;
}
.item:hover path {
  fill: rgb(45, 212, 191);
}
.item:hover {
  fill: rgb(45, 212, 191);
}
.item + .item {
  margin-left: 10px;
}
</style>
