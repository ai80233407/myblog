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
      position: 'center'
    }
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
      ArticleAdd({ data: [] }).then(function(response) {
        loading.close()
        let conf = {}
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
      })
    }
  }
}
</script>

<style scoped>

</style>
