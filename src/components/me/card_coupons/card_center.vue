<template>
    <div class="background">
        <My_header title="卡片中心"></My_header>
        <ul class="card">
            <li class="card_list" v-for="(value,index) in card_info" >
                <div class="title">{{value.coupon_title}}</div>
                <div class="card_bottom">
                    <div class="price_pic">
                        <img src="../../../assets/img/q.png" alt="">
                    </div>
                    <span class="price">{{value.coupon_face}}</span>
                    <div class="rule">单笔订单满{{value.coupon_condition}}使用</div>
                </div>
                <div class="receive" @click="receive(index)">领取</div>
            </li>
        </ul>
    </div>
</template>
<script>
    import My_header from "../../my_header.vue"
    export default{
        name:"card_center",
        components:{
            My_header
        },
        data(){
            return{
               card_info:""
            }
        },
        methods:{
            //获取卡券中心
            get_card(){
                this.$fetch.coupon_center("").then(res=>{
                    if(res.data.status==="200"){
                       this.card_info=res.data.data;

                    }
                })
            },
            receive(index){
                this.$fetch.coupon_order(index).then(res=>{
                    if(res.data.status==="200"){
                        MessageBox.alert('领取成功').then(action => {});
                    }else if(res.data.status==="404"){
                        MessageBox.alert('res.data.msg').then(action => {});
                    }
                })
            }
        },
        mounted(){
            this.get_card()
        }
    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "card_center.scss"
</style>