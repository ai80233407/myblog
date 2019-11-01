<template>
  <div>
    <Tip :data-list="updateList" />
  </div>
</template>
<script>
import Tip from '@/components/Tip'
export default {
  name: 'HistoryList',
  components: {
    Tip
  },
  data: function() {
    return {
      updateList: [
        { title: '重要更新', subject: '今天是版本发布的日子，很重要', importance: 'info', createtime: '2019/10/31', message: '1.发布<br>2.更新<br>3.上传' },
        { title: '重要更新', subject: '今天是版本发布的日子，很重要', importance: 'brand', createtime: '2019/10/31', message: '1.发布<br>2.更新<br>3.上传' },
        { title: '重要更新', subject: '今天是版本发布的日子，很重要', importance: 'success', createtime: '2019/10/31', message: '1.发布<br>2.更新<br>3.上传' },
        { title: '重要更新', subject: '今天是版本发布的日子，很重要', importance: 'warnning', createtime: '2019/10/31', message: '1.发布<br>2.更新<br>3.上传' },
        { title: '重要更新', subject: '今天是版本发布的日子，很重要', importance: 'danger', createtime: '2019/10/31', message: '1.发布<br>2.更新<br>3.上传' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
