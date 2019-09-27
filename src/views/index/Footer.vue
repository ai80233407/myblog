<template>
    <div style="background-color: #1f2d3d">
        <el-row :gutter="25" type="flex" justify="space-around">
            <template v-for="item in stationMap">
                <el-col :span="3">
                    <h4 style="color: rgb(211, 220, 230);">{{item.name}}</h4>
                    <div v-if="item.child">
                        <p style="color: rgb(153, 169, 191);cursor: pointer;" v-for="val in item.child">{{val.name}}</p>
                    </div>
                </el-col>
            </template>
        </el-row>
        <el-row>
            <div style="color: rgb(229, 233, 242);text-align: center;margin: 20px;">
                <span style="margin-right: 10px;">&copy; 2009-2019 聚散流砂 版权所有</span>ICP证：浙B2-20080101
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data: function () {
            return {
                stationMap: [
                    {name: '文章', child: [{name: '推荐文章', link: 'http://www.baidu.com/'},{name: '精选文章', link: 'http://www.baidu.com/'},{name: '文章分类', link: 'http://www.baidu.com/'},{name: '大浪淘沙', link: 'http://www.baidu.com/'}]},
                    {name: '分类', child: [{name: '知识脉络', link: 'http://www.baidu.com/'},{name: '生活趣闻', link: 'http://www.baidu.com/'},{name: '工作心得', link: 'http://www.baidu.com/'},{name: '仰望星空', link: 'http://www.baidu.com/'}]},
                    {name: '帮助', child: [{name: '使用指南', link: 'http://www.baidu.com/'},{name: '意见建议', link: 'http://www.baidu.com/'},{name: '开发说明', link: 'http://www.baidu.com/'},{name: '关于本站', link: 'http://www.baidu.com/'}]},
                    {name: '友链', child: [{name: '阿里云', link: 'http://www.baidu.com/'},{name: '又拍云', link: 'http://www.baidu.com/'},{name: '七牛云', link: 'http://www.baidu.com/'},{name: '百度云', link: 'http://www.baidu.com/'}]}
                ]
            }
        }
    }
</script>

<style scoped>

</style>