<template>
  <confirm-btn
    :btn-list="btnList"
    :position="position"
    @backPrev="backPrev"
    @confirmSubmit="confirmSubmit"
  ></confirm-btn>
</template>

<script>
import confirmBtn from '@/components/ConfirmBtn'

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
      console.log('backPrev')
    },
    confirmSubmit: function() {
      console.log('confirmSubmit')
    }
  }
}
</script>

<style scoped>

</style>
