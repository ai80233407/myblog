<template>
  <div class="shadow">
    <template v-if="islogin">
      <span :style="{'background': 'url('+avatar+')'}" class="pan-thumb"></span>
      <span class="user-info">
        <span style="margin-right: 10px;">{{ name }}</span>
        <el-button plain round>登出</el-button>
      </span>
    </template>
    <template v-else>
      <router-link to="/login">
        <el-button type="primary" plain round>登录</el-button>
      </router-link>
      <el-button plain round>注册</el-button>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderLoginBtn',
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'islogin'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .shadow{
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    padding: 12px;
    .pan-thumb {
      width: 45px;
      height: 45px;
      background-position: center center!important;
      background-size: cover!important;
      border-radius: 50%;
      overflow: hidden;
      top:7px;
      position: absolute;
      -webkit-transform-origin: 95% 40%;
      transform-origin: 95% 40%;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    .user-info{
      margin-left: 50px;
    }
  }
  .el-button.is-round {
    border-radius: 20px;
    padding: 10px 20px;
  }
</style>
