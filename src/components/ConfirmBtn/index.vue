<template>
  <el-row :gutter="5">
    <el-col :span="12">
      <el-button icon="el-icon-arrow-left" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-share" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ConfireBtn'
}
</script>

<style scoped>

</style>
