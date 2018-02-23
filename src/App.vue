<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import "./js/rem.js";
import "./assets/css/iconfont/iconfont.css"
import "./router"
export default {
  name: 'app',
    created(){
    },
    methods: {
    }
}
</script>

<style>
   /* 通用选择器：选中的是所有的元素 */
  *{
    margin: 0;
    padding: 0; /* 某些标签存在的默认值 */
    list-style: none; /* （清除列表的样式） */
    outline: none; /* 轮廓 input里的 */
    box-sizing: border-box; /* (不用考虑盒子的大小，边框不用计算在内，它可以自动解析边框) */
    color: #333;
    font-family:"微软雅黑";
  }

  img {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  a {
    text-decoration: none;
    color: #999;
    cursor: pointer;
    display: block;
  }
  span,i{
    display: block;
  }
  html,body{
    width:100%;
    height:100%;
  }
  #app{
    width:100%;
    height:100%;
  }
</style>
