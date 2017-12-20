<template>
  <div class="list">
 <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>内容管理</el-breadcrumb-item>
  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
</el-breadcrumb>
<hr class="hr">

  <!-- 按钮和搜索 -->
  <section>
    <div class="btns">
        <a href="/#/goods/added/add">
      <el-button type="info" plain size="small" class="el-icon-plus" >新增</el-button>
        
        </a>
      <el-button type="info" plain size="small" class="el-icon-check">全选</el-button>
      <el-button type="info" plain size="small" class="el-icon-delete">删除</el-button>
    </div>
    <div class="imports">
      <el-input @blur="getTableList" placeholder="请输入内容" prefix-icon="el-icon-search" size="small" v-model="query.searchvalue">
       </el-input>
    </div>
  </section>

  <!-- 表单 -->
    <div class="tables">
      <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" style="width: 100%"
       @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column label="商品名称" prop="title" width="">
    </el-table-column>
    <el-table-column prop="categoryname" label="所属类别" width="100" ></el-table-column>
    <el-table-column prop="stock_quantity" label="类库" width="100"></el-table-column>
    <el-table-column prop="market_price" label="市场价" width="100"></el-table-column>
    <el-table-column prop="sell_price" label="销售价" width="100"></el-table-column>

    <!-- 获取数据 -->
    <el-table-column width="100" label="属性">
     <template slot-scope="scope">
   <i :class="['el-icon-upload2', scope.row.is_top? 'active': '']"></i>
     <i :class="['el-icon-phone-outline', scope.row.is_hot? 'active': '']"></i>
    <i :class="['el-icon-picture', scope.row.is_slide? 'active': '']"></i>
      </template>
     </el-table-column>
    <el-table-column width="100" label="操作">
       <template slot-scope="scope">
        <router-link :to="{name: 'gcte', params: {id: scope.row.id}}">修改</router-link>
      </template>
     </el-table-column>
  </el-table>
    </div>

    <!-- 分页 -->
    <div>
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.pageIndex"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="query.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalcount">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",

      query:{
        pageIndex:1,
        pageSize:7,
        searchvalue:''
      },
      //数据总数
      totalcount:0,
      //列表数据
      tableList:[]
    };
  },
  methods: {
      //获取商品列表
      getTableList(){
        this.$http.get(this.$api.gsList,{params:this.query})
          .then(rsp=>{
            this.tableList= rsp.data.message;
            this.totalcount = rsp.data.totalcount;
          })
      },
      handleSizeChange(pageSize){
        this.query.pageSize = pageSize;
        this.getTableList();
      },
    handleCurrentChange(pageIndex) {
      this.query.pageIndex = pageIndex;
      this.getTableList();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  created(){
    this.getTableList()
  }
};
</script>

<style scoped lang='less'>
.list {
  height: 50px;
  .hr {
    color: red;
    margin-bottom: 60px;
  }
  .btns {
    position: absolute;
    top: 110px;
  }
  .imports {
    position: absolute;
    top: 110px;
    right: 20px;
  }
  //表单
  .tables{
    margin-bottom: 10px;
  }
  //分页
  .el-pagination{
    background: #ffffff;
    padding: 8px;
  }
}
</style>