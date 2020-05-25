<template>
  <confirm-btn
    :btn-list="btnList"
    :position="position"
    @backPrev="backPrev"
    @confirmSubmit="confirmSubmit"
  />
</template>

<script>
import confirmBtn from '@/components/ConfirmBtn'
import { ArticleAdd } from '@/api/article'

export default {
  name: 'Btn',
  components: {
    confirmBtn
  },
  data: function() {
    return {
      btnList: [
        {
          type: 'default',
          icon: 'el-icon-arrow-left',
          show: true,
          callback: 'backPrev'
        },
        {
          type: 'success',
          icon: 'el-icon-check',
          show: true,
          callback: 'confirmSubmit'
        }
      ],
      position: 'center',
      postData: {}
    }
  },
  mounted() {
    const vm = this
    vm.EventBus.$on('article-btn-redata', (data) => {
      vm.postData = data
    })
  },
  methods: {
    backPrev: function() {
      const vm = this
      vm.$router.go(-1)
    },
    confirmSubmit: function() {
      const vm = this
      const loading = vm.$loading({
        target: '.center-content',
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.8)'
      })
      ArticleAdd(vm.postData).then(function(response) {
        loading.close()
        let conf = {}
        let redireact = {}
        if (response.data.isok) {
          conf = {
            showClose: true,
            message: '添加成功~',
            type: 'success',
            duration: 1200
          }
        } else {
          conf = {
            showClose: true,
            message: '添加失败~',
            type: 'error',
            duration: 1200
          }
        }
        vm.$message(conf)
        vm.$router.push()
      })
    }
  }
}
</script>

<style scoped>

</style>
