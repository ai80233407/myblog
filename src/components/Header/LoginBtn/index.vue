<template>
  <div class="shadow">
    <template v-if="islogin">
      <span :style="{'background': 'url('+avatar+')'}" class="pan-thumb "></span>
      <div style="text-align: right;">
        <el-dropdown @command="handleCommand">
          <span class="user-name">
            {{ name }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="article_push">发布文章</el-dropdown-item>
            <el-dropdown-item command="look_type">查看分类</el-dropdown-item>
            <el-dropdown-item command="trends">动态</el-dropdown-item>
            <el-dropdown-item command="manager" disabled>管理后台</el-dropdown-item>
            <el-dropdown-item command="other" divided>其他</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="user-info">
          <el-button @click="logout">登出</el-button>
        </span>
      </div>
    </template>
    <template v-else>
      <div style="text-align: right">
        <router-link to="/login">
          <el-button type="primary" plain round>登录</el-button>
        </router-link>
        <el-button plain round>注册</el-button>
      </div>
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
  },
  methods: {
    logout: function() {
      const vm = this
      vm.$store.dispatch('user/logout').then(function() {
        vm.$router.push({ path: '/' })
      })
    },
    handleCommand(command) {
      const vm = this
      if (command === 'article_push') {
        vm.$router.push({ path: '/article/push' })
      }
    }
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
      float: right;
      background-position: center center!important;
      background-size: cover!important;
      border-radius: 50%;
      overflow: hidden;
      top:-3px;
      position: relative;
      -webkit-transform-origin: 95% 40%;
      transform-origin: 95% 40%;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    .user-info{
      margin-left: 10px;
      margin-right: 20px;
    }
    .user-name{
      cursor: pointer;
    }
  }
  .el-button.is-round {
    border-radius: 20px;
    padding: 10px 20px;
  }
</style>
