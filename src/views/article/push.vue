<template>
  <el-row :gutter="5">
    <div class="editor-container">
      <div class="title-input">
        <el-input v-model="title" placeholder="请输入文章标题" clearable />
      </div>
      <markdown-editor ref="markdownEditor" v-model="content" />
    </div>
  </el-row>
</template>

<script>
const content = `
**This is test**

* vue
* element
* webpack

`
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  name: 'Push',
  components: { MarkdownEditor },
  data() {
    return {
      content: content,
      title: '',
      html: ''
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    }
  }
}
</script>

<style scoped>
  .editor-container{
    margin-bottom: 30px;
  }
  .tag-title{
    margin-bottom: 5px;
  }
  .title-input{
    width: 100%;
    margin: 20px 0;
  }
</style>
