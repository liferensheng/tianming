<template>
    <div class="sure_raise">
        <My_header title="确认订单"></My_header>
        <div class="address">
            <div class="items_top">
                <i class="iconfont " id="add">&#xe611;</i>
                <div class="user_info">
                    <div class="user_info_top">
                        <div class="user_name">
                            张三
                        </div>
                        <div class="phone">
                            12365478912
                        </div>
                    </div>
                    <div class="user_info_address">
                        浙江省杭州市萧山区白云街道白云路66号
                    </div>
                </div>
                <i class="iconfont" id="go">&#xe643;</i>
            </div>
        </div>
    </div>
</template>
<script>
    import router from "../../router/index"
    import My_header from "../my_header.vue"
    export default{
        name:"sure_raise",
        components:{
            My_header
        },
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "sure_raise"
</style>