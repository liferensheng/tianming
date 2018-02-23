<template>
    <div class="my_raise">
        <My_header title="我的众筹"></My_header>
        <div class="choose">
            <ul class="choose_info">
                <li class="list"
                    v-for="(item,index) in order_info"
                    @click="choose(index)"
                    :class="{active:item.isShow}"
                >
                    {{item.name}}
                </li>
            </ul>
            <ul class="order_status">
                <li class="pay_for" @click="raise_order">
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
                        </div>
                        <div class="items_middle">
                            <div class="price">
                                当前价： <span>￥299</span>
                            </div>
                            <div class="num">
                                众筹数量： <span>300</span>
                            </div>
                        </div>
                        <div class="presses">
                            <div class="presses_now">当前进度</div>
                            <div class="presses_box">
                                <div class="presses_box_1"></div>
                            </div>
                            <div class="presses_num">
                                90%
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
                            <div class="goods_num">
                                共 <span>2</span>件商品
                            </div>
                            <div class="total">
                                小计: <span>￥238.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="button">
                        <div class="cancel">取消订单</div>
                        <div class="pay" @click="go_pay">去付款</div>
                    </div>
                </li>
                <li class="send_goods">
                    <div class="order_info">
                        <div class="order_info_left">
                            <div class="order_time">下单时间 :<span class="time">2017/10/09</span></div>
                            <div class="order_num">订单编号 :<span class="num">1098762738382</span></div>
                        </div>
                        <div class="status">待发货</div>
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
                        </div>
                        <div class="items_middle">
                            <div class="price">
                                当前价： <span>￥299</span>
                            </div>
                            <div class="num">
                                众筹数量： <span>300</span>
                            </div>
                        </div>
                        <div class="presses">
                            <div class="presses_now">当前进度</div>
                            <div class="presses_box">
                                <div class="presses_box_1"></div>
                            </div>
                            <div class="presses_num">
                                90%
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
                            <div class="goods_num">
                                共 <span>2</span>件商品
                            </div>
                            <div class="total">
                                小计: <span>￥238.00</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="complete_goods">
                    <div class="order_info">
                        <div class="order_info_left">
                            <div class="order_time">下单时间 :<span class="time">2017/10/09</span></div>
                            <div class="order_num">订单编号 :<span class="num">1098762738382</span></div>
                        </div>
                        <div class="status">已发货</div>
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
                        </div>
                        <div class="items_middle">
                            <div class="price">
                                当前价： <span>￥299</span>
                            </div>
                            <div class="num">
                                众筹数量： <span>300</span>
                            </div>
                        </div>
                        <div class="presses">
                            <div class="presses_now">当前进度</div>
                            <div class="presses_box">
                                <div class="presses_box_1"></div>
                            </div>
                            <div class="presses_num">
                                90%
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
                            <div class="goods_num">
                                共 <span>2</span>件商品
                            </div>
                            <div class="total">
                                小计: <span>￥238.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="button">
                        <div class="pay" @click="go_pay">确认收货</div>
                    </div>
                </li>
                <li class="fail_raise">
                    <div class="order_info">
                        <div class="order_info_left">
                            <div class="order_time">下单时间 :<span class="time">2017/10/09</span></div>
                            <div class="order_num">订单编号 :<span class="num">1098762738382</span></div>
                        </div>
                        <div class="status">众筹失败</div>
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
                        </div>
                        <div class="items_middle">
                            <div class="price">
                                当前价： <span>￥299</span>
                            </div>
                            <div class="num">
                                众筹数量： <span>300</span>
                            </div>
                        </div>
                        <div class="presses">
                            <div class="presses_now">当前进度</div>
                            <div class="presses_box">
                                <div class="presses_box_1"></div>
                            </div>
                            <div class="presses_num">
                                90%
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
        name:"my_raise",
        data(){
            return{
                isShow:true,
                order_info:[
                    {name:"全部",isShow:true},
                    {name:"待付款",isShow:false},
                    {name:"待发货",isShow:false},
                    {name:"已发货",isShow:false},
                    {name:"失败",isShow:false},
                ]
            }
        },
        components:{
            My_header
        },
        methods:{
            go_pay(){

            },
            raise_order(){
                router.push({name:"raise_detail"})
            },
            choose(index){
                var lis=document.querySelectorAll(".choose_info>li");
                var items=document.querySelectorAll(".order_status>li");
                if(index==0){
                    for(let i=0;i<items.length;i++){
                        lis[i+1].classList.remove("active");
                        items[i].style.display = "block";
                    }
                    lis[0].classList.add("active");
                }else{
                    lis[0].classList.remove("active");
                    for(let i=0;i<items.length;i++){
                        lis[i+1].classList.remove("active");
                        items[i].style.display = "none";
                    }
                    lis[index].classList.add("active");
                    items[index-1].style.display = "block";
                }

            },
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./my_raise"
</style>