/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(VueRouter)
// 路由规则
const routes = [
  // 重定向
  { path: '/', redirect: '/login' },
  //
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})
// 添加路由全局导航首位 测试
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})
router.afterEach((to,from) =>{
  NProgress.done()
})
export default router
