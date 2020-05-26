<template>
  <el-row :gutter="5">
    <div class="editor-container">
      <div class="title-input">
        <el-input v-model="title" placeholder="请输入文章标题" clearable maxlength="30" show-word-limit />
      </div>
      <markdown-editor ref="markdownEditor" v-model="content" @valueChange="valueChange" />
    </div>
    <div>
      <confirm-btn
        :btn-list="btnList"
        :position="position"
        @backPrev="backPrev"
        @confirmSubmit="confirmSubmit(afterExec)"
      />
    </div>
  </el-row>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import btnMixin from '@/components/ConfirmBtn/btnMixin'
export default {
  name: 'Push',
  components: { MarkdownEditor },
  mixins: [btnMixin],
  data() {
    return {
      content: '',
      title: '',
      postData: {}
    }
  },
  watch: {
    title: function(newValue, oldValue) {
      const vm = this
      vm.title = newValue
      vm.postData = { title: vm.title, content: vm.content }
    }
  },
  mounted() {
    const vm = this
    vm.setBtnConfig('article/push', 'center')
  },
  methods: {
    valueChange: function(content) {
      const vm = this
      vm.content = content
      vm.postData = { title: vm.title, content: vm.content }
    },
    afterExec: function(data) {
      const vm = this
      const status = data.isok
      if (status) {
        vm.$router.push({ path: '/article/look/' + data.result.id })
      }
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
