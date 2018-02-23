<template>
    <div class="background">
        <My_header title="活动"></My_header>
        <div class="content">
            <div class="imgBox">
                <img src="../assets/img/Bitmap1.png" alt="">
            </div>
            <div class="main">
                <ul class="common">
                    <li class="list" @click="to_goodsInfo">
                        <div class="img_box">
                            <img src="../assets/img/image_product.png" alt="">
                        </div>
                        <div class="l_name">蔡司镜片奢华墨镜 <span>BV1003</span></div>
                        <div class="price">￥<span>199</span></div>
                    </li>
                </ul>
                <ul class="raise">
                    <li class="list1" @click="to_raiseInfo">
                        <div class="img_box">
                            <img src="../assets/img/image_product1.png" alt="">
                        </div>
                        <div class="info">
                            <div class="name">蔡镜片奢华墨镜</div>
                            <div class="cate">BV1003</div>
                            <div class="price">￥ <span>199</span></div>
                        </div>
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
        </div>
    </div>
</template>
<script>
    import router from "../router"
    import My_header from "./my_header.vue"
    export default{
        name:"activity",
        components:{
            My_header
        },
        methods:{
            to_goodsInfo(){
                router.push({name:'goods_info'})
            },
            to_raiseInfo(){
                router.push({name:"raise_info"})
            }
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "activity"
</style>