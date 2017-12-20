//导入商品相关组件
import GoodsContentAddComponent from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentListComponent from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentEditComponent from "../component/admin/goods/content/GoodsContentEdit.vue";

import GoodsCategoryListComponent from "../component/admin/goods/category/GoodsCategoryList.vue";
import GoodsCategoryAddComponent from "../component/admin/goods/category/GoodsCategoryAdd.vue";
import GoodsCategoryEditComponent from "../component/admin/goods/category/GoodsCategoryEdit.vue";

import GoodsCommentAddComponent from "../component/admin/goods/comment/GoodeCommentAdd.vue";
import GoodsCommentListComponent from "../component/admin/goods/comment/GoodeCommentList.vue";
import GoodsCommentEditComponent from "../component/admin/goods/comment/GoodeCommentEdit.vue";

import AddEdComponent from "../component/admin/goods/added/addEd.vue";

//导入类别组件
import categoryComponent from "../component/admin/goods/category/category.vue";
//导入商品模块相关路由配置
export default [
    { name: 'gcl', path: 'goods/content/list', component: GoodsContentListComponent },
    { name: 'gca', path: 'goods/content/add', component: GoodsContentAddComponent },
    { name: 'gcte', path: 'goods/content/edit:id', component: GoodsContentEditComponent },
    { name: 'gaa', path: 'goods/added/add', component: AddEdComponent },
    { name: 'gac', path: 'goods/category/cat', component: categoryComponent },

    { name: 'gcl', path: 'goods/category/list', component: GoodsCategoryListComponent },
    { name: 'gca', path: 'goods/category/add', component: GoodsCategoryAddComponent },
    { name: 'gce', path: 'goods/category/edit', component: GoodsCategoryEditComponent },

    { name: 'gce', path: 'goods/comment/edit', component: GoodsCommentEditComponent },
    { name: 'gce', path: 'goods/comment/add', component: GoodsCommentAddComponent },
    { name: 'gce', path: 'goods/comment/list', component: GoodsCommentListComponent },
]