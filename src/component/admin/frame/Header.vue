<template>
  <div>
    <span class="el-icon-menu left"></span>
    <span>你好{{user.uname}}</span>
<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    功能<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>修改密码</el-dropdown-item>
    <el-dropdown-item command='logout'>注销登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>

<script>
  export default {
    data(){
      return {
         user: JSON.parse(localStorage.getItem('user')) || {}
      }
    },
    methods:{
      logout(){
        this.$http.get(this.$api.logout)
          .then(rsp=>{
            localStorage.removeItem('user');
            alert('ok')
            this.$router.push('/login')
          })
      },
      handleCommand(command){
        switch (command) {
          case 'logout':
            this.logout()
            break;
        
          default:
            break;
        }
      }
    }
  }
</script>

<style scoped>
.left{
  float: left;
  margin-top: 20px;
  font-size: 20px;
}
</style>