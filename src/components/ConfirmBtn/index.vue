<template>
  <el-row type="flex" justify="end" :gutter="5">
    <el-col v-if="btnList.length" :span="24" :style="{textAlign: position}">
      <template v-for="(btn, index) in btnList">
        <el-button v-if="btn.show" @click="execute(btn.callback)" :key="index" :type="btn.type" :icon="btn.icon" circle></el-button>
      </template>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ConfireBtn',
  props: {
    btnList: {
      type: Array,
      isrequired: true,
      default: function() {
        return [{
          type: 'default',
          icon: 'el-icon-arrow-left',
          show: true,
          callback: ''
        },
        {
          type: 'primary',
          icon: 'el-icon-edit',
          show: true,
          callback: ''
        },
        {
          type: 'success',
          icon: 'el-icon-check',
          show: true,
          callback: ''
        },
        {
          type: 'info',
          icon: 'el-icon-share',
          show: true,
          callback: ''
        },
        {
          type: 'warning',
          icon: 'el-icon-star-off',
          show: true,
          callback: ''
        },
        {
          type: 'danger',
          icon: 'el-icon-delete',
          show: true,
          callback: ''
        }]
      }
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  methods: {
    execute: function(callback) {
      const vm = this
      vm.$emit(callback)
    }
  }
}
</script>

<style scoped>

</style>
