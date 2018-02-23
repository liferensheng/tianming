<template>
    <div>
        <My_header title="我的收藏"></My_header>
        <div class="collect">
            <ul class="cate_name">
                <li class="item"
                    v-for="(item,index) in cate_name"
                    @click="choose(index)"
                    :class="{active:item.isShow}"
                >
                    {{item.name}}
                </li>
            </ul>
            <ul class="cate">
                <li class="list">
                    <ul class="goods">
                        <li class="items">
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
                            <div class="del">删除</div>
                        </li>
                    </ul>
                </li>
                <li class="list">
                    <ul class="raise">
                        <li class="items">
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
                                <div class="del">删除</div>
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
                        </li>
                    </ul>
                </li>
                <li class="list">
                    <ul class="store">
                        <li class="items1">
                            <div class="store_top">
                                <div class="store_logo">
                                    <img src="../../../assets/img/logo.png" alt="">
                                </div>
                                <div class="store_info">
                                    <div class="one">
                                        <h5 class="store_name">Channel设计铺</h5>
                                        <p class="address">杭州市</p>
                                    </div>
                                    <div class="two">
                                        <div class="object">共 <span>188</span>件宝贝</div>
                                        <div class="sale">销量<span>2998</span>件</div>
                                    </div>
                                </div>
                            </div>
                            <ul class="store_goods">
                                <li class="img_box">
                                    <img src="../../../assets/img/image_product@2x.png" alt="">
                                </li><li class="img_box">
                                <img src="../../../assets/img/image_product@2x.png" alt="">
                            </li><li class="img_box">
                                <img src="../../../assets/img/image_product@2x.png" alt="">
                            </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name:"my_collect",
        components:{
            My_header
        },
        data(){
            return{
                isShow:true,
                cate_name:[
                    {name:"商品",isShow:true},
                    {name:"众筹",isShow:false},
                    {name:"店铺",isShow:false}
                ],
            }
        },
        methods:{
            choose(index){
                var lis=document.querySelectorAll(".cate_name li");
                var items=document.querySelectorAll(".cate>li");
                for(let i=0;i<lis.length;i++){
                    lis[i].classList.remove("active");
                    items[i].style.display = "none";
                }
                lis[index].classList.add("active");
                items[index].style.display = "block";
            }
        },
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./my_collect"
</style>