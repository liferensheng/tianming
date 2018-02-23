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
                            <i class="iconfont" id="go">&#xe643;</i>
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
                    </li>
                </ul>
                <div class="fill"></div>
            </div>
        </div>
        <div id="all">
            <div class="all_left">
                <input type="checkbox"
                       id="all_checkbox"
                       :check="isAllChecked()"
                       @change="changeAllChecked($event)"
                >
                <span>全选</span>
            </div>
            <div class="all_right">
                <div class="total">
                    总计 :<span>￥{{total}}</span>
                </div>
                <div class="goPay" @click="go_sure_again">结算</div>
            </div>
        </div>
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
                            {
                                id : 2,
                                obj_name:"时尚潮流太阳镜-女款",
                                obj_color:"红色",
                                obj_modle : "2016款",
                                obj_price:888,
                                obj_num:6,
                                obj_state:1,
                            },
                            {
                                id : 3,
                                obj_name:"时尚潮流太阳镜-男款",
                                obj_color:"黑色",
                                obj_modle : "2017款",
                                obj_price:666,
                                obj_num:3,
                                obj_state:1,
                            }
                        ]
                    },
                    {
//用于判断是否展示子列表
// isShowListItem : false,
//用于记录选中了哪些子项
                        id: 888,
                        selected : [],
//父标题
                        listTitle : "china",
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
                            {
                                id : 2,
                                obj_name:"时尚潮流太阳镜-女款",
                                obj_color:"红色",
                                obj_modle : "2016款",
                                obj_price:888,
                                obj_num:6,
                                obj_state:1,
                            },
                            {
                                id : 3,
                                obj_name:"时尚潮流太阳镜-男款",
                                obj_color:"黑色",
                                obj_modle : "2017款",
                                obj_price:666,
                                obj_num:3,
                                obj_state:1,
                            }
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
                router.push({name:"address_management"})
            },
            go_sure_again(){
                this.$router.push({path:"/cart/sure_again"})
            },

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
                })
                return t
            }
        }
    }
</script>
<style type="text/css" lang="sass" scoped="">
    @import "./sure_shopping_cart.scss"
</style>