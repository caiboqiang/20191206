import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局样式
import './assets/css/gloabal.css'
// 导入请求
import Axios from 'axios'
Vue.config.productionTip = false
// 设置根路径
// export default request 这个也是一种配置跨域访问的方式
 Axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
// 挂在请求
Vue.prototype.$http = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
