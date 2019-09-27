<template>
  <div class="shadow">
    <router-link to="/login">
      <el-button type="primary" plain round>登录</el-button>
    </router-link>
    <el-button plain round>注册</el-button>
  </div>
</template>
<script>
export default {
  name: 'HeaderLoginBtn'
}
</script>
<style lang="scss" scoped>
  .shadow{
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    padding: 12px;
  }
  .el-button.is-round {
    border-radius: 20px;
    padding: 10px 20px;
  }
</style>
