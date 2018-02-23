<template>
    <div class="my_order">
        <My_header title="我的订单"></My_header>
        <div class="choose">
            <ul class="order_status">
                <li class="pay_for" v-for="items in info" @click="">
                    <div class="store">
                        <div class="store_name">
                            Channel中国
                        </div>
                        <i class="iconfont">&#xe643;</i>
                        <div class="status">{{items.name}}</div>
                    </div>
                    <div class="order_info">
                        <div class="order_info_left">
                            <div class="order_time">下单时间 :<span class="time">2017/10/09</span></div>
                            <div class="order_num">订单编号 :<span class="num">1098762738382</span></div>
                        </div>
                    </div>
                    <ul class="goodsBox">
                        <li class="store_info" @click="order_detail">
                            <div class="items_top">
                                <div class="goods_pic">
                                    <img src="../../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <div class="title">
                                    <div class="goods_name">
                                        时尚潮流太阳镜男款
                                    </div>
                                    <div class="goods_store">
                                        张师傅的店
                                    </div>
                                </div>
                                <div class="items_top_right">
                                    <div class="price">
                                        ￥299
                                    </div>
                                    <div class="num">
                                        数量: <span>20</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="store_info" @click="order_detail">
                            <div class="items_top">
                                <div class="goods_pic">
                                    <img src="../../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <div class="title">
                                    <div class="goods_name">
                                        时尚潮流太阳镜男款
                                    </div>
                                    <div class="goods_store">
                                        张师傅的店
                                    </div>
                                </div>
                                <div class="items_top_right">
                                    <div class="price">
                                        ￥299
                                    </div>
                                    <div class="num">
                                        数量: <span>20</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="price_box">
                        <div class="freight">
                            <div class="freight_price">
                                快递 <span>￥20.00</span>
                            </div>
                        </div>
                        <div class="total_box">
                            <div class="total">
                                小计: <span>￥238.00</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name:"after_sales_list",
        data(){
            return{
                isShow:false,
                info:[
                    {
                        id:1,
                        name:"退/换货审核中",
                        state:1
                    },
                    {
                        id:2,
                        name:"退/换中",
                        state:2

                    },
                    {
                        id:3,
                        name:"退/换货成功",
                        state:3

                    },
                    {
                        id:4,
                        name:"退/换货失败",
                        state:4

                    },
                    {
                        id:5,
                        name:"退款审核中",
                        state:5

                    },
                    {
                        id:6,
                        name:"退款中",
                        state:6

                    },
                    {
                        id:7,
                        name:"退款成功",
                        state:7

                    },
                    {
                        id:8,
                        name:"退款失败",
                        state:8

                    }
                ]
            }
        },
        components:{
            My_header
        },
        methods:{

            order_detail(){
            }
        },

    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./sale_after_list.scss"
</style>