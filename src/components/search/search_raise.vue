<template>
    <div>
        <My_header title="搜索结果"></My_header>
        <ul class="change">
            <li>最新 <span class="iconfont" @click="get_crowd">&#xe621;</span></li>
            <li>价格 <span class="iconfont" @click="price_sort(isShow)">&#xe621;</span></li>
            <li>销量 <span class="iconfont" @click="sale_sort(isShow)">&#xe621;</span></li>
        </ul>
        <div class="goods">
            <ul class="goods_box">
                <li class="list" @click="to_raise_info(goodId)" v-for="(items,storeId) in crowd_list">
                    <div class="img_box">
                        <img :src="items.thumbnail" alt="">
                    </div>
                    <p class="name">{{items.title}}</p>

                    <p class="price">￥ <span>{{items.money}}</span></p>
                    <div class="percent" style="padding:0 0.46rem" >
                        <mt-progress :value="items.percentage">
                            <div slot="end" class="percentage" style="font-size: 12px;color:#795C43;margin-left: 0.1rem;">{{items.percentage}}%</div>
                        </mt-progress>
                        <!--<div class="p_box">-->
                        <!--<mt-progress :value="50" :bar-height="5"></mt-progress>-->
                        <!--&lt;!&ndash;<div class="percent_box">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="percent_box1" style="width:60%"></div>&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="num"><span>{{items.percentage}}</span>%</div>&ndash;&gt;-->
                        <!--</div>-->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name:"search_raise",
        components:{
            My_header,
        },
        data(){
            return {
                isShow:true,
                crowd_list: ""
            }
        },
        methods:{
            to_goodsInfo(){
                router.push({name:'goods_info'})
            },
            //最新
            get_crowd(){
                this.$fetch.crowd_list("","","","","","").then(res=>{
                    if(res.data.status==="200"){
                        this.crowd_list = res.data.data.data;
                        this.crowd_list.map(vl=>{
                            vl.percentage=parseFloat(vl.sales/vl.nub).toFixed(2)*100;
                            return vl
                        })
                    }
                })
            },
            //价格排序
            price_sort(isShow){
                let index="";
                if(isShow===true){
                    index="desc";
                    this.isShow=false
                }else{
                    index="asc";
                    this.isShow=true
                }
                this.$fetch.crowd_list("","","","","price",index).then(res=>{
                    if(res.data.status==="200"){
                        this.crowd_list = res.data.data.data;
                        this.crowd_list.map(vl=>{
                            vl.percentage=parseFloat(vl.sales/vl.nub).toFixed(2)*100;
                            return vl
                        })
                    }
                })
            },
            //销售量排序
            sale_sort(isShow){
                let index="";
                if(isShow===true){
                    index="desc";
                    this.isShow=false
                }else{
                    index="asc";
                    this.isShow=true
                }
                this.$fetch.crowd_list("","","","","sales",index).then(res=>{
                    if(res.data.status==="200"){
                        this.crowd_list = res.data.data.data;
                        this.crowd_list.map(vl=>{
                            vl.percentage=parseFloat(vl.sales/vl.nub).toFixed(2)*100;
                            return vl
                        })
                    }
                })
            }
        },
        mounted(){
            this.get_crowd()
        }
    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "./search_raise.scss"
</style>