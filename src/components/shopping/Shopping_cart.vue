<template>
    <div>
        <My_header title="购物车"></My_header>{{cart_list}}
        <div class="shopping">
            <div class="content">
                <ul class="container1">
                    <li class="item" v-for="value,index in cart_list">
                        <div class="classification">
                            <el-checkbox v-model="value.selected"  @change="storeCheck(index)" name="store"></el-checkbox>
                            <p>{{value.shop_name}}</p>
                            <i class="iconfont" id="go">&#xe643;</i>
                        </div>
                        <ul class="goods">
                            <li class="list" v-for="(item,i) in value.goods">
                                <div class="g_left">
                                    <el-checkbox v-model="item.selected" @change="goodsCheck(index,i)" name="goods"></el-checkbox>
                                </div>
                                <div class="g_imgBox">
                                    <img :src="item.thumbnail" alt="">
                                </div>
                                <div class="g_right">
                                    <div class="g_top">
                                        <p>{{item.title}}</p>
                                        <span class="iconfont" @click="del(item.cart_id)">&#xe664;</span>
                                    </div>
                                    <div class="g_middle">
                                        <p>{{item.sku_attr}}</p>
                                        <p></p>
                                    </div>
                                    <div class="g_bottom">
                                        <div class="price">
                                            ￥ <span>{{item.cart_price}}</span>
                                        </div>
                                        <div class="numBox">
                                            <div id="minus"
                                                 v-on:click.prevent="item.cart_nub=item.cart_nub-1"
                                                 @click="edit(item.cart_id,item.cart_nub)"
                                            >-
                                            </div>
                                            <span id="num"
                                                  contenteditable="true"
                                                  v-model="item.cart_nub"
                                            >{{item.cart_nub >= 0 ? item.cart_nub : 0}}</span>
                                            <div id="add"
                                                 v-on:click.prevent="item.cart_nub=item.cart_nub+1"
                                                 @click="edit(item.cart_id,item.cart_nub)"
                                            >+
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="fill"></div>
            </div>
        </div>

        <div id="all">
            <div class="all_left">
                <input type="checkbox"
                       id="all_checkbox"
                >
                <span>全选</span>
            </div>
            <div class="all_right">
                <div class="total">
                    总计 :<span>￥{{total}}</span>
                </div>
                <div class="goPay" @click="sure_cart">结算</div>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
    import router from "../../router"
    import Foot from "../foot.vue"
    import My_header from "../my_header.vue"
    import '../../js/jquery-3.1.1.min'
    export default{
        name: "Shopping_cart",
        components: {
            Foot,
            My_header
        },
        data(){
            return {
                cart_list: []
            }
        },
        mounted(){
            this.get_cart_list();

        },
        methods: {
            //获取购物车信息
            get_cart_list(){
                this.$fetch.cart_list().then(res => {
                    if (res.data.status === "200") {
                        this.cart_list = res.data.data.list.map(v=>{
                            v.selected=false;
                            return v
                        });
                        for(var i =0 ;i<this.cart_list.length;i++){
                            this.cart_list[i].goods.map(v=>{
                                v.selected=false;
                                return v
                            })
                        };
                    }
                })
            },
            //修改购物车数量
            edit(id, nub){
                this.$fetch.cart_edit(id, nub).then(res => {
                    if (res.data.status === "200") {
                    }
                })
            },
            //删除购物车
            del(id){
                let arr = [];
                arr.push(id);
                this.$fetch.cart_del(arr).then(res => {
                    if (res.data.status === "200") {
                        this.get_cart_list()
                    }
                })
            },
            goodsCheck(index,i){
                this.cart_list[index].goods[i].selected=!this.cart_list[index].goods[i].selected;
            },
            storeCheck(index){
                if(this.cart_list[index].selected){
                    this.cart_list[index].goods.forEach(v=>{
                        v.selected=true
                    })
                }else{
                    this.cart_list[index].goods.forEach(v=>{
                        v.selected=false
                    })
                }
                console.log(JSON.stringify(this.cart_list))
            },

            sure_cart(){
                sessionStorage.setItem("order", token);
                this.$router.push({path:"/sure_cart"})
            },
        },
        computed: {
            total: function () {
                let t = 0;
//                this.cart_list.forEach(v => {
//                    v.selected.forEach(r => {
//                        if (r.cart_nub < 0) {
//                            r.cart_nub = 0;
//                            t += r.cart_nub * r.cart_price
//                        } else {
//                            t += r.cart_nub * r.cart_price
//                        }
//                    })
//                });
                return t
            }
        },
    }
</script>
<style>
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #2e2d3c;
        border-color: #2e2d3c;
    }
    .el-checkbox__inner:hover {
        border-color: #2e2d3c;
    }
</style>
<style type="text/css" lang="sass" scoped="">
    @import "./shopping_cart.scss"
</style>