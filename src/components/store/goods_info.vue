<template>
    <div class="a">
        <My_header title="商品详情"></My_header>
        <div class="goods">
            <div class="banner">
                <template>
                    <el-carousel indicator-position="" height="6.4rem">
                        <el-carousel-item v-for="(items,index) in goods_info.carousel" :key="index">
                            <img :src="items.file_path" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>
            <div class="goods_info">
                <div class="g_top">
                    <div class="g_left">
                        <div class="title">{{goods_info.commodity_title}}官方授权 100%正品保证</div>
                        <div class="price">
                            ￥ <span>{{goods_info.current_money}}</span>
                        </div>
                    </div>
                    <div class="g_right">
                        <i class="iconfont stare">&#xe610;</i>
                    </div>
                </div>
                <ul class="g_bottom">
                    <li>
                        运费 :
                        <span>0.00</span>
                        <div class="freight">元</div>
                    </li>
                    <li>
                        销量 :
                        <span>{{goods_info.sales}}</span>
                        <div class="sale">件</div>
                    </li>
                    <li>
                        所在地 :
                        <span>{{goods_info.shop_send_address}}</span>
                    </li>
                </ul>
            </div>
            <div class="store">
                <div class="store_left">
                    <div class="logo">
                        <img :src="goods_info.shop_logo" alt="">
                    </div>
                    <div class="store_name">
                        {{goods_info.shop_name}}
                    </div>
                </div>
                <div class="go_store" @click="go_store">
                    进店
                </div>
            </div>
            <div class="product">
                <div class="product_top">
                    <div class="product_info"
                         @click="choose"
                    >
                        产品详情
                        <div class="line"
                             :class="{ 'on_choose': willShow }"
                        ></div>
                    </div>
                    <div class="product_evaluate"
                         @click="choose"
                    >
                        查看评价
                        <div class="line"
                             :class="{ 'on_choose': !willShow }"
                        ></div>
                    </div>
                </div>
                <div class="info"
                     v-if="willShow"
                     v-html="goods_info.commodity_content"
                >
                </div>
                <div class="evaluate"
                     v-else
                >
                    <ul class="evaluate_cate">
                        <li class="good">
                            好评(<span>158</span>)
                        </li>
                        <li class="ok">
                            中评(<span>258</span>)
                        </li>
                        <li class="good">
                            差评(<span>58</span>)
                        </li>
                    </ul>
                    <div>
                        <ul class="evaluate_info">
                            <li class="e_items" v-for="v in evaluate">
                                <h4 class="custom_name">{{v.custom_name}}</h4>
                                <p class="custom_evaluate">{{v.custom_evaluate}}</p>
                                <div class="custom_pic">
                                    <img src="../../assets/img/pic1.png" alt="">
                                    <img src="../../assets/img/pic2.png" alt="">
                                    <img src="../../assets/img/pic3.png" alt="">
                                </div>
                                <div class="items_bottom">
                                    <div class="evaluate_time">{{v.evaluate_time}}</div>
                                    <div class="goods_pattern">
                                        <div class="goods_color">颜色：{{v.goods_color}}</div>
                                        <div class="goods_type">款式：{{v.goods_type}}</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fill"></div>
            <div class="foot">
                <ul class="foot_left">
                    <li @click="go_home">
                        <i class="iconfont">&#xe6c6;</i>
                        <p>首页</p>
                    </li>
                    <li @click="collect">
                        <i class="iconfont">&#xe650;</i>
                        <p>收藏</p>
                    </li>
                    <li @click="customer_service">
                        <i class="iconfont">&#xe6b8;</i>
                        <p>客服</p>
                    </li>
                </ul>
                <div class="foot_right">
                    <div class="cart" @click="move">
                        加入购物车
                    </div>
                    <div class="buy" @click="move1">
                        立即购买
                    </div>
                </div>
            </div>
            <div class="to_buy" v-if="show">

            </div>
            <mt-popup
                    v-model="popupVisible"
                    position="bottom"
                    class="to_buy">
                <div class="main">
                    <div class="to_buy_top">
                        <div class="goods_pic">
                            <img :src="goods_info.thumbnail" alt="">
                        </div>
                        <div class="top_middle">
                            <div class="price">￥ <span>{{this.goods_info.current_money}}</span></div>
                            <div class="stock">库存 <span>888</span>件</div>
                        </div>
                        <div class="close" @click="closed">
                            <i class="iconfont">&#xe620;</i>
                        </div>

                    </div>
                    <div class="to_buy_middle">
                        <ul class="goods_style">
                            <li class="sku_attr" v-for="value in goods_info.sku_attr">
                                <h4>{{value.attr}}</h4>
                                <ul class="styleBox">
                                    <li class="items" v-for="(v,index) in value.val" @click="choose_style(v,index)">
                                        {{v}}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="to_buy_bottom">
                        <p class="buy_num">购买数量</p>
                        <div class="numBox">
                            <div class="minus"
                                 v-on:click.prevent="cart.num-=1"
                            >-
                            </div>
                            <span class="num"
                                  contenteditable="true"
                                  v-model="cart.num"
                            >{{cart.num >= 0 ? cart.num : 0}}</span>
                            <div class="add"
                                 v-on:click.prevent="cart.num+=1"
                            >+
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sure" @click="cart_add">确定</div>
            </mt-popup>
            <mt-popup
                    v-model="popupVisible1"
                    position="bottom"
                    class="to_buy">
                <div class="main">
                    <div class="to_buy_top">
                        <div class="goods_pic">
                            <img :src="goods_info.thumbnail" alt="">
                        </div>
                        <div class="top_middle">
                            <div class="price">￥ <span>{{this.goods_info.current_money}}</span></div>
                            <div class="stock">库存 <span>888</span>件</div>
                        </div>
                        <div class="close" @click="cloesd1">
                            <i class="iconfont">&#xe620;</i>
                        </div>
                    </div>
                    <div class="to_buy_middle">
                        <ul class="goods_style">
                            <li class="sku_attr" v-for="value in goods_info.sku_attr">
                                <h4>{{value.attr}}</h4>
                                <ul class="styleBox">
                                    <li class="items" v-for="(v,index) in value.val" @click="choose_style(v,index)">
                                        {{v}}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="to_buy_bottom">
                        <p class="buy_num">购买数量</p>
                        <div class="numBox">
                            <div class="minus"
                                 v-on:click.prevent="cart.num-=1"
                            >-
                            </div>
                            <span class="num"
                                  contenteditable="true"
                                  v-model="cart.num"
                            >{{cart.num >= 0 ? cart.num : 0}}</span>
                            <div class="add"
                                 v-on:click.prevent="cart.num+=1"
                            >+
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sure" @click="order_only()">确定</div>
            </mt-popup>
        </div>
    </div>
