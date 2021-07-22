<template>
  <div>
      <Editor ref="editor"/>
      <input type="button" @click="save" value="저장">
  </div>
</template>

<script>
import Editor from '../../components/common/ToastEditor'
export default {
  components: {
    Editor
  },
  methods: {
    save() {
      console.log(this.$refs.editor.getContent())
    }
  }

}
</script>

<style>

</style>