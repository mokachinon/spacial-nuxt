<template>
  <div>
    <textarea ref="textarea" @input="autoResize"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    autoResize() {
      const textarea = this.$refs.textarea;
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
    },
  },
};
</script>

<style>
textarea {
  resize: none;
  height: 50px;
  max-height: 200px;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  overflow-y: auto;
}

textarea
::-webkit-scrollbar {
   display: none;
 }
</style>
