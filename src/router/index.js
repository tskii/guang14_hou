import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue";

export default {
    routes: [{
            name: 'h',
            path: '/',
            component: AdminComponent,
            children: [

            ]
        },
        { name: 'l', path: '/login', component: LoginComponent },
    ]
}