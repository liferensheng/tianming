<template>
    <div class="background">
        <My_header title="确认订单"></My_header>
        <div class="shopping">
            <div class="items_top">
                <i class="iconfont " id="address">&#xe611;</i>
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
                <i class="iconfont" id="go" @click="address">&#xe643;</i>
            </div>
            <div class="content">
                <ul class="container1">
                    <li class="item" v-for="value in datas">
                        <div class="classification">
                            <input type="checkbox"
                                   :id="value.listTitle"
                                   value=""
                                   :checked="isTitleChecked(value)"
                                   @change="changeTitleChecked(value,$event)"
                            />
                            <p>{{value.listTitle}}</p>
                            <i class="iconfont" id="">&#xe643;</i>
                        </div>
                        <ul class="goods">
                            <li class="list" v-for="(item,i) in value.listItem">
                                <div class="g_left">
                                    <input type="checkbox"
                                           :value="item"
                                           v-model="value.selected"
                                    >
                                </div>
                                <div class="g_imgBox">
                                    <img src="../../assets/img/image_product2@2x.png" alt="">
                                </div>
                                <div class="g_right">
                                    <div class="g_top">
                                        <p>{{item.obj_name}}</p>
                                        <span class="iconfont" @click="del(i)">&#xe664;</span>
                                    </div>
                                    <div class="g_middle">
                                        <p>{{item.obj_color}}</p>
                                        <p>{{item.obj_modle}}</p>
                                    </div>
                                    <div class="g_bottom">
                                        <div class="price">
                                            ￥ <span>{{item.obj_price}}</span>
                                        </div>
                                        <div class="numBox">
                                            <div id="minus"
                                                 v-on:click.prevent="item.obj_num=item.obj_num-1"
                                            >-</div>
                                            <span id="num"
                                                  contenteditable="true"
                                                  v-model="item.obj_num"
                                            >{{item.obj_num>=0?item.obj_num:0}}</span>
                                            <div id="add"
                                                 v-on:click.prevent="item.obj_num=item.obj_num+1"
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="money">
                            <div class="freight">
                                <div class="title">
                                    运费
                                </div>
                                <div class="express">
                                    快递 <span>￥20.00</span>
                                </div>
                            </div>
                            <div class="total">
                                小计: <span>￥{{total}}</span>
                            </div>
                        </div>
                        <div class="card" @click="card">
                            <div class="card_title">
                                优惠券
                            </div>
                            <div class="rule">
                                满 <span class="num1">500</span>减 <span class="num2">100</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="all">
            <div class="all_left">
                (不含货到付款)
            </div>
            <div class="all_right">
                <div class="total">
                    总计 :<span>￥299</span>
                </div>
                <div class="goPay" @click="go_pay">结算</div>
            </div>
        </div>
        <mt-popup
                v-model="popupVisible"
                position="bottom"
                class="choose_card">
            <div class="main">
                <div class="to_buy_top">
                    <div class="title">
                        选择优惠券
                    </div>
                    <div class="close" @click="closed">
                        <i class="iconfont">&#xe620;</i>
                    </div>
                </div>
                <ul class="cardBox">
                    <li class="card_list">
                        <div class="title">设计师联盟满减优惠券</div>
                        <div class="card_bottom">
                            <div class="price_pic">
                                <img src="../../assets/img/q.png" alt="">
                            </div>
                            <span class="price">20</span>
                            <div class="rule">单笔订单满200使用</div>
                        </div>
                        <div class="receive">
                            <input type="radio" name="card">
                        </div>
                    </li>
                    <li class="card_list">
                        <div class="title">设计师联盟满减优惠券</div>
                        <div class="card_bottom">
                            <div class="price_pic">
                                <img src="../../assets/img/q.png" alt="">
                            </div>
                            <span class="price">20</span>
                            <div class="rule">单笔订单满200使用</div>
                        </div>
                        <div class="receive">
                            <input type="radio" name="card">
                        </div>
                    </li>
                    <li class="no_use">
                        <div class="left">不使用优惠券</div>
                        <input  type="radio">
                    </li>
                </ul>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    import '../../js/jquery-3.1.1.min'
    export default{
        name :"sure_cart",
        components:{
            My_header
        },
        data(){
            return{
                popupVisible:false,
                datas:[
                    {
//用于判断是否展示子列表
// isShowListItem : false,
//用于记录选中了哪些子项
                        id: 666,
                        selected : [],
//父标题
                        listTitle : "USE美国",
//子列表
                        listItem : [
                            {
                                id : 1,
                                obj_name:"时尚潮流太阳镜-男款",
                                obj_color:"黑色",
                                obj_modle : "2017款",
                                obj_price:666,
                                obj_num:10,
                                obj_state:1,
                            },
                        ]
                    },
                ]
            }
        },
        methods:{
            /**
             * 当父标题状态变化时的处理方法
             * @param value [当前项的data]
             * @param event [当前项的event]
             */
            changeTitleChecked(value,event){
                if(event.target.checked===true){
                    value.listItem.forEach(function (item) {
                        value.selected.indexOf(item)===-1 && value.selected.push(item)
                    })
                }else{
                    value.selected =[]
                }
            },
            /**
             * 判断父标题选择状态
             * @param value [当前项的data]
             * @returns {boolean}
             */
            isTitleChecked(value){
                var _selected= value.selected;
                var _listItem= value.listItem;
                // 验证selected中是否含有全部的item的id 如果是 证明title要选中
                return _listItem.every(function (item) {
                    return _selected.indexOf(item) !=-1;
                })
            },
            /**
             * 全选框change事件的回调处理方法
             * @param event
             */
            changeAllChecked(event){
                if(event.target.checked===true){
                    this.datas.forEach(function (value) {
                        value.listItem.forEach(function (item) {
                            value.selected.indexOf(item)===-1 && value.selected.push(item)
                        })
                    })
                }else{
                    this.datas.forEach(function (value) {
                        value.selected=[]
                    })
                }
            },
            /*判断全选框的状态*/
            isAllChecked(){
                return this.datas.every(function (value) {
                    return value.selected.length===value.listItem.length;
                })
            },
            del(id){
                this.datas[0].listItem.splice(id,1)
            },
            address(){
                this.$router.push({path:"/me/address/management"})
            },
            go_pay(){
                this.$router.push({path:"/me/pay"})
            },
            card(){
                this.popupVisible=true
            },
            closed(){
                this.popupVisible=false
            }

        },
        computed:{
            total:function () {
                let t=0;
                this.datas.forEach(v=>{
                    v.selected.forEach(r=>{
                        if(r.obj_num<0){
                            r.obj_num=0;
                            t+=r.obj_num*r.obj_price
                        }else{
                            t+=r.obj_num*r.obj_price
                        }
                    })
                });
                return t
            },

        },
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./sure_again.scss"
</style>