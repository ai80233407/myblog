<template>
  <el-row :gutter="5">
    <el-col :span="24">
      <router-view name="custom-top"></router-view>
    </el-col>
    <el-col :span="24">
      <router-view name="custom-middem"></router-view>
    </el-col>
    <el-col :span="24">
      <router-view name="custom-bottom"></router-view>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'CustomDesign'
}
</script>

<style scoped>

</style>
