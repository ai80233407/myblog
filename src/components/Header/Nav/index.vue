<template>
  <el-menu :default-active="$route.path" mode="horizontal" router>
    <template v-for="(val, index) in NavList">
      <template v-if="val.type">
        <el-menu-item :key="index" :index="val.path" :disabled="val.used">
          <i :class="val.className" />
          <span>{{ val.name }}</span>
        </el-menu-item>
      </template>
      <template v-else>
        <el-submenu :key="index" :index="val.path">
          <template slot="title">
            <span>
              <i :class="val.className" />
              {{ val.name }}
            </span>
          </template>
          <el-menu-item v-for="(child, key) in val.childs" :key="key" :index="child.path" :disabled="child.used">
            <i :class="child.className" />
            <span>{{ child.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>
<script>
import { GetHeaderNav } from '@/api/config'
export default {
  name: 'HeaderNav',
  data() {
    return {
      NavList: [{
        name: '首页',
        path: '/index',
        used: false,
        type: 1,
        className: 'el-icon-house'
      }]
    }
  },
  created: function() {
    var vm = this
    GetHeaderNav().then(response => {
      if (response.code === 20000) {
        vm.NavList = response.data.list
      }
    })
  },
  mounted: function() {
    console.log(this.$route.path)
  },
  methods: {
    test: function() {
      console.log('start')
    }
  }
}
</script>
<style lang="scss" scoped>
    .head {
      width: auto;
    }
</style>
