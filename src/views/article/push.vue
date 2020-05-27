<template>
  <el-row :gutter="5">
    <div class="editor-container">
      <div class="title-input">
        <el-input v-model="title" placeholder="请输入文章标题" clearable maxlength="30" show-word-limit />
      </div>
      <div class="title-content">
        <markdown-editor v-if="islock" ref="markdownEditor" v-model="content" @valueChange="valueChange" />
      </div>
    </div>
    <div>
      <confirm-btn
        :btn-list="btnList"
        :position="position"
        @backPrev="backPrev"
        @confirmSubmit="confirmSubmit(afterExec, 'ArticleAdd')"
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
  props: {
    id: {
      type: String,
      required: false,
      default: '0'
    }
  },
  data() {
    return {
      title: '',
      content: '',
      postData: {},
      islock: false
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
    if (vm.isEmpty(vm.id)) {
      vm.islock = true
    } else {
      // 修改文章时配置弹框文案
      vm.message = {
        success: {
          msg: '修改成功~',
          type: 'success',
          time: 1200
        },
        falid: {
          msg: '修改失败~',
          type: 'error',
          time: 1200
        }
      }
      vm.apiCall({ id: vm.id }, 'ArticleLook').then(function(response) {
        if (response.data.isok) {
          vm.title = response.data.result.title
          vm.content = response.data.result.content
          vm.islock = true
        }
      })
    }
  },
  methods: {
    valueChange: function(content) {
      const vm = this
      vm.content = content
      vm.postData = { title: vm.title, content: vm.content }
    },
    afterExec: function(response) {
      const vm = this
      const status = response.data.isok
      if (status) {
        vm.$router.push({ path: '/article/look/' + response.data.result.id })
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
  .title-content{
    min-height: 500px;
  }
</style>
