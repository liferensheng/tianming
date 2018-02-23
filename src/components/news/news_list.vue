<template>
    <div class="background">
        <My_header title="信息"></My_header>
        <div class="new_box">
            <ul>
                <li class="item" v-for="(item,index) in news_list" @click="to_news(index)">
                    <div class="top">
                        <div class="title">
                            {{item.notice_title}}
                        </div>
                        <div class="time">
                            {{item.created_at}}
                        </div>
                    </div>
                    <p class="content" v-html="item.notice_content"></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name:"News_list",
        data(){
            return{
                news_list:"",
            }
        },
        components: {
            My_header
        },
        mounted () {
            this.LimitNumber()
        },
        methods:{
            LimitNumber(){
                this.news_list.forEach(function (v) {
                    v.news_content=v.news_content.substr(0,40)+"..."
                    return v.news_content
                })
            },
            to_news(index){
                this.$router.push({path:"/news_info",query:{id:index}})
            },
            get_notice_list(){
                this.$fetch.notice_list("").then(res=>{
                    if(res.data.status==="200"){
                        this.news_list=res.data.data
                    }
                })
            }
        },
        mounted(){
            this.get_notice_list()
        }

    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./news.list"
</style>