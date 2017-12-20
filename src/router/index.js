import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue";



//导入添加组件
import AddEdComponent from "../component/admin/goods/added/addEd.vue";

//导入类别组件
import categoryComponent from "../component/admin/goods/category/category.vue";

//导入商品模块路由配置
import goodRouterConfig from "./goods.js";
let adminChlidren = [...goodRouterConfig]

export default {
    routes: [{
            name: 'h',
            path: '/',
            component: AdminComponent,
            children: adminChlidren

        },
        { name: 'l', path: '/login', component: LoginComponent },
    ]
}