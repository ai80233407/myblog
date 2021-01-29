<template>
  <el-row>
    <el-col :span="24">
      <h2 class="article-title">{{ title }}</h2>
    </el-col>
    <div class="article-content">
      <Viewer
        v-if="islock"
        key="article-view"
        :initial-value="content"
      />
    </div>
    <el-col :span="24">
      <confirm-btn
        :btn-list="btnList"
        :position="position"
        @backPrev="backPrev"
        @confirmEdit="confirmEdit(afterEdit)"
        @confirmDel="confirmDel(afterDel, 'ArticleDel')"
      />
    </el-col>
  </el-row>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/vue-editor'
import btnMixin from '@/components/ConfirmBtn/btnMixin'
export default {
  name: 'Look',
  components: {
    Viewer
  },
  mixins: [btnMixin],
  props: {
    id: {
      type: String,
      isRequired: true,
      default: '0'
    }
  },
  data: function() {
    return {
      title: '......',
      content: '',
      islock: false,
      postData: {}
    }
  },
  mounted() {
    const vm = this
    vm.setBtnConfig('article/look', 'center')
    if (!vm.isEmpty(vm.id)) {
      vm.postData = { id: vm.id }
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
    afterEdit: function() {
      const vm = this
      vm.$router.push({ path: '/article/push/' + vm.id })
    },
    afterDel: function(del) {
      const vm = this
      if (del) {
        vm.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style scoped>
.article-title{
  font-size: 30px;
  text-align: center;
}
.article-content{
  min-height: 600px;
}
</style>
