<template>
  <el-row :gutter="15" style="width: 100%;margin: 0 0;overflow: hidden;" class="containner">
    <el-col :span="1" style="padding-left: 0;float: left;" type="flex">
      <div class="grid-content bg-purple-light" />
    </el-col>
    <el-col :span="22" :offset="1">
      <el-row :gutter="15">
        <el-col :span="24">
          <el-row :gutter="15">
            <el-col :span="4">
              <keep-alive>
                <div class="grid-content-header">
                  <router-view name="header-logo" />
                </div>
              </keep-alive>
            </el-col>
            <el-col :span="14">
              <keep-alive>
                <div class="grid-content-header">
                  <router-view name="header-nav" />
                </div>
              </keep-alive>
            </el-col>
            <el-col :span="6">
              <keep-alive>
                <div class="grid-content-header">
                  <router-view name="header-login-btn" />
                </div>
              </keep-alive>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
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
        </el-col>
        <el-col :span="24">
          <keep-alive>
            <div class="grid-content-footer">
              <router-view name="footer-content" />
            </div>
          </keep-alive>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="1" style="padding-right: 0;float: right;" type="flex">
      <div class="grid-content bg-purple-light" />
    </el-col>
  </el-row>
</template>
<script>
import ResizeMixin from '../admin/mixin/ResizeHandler'
export default {
  name: 'LayoutBlog',
  mixins: [ResizeMixin],
  data: function() {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 1000px;
    margin-bottom: -10000px;
    padding-bottom: 10000px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content-header {
    border-radius: 4px;
    min-height: 60px;
    margin-bottom: 15px;
  }
  .grid-content-footer {
    border-radius: 4px;
    min-height: 100px;
    margin-top: 15px;
  }
  .grid-content-route{
    border-radius: 4px;
    min-height: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .grid-content-containner {
    border-radius: 4px;
    min-height: 800px;
  }
</style>
