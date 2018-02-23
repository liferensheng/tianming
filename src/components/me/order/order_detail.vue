<template>
    <div class="raise">
        <My_header title="订单详情"></My_header>
        <div class="raise_order">
            <div class="send_goods">
                <div class="order_info">
                    <div class="order_info_left">
                        <div class="order_time">下单时间 :<span class="time">2017/10/09</span></div>
                        <div class="order_num">订单编号 :<span class="num">1098762738382</span></div>
                    </div>
                    <div class="status">待付款</div>
                </div>
                <div class="store_info">
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
                </div>
                <div class="price_box">
                    <div class="freight">
                        <div>运费</div>
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
            </div>
        </div>
        <div class="courier">
            <div class="courier_way">
                配送方式：由顺丰快递配送
            </div>
            <div class="courier_num">
                运单号: 331098762738382
            </div>
        </div>
        <div class="receipt_info">
            <div class="receipt_man">
                <div class="people">张三丰</div>
                <div class="phone">18876545678</div>
            </div>
            <div class="receipt_address">
                浙江省杭州市萧山区白云街道白云路66号杭州湾信息港
            </div>
        </div>
        <div class="button">
            <div class="cancel" @click="cancle(id)">取消订单</div>
            <div class="pay" @click="pay">去付款</div>
        </div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name: "order_detail",
        components: {
            My_header
        },
        methods: {
            pay(){
                router.push({name: "pay"})
            },
            cancle(id){
                this.$fetch.order_cancle(1).then(res=>{

                })
            }
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./order_detail"
</style>