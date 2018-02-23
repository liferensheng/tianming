<template>
    <div>
        <div class="foot">
            <ul>
                <li @click="home">
                    <ul class="icon_box">
                        <li class="item">
                            <img src="../assets/img/icon_home_sel.png" alt="">
                        </li>
                        <li class="item" >
                            <img src="../assets/img/icon_home_sel1.png" alt="">
                        </li>
                    </ul>
                    <p class="index">首页</p>
                </li>
                <li @click="Raise">
                    <ul class="icon_box">
                        <li  class="item">
                            <img src="../assets/img/icon_xinpin_nor.png" alt="">
                        </li>
                        <li class="item" :class="{'on-choose':isShow}">
                            <img src="../assets/img/icon_xinpin_nor1.png" alt="">
                        </li>
                    </ul>
                    <p class="new">众筹</p>
                </li>
                <li @click="Shopping_cart">
                    <ul class="icon_box">
                        <li  class="item">
                            <img src="../assets/img/icon_gwd_nor.png" alt="">
                        </li>
                        <li class="item" :class="{'on-choose':isShow}">
                            <img src="../assets/img/icon_gwd_nor1.png" alt="">
                        </li>
                    </ul>
                    <p class="gwc">购物车</p>
                </li>
                <li @click="me">
                    <ul class="icon_box">
                        <li  class="item">
                            <img src="../assets/img/icon_me_nor.png" alt="">
                        </li>
                        <li class="item" :class="{'on-choose':isShow}">
                            <img src="../assets/img/icon_me_nor1.png" alt="">
                        </li>
                    </ul>
                    <p class="me">我的</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import router from "../router/index"
    export default{

        name:'Foot',
        data(){
            return{
                isShow:true,
                active1:""
            }
        },
        methods:{
            
            home(){
                router.push({name:'Home'});
            },
            Raise(){
                router.push({name:'Raise'});
            },
            Shopping_cart(){
                router.push({name:'shopping_cart'});
            },
            me(){
                router.push({name:'Me'});
            },
        }
    }
</script>
<style type="text/css" scoped="" lang="sass">
    @import "foot"
</style>