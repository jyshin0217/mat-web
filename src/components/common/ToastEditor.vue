<template>
    <!-- <div class="editor"> -->
        <editor
        ref="toastEditor"
        :initialEditType="editorType" 
        :initialValue="editorText"
        height="500px"
        previewStyle="vertical"
        plugins="pluginsOptions"
    />
    <!-- 
        height: 에디터 영역의 높이 값 300px | auto
        initialEditType: 최초로 보여줄 에디터 타입. markdown
        initialValue : 콘텐츠 초기 값. 반드시 마크다운 문자열 형태여야함.
        previewStyle : 마크다운 프리뷰 스타일 tab | vertical
    -->
   <!-- </div> -->
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/vue-editor';
import { colorSyntax } from '@toast-ui/editor-plugin-color-syntax';

export default {
  name: 'toastEditor',
  components: {
    editor: Editor
  },
  data() {
      return {
          editorText: '글을입력하세요.',
          editorType: 'wysiwyg',
          pluginsOptions: [colorSyntax]       
      }
  },
  methods: {
    getContent() {
      return this.$refs.toastEditor.invoke('getMarkdown')
    },
    setContent(content) {
      this.$refs.toastEditor.invoke('setMarkdown', content)
    }
  }
}


</script>

<style>

</style>