</template>
<script>
    import router from "../../router/index"
    import My_header from "../my_header.vue"
    export default{
        name: "goods_info",
        data(){
            return {
                popupVisible: false,
                popupVisible1: false,
                show: false,
                willShow: true,
                goods_info: "",
                cart: {
                    sku_attr: "",
                    id: "",
                    num: 0,
                    type:1
                }
            }
        },
        methods: {
            choose(index){
                if (this.willShow === true) {
                    this.willShow = false;
                    this.active1 = "";
                } else {
                    this.willShow = true;
                    this.active1 = index;
                }
            },
            //弹出购买框
            move(){
                this.popupVisible = true
            },
            move1(){
                this.popupVisible1 = true
            },
            //关闭购买框
            closed(){
                this.popupVisible = false
            },
            cloesd1(){
                this.popupVisible1 = false
            },
            //进入店铺
            go_store(){
                this.$router.push({path: "/store", query: {id: this.goods_info.shop_id}})
            },
            //加入购入车
            cart_add(){
                this.$fetch.cart_add(this.cart.sku_attr, this.cart.id, this.cart.num).then(res => {
                    if (res.data.status === "200") {
                        alert(1)
                    }
                })
                this.popupVisible = false
            },
            //返回首页
            go_home(){
                this.$router.push({path: "/home"})
            },
            //客服
            customer_service(){
                this.$router.push({path: "/me/customer_service"})
            },
            //收藏
            collect(){
                this.$fetch.love_add(this.$route.query.id, "cus100102").then(res => {
                    if (res.data.status === "200") {

                    }
                })
            },
            //获取普通物品信息
            store_info(){
                    this.$fetch.commodity_detail(this.$route.query.id, 1).then(res => {
                        if (res.data.status === '200') {
                            this.goods_info = res.data.data;
                        }
                    })
            },
            //获取评价
            get_evaluate(){
                this.$fetch.commodity_comment(this.$route.query.id, "", "", "").then(res => {
                    if (res.data.status === "200") {
                    }
                })
            },
            //选样式
            choose_style(v, index){
                var style_list = document.querySelectorAll(".styleBox .items");
                for (let i = 0; i < style_list.length; i++) {
                    style_list[i].classList.remove("active");
                }
                style_list[index].classList.add("active");
                this.cart.sku_attr = v;
                this.cart.id = this.$route.query.id;
            },
            //直接购买
            order_only(){

                sessionStorage.setItem("order_only", this.cart);

            }
        },
        mounted(){
            this.store_info();
            this.get_evaluate();
        },

        components: {
            My_header
        },
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "goods_info"
</style>