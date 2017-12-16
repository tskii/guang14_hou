import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/Login.vue";

export default {
    routes: [
        { name: 'h', path: '/home', component: HomeComponent },
        { name: 'l', path: '/login', component: LoginComponent },
    ]
}