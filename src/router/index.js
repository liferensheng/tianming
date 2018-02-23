import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login/login.vue'
import Register from '../components/login/register.vue'
import Success_register from '../components/login/success_register.vue'
import Update_password from '../components/login/update_password.vue'

import Search from "../components/search/search.vue"
import Search_common from "../components/search/search_common.vue"
import Search_raise from "../components/search/search_raise.vue"
import Search_store from "../components/search/search_store.vue"

import Home from '../components/home.vue'
import News_list from "../components/news/news_list.vue"
import News from "../components/news/news.vue"
import Activity from '../components/activity.vue'

import Raise from "../components/raise/raise.vue"

import Shopping_cart from "../components/shopping/Shopping_cart.vue"
import Sure_cart from "../components/shopping/sure_shopping_cart.vue"
import Sure_again from "../components/shopping/sure_again.vue"


import Me from '../components/me/me.vue'
import My_order from '../components/me/order/my_order.vue'
import Order_detail from '../components/me/order/order_detail.vue'
import Evaluate from '../components/me/order/evaluate.vue'//评价
import Add_evaluate from '../components/me/order/add_evaluate.vue'//追加评价
import My_raise from '../components/me/raise/my_raise.vue'
import Raise_detail from '../components/me/raise/raise_detail.vue'
import Pay from '../components/me/order/pay.vue'
import My_collect from '../components/me/my_collect/my_collect.vue'

import Edit from '../components/me/address/edit.vue'
import Add from '../components/me/address/add.vue'
import Address_management from '../components/me/address/address_management.vue'

import Card_coupons from '../components/me/card_coupons/my_card.vue'
import Card_center from '../components/me/card_coupons/card_center.vue'

import Customer_service from '../components/me/customer_service/customer_service.vue'
import Set from '../components/me/set_user/set_user.vue'
import After_sale from '../components/me/after_sale/after_sale.vue'
import After_sale_list from '../components/me/after_sale/sale_after_list.vue'

import Sure_raise from '../components/raise/sure_raise.vue'

import Store from '../components/store/store.vue'
import Goods_info from '../components/store/goods_info.vue'
import Raise_info from '../components/raise/raise_info.vue'



Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        // 注册
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        // 注册成功
        {
            path: '/success_register',
            name: 'Success_register',
            component: Success_register,
        },
        // 修改密码
        {
            path: '/update_password',
            name: 'Update_password',
            component: Update_password,
        },

        // 首页
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },

        // 搜索
        {
            path: '/Search',
            name: 'Search',
            component: Search,
        },
        // 搜索普通商品
        {
            path: '/search/common',
            name: 'search_common',
            component: Search_common,
        },
        // 搜索众筹商品
        {
            path: '/search/raise',
            name: 'search_raise',
            component: Search_raise,
        },
        // 搜索店铺
        {
            path: '/search/store',
            name: 'search_store',
            component: Search_store,
        },

        // 新闻列表
        {
            path: '/news_list',
            name: 'News_list',
            component: News_list,
        },
        // 新闻详情
        {
            path: '/news_info',
            name: 'News',
            component: News,
        },

        // 活动
        {
            path: '/activity',
            name: 'activity',
            component: Activity,
        },

        // 店铺
        {
            path: '/store',
            name: 'store',
            component: Store,
        },
        // 普通商品详情
        {
            path: '/store/goods_info',
            name: 'goods_info',
            component: Goods_info,
        },

        // 众筹
        {
            path: '/raise',
            name: 'Raise',
            component: Raise,
        },
        // 众筹商品详情
        {
            path: '/raise/goodsInfo',
            name: 'raise_info',
            component: Raise_info,
        },
        // 众筹商品订单确认
        {
            path: '/raise/sureRaise',
            name: 'sure_raise',
            // meta: {
            //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            // },
            component: Sure_raise,
        },

        // 购物车
        {
            path: '/cart',
            name: 'shopping_cart',
            component: Shopping_cart,
        },
        // 购物车 确认支付
        {
            path: '/sure_cart',
            name: 'sure_cart',
            // meta: {
                // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                // keepAlive:true,
            // },
            component: Sure_cart,
        },
        // 再次确认支付
        {
            path: '/cart/sure_again',
            name: 'sure_again',
            component: Sure_again,
        },
        // 支付方式页面
        {
            path: '/me/pay',
            name: 'pay',
            component: Pay,
        },

        // 我的
        {
            path: '/me',
            name: 'Me',
            component: Me,
        },
        // 我的订单
        {
            path: '/me/myOrder',
            name: 'my_order',
            component: My_order,
        },
        // 订单详情
        {
            path: '/me/OrderDetail',
            name: 'order_detail',
            component: Order_detail,
        },
        // 评价
        {
            path: '/me/evaluate',
            name: 'evaluate',
            component: Evaluate,
        },
        // 追加评价
        {
            path: '/me/addEvaluate',
            name: 'add_evaluate',
            component: Add_evaluate,
        },
        // 售后/退货
        {
            path: '/me/after_sale/list',
            name: 'after_sales_list',
            component: After_sale_list,
        },
        // 售后详情
        {
            path: '/me/after_sale/info',
            name: 'after_sale',
            component: After_sale,
        },
        // 我的众筹
        {
            path: '/me/myRaise',
            name: 'my_raise',
            component: My_raise,
        },
        // 众筹订单详情
        {
            path: '/me/raiseDetail',
            name: 'raise_detail',
            component: Raise_detail,
        },
        // 卡片中心
        {
            path: '/card_center',
            name: 'card_center',
            component: Card_center,
        },
        //我的卡券
        {
            path: '/me/my_card',
            name: 'card_coupons',
            component: Card_coupons,
        },
        // 我的收藏
        {
            path: '/me/myCollect',
            name: 'my_collect',
            component: My_collect,
        },
        // 地址管理
        {
            path: '/me/address/management',
            name: 'management',
            component: Address_management,
        },
        // 地址添加
        {
            path: '/me/address/add',
            name: 'add',
            component: Add,
        },
        // 地址修改
        {
            path: '/me/address/edit',
            name: 'edit',
            component: Edit,
        },
        // 客服
        {
            path: '/me/customer_service',
            name: 'customer_service',
            component: Customer_service,
        },
        // 设置
        {
            path: '/me/set',
            name: 'set',
            component: Set,

        },


    ]
});

// router.beforeEach((to, from, next) => {
//
//     if(to.meta.requireAuth){  // 判断该路由是否需要登录权限
//         let token=sessionStorage.getItem("token")
//         if(!token){
//             next({
//                 path:"/Login",
//                 query:{redirect:to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             });
//         } else{ // store.state.token   通过vuex state获取当前的token是否存在
//             next()
//         }
//     }else{
//         next();
//     }
// });
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
export default router
