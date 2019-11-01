<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
        <div>
          <Profile />
        </div>
      </el-col>
      <el-col :span="24">
        <div>
          <pagination />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Profile from '@/views/index/Activity'
import Pagination from '@/components/Pagination'
export default {
  name: 'main-page',
  components: {
    Profile,
    Pagination
  }
}
</script>
<style scoped>
</style>
