import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue";

//导入商品相关组件
import GoodsContentAddComponent from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentListComponent from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentEditComponent from "../component/admin/goods/content/GoodsContentEdit.vue";

//admin子路由配置
let adminChildren = [
    { name: 'gcl', path: 'goods/content/list', component: GoodsContentListComponent },
    { name: 'gca', path: 'goods/content/add', component: GoodsContentAddComponent },
    { name: 'gce', path: 'goods/content/edit', component: GoodsContentEditComponent },
]
export default {
    routes: [{
            name: 'h',
            path: '/',
            component: AdminComponent,
            children: adminChildren

        },
        { name: 'l', path: '/login', component: LoginComponent },
    ]
}