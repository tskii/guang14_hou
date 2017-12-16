//第三方库
import Vue from "vue";
import VueRouter from "vue-router";

//启动Vue插件
Vue.use(VueRouter);

//根组件
import AppComponent from "./component/App.vue";

//导入路由设置
import routerConfig from "./router";

//导入配置后的axios与api，注入到Vue的原型中，这样所有的组件就可以通过this调用
import axios from "./js/axios_config.js";
import api from "./js/api_config.js";
Vue.prototype.$http = axios;
Vue.prototype.$api = api;


new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router: new VueRouter(routerConfig)
})