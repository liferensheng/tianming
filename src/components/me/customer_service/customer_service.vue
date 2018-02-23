<!--<template>-->
    <!--<div class="page-loadmore">-->
            <!--<h1 class="page-title">Pull up</h1>-->
            <!--<p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>-->
            <!--<p class="page-loadmore-desc">translate : {{ translate }}</p>-->
            <!--<div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">-->
                <!--translateScale : {{ moveTranslate }}-->
            <!--</div>-->

            <!--<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">-->
                <!--<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange"       :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">-->

                    <!--<ul class="page-loadmore-list">-->
                        <!--<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>-->
                    <!--</ul>-->


                    <!--<div slot="top" class="mint-loadmore-top">-->
                        <!--<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>-->
                        <!--<span v-show="topStatus === 'loading'">-->
            <!--<mt-spinner type="snake"></mt-spinner>-->
          <!--</span>-->
                    <!--</div>-->


                    <!--<div slot="bottom" class="mint-loadmore-bottom">-->
                        <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>-->
                        <!--<span v-show="bottomStatus === 'loading'">-->
            <!--<mt-spinner type="snake"></mt-spinner>-->
          <!--</span>-->
                    <!--</div>-->
                <!--</mt-loadmore>-->




            <!--</div>-->
        <!--</div>-->
<!--</template>-->
<!--<style>-->



    <!--.loading-background, .mint-loadmore-top span {-->
        <!-- -webkit-transition: .2s linear;-->
        <!--transition: .2s linear-->
    <!--}-->
    <!--.mint-loadmore-top span {-->
        <!--display: inline-block;-->
        <!--vertical-align: middle-->
    <!--}-->

    <!--.mint-loadmore-top span.is-rotate {-->
        <!-- -webkit-transform: rotate(180deg);-->
        <!--transform: rotate(180deg)-->
    <!--}-->

    <!--.page-loadmore .mint-spinner {-->
        <!--display: inline-block;-->
        <!--vertical-align: middle-->
    <!--}-->

    <!--.page-loadmore-desc {-->
        <!--text-align: center;-->
        <!--color: #666;-->
        <!--padding-bottom: 5px-->
    <!--}-->

    <!--.page-loadmore-desc:last-of-type,-->
    <!--.page-loadmore-listitem {-->
        <!--border-bottom: 1px solid #eee-->
    <!--}-->

    <!--.page-loadmore-listitem {-->
        <!--height: 50px;-->
        <!--line-height: 50px;-->
        <!--text-align: center-->
    <!--}-->

    <!--.page-loadmore-listitem:first-child {-->
        <!--border-top: 1px solid #eee-->
    <!--}-->

    <!--.page-loadmore-wrapper {-->
        <!--overflow: scroll-->
    <!--}-->

    <!--.mint-loadmore-bottom span {-->
        <!--display: inline-block;-->
        <!-- -webkit-transition: .2s linear;-->
        <!--transition: .2s linear;-->
        <!--vertical-align: middle-->
    <!--}-->

    <!--.mint-loadmore-bottom span.is-rotate {-->
        <!-- -webkit-transform: rotate(180deg);-->
        <!--transform: rotate(180deg)-->
    <!--}-->

