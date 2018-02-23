<template>
    <div>
        <My_header title="搜索结果"></My_header>
        <ul class="change">
            <li>最新 <span class="iconfont" @click="get_commodity_list">&#xe621;</span></li>
            <li>价格 <span class="iconfont" @click="price_sort(isShow)">&#xe621;</span></li>
            <li>销量 <span class="iconfont" @click="sale_sort(isShow)">&#xe621;</span></li>
        </ul>
        <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
            <v-loadmore :top-method="loadTop"
                        :bottom-method="loadBottom"
                        :bottom-all-loaded="allLoaded"
                        :auto-fill="false"
                        @top-status-change="handleTopChange"
                        ref="loadmore">
                <ul class="item_box">
                    <li class="list" @click="to_goodsInfo(storeId)" v-for="(items,storeId) in commodity_info">
                        <div class="imgbox">
                            <img :src="items.thumbnail" alt="">
                        </div>
                        <p class="l_name">{{items.title}}</p>
                        <p class="price">￥<span>{{items.money}}</span></p>
                    </li>
                </ul>
            </v-loadmore>
        </div>
    </div>
</template>
<script>
    import router from "../../router"
    import My_header from "../my_header.vue"
    import {Loadmore} from 'mint-ui';
    export default{
        name:"search_common",
        components:{
            My_header,
            'v-loadmore':Loadmore  // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
            // 推荐应用组件时用a-b形式起名
        },
        data(){
            return{
                isShow:true,
                commodity_info: "",
                searchCondition:{  //分页属性
                    page:"1",  //页码
                    limit:"4"  //每页的获取数量
                },
                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
                maxDistance:"20",
                startY: 0,
            }
        },
        methods:{
            to_goodsInfo(storeId){
                this.$router.push({path: "/store/goods_info", query: {id: storeId}})
            },
            //获取普通商品列表
            get_commodity_list(){
                this.$fetch.commodity("", this.searchCondition.limit, this.searchCondition.page, "", "", "", "").then(res => {

                    if (res.data.status === '200') {
                        this.commodity_info = res.data.data.data;
                    }
                    this.$nextTick(function () {
//                        // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
//                        // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
//                        // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
                        this.scrollMode = "touch";
                    });
                })
            },
            //价格排序
            price_sort(isShow){
                let index="";
                if(isShow===true){
                    index="desc";
                    this.isShow=false
                }else{
                    index="asc";
                    this.isShow=true
                }
                this.$fetch.commodity("","","","","price",index).then(res=>{
                    if(res.data.status==="200"){
                        this.commodity_info = res.data.data.data;
                    }
                })
            },
            //销售量排序
            sale_sort(isShow){
                let index="";
                if(isShow===true){
                    index="desc";
                    this.isShow=false
                }else{
                    index="asc";
                    this.isShow=true
                }
                this.$fetch.commodity("","","","","sales",index).then(res=>{
                    if(res.data.status==="200"){
                        this.commodity_info = res.data.data.data;
                    }
                })
            },
            loadTop:function() { //组件提供的下拉触发方法
                //下拉加载
                this.get_commodity_list();
                this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
            },
            loadBottom:function() {
                // 上拉加载
                this.more();// 上拉触发的分页查询
                this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
            },
            more:function (){
                // 分页查询
                this.searchCondition.page = parseInt(this.searchCondition.page) + 1;
                this.$fetch.commodity("", this.searchCondition.limit, this.searchCondition.page, "", "", "", "").then(res=>{
                    this.commodity_info = this.commodity_info.concat(res.data.data.data);
                });
            },
            handleTopChange: function (status) {
                this.topStatus = status;
                console.log(status)
            },
            handleScroll () {
                if (typeof this.topMethod === 'function' && this.direction === 'down' &&
                    this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
                    event.preventDefault();
                    event.stopPropagation();
                    //计算translate(将要平移的距离), 如果当前移动的距离大于设置的最大距离,那么此次这次移动就不起作用了
                    if (this.maxDistance > 0) {
                        this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
                    } else {
                        this.translate = distance - this.startScrollTop;
                    }
                    if (this.translate < 0) {
                        this.translate = 0;
                    }
                }
            },
        },
        mounted(){
            this.get_commodity_list();
            this.handleScroll()
        },
    }
</script>
<style>
    .mint-loadmore-top {
        margin-top: -0.13rem;
    }
    .mint-loadmore-text{
        font-size: 0.28rem;
    }
</style>
<style type="text/css" scoped="" lang="sass">
    @import "./search_common.scss"
</style>