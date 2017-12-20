<template>
  <div>
    <!-- 面包屑导航 -->
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goods/content/list' }">内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>内容列表</el-breadcrumb-item>
        <el-breadcrumb-item>商品编辑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- form表单 -->
    <div class="froms">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
        <el-form-item label="内容标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="副标题" prop="sub_title">
          <el-input v-model="ruleForm.sub_title"></el-input>
        </el-form-item>
        <el-form-item label="所属类别" prop="category_id">
          <!-- 动态获取的数据，用v-for渲染 -->
          <el-select v-model="ruleForm.category_id" placeholder="请选择活动区域">
            <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id">
              <span v-for="i in (item.class_layer-1)" :key="i">&nbsp;</span>
              <!-- 顶级分类没有缝隙 -->
              <span v-if="item.class_layer !=1">|-</span>
              <span>{{item.title}}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否发布" prop="status">
          <el-switch v-model="ruleForm.status"></el-switch>
        </el-form-item>
        <el-form-item label="推荐类型" prop="required">
          <el-switch v-model="ruleForm.is_slide" active-text="轮播图"></el-switch>
          <el-switch v-model="ruleForm.is_top" active-text="置顶"></el-switch>
          <el-switch v-model="ruleForm.is_hot" active-text="热度"></el-switch>
        </el-form-item>
        <el-form-item label="上传图片" >
          <el-upload class="upload-demo" :action="uploadImgUrl" 
            list-type="picture" :file-list="ruleForm.imgList" 
             :on-success="uploadImgHandler">
             <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传附件" >
          <el-upload class="upload-demo" :action="uploadFileUrl"
             multiple :limit="3" :file-list="ruleForm.fileList" 
             :on-success="uploadFileHandler">
             <el-button size="small" type="primary">附件上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品货号" prop="goods_no">
            <el-input v-model="ruleForm.goods_no" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="库存数量" prop="stock_quantity">
            <el-input v-model="ruleForm.stock_quantity" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" prop="market_price">
            <el-input v-model="ruleForm.market_price" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="销售价格" prop="sell_price">
            <el-input v-model="ruleForm.sell_price" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="内容摘要" prop="zhaiyao">
          <el-input type="textarea" v-model="ruleForm.zhaiyao"></el-input>
        </el-form-item>
        <el-form-item label="内容摘要" prop="zhaiyao">
          <quill-editor v-model="ruleForm.content"></quill-editor>
        </el-form-item>
        <el-form-item>
               <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
 import 'quill/dist/quill.core.css';
 import 'quill/dist/quill.snow.css';
 import 'quill/dist/quill.bubble.css';
 import { quillEditor } from 'vue-quill-editor';
export default {
  data() {
    return {
      uploadImgUrl:this.$apiDomain+this.$api.atImg,
      uploadFileUrl:this.$apiDomain+this.$api.atFile,
      id:this.$route.params.id,
      ruleForm: {
        title: "Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣",
        sub_title: "英伦轻奢 专柜同款 为不凡而生",
        goods_no: "NZ0000000002",
        category_id: "151",
        stock_quantity: 200,
        market_price: 1000,
        sell_price: 800,
        status: false,
        is_slide: false,
        is_top: false,
        is_hot: true,
        zhaiyao: "为不凡而生",
        content: "<p><strong>产品参数：</strong></p>",
        imgList: [
          {
            name: "wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
            url: "http://127.0.0.1:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
            shorturl: "/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg"
          }
        ],
        fileList: [
          {
            name: "HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
            url: "http://127.0.0.1:8899/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
            shorturl: "/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg"
          }
        ]
      },
      rules: {
        title: [{ required: true, message: "请输入内容标题", trigger: "blur" }],
        sub_title: [{ required: true, message: "请输入副标题", trigger: "blur" }],
        goods_no: [{ required: true, message: "请输入商品编号", trigger: "blur" }],
        stock_quantity: [{ required: true, message: "请输入库存", trigger: "blur" }],
        market_price: [{ required: true, message: "请输入市场价格", trigger: "blur" }],
        sell_price: [{ required: true, message: "请输入销售价格", trigger: "blur" }],
      },
      goodsCategory:[]
    };
  },
  methods: {
    //封面上传成功，不服务器返回的url
    uploadImgHandler(data){
      this.ruleForm.imgList = [data];
    },
    //附件上传成功
    uploadFileHandler(){
      this.ruleForm.fileList.push(data);
    },
    //获取商品分类信息，获取分类的接口多个模s块用一个
    getGoodsCategory(){
      this.$http.get(this.$api.ctList+'goods')
        .then(rsp=>{
          this.goodsCategory = rsp.data.message;
        })
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
      
    },
    getGoods() {
      this.$http
        .get(this.$api.gsDetail + this.id)
        .then(rsp => {
          rsp.data.message.category_id = +rsp.data.message.category_id;
          this.ruleForm = rsp.data.message;
        });
    },

    //修改商品信息，加上商品ID
    modifyGoods(){
      this.$http.post(this.$api.gsEdit+this.id,this.ruleForm)
        .then(rsp=>this.$alert(rsp.data.message))
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.modifyGoods()
        } 
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    this.getGoodsCategory();
    this.getGoods();
  },
  components:{
    quillEditor
  }
};
</script>

<style scoped lang='less'>
.froms {
  margin-top: 20px;
  .el-form {
    width: 50%;
    border-radius: 1px solid #000;
    .el-form-item{
  width: 800px;
}
  }
}

</style>