<template>
    <div>
        <My_header title="众筹商品详情"></My_header>
        <div class="goods">
            <div class="banner">
                <template>
                    <el-carousel indicator-position="" height="6.4rem">
                        <el-carousel-item  >
                            <img src="../../assets/img/product.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item  >
                            <img src="../../assets/img/product.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item >
                            <img src="../../assets/img/product.png" alt="">
                        </el-carousel-item>

                    </el-carousel>
                </template>
            </div>
            <div class="goods_info">
                <div class="goods_info1">
                    <div class="g_top">
                        <div class="g_left">
                            <div class="title">雷朋经典太阳镜rayban官方授权 100%正品保证</div>

                        </div>
                        <div class="g_right">
                            <i class="iconfont stare">&#xe610;</i>
                        </div>
                    </div>
                    <div class="g_bottom">
                        <div class="price">
                            当前价： <span>￥188</span>
                        </div>
                        <div class="now_num">
                            已筹数量: <span>188</span>
                        </div>
                    </div>
                </div>
                <div class="goods_info2">
                    <div class="top1">
                        <div class="now_presses">当前进度</div>
                        <div class="time">
                            剩余 <span>19:34:20</span>结束
                        </div>
                    </div>
                    <div class="presses_box">
                        <div class="presses">
                            <ul class="interval">
                                <li class="lists">
                                    <div class="price">￥ <span>110</span></div>
                                    <div class="num"><span>300</span>件</div>
                                </li>
                                <li class="lists">
                                    <div class="price">￥ <span>80</span></div>
                                    <div class="num"><span>600</span>件</div>
                                </li>
                                <li class="lists">
                                    <div class="price">￥ <span>60</span></div>
                                    <div class="num"><span>900</span>件</div>
                                </li>
                            </ul>
                            <div class="presses_line">
                                <div class="circle"></div>
                                <div class="now_number">600件</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="store" @click="go_store">
                <div class="store_left">
                    <div class="logo">
                        <img src="../../assets/img/logo.png" alt="">
                    </div>
                    <div class="store_name">
                        Channle设计铺
                    </div>
                </div>
                <div class="go_store">
                    进店
                </div>
            </div>
            <div class="product">
                <div class="product_top">
                    <span class="line"></span>
                    产品详情
                </div>
                <div class="info"
                     v-if="willShow"
                >
                    <p class="text">Advanced Manufacturing Fund)的第二笔投资。 Finisar将利用这笔资金把位于德克萨斯州谢尔曼的一个70万平方英尺的厂房改造成一个VCSEL（垂直腔表面发射激光）芯片研发基地，同时增加500多个工作岗位，包括工程师、技术人员和维修团队等，计划明年下半年开放。</p>
                    <div class="pic">
                        <img src="../../assets/img/pic.png" alt="">
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
                <div class="foot_right" @click="move">
                    我要支持
                </div>
            </div>
            <div class="to_buy" v-if="show">
                <div class="main">
                    <div class="to_buy_top">
                        <div class="goods_pic">
                            <img src="../../assets/img/image_product2.png" alt="">
                        </div>
                        <div class="top_middle">
                            <div class="price">￥ <span>199</span></div>
                            <div class="stock">库存 <span>888</span>件</div>
                        </div>
                        <div class="close" @click="closed">
                            <i class="iconfont">&#xe620;</i>
                        </div>

                    </div>
                    <div class="to_buy_middle">
                        <div class="goods_style">
                            <h4>颜色</h4>
                            <el-radio-group v-model="checkboxGroup1">
                                <el-radio-button v-for="v in color" :label="v" :key="v" v-bind:label="v" ></el-radio-button>
                            </el-radio-group>
                            <h4>款式</h4>
                            <el-radio-group v-model="checkboxGroup2">
                                <el-radio-button v-for="v in style" :label="v" :key="v" v-bind:label="v"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                    <div class="to_buy_bottom">
                        <p class="buy_num">购买数量</p>
                        <div class="numBox">
                            <div id="minus"
                                 v-on:click.prevent="item.obj_num=item.obj_num-1"
                            >-</div>
                            <span id="num"
                                  contenteditable="true"
                                  v-model="item.obj_num"
                            >{{item.obj_num>=0?item.obj_num:0}}</span>
                            <div id="add"
                                 v-on:click.prevent="item.obj_num=item.obj_num+1"
                            >+</div>
                        </div>

                    </div>
                </div>
                <div class="sure" @click="go_pay">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
    import router from "../../router/index"
    import My_header from "../my_header.vue"
    export default{
        name:"raise_info",
        data(){
            return {
                show:false,
                willShow:true,
                evaluate:"",
                item:[{obj_num:0}],
                raise_info:"",
                keyword: '',
            }
        },
        components: {
            My_header
        },
        methods:{
            choose(index){
                if(this.willShow===true){
                    this.willShow=false;
                    this.active1="";
                }else{
                    this.willShow=true;
                    this.active1=index;
                }
            },
            move(){
                $(".to_buy").animate({bottom:"100px"},1000)
                this.show=true;

            },
            closed(){
                this.show=false;
            },
            //返回首页
            go_home(){
                this.$router.push({path:"/home"})
            },
            //客服
            customer_service(){
                this.$router.push({path:"/me/customer_service"})
            },
            //收藏
            collect(){
                this.$fetch.love_add(this.$route.query.id,"cus100102").then(res=>{
                    if(res.data.status==="200"){

                    }
                })
            },
            customer_service(){
                router.push({name:"customer_service"})
            },
            go_pay(){
                router.push({name:"pay"})
            },
            //获取众筹物品信息
            raise_infos(){
                if (this.keyword !== this.$route.query.id) {
                    this.$fetch.commodity_detail(this.$route.query.id, 2).then(res => {
                        if (res.data.status === '200') {
                            this.raise_info = res.data.data;
                        }
                    })
                }
            },
            //进入店铺
            go_store(){
                this.$router.push({path: "/store", query: {id: this.goods_info.shop_id}})
            },
        },
        mounted(){
//            alert(1)
            this.raise_infos();
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "raise_info"
</style>