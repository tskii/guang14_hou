<template>
    <nav>
    <div class="login">
        <div class="login_img">
            <img src="../../img/下载.png" alt="">
        </div>
        <!-- 表单 -->
        <div class="login_form">
    <el-form :model="user" :rules="formRules" status-icon  ref="ruleForm2" label-width="70px"
     class="demo-ruleForm" >
       <el-form-item label="用户名" prop="uname">
          <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
       </el-form-item>

      <el-form-item label="密码" prop="upwd">
         <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
      </el-form-item>

  <el-form-item >
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
    </el-form>
        </div>
    </div>
    </nav>

</template>

<script>
export default {
  data() {
    return {
      user: {
        uname: "",
        upwd: ""
      },
      formRules: {
        uname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /\w{5,18}/,
            message: "长度在 4 到 18 个字符, 且只能为&_或字母与数字",
            trigger: "blur"
          }
        ],
        upwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { pattern: /.{6,18}/, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(){
      this.$http.post(this.$api.login,this.user)
        .then(rsp=>{
          let {status,message}=rsp.data;
          if(status==0){
            localStorage.setItem('user',JSON.stringify(message));
            this.$router.push('/');
          }else{
            alert("全都错了")
          }
        })
    },
    submitForm(formName) {
      // 先校验表单, 再提交
      this.$refs[formName].validate(result => {
        if (result) {
          this.login();
        } else {
          alert("错了!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang='less'>
nav {
  height: 100%;
  background: #cdffd8;
}
.login {
  width: 400px;
  border: 1px solid rgb(192, 11, 11);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -165px;
  text-align: center;
  padding: 10px 10px 0 0;
  border-radius: 6px;
  .login_img {
    margin-bottom: 10px;
  }

}
</style>