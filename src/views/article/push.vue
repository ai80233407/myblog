<template>
  <el-row :gutter="5">
    <div class="editor-container">
      <el-tag class="tag-title">
        I18n:
      </el-tag>
      <el-alert
        :closable="false"
        title="You can change the language of the admin system to see the effect"
        type="success"
      />
      <markdown-editor ref="markdownEditor" v-model="content" height="500px" />
    </div>
    <el-button style="margin-top:80px;" type="primary" icon="el-icon-document" @click="getHtml">
      Get HTML
    </el-button>
    <div v-html="html" />
  </el-row>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  name: 'Push',
  components: { MarkdownEditor },
  data() {
    return {
      content: '',
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
</style>
