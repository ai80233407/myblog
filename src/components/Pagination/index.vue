<template>
    <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400, 500]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        }
    }
</script>

<style scoped>
    .block{
        margin: 10px;
    }
</style>