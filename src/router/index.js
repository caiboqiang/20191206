/* eslint-disable 路由*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '../views/login/Login.vue'
import Home from '../views/home/home.vue'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(VueRouter)
// 路由规则
const routes = [
  // 重定向
  { path: '/', redirect: '/login' },
  //
  { path: '/login', component: Login },
  { path: '/home' , component: Home}
]

const router = new VueRouter({
  routes
})
// 添加路由全局导航首位 测试
router.beforeEach((to,from,next) => {
  // to 要访问的路径
  // from 代表从哪个路径跳转过来的
  // next 是一个函数，表示放行
  // next()放行  next('/login') 强制跳转的路径
  
  // 加载动画
  NProgress.start()

  // 检查访问的是不是开放的 路由
  if(to === '/login') return
  // 做token验证
  next()
})
router.afterEach((to,from) =>{
  NProgress.done()
})
export default router
