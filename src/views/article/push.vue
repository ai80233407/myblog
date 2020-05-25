<template>
  <el-row :gutter="5">
    <div class="editor-container">
      <div class="title-input">
        <el-input v-model="title" placeholder="请输入文章标题" clearable maxlength="30" show-word-limit />
      </div>
      <markdown-editor ref="markdownEditor" v-model="content" @valueChange="valueChange" />
    </div>
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
      title: ''
    }
  },
  watch: {
    title: function(newQuestion, oldQuestion) {
      const vm = this
      vm.EventBus.$emit('article-btn-redata', { title: vm.title, content: vm.content })
    }
  },
  methods: {
    valueChange: function(content) {
      const vm = this
      vm.content = content
      vm.EventBus.$emit('article-btn-redata', { title: vm.title, content: vm.content })
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
