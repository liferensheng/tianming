<template>
    <div class="background">
        <My_header title="退换售后"></My_header>
        <div class="contain">
            <ul class="will">
                <li class="list">
                    <div class="pay">我要换货</div>
                    <input type="radio" name="gender">
                </li>
                <li class="list">
                    <div class="pay">我要退货</div>
                    <input type="radio" name="gender">
                </li>
            </ul>
            <div  class="suggestion">
                <textarea rows="4" placeholder="请输入您的申请理由" v-model="suggestion"></textarea>
                <span class="left-word">200</span>
            </div>
        </div>
        <div class="button" @click="to_me">确定</div>
    </div>
</template>
<script>
    import router from "../../../router/index"
    import My_header from "../../my_header.vue"
    export default{
        name:"after_sale",
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
    @import "after_sale"
</style>