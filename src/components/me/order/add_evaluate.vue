<template>
    <div class="background">
        <My_header title="订单评价"></My_header>
        <div class="items_top">
            <div class="goods_pic">
                <img src="../../../assets/img/image_product2@2x.png" alt="">
            </div>
            <div class="title">
                <div class="goods_name">
                    时尚潮流太阳镜男款
                </div>
                <div class="goods_store">
                    张师傅的店
                </div>
            </div>


        </div>
        <div class="contain">
            <div  class="suggestion">
                <textarea rows="4" placeholder="请输入评价" v-model="suggestion"></textarea>
                <span class="left-word">200</span>
            </div>
            <div class="line"></div>
            <ul class="upload">
                <li class="list">
                    +
                </li>
                <li class="list">
                    +
                </li>
                <li class="list">
                    +
                </li>
            </ul>
        </div>
        <div class="button" @click="to_me">发布</div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name:"add_evaluate",
        components:{
            My_header
        },
        data(){
            return{
                suggestion:'',
                selectWords:[]
            }
        },
        methods:{
            to_me(){
                router.push({name:"Me"})
            },
            selectWord (word) {
                if(this.selectWords.indexOf(word)==-1){
                    this.selectWords.push(word)
                }else{
                    this.selectWords.$remove(word)
                }
                console.log(this.selectWords);
            }
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./add_evaluate.scss"
</style>