import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
