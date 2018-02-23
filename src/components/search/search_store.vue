<template>
    <div>
        <My_header title="搜索结果"></My_header>
        <div class="store_list">
            <ul class="store">
                <li class="item" v-for="items in store_list">
                    <div class="store">
                        <div class="store_logo">
                            <img :src="items.logo" alt="">
                        </div>
                        <div class="store_info">
                            <div class="one">
                                <h5 class="store_name">{{items.shop_name}}</h5>
                                <p class="address">{{items.region_name}}</p>
                            </div>
                            <div class="two">
                                <div class="object">共 <span>{{items.commodity_nub}}</span>件宝贝</div>
                                <div class="sale">销量<span>{{items.sales}}</span>件</div>
                            </div>
                        </div>
                    </div>
                    <ul class="store_goods" >
                        <li class="img_box" v-for="v in items.commodity_list">
                            <img :src="v.thumbnail" alt="">
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name:"search_store",
        components:{
            My_header,
        },
        data(){
            return{
                store_list:""
            }
        },
        methods:{
            to_goodsInfo(){
                router.push({name:'goods_info'})
            },
            get_store_list(){
                this.$fetch.shop_list().then(res=>{
                    if(res.data.status==="200"){
                        this.store_list=res.data.data.data
                    }
                })
            }
        },
        mounted(){
            this.get_store_list()
        }
    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "./search_store.scss"
</style>