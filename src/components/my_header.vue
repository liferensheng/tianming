<template>
    <div>
        <header>
            <div class="container">
                <div class="back" @click="back">
                    <span class="iconfont">&#xe662;</span><p>返回</p>
                </div>
                <div class="middle">{{title}}</div>
            </div>
        </header>
    </div>
</template>
<script>
    import router from "../router/index"
    export default{
        name:'My_header',
        props:["title","page"],
        methods:{
            back(){
                this.$router.go(-1)

            },
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "my_header"
</style>