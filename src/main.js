import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router  from './router/index.js'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
