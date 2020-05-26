<template>
  <el-row>
    <el-col :span="24">
      <h2 class="article-title">hello world!</h2>
    </el-col>
    <el-col :span="24">
      <div class="article-content">
        <Viewer
          key="article-view"
          :height="'500px'"
          :initialValue="value"
        />
      </div>
    </el-col>
    <el-col :span="24">
      <confirm-btn
        :btn-list="btnList"
        :position="position"
        @backPrev="backPrev"
        @confirmEdit="confirmEdit(afterEdit)"
        @confirmDel="confirmDel(afterDel)"
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
      type: Number,
      isRequired: true,
      default: 0
    }
  },
  data: function() {
    return {
      title: '',
      value: '<h1>11111111111111</h1>'
    }
  },
  mounted() {
    const vm = this
    vm.setBtnConfig('article/look', 'center')
    console.log(vm.id)
  },
  methods: {
    afterEdit: function() {
      const vm = this
      vm.$router.push({ path: '/article/push/' })
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
  min-height: 500px;
}
</style>
