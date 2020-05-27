import confirmBtn from '@/components/ConfirmBtn'
import { ArticleAdd, ArticleLook, ArticleDel } from '@/api/article'

export default {
  name: 'Btn',
  components: {
    confirmBtn
  },
  data: function() {
    return {
      btnList: [],
      mode: '',
      position: 'center',
      postData: {},
      message: {
        success: {
          msg: '请求成功~',
          type: 'success',
          time: 1200
        },
        falid: {
          msg: '请求失败~',
          type: 'error',
          time: 1200
        }
      },
      loading: {
        target: 'body',
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.8)'
      },
      apiList: ['ArticleAdd', 'ArticleLook', 'ArticleDel']
    }
  },
  methods: {
    backPrev: function() {
      const vm = this
      vm.$router.go(-1)
    },
    confirmSubmit: function(callback, apiname) {
      const vm = this
      const loading = vm.$loading({
        target: vm.loading.target,
        lock: true,
        text: vm.loading.text,
        spinner: vm.loading.spinner,
        background: vm.loading.background
      })
      if (vm.inArray(apiname, vm.apiList)) {
        vm.apiCall(vm.postData, apiname).then(function(response) {
          loading.close()
          let conf = {}
          if (response.data.isok) {
            conf = {
              showClose: true,
              message: vm.message.success.msg,
              type: vm.message.success.type,
              duration: vm.message.success.time
            }
          } else {
            conf = {
              showClose: true,
              message: vm.message.falid.msg,
              type: vm.message.success.type,
              duration: vm.message.success.time
            }
          }
          vm.$message(conf)
          vm.funCall(callback, response)
        })
      } else {
        vm.funCall(callback)
      }
    },
    confirmEdit: function(callback) {
      const vm = this
      vm.funCall(callback)
    },
    confirmDel: function(callback, apiname) {
      const vm = this
      let choose = false
      vm.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (vm.inArray(apiname, vm.apiList)) {
          vm.apiCall(vm.postData, apiname).then(function(response) {
            if (response.data.isok) {
              vm.$message({
                type: 'success',
                message: '删除成功!'
              })
              choose = true
            } else {
              choose = false
            }
            vm.funCall(callback, choose)
          })
        }
      }).catch(() => {
        choose = false
        vm.funCall(callback, choose)
      })
    },
    setBtnConfig: function(mode, position) {
      const vm = this
      vm.position = position
      vm.mode = mode
      switch (mode) {
        case 'article/push':
          vm.btnList = [
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
          ]
          vm.message = {
            success: {
              msg: '添加成功~',
              type: 'success',
              time: 1200
            },
            falid: {
              msg: '添加失败~',
              type: 'error',
              time: 1200
            }
          }
          vm.loading = {
            target: '.center-content',
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.8)'
          }
          break
        case 'article/look':
          vm.btnList = [
            {
              type: 'default',
              icon: 'el-icon-arrow-left',
              show: true,
              callback: 'backPrev'
            },
            {
              type: 'primary',
              icon: 'el-icon-edit',
              show: true,
              callback: 'confirmEdit'
            },
            {
              type: 'danger',
              icon: 'el-icon-delete',
              show: true,
              callback: 'confirmDel'
            }
          ]
          break
        default :
      }
    },
    apiCall: function(data, name) {
      if (name === 'ArticleAdd') {
        return ArticleAdd(data)
      } else if (name === 'ArticleLook') {
        return ArticleLook(data)
      } else if (name === 'ArticleDel') {
        return ArticleDel(data)
      } else {
        return ArticleAdd(data)
      }
    },
    funCall: function(callback, data) {
      if (typeof callback === 'function') {
        if (data) {
          callback(data)
        } else {
          callback()
        }
      }
    }
  }
}
