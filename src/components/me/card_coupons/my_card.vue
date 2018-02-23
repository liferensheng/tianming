<template>
    <div class="background">
        <My_header title="我的卡券"></My_header>
        <ul class="card">
            <li class="card_list" v-for="(value,index) in my_card">
                <div class="title">{{value.coupon_title}}</div>
                <div class="card_bottom">
                    <div class="price_pic">
                        <img src="../../../assets/img/q.png" alt="">
                    </div>
                    <span class="price">{{value.coupon_face}}</span>

                </div>
                <div class="rule">单笔订单满{{value.coupon_condition}}使用</div>
            </li>
        </ul>
    </div>
</template>
<script>
    import My_header from "../../my_header.vue"
    export default{
        name:"card_coupons",
        components:{
            My_header
        },
        data(){
            return{
                my_card:""
            }
        },
        methods:{
            get_card(){
                this.$fetch.coupon_list().then(res=>{
                    if(res.data.status==="200"){
                        this.my_card=res.data.data
                        console.log(this.my_card);

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
    @import "my_card"
</style>