<!--</style>-->
<!--<script>-->
    <!--import router from "../../../router/index"-->
    <!--import My_header from "../../my_header.vue"-->
    <!--export default{-->
        <!--name: "customer_service",-->
        <!--data() {-->
            <!--return {-->
                <!--list: [],-->
                <!--allLoaded: false,-->


                <!--bottomStatus: '',-->
                <!--wrapperHeight: 0,-->



                <!--topStatus: '',-->
                <!--//wrapperHeight: 0,-->
                <!--translate: 0,-->
                <!--moveTranslate: 0-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--handleBottomChange(status) {-->
                <!--this.bottomStatus = status;-->
            <!--},-->

            <!--loadBottom() {-->
                <!--setTimeout(() => {-->
                    <!--let lastValue = this.list[this.list.length - 1];-->
                    <!--if (lastValue < 40) {-->
                        <!--for (let i = 1; i <= 10; i++) {-->
                            <!--this.list.push(lastValue + i);-->
                        <!--}-->
                    <!--} else {-->
                        <!--this.allLoaded = true;-->
                    <!--}-->
                    <!--this.$refs.loadmore.onBottomLoaded();-->
                <!--}, 1500);-->
            <!--},-->








            <!--handleTopChange(status) {-->
                <!--this.moveTranslate = 1;-->
                <!--this.topStatus = status;-->
            <!--},-->
            <!--translateChange(translate) {-->
                <!--const translateNum = +translate;-->
                <!--this.translate = translateNum.toFixed(2);-->
                <!--this.moveTranslate = (1 + translateNum / 70).toFixed(2);-->
            <!--},-->
            <!--loadTop() {-->
                <!--setTimeout(() => {-->
                    <!--let firstValue = this.list[0];-->
                    <!--for (let i = 1; i <= 10; i++) {-->
                        <!--this.list.unshift(firstValue - i);-->
                    <!--}-->
                    <!--this.$refs.loadmore.onTopLoaded();-->
                <!--}, 1500);-->
            <!--},-->

        <!--},-->




        <!--created() {-->
            <!--for (let i = 1; i <= 20; i++) {-->
                <!--this.list.push(i);-->
            <!--}-->
        <!--},-->

        <!--mounted() {-->
            <!--this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style type="text/css" lang="sass" scoped="">-->
    <!--@import "customer_service"-->
<!--</style>-->
<template>
    <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
            <ul class="list" v-for="(val, key) in pageList">
                <li>
                    <div>我是小11</div>
                    <div>我是小11</div>
                </li>
            </ul>
        </v-loadmore>
    </div>
</template>
<script>
    import {Loadmore} from 'mint-ui';
    export default {
        name: "customer_service",
        data:function() {
            return {
                searchCondition:{  //分页属性
                    pageNo:"1",  //页码
                    pageSize:"10"  //每页的获取数量
                },
                pageList:[],
                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            }
        },
        components: {
            'v-loadmore':Loadmore  // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
            // 推荐应用组件时用a-b形式起名
        },
        mounted(){
            this.loadPageList();  //初次访问查询列表
        },
        methods: {
            loadTop:function() { //组件提供的下拉触发方法
                //下拉加载
                this.loadPageList();
                this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
            },
            loadBottom:function() {
                // 上拉加载
                this.more();// 上拉触发的分页查询
                this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
            },
            loadPageList:function (){
                // 查询数据
//                this.api.PageList(this.searchCondition).then(data =>{
//                    // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
//                    this.isHaveMore(data.result.haveMore);
//                    this.pageList = data.result.pageList;
//                    this.$nextTick(function () {
//                        // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
//                        // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
//                        // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
//                        this.scrollMode = "touch";
//                    });
//                });
                this.$fetch.commodity("", 1, "", "", "", "", "").then(res => {

                    if (res.data.status === '200') {
                        this.pageList = res.data.data.data;
                    }
                    this.isHaveMore(data.result.haveMore);
                        this.$nextTick(function () {
//                        // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
//                        // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
//                        // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
                        this.scrollMode = "touch";
                    });
                })
            },
            more:function (){
                // 分页查询
                this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
                this.api.loadPageList(this.searchCondition).then(data=>{
                    this.pageList = this.pageList.concat(data.result.pageList);
                    this.isHaveMore(data.result.haveMore);
                });
            },
            isHaveMore:function(isHaveMore){
                // 是否还有下一页，如果没有就禁止上拉刷新
                this.allLoaded = true; //true是禁止上拉加载
                if(isHaveMore){
                    this.allLoaded = false;
                }
            }
        }
    }
</script>