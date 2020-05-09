<template>
  <el-row :gutter="15">
    <el-col :span="18">
      <el-row :gutter="15">
        <el-col :span="24">
          <keep-alive>
            <router-view name="containner-route" />
          </keep-alive>
        </el-col>
      </el-row>
      <el-col :span="5">
        <keep-alive>
          <div class="grid-content-containner">
            <router-view name="containner-left-card" />
          </div>
        </keep-alive>
      </el-col>
      <el-col :span="19">
        <keep-alive>
          <div class="grid-content-containner">
            <router-view name="containner-main" />
          </div>
        </keep-alive>
      </el-col>
    </el-col>
    <el-col :span="6">
      <el-row>
        <keep-alive>
          <div class="grid-content-containner">
            <router-view name="containner-right-card" />
          </div>
        </keep-alive>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'FirstDesign'
}
</script>

<style scoped>
  .grid-content-containner {
    border-radius: 4px;
    min-height: 800px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
</style>
