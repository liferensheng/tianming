<template>
    <div class="raise">
            <My_header title="众筹"></My_header>
            <div class="nav">
                <div>
                    <div class="all" @click="get_crowd_list()">
                        全部
                    </div>
                </div>
                <div class="nav_right">
                    <ul class="zhong">
                        <li class="item" v-for="list in cate" @click="get_crowd_list(list.id)">{{list.name}}</li>
                    </ul>
                </div>
            </div>
            <ul class="change">
                <li>最新 <span class="iconfont">&#xe621;</span></li>
                <li>价格 <span class="iconfont">&#xe621;</span></li>
                <li>支持最多 <span class="iconfont">&#xe621;</span></li>
            </ul>
            <div class="goods">
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
            <Foot></Foot>
        </div>
</template>
<script>
    import router from "../../router"
    import Foot from "../foot.vue"
    import My_header from "../my_header.vue"
    export default{
        name:'Raise',
        components:{
            Foot,
            My_header
        },
        data(){
            return{
                cate:"",
                crowd_list:""
            }
        },
        methods:{
            to_raise_info(){
                router.push({name:"raise_info"})
            },
            //获取众筹商品列表
            get_crowd_list(id){
                if(!id){
                    this.$fetch.crowd_list("", "", "", "", "", "").then(res => {
                        if (res.data.status === "200") {
                            this.crowd_list = res.data.data.data;
                            this.cate=res.data.data.classify;
                            this.crowd_list.map(vl=>{
                                vl.percentage=parseFloat(vl.sales/vl.nub).toFixed(2)*100;
                                return vl
                            })
                        }
                    })
                }else{
                    alert(id)
                    this.$fetch.crowd_list("", "", id, "", "", "").then(res => {
                        if (res.data.status === "200") {
                            this.crowd_list = res.data.data.data;
                            this.cate=res.data.data.classify;
                            this.crowd_list.map(vl=>{
                                vl.percentage=parseFloat(vl.sales/vl.nub).toFixed(2)*100;
                                return vl
                            })
                        }
                    })
                }
            },
        },
        mounted(){
            this.get_crowd_list();
        }
    }

</script>
<style type="text/css" scoped="" lang="sass">
    @import "./raise.scss"
</style>