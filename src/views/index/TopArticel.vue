<template>
  <div>
    <div style="margin-bottom: 15px;">
      <el-carousel height="125px">
      <el-carousel-item v-for="item in 3" :key="item">
        <p class="top-img-title">{{ item }}</p>
    </el-carousel-item>
    </el-carousel>
  </div>
  <div style="margin-bottom: 15px;">
    <el-card>
    <div slot="header">
      <span><strong>站外推选</strong></span>
    </div>
    <div v-for="a in 9" class="top-articel-one">
      其他热门文章推荐 - {{a}}
    </div>
    </el-card>
  </div>
  <div>
    <el-card>
    <div slot="header">
      <span><strong>站内精选</strong></span>
    </div>
    <div v-for="a in 9" class="top-articel-one">
      其他热门文章推荐 - {{a}}
    </div>
    </el-card>
  </div>
  </div>
</template>

<script>
  export default {
     name: "top-articel"
  }
</script>

<style scoped>
  .top-articel-one {
     font-size: 14px;
     margin-bottom: 18px;
  }

  .top-img-title {
     color: #475669;
     font-size: 14px;
     opacity: 0.75;
     line-height: 150px;
     margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #79a5bf;
  }
</style>