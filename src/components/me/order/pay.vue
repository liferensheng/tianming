<template>
    <div class="background">
        <My_header title="选择付款方式"></My_header>
        <ul class="payment">
            <li class="list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href=".icon-alipay"></use>
                </svg>
                <div class="pay">支付宝支付</div>
                <input type="radio" name="gender">
            </li>
            <li class="list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href=".icon-yinlian"></use>
                </svg>
                <div class="pay">支付宝支付</div>
                <input type="radio" name="gender">
            </li>
        </ul>
        <div class="button" @click="to_me">确定</div>
    </div>
</template>

<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name: "pay",
        components: {
            My_header
        },
        methods:{
            to_me(){
                router.push({name:"Me"})
            }
        }
    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "pay"
</style>