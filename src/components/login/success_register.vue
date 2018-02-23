<template>
    <div>
        <My_header title="注册成功"></My_header>
        <div class="content">
            <div class="img_box">
                <img src="../../assets/img/image_chenggog.png" alt="">
            </div>

            <h3 class="register">注册成功!</h3>
            <p class="text">平台会在3个工作日内完成审核，<br/>请耐心等待</p>

        </div>
        <div class="foot" @click="ok">好的</div>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name:'Success_register',
        components:{
            My_header,
        },
        methods:{
            ok(){
                router.push({name:'Home'})
            },
            back(){
                router.push({name:'Register'})
            }
        }
    }
</script>
<style scoped type="text/css" lang="sass">
    @import "success_register.scss"
</style>