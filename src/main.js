// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Foot from './components/foot.vue'
import My_header from './components/my_header.vue'
import ElementUI from 'element-ui'
import Fetch from "./api/fetch"
import MintUI from 'mint-ui'
import Address from "./components/me/address/address.js"
import 'mint-ui/lib/style.css'
import { Picker,Popup,Progress,Radio } from 'mint-ui';
// import './assets/css/my-mint.scss';//全局修改mint-UI样式

Vue.config.productionTip = false;
Vue.prototype.$fetch=Fetch;

Vue.use(ElementUI);
Vue.use(MintUI);
Vue.component(Picker.name, Picker,Popup.name, Popup ,Address,Progress.name, Progress,Radio.name, Radio);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App ,Foot, My_header}
});


