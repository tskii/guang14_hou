import axios from "axios";
import apiConofig from "../js/api_config.js";
export default function(to, form, next) {
    //1.调用接口判断用户的登录状态
    //2在通过to对象的name属性得知跳转到首页->用户去去往的页面
    //2.1 如果去往登录页面
    //2.2 登录->自动跳转到首页->调next()
    //2.3 未登录->允许访问->调next()
    //3.1 如果去往非登录页面
    //3.2 登录->允许访问->调next()
    //3.3 未登录-> 自动跳转到登录页->调next()
    axios.get(apiConofig.islogin).then(rsp => {
        let isLogin = rsp.data.code == 'logined'
        let toPage = to.name;

        //去往登录
        if (toPage == 'l') {
            if (isLogin) {
                next('/'); //转到首页
            } else {
                next(); //允许访问
            }
        }

        //去非登录
        if (toPage != ' l') {
            console.log(isLogin);

            if (isLogin) {
                next()
            } else {
                next('/login')
            }
        }
    })
}