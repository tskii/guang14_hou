<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    <el-breadcrumb-item>类别管理</el-breadcrumb-item>
</el-breadcrumb>
  <!-- 按钮 -->
   <div class="btns">
      <a href="/#/goods/added/add">
          <el-button type="info" plain size="small" class="el-icon-plus" >新增</el-button> 
      </a>
      <el-button type="info" plain size="small" class="el-icon-check">全选</el-button>
      <el-button type="info" plain size="small" class="el-icon-delete">删除</el-button>
    </div>
  
  <!-- 表格 -->
  <div class="teltab">
      <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  </div>
  </div>
</template>

<script>
  export default {
    methods:{
           toggleSelection(rows) {

      },
      handleSelectionChange(val) {
      },
            gain(){
        this.$http.get(this.$api.ctList,{goods})
      }
    },
    created(){
      console.log(gain());
      
    }
    }

  
</script>

<style scoped lang='less'>
  .btns {
    margin-top: 15px;
}
.teltab{
  margin-top: 15px;
}
</style>