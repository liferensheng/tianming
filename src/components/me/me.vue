<template>
    <div class="box">
        <My_header title="个人中心"></My_header>
        <div class="content">
            <div class="head">
                <div class="user_pic">
                    <img :src="user_info.wx_img" alt="">
                </div>
                <div class="user_num">{{user_info.account}}</div>

            </div>
            <div class="order_info">
                <div class="order">
                    <div class="my_order">我的订单</div>
                    <div class="all_order" @click="to_my_order">
                        全部订单 <i class="iconfont">&#xe643;</i>
                    </div>
                </div>
                <ul class="module">
                    <li class="items"  @click="to_my_order">
                        <i class="iconfont">&#xe65f;</i>
                        <div class="module_name">待付款</div>
                    </li>
                    <li class="items" @click="to_my_order">
                        <i class="iconfont">&#xe600;</i>
                        <div class="module_name">待发货</div>
                    </li>
                    <li class="items" @click="to_my_order">
                        <i class="iconfont">&#xe690;</i>
                        <div class="module_name">待收货</div>
                    </li>
                    <li class="items" @click="to_my_order">
                        <i class="iconfont">&#xe604;</i>
                        <div class="module_name">待评价</div>
                    </li>
                    <li class="items" @click="to_after_sales">
                        <i class="iconfont">&#xe605;</i>
                        <div class="module_name">退换/售后</div>
                    </li>
                </ul>
            </div>
            <div class="my" >
                <ul class="my_main">
                    <li class="item" @click="to_my_raise">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_zc.png" alt="">
                        </div>
                        <div class="text">我的众筹</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                    <li class="item" @click="to_card">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_zc copy.png" alt="">
                        </div>
                        <div class="text">我的卡片</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                    <li class="item" @click="to_my_collect">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_sc.png" alt="">
                        </div>
                        <div class="text">我的收藏</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                    <li class="item" @click="go_address_management">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_dz.png" alt="">
                        </div>
                        <div class="text">地址管理</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                    <li class="item" @click="go_address_management">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_cgtj.png" alt="">
                        </div>
                        <div class="text">采购系统</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                    <li class="item" @click="go_customer_service">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_lxwm.png" alt="">
                        </div>
                        <div class="text">联系我们</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                    <li class="item" @click="go_set">
                        <div class="imgBox">
                            <img src="../../assets/img/icon_sz.png" alt="">
                        </div>
                        <div class="text">设置</div>
                        <i class="iconfont go_to">&#xe643;</i>
                    </li>
                </ul>
            </div>
        </div>
        <Foot></Foot>
    </div>


</template>
<script>
    import router from "../../router"
    import Foot from "../foot.vue"
    import My_header from "../my_header.vue"
    export default{
        name:'Me',
        components:{
            Foot,
            My_header
        },
        data() {
            return{
                user_info:""
            }

        },
        methods:{
            //用户设置
            go_set(){
                this.$router.push({path: "/me/set"})
            },
            //客服
            go_customer_service(){
                this.$router.push({path: "/me/customer_service"})
            },
            //地址管理
            go_address_management(){
                this.$router.push({path: "/me/address/management"})
            },
            //我的收藏
            to_my_collect(){
                this.$router.push({path: "/me/myCollect"})
            },
            //我的众筹
            to_my_raise(){
                this.$router.push({path: "/me/myRaise"})
            },
            //我的订单
            to_my_order(){
                this.$router.push({path: "/me/myOrder"})
            },
            //我的卡券
            to_card(){
                this.$router.push({path: "/me/my_card"})
            },
            //售后
            to_after_sales(){
                this.$router.push({path:"/me/after_sale/list"})
            },
            //获取用户信息
            get_user_info(){
                this.$fetch.user_info().then(res=>{
                    if(res.data.status==="200"){
                        this.user_info=res.data.data
                    }
                })
            }

        },
        mounted(){
            this.get_user_info();
        }


    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "./me.scss"
</style>
