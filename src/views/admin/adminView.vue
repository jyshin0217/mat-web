<template>
    <Viewer
        ref="viewer"
        :viewer="booleanViewer"
        height="500px"
    />
</template>

<script>
import Viewer from '../../components/common/ToastViewer.vue'
export default {
    components: {
        Viewer
    },
    data() {
        return {
            booleanViewer: true,
            initialValue: 'viewer test',
            content: null
        }
    },
    mounted() {
        // console.log('mounted')
        // this.content = '글을입력하세요.test'
        // this.$refs.viewer.setContent(this.content)
        // this.$refs.viewer.$attrs.initialValue = "<h1>제목</h1>"
        // console.log(this.$refs.viewer.$attrs.initialValue)
        // console.log(this.content)
    }
}
</script>

<style>

</style>