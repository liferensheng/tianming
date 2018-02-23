<template>
    <div class="background">
        <My_header title="搜索"></My_header>
        <form action="" class="search">
            <div class="search_left">
                <select name="cate" id="selCate" v-model="value">
                    <option value="1">商品</option>
                    <option value="2">众筹</option>
                    <option value="3">设计师</option>
                </select>
            </div>
            <div class="search_right">
                <i class="iconfont sou"
                   @click="go_to">&#xe753;</i>
                <input type="text"
                       value="太阳"
                       class="s_content"
                       v-model="keyword"
                       >
            </div>
        </form>
        <ul class="result">
            <li></li>
        </ul>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name:"Search",
        data(){
            return {
                value:"1",
                keyword:""
            }
        },
        components: {
            My_header
        },
        methods:{
            back(){
                router.push({name:"Home"})
            },
            go_to(){
                if(this.value==="1"){
                    this.$router.push({path:"/search/common",query:{keyword:this.keyword}})
                }else if(this.value==="2"){
                    this.$router.push({path:"/search/raise",query:{keyword:this.keyword}})
                }else if(this.value==="3"){
                    this.$router.push({path:"/search/store",query:{keyword:this.keyword}})
                }
            },

        },


    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./search.scss"
</style>