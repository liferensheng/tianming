import axios from "axios";
import qs from "qs";
import API from "./api";

axios.defaults.baseURL = "http://tm.hw.luyl.top/api/";
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (sessionStorage.getItem("token")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            //alert(sessionStorage.getItem("token"))
            config.headers.common={
                'Authorization': sessionStorage.getItem("token"),
            }
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
export default {
    /***************用户版块*******************/
    // 登录
    login(user_info) {
        let phone=user_info.phone;
        let password=user_info.password;
        return axios.post(API.login, qs.stringify({phone,
            password}

        ))
    },
    // 注册

    register(phone, password, password_confirmation, code, license) {
        return axios.post(API.register, qs.stringify({
            phone,
            password,
            password_confirmation,
            code,
            license
        }))
    },
    // 验证码
    code(phone,type){
        return axios.get(API.code, {
            params: {
                phone,
                type
            }
        })
    },
    //获取用户信息
    user_info(){
        return axios.get(API.user_info,{
            params:{

        }
        })
    },
    //退出登录
    user_logout(){
        return axios.get(API.user_logout,{

        })
    },
    /*****************地址版块*************************/
    // 获取地址
    region(){
        return axios.get(API.region,{
            params:{
            }
        })
    },
    //添加地址
    address_add(receive_name, receive_phone, province, city, district, address_detail, is_default){
        return axios.post(API.address_add,qs.stringify({
            receive_name,
            receive_phone,
            province,
            city,
            district,
            address_detail,
            is_default
        }))
    },
    //修改地址
    address_edit(address_id,is_default,receive_name,receive_phone,province,city,district,address_detail){
        return axios.post(API.address_edit,qs.stringify({
            address_id,
            receive_name,
            receive_phone,
            province,
            city,
            district,
            address_detail,
            is_default,
        }))
    },
    //删除地址
    address_del(id){
        return axios.get(API.address_del,{
            params:{
                id
            }
        })
    },
    //获取用户地址列表
    address_list(limit,page){
        return axios.get(API.address_list,{
            params:{
                limit,
                page
            }
        })
    },
    //查看地址详情
    address_detail(id){
        return axios.get(API.address_detail,{
            params:{
                id
            }
        })
    },
    /*****************普通商品版块*************************/
    // 获取普通商品列表
    commodity(shop_id,limit,page,keywords,order,index,type){
        //alert(Authorization)
        return axios.get(API.commodity, {
            params: {
                shop_id,
                limit,
                page,
                keywords,
                order,
                index,
                type
            }
        })
    },
    //获取商品信息
    commodity_detail(id,type){
      return axios.get(API.commodity_detail,{
          params:{
              id,
              type
          }
        })
    },
    //获取评价
    commodity_comment(id,limit,page,type){
        return axios.get(API.commodity_comment,{
            params:{
                id,
                limit,
                page,
                type
            }
        })
    },
    /*****************众筹商品版块*************************/
    //获取众筹商品列表
    crowd_list(limit,page,classify_id,keywords,order,index){
        return axios.get(API.crowd_list,{
            params:{
                limit,
                page,
                classify_id,
                keywords,
                order,
                index
            }
        })
    },
    /*******************收藏版块**********************/
    //删除收藏
    love_del(id){
        return axios.get(API.love_del,{
            params:{
                id
            }
        })
    },
    //加入收藏
    love_add(id,type){
        return axios.post(API.love_add,qs.stringify({
            id,
            type
        }))
    },
    /*******************消息版块**********************/
    // 获取消息列表
    notice_list(page){
        return axios.get(API.notice_list,{
            params:{
                page
            }
        })
    },
    // 获取消息详情
    notice_detail(id){
        return axios.get(API.notice_detail,{
            params:{
                id
            }
        })
    },
    /*******************店铺版块**********************/
    //获取店铺信息
    store(id){
        return axios.get(API.store,{
            params:{
                id
            }
        })
    },
    //获取店铺列表
    shop_list(limit,page,keyword){
        return axios.get(API.shop_list,{
            params:{
                limit,
                page,
                keyword
            }
        })
    },
    /*******************卡券版块**********************/
    //我的卡券中心
    coupon_list(){
        return axios.get(API.coupon_list,{
            params:{}
        })
    },
    //卡券中心
    coupon_center(){
        return axios.get(API.coupon_center,{
            params:{

            }
        })
    },
    //领取卡券
    coupon_order(id){
        return axios.get(API.coupon_order,{
            params:{
                id
            }
        })
    },
    /*******************购物车版块**********************/
    //加入购物车
    cart_add(sku_attr,id,nub){
        console.log(sku_attr,id,nub)
        return axios.post(API.cart_add,qs.stringify({
            sku_attr,
            id,
            nub
        }))
    },
    //获取购物车列表
    cart_list(){
        return axios.get(API.cart_list,{})
    },
    //删除购物车
    cart_del(id){
        return axios.delete(API.cart_del,{
            params:{
                id
            }
        })
    },
    //修改购物车
    cart_edit(id,cart_nub){
        return axios.post(API.cart_edit,qs.stringify({
            id,
            cart_nub
        }))
    },
    /*******************订单版块**********************/
    //取消订单
    order_cancle(id){
        return axios.get(API.order_cancle,{
            params:{
                id
            }
        })
    },
    //商品直接下单
    order_only(addressid, id, nub, attr, type){
        return axios.post(API.order_only,qs.stringify({
            addressid,
            id,
            nub,
            attr,
            type
        }))
    },
    //提交售后请求
    order_service(id, status, reason){
        return axios.post(API.order_service,qs.stringify({
            id,
            status,
            reason
        }))
    },
    //确认支付弹支付宝
    order_pay(couponid, type){
        return axios.post(API.order_pay,qs.stringify({
            couponid,
            type
        }))
    },
    //确认收货
    order_receipt(id){
        return axios.get(API.order_receipt,{
            params:{
                id
            }
        })
    },
    //获取商品详情
    order_detail(id){
        return axios.get(API.order_detail,{
            params:{
                id
            }
        })
    },
    //获取订单列表
    order_list(status,limit,page,type){
        return axios.get(API.order_list,{
            params:{
                status,
                limit,
                page,
                type
            }
        })
    },
    //订单评价页面
    order_comment(id){
        return axios.get(API.order_comment,{
            params:{
                id
            }
        })
    },
    //购物车预下单
    order_cart(addressid,id){
        return axios.post(API.order_cart,qs.stringify({
            addressid,
            id
        }))
    },

}

