<template>
    <div class="my_order">
        <My_header title="我的订单"></My_header>
        <div class="choose">
            <div class="choose_box">
                <ul class="choose_info">
                    <li class="list"
                        @click="choose(index)"
                    >
                        全部
                    </li>
                    <li class="list"
                        v-for="(item,index) in order_info"
                        @click="choose(index)"
                        :class="{active:item.isShow}"
                    >
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <ul class="order_status">
                <li class="pay_for" v-for="items in info">
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
                    <div class="button">
                        <div class="button_left" >取消订单</div>
                        <div class="button_right">去付款</div>
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
        name:"my_order",
        data(){
            return{
                isShow:true,
                order_info:[],
                info:[
                    {
                        id:1,
                        name:"代付款",
                        state:1
                    },
                    {
                        id:2,
                        name:"待发货",
                        state:2

                    },
                    {
                        id:3,
                        name:"待收货",
                        state:3

                    },
                    {
                        id:4,
                        name:"交易成功",
                        state:4

                    },
                    {
                        id:5,
                        name:"待评价",
                        state:5

                    },
                    {
                        id:6,
                        name:"已取消",
                        state:6

                    },
                ]
            }
        },
        components:{
            My_header
        },
        methods:{
            evaluate(){
                router.push({name:"evaluate"})
            },
            to_after_sale(){
                router.push({name:"after_sale"})
            },
            order_detail(){
                router.push({name:"order_detail"})
            },

            add_evaluate(){
                router.push({name:"add_evaluate"})
            },
            go_pay(){
                router.push({name:"pay"})
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
            init(){
                var b_left=document.querySelectorAll(".button_left");
                var b_right=document.querySelectorAll(".button_right");
                var b_box=document.querySelectorAll(".button");
                for(let i=0;i<this.info.length;i++){
                    if(this.info[i].state===1){
                    }else if(this.info[i].state===2){
                        b_box[i].classList.add("active")
                    }else if(this.info[i].state===3){
                        b_left[i].innerHTML='申请售后';
                        b_right[i].innerHTML='确认收货'
                    }else if(this.info[i].state===4){
                        b_left[i].classList.add("active");
                        b_right[i].innerHTML='评价';
                    }else if(this.info[i].state===5){
                        b_left[i].classList.add("active");
                        b_right[i].innerHTML='追加评价'
                    }else if(this.info[i].state===6){
                        b_box[i].classList.add("active")
                    }
                }
            },
            //获取订单列表
            get_order_list(){
                this.$fetch.order_list("","","",2).then(res=>{
                    if(res.data.status==="200"){
                        this.order_info=res.data.data.status
                    }
                })
            }
        },
        mounted(){
            this.init();
            this.get_order_list()
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./my_order.scss"
</style>