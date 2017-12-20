<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/goods/content/list' }">返回上一级</el-breadcrumb-item>
      <el-breadcrumb-item>购物商城</el-breadcrumb-item>
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>新增内容</el-breadcrumb-item>
      </el-breadcrumb>
      <hr>
    </div>  

    <!-- 添加内容区域 -->
    <div class="content">
      <div class="import clearfix">
        <span>内容标题</span>
      <span class="noe fo clearfix">
              <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
      </span> 
      <span>副标题</span>
      <span class="fo">
            <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
      </span>
      </div>
    </div>

    <!-- 选择框 -->
    <div class="center clearfix">
    <div class="select clearfix dong" >
      <ul>
        <span class="leibie">
                所属类别
       <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
      </el-select>
       </span>
  
    <span class="peizhi">
    发布配置:
    <el-tooltip :content="'是否发布: ' + value5" placement="top">
      <el-switch
      v-model="value5"
      active-color="#13ce66"
      active-value="是"
      inactive-color="#ff4949"
      inactive-value="否">
      </el-switch>
    </el-tooltip>
  </span>

  <!-- 右边开关 -->
  
  <span class="tuijian">
    发布推荐&nbsp;&nbsp;
    <el-tooltip :content="'轮播图: ' + value5" placement="top">
      <el-switch
      v-model="value6"
      active-color="#13ce66"
      active-value="是"
      inactive-color="#ff4949"
      inactive-value="否">
      </el-switch>
    </el-tooltip>

    <el-tooltip :content="'置顶: ' + value5" placement="top">
      <el-switch
      v-model="value7"
      active-color="#13ce66"
      active-value="是"
      inactive-color="#ff4949"
      inactive-value="否">
      </el-switch>
    </el-tooltip>
  </span>    
  

    

      </ul>
    </div>


    </div>

    <!-- 上传图片 -->
  <div class="uploadingImg clearfix">
    <div class="uploading">
      <span>上传图片</span>
      <span>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
          :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>        
      </span>
    </div>  
    <div class="uploading">
      <span>相册上传</span>
      <span>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
          :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>        
      </span>
    </div>  
   </div>

  <!-- 数量选择 -->
  <div class="clearfix quantity">
    <ul class="clearfix">
      <li>
          <span>商品货号</span>
          <span>
            <el-input v-model="input" ></el-input>
          </span>
      </li>
      <li>
          <span>库存数量</span>
          <span>
            <el-input v-model="input" ></el-input>
          </span>
      </li>
      <li>
          <span>市场价格</span>
          <span>
            <el-input v-model="input" ></el-input>
          </span>
      </li>
      <li>
          销售价格
          
            <el-input v-model="input" ></el-input>
          
      </li>
    </ul>

  </div>

  <!-- 摘要选择 -->
  <div>
    <span>内容摘要</span>
    <span>
    <el-input class="text" type="textarea" autosize placeholder="请输入内容"
        v-model="textarea2">
    </el-input>
    <div style="margin: 50px ;"></div>      
    </span>


  </div>  
  </div>


</template>

<script>
export default {
  data() {
    return {
      input10: "",
      value3: true,
      value6: true,
      value7: true,
      value5: "是",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

<style scoped lang='less'>
.content {
  .import {
    height: 50px;
    line-height: 50px;
    span {
      float: left;
      // padding-left:  60px;
      margin-bottom: 10px;
    }
    .fo {
      width: 30%;
      padding-left: 10px;
    }
    .noe {
      margin-right: 30px;
    }
  }

  //搜索
  .center {
    ul li {
      display: inline;
      float: left;
    }
  }
  .select {
    margin-top: 10px;
    span {
      float: left;
      width: 30%;
    }
  }
  .leibie {
    margin-right: 30px;
  }
}
//右边开关
.peizhi {
  margin-left: 40px;
}
.tuijian {
  margin-left: 40px;
}

//上传图片
.uploading {
  width: 400px;
  float: left;
  width: 46%;
  .upload-demo {
    display: inline;
  }
}

//数量统计
.quantity{
  ul{
    li{
      float: left;
      width: 18%;
      padding-left: 10px;
    }
  }
}
el-input{
  display: inline;
}

// 内容摘要
.el-textarea{
  display: inline;
}
.el-textarea__inner{
  width: 400px;
}
</style>