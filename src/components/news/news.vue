<template>
    <div class="background">
        <My_header title="信息详情"></My_header>
        <div class="news">
            <div class="title">
                {{content.news_title}}
            </div>
            <div class="time">
                {{content.news_time}}
            </div>
            <p class="content">
                {{content.news_content}}
            </p>
        </div>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    export default{
        name:"News",
        data(){
            return{
                content:""
            }
        },
        components:{
            My_header
        },
        methods:{
            get_news(){
                this.$fetch.notice_detail(this.$route.query.id).then(res=>{
                    if(res.data.status==="200"){
                        alert(1)
                    }
                })
            }
        },
        mounted(){
            this.get_news()
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./news.scss"
</style>