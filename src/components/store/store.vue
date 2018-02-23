<template>
    <div class="background">
        <My_header title="店铺名称"></My_header>
        <div class="content">
            <div class="store">
                <div class="store_left">
                    <div class="logo">
                        <img src="../../assets/img/logo.png" alt="">
                    </div>
                    <div class="store_info">
                        <div class="store_name">Channel设计铺</div>
                        <div class="sale_num">共188件宝贝</div>
                    </div>
                </div>
                <div class="collection">
                    <i class="iconfont">&#xe650;</i>
                    <div>收藏</div>
                </div>
                <div class="contact">
                    <i class="iconfont">&#xe650;</i>
                    <div>联系卖家</div>
                </div>
            </div>
            <ul class="choose">
                <li class="item"
                    v-for="(item,index) in shop_info"
                    @click="choose(index)"
                    :class="{active:item.isShow}"
                >
                    {{item.name}}
                </li>
            </ul>
            <ul class="main">
                <li class="home_page">
                    <div class="banner">
                        <template>
                            <el-carousel indicator-position="" height="3.28rem">
                                <el-carousel-item>
                                    <img src="../../assets/img/image_banner12x.png" alt="">
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="../../assets/img/image_banner12x.png" alt="">
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="../../assets/img/image_banner12x.png" alt="">
                                </el-carousel-item>

                            </el-carousel>
                        </template>
                    </div>
                    <div class="recommend">
                        <div class="title">
                            <div class="line"></div>
                            <div class="name">推荐商品</div>
                        </div>
                        <ul class="common">
                            <li class="list" @click="to_goodsInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product@2x.png" alt="">
                                </div>
                                <p class="l_name">蔡司镜片奢华墨镜</p>
                                <p class="version">BV1003</p>
                                <p class="price">￥<span>199</span></p>
                            </li>
                            <li class="list" @click="to_goodsInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product@2x.png" alt="">
                                </div>
                                <p class="l_name">蔡司镜片奢华墨镜</p>
                                <p class="version">BV1003</p>
                                <p class="price">￥<span>199</span></p>
                            </li>
                        </ul>
                        <ul class="raise">
                            <li class="list1" @click="to_raiseInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <p class="name">蔡镜片奢华墨镜</p>
                                <p class="cate">BV1003</p>
                                <p class="price">￥ <span>199</span></p>
                                <div class="percent">
                                    <div class="p_box">
                                        <div class="percent_box">
                                            <div class="percent_box1"></div>
                                        </div>
                                        <div class="num"><span>78</span>%</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list1" @click="to_raiseInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <p class="name">蔡镜片奢华墨镜</p>
                                <p class="cate">BV1003</p>
                                <p class="price">￥ <span>199</span></p>
                                <div class="percent">
                                    <div class="p_box">
                                        <div class="percent_box">
                                            <div class="percent_box1"></div>
                                        </div>
                                        <div class="num"><span>78</span>%</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="all_goods">
                    <div class="recommend">
                        <ul class="common">
                            <li class="list" @click="to_goodsInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product@2x.png" alt="">
                                </div>

                                <p class="l_name">蔡司镜片奢华墨镜</p>
                                <p class="version">BV1003</p>
                                <p class="price">￥<span>199</span></p>
                            </li>
                            <li class="list" @click="to_goodsInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product@2x.png" alt="">
                                </div>
                                <p class="l_name">蔡司镜片奢华墨镜</p>
                                <p class="version">BV1003</p>
                                <p class="price">￥<span>199</span></p>
                            </li>
                        </ul>
                        <ul class="raise">
                            <li class="list1" @click="to_raiseInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <p class="name">蔡镜片奢华墨镜</p>
                                <p class="cate">BV1003</p>
                                <p class="price">￥ <span>199</span></p>
                                <div class="percent">
                                    <div class="p_box">
                                        <div class="percent_box">
                                            <div class="percent_box1"></div>
                                        </div>
                                        <div class="num"><span>78</span>%</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list1" @click="to_raiseInfo">
                                <div class="img_box">
                                    <img src="../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <p class="name">蔡镜片奢华墨镜</p>
                                <p class="cate">BV1003</p>
                                <p class="price">￥ <span>199</span></p>
                                <div class="percent">
                                    <div class="p_box">
                                        <div class="percent_box">
                                            <div class="percent_box1"></div>
                                        </div>
                                        <div class="num"><span>78</span>%</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="shop_introduce">
                    <p class="text">
                        12月14日消息 苹果今日宣布向芯片制造商Finisar投资3.9亿美元。这是苹果“美国先进制造基金”(US Advanced Manufacturing Fund)的第二笔投资。 Finisar将利用这笔资金把位于德克萨斯州谢尔曼的一个70万平方英尺的厂房改造成一个VCSEL（垂直腔表面发射激光）芯片研发基地，同时增加500多个工作岗位，包括工程师、技术人员和维修团队等，计划明年下半年开放。<br/>
                        VCSEL芯片可实现深度感知和接近感应，用于支持Face ID、Animoji和ARKit等苹果新功能。目前，每台iPhone X配有3块VCSEL芯片。苹果无线耳机AirPods也配置了VCSEL芯片，但并非Finstar生产。
                    </p>
                </li>
            </ul>

        </div>

    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name: "store",
        components: {
            My_header
        },
        data(){
            return {
                shop_info: [
                    {name: "首页", isShow: true},
                    {name: "全部商品", isShow: false},
                    {name: "店铺介绍", isShow: false}
                ],
                isShow: true,
            }
        },
        methods: {
            choose(index){
                var lis = document.querySelectorAll(".choose li");
                var items = document.querySelectorAll(".main>li");
                for (let i = 0; i < lis.length; i++) {
                    lis[i].classList.remove("active");
                    items[i].style.display = "none";
                }
                lis[index].classList.add("active");
                items[index].style.display = "block";
            },
            to_goodsInfo(){
                router.push({name: 'goods_info'})
            },
            to_raiseInfo(){
                router.push({name: "raise_info"})
            },
            store_info(){
                this.$fetch.store(this.$route.query.id).then(res => {
                    if(res.data.status==="200"){
                        alert(1)
                    }
                    //console.log(JSON.stringify((res)))
                })
            },
        },
        mounted(){
            this.store_info();
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./sotre.scss"
</style>