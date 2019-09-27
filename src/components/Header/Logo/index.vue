<template>
  <el-row class="shadow" :gutter="15">
    <el-col :span="14">
      <el-image class="img" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3717357451,2588732571&fm=58&s=AB8A7A22C4A0EF0119C0B55E030010B1&bpow=121&bpoh=75" fill="contain" />
    </el-col>
    <el-col :span="10" class="logo-text">
      聚散流砂
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'HeaderLogo'
}
</script>
<style lang="scss" scoped>
  .el-card {
    .el-card__body {
      padding: 0;
    }
  }
  .img{
    width: auto;
    height: 50px;
    margin: 0 0;
  }
  .shadow {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    margin: 0 0!important;
  }
  .logo-text{
    font-family: "Helvetica Neue";
    font-size: 16px;
    font-weight: 525;
    line-height: 60px;
    color: #67C23A;
  }
</style>
