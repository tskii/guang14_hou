<template>
  <div class="box">
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
    <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
//导入公共组件
import AsideComponent from "./frame/Aside.vue";
import HeaderComponent from "./frame/Header.vue";

export default {
  components: {
    appAside: AsideComponent,
    appHeader: HeaderComponent
  }
};
</script>

<style scoped lang='less'>
.box{
  height: 100%;
}
.el-container{
  height: 100%;
  .el-aside{
  line-height: 0;
  }
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>