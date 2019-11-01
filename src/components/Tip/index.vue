<template>
  <div v-if="dataList">
    <div v-for="(once,index) in dataList" :key="index">
      <div class="my-title">{{ once.createtime }} - {{ once.title }}</div>
      <div class="my-hr">&nbsp;</div>
      <div :class="['tip',once.importance]">
        <p>{{ once.subject }}</p>
        <p>
          <code v-html="once.message" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tip',
  props: {
    dataList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-hr {
    border-bottom: 1px solid #d7dae2;
  }
  .my-title {
    margin-top: 10px;
    margin-bottom: 0;
  }
  .tip {
    padding: 8px 16px;
    border-radius: 4px;
    margin: 20px 0 30px 20px;
  }
  .info {
    border-left: 5px solid #909399;
    background-color: #f4f4f5;
  }
  .brand {
    border-left: 5px solid #50bfff;
    background-color: #ecf8ff;
  }
  .success {
    border-left: 5px solid #67C23A;
    background-color: #f0f9eb;
  }
  .warnning {
    border-left: 5px solid #E6A23C;
    background-color: #fdf6ec;
  }
  .danger {
    border-left: 5px solid #F56C6C;
    background-color: #fef0f0;
  }
</style>
