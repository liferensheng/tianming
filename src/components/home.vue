<template>
    <div class="background1">
        <header>设计联盟</header>
        <div class="main">
            <!--banner-->
            <div class="banner">
                <el-carousel indicator-position="" height="4.4rem">
                    <el-carousel-item>
                        <img src="../assets/img/image_banner.png" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../assets/img/image_banner.png" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../assets/img/image_banner.png" alt="">
                    </el-carousel-item>
                </el-carousel>
                <div class="search" @click="search">
                    <i class="iconfont">&#xe753;</i>
                </div>
            </div>
            <!--信息-->
            <div class="message">
                <div class="news" @click="to_news_list">
                    <div class="message_left">信息</div>
                    <ul class="message_right">
                        <li class="message_item">
                            设计师联盟平台今日正式上线！同时会有大量的的
                        </li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="notice">
                    <div class="message_left">公告</div>
                    <ul class="message_right">
                        <li class="message_item">
                            2月大奖征集活动正式于1月1日开启，精彩活动…
                        </li>
                    </ul>
                </div>
            </div>
            <!--优惠券-->
            <div class="coupon">
                <div class="coupon_left">
                    <div class="coupon_item">
                        <img src="../assets/img/8zhe.png" alt="">
                    </div>
                    <div class="coupon_item">
                        <img src="../assets/img/8zhe.png" alt="">
                    </div>
                </div>
                <div class="checkAll" @click="go_card_center">
                    <img src="../assets/img/lookall.png" alt="">
                </div>
            </div>
            <!--眼镜分类-->
            <div class="glasses_cate">
                <div class="title">
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                    <p class="name">眼镜分类</p>
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                </div>
                <ul class="cate">
                    <li class="cate_box">
                        <img src="../assets/img/image_zhuanti1.png" alt="">
                    </li>
                    <li class="cate_box">
                        <img src="../assets/img/image_zhuanti1 copy 4.png" alt="">
                    </li>
                    <li class="cate_box">
                        <img src="../assets/img/image_zhuanti1 copy 3.png" alt="">
                    </li>
                    <li class="cate_box">
                        <img src="../assets/img/image_zhuanti1 copy 2.png" alt="">
                    </li>
                </ul>
            </div>
            <!--视频专区-->
            <div class="video">
                <div class="title">
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                    <p class="name">视频专区</p>
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                </div>
                <div class="video_box">
                    <el-carousel indicator-position="" height="4rem">
                        <el-carousel-item>
                            <img src="../assets/img/image_banner.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/img/image_banner.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/img/image_banner.png" alt="">
                        </el-carousel-item>
                    </el-carousel>

                </div>
                <ul class="video_name">
                    <li class="list">
                        颜值即正义-新品发布会视频
                    </li>
                </ul>
            </div>
            <!--如何配眼镜-->
            <div class="picBox">
                <img src="../assets/img/image_guanggao1.png" alt="">
            </div>
            <!--精品专区-->
            <div class="boutique">
                <div class="title">
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                    <p class="name">精品专区</p>
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                </div>
                <div class="boutique_pic">
                    <img src="../assets/img/Bitmap.png" alt="">
                </div>
                <ul class="row">
                    <li class="list" @click="to_goodsInfo(items.id)" v-for="(items,storeId) in commodity_info">
                        <div class="imgbox">
                            <img :src="items.thumbnail" alt="">
                        </div>
                        <p class="l_name">{{items.title}}</p>
                        <p class="version">BV1003</p>
                        <p class="price">￥<span>{{items.money}}</span></p>
                    </li>
                </ul>
            </div>
            <!--众筹专区-->
            <div class="raise">
                <div class="title">
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                    <p class="name">众筹专区</p>
                    <div class="imgBox">
                        <img src="../assets/img/dian.png" alt="">
                    </div>
                </div>
                <div class="boutique_pic">
                    <img src="../assets/img/Bitmap2.png" alt="">
                </div>
                <ul class="goods_box">
                    <li class="list" @click="to_raise_info(raiseId)" v-for="(items,raiseId) in crowd_list">
                        <div class="img_box">
                            <img :src="items.thumbnail" alt="">
                        </div>
                        <p class="name">{{items.title}}</p>

                        <p class="price">￥ <span>{{items.money}}</span></p>
                        <div class="percent" style="padding:0 0.46rem" >
                            <mt-progress :value="items.percentage">
                                <div slot="end" class="percentage" style="font-size: 12px;color:#795C43;margin-left: 0.1rem;">{{items.percentage}}%</div>
                            </mt-progress>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <Foot></Foot>
    </div>
</template>
<script>
    import router from "../router"
    import Foot from "./foot.vue"
    export default{
        name: "Home",
        data(){
            return {
                commodity_info: "",
                crowd_list: ""
            }
        },
        components: {
            Foot,
        },
        methods: {
            search(){
                this.$router.push({path: "/Search"});
            },
            to_news_list(){
                this.$router.push({path: "/news_list"})
            },
            to_goodsInfo(goodId){
                this.$router.push({path: "/store/goods_info", query: {id: goodId}})
            },
            to_raise_info(raiseId){
                this.$router.push({path: "/raise/goodsInfo", query: {id: raiseId}})
            },
            //获取普通商品列表
            get_commodity_list(){
                this.$fetch.commodity("", "", "", "", "", "", "").then(res => {
                    if (res.data.status === '200') {
                        this.commodity_info = res.data.data.data;
                    }
                })
            },
            //获取众筹商品列表
            get_crowd_list(){
                this.$fetch.crowd_list("", "", "", "", "", "").then(res => {
                    if (res.data.status === "200") {
                        this.crowd_list = res.data.data.data;
                        this.crowd_list.map(vl=>{
                            vl.percentage=parseFloat(vl.sales/vl.nub).toFixed(2)*100;
                            return vl
                        })
                    }
                })
            },
            go_card_center(){
                this.$router.push({path: "/card_center"})
            },

        },
        mounted(){
            this.get_commodity_list();
            this.get_crowd_list()
        }
    }
</script>
<style type="text/css" lang="sass" >
    @import "./home.scss"
</style>