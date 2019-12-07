import Vue from 'vue'
import Axios from 'axios'
import store from '../store/index'
import { Message } from 'element-ui' // 全局消息提示
// 引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

NProgress.configure({ showSpinner: true })
// 简单配置
// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const request = Axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 12000, //2分钟
    'Content-Type': 'application/json',
    'Accept': 'application/json'
})
// 请求拦截器
request.interceptors.request.use(
    config => {
        config.headers['token'] = store.state.token
        NProgress.start()
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截器
request.interceptors.response.use(
     request => {
         // 提示是否请求成功
        console.log(request.data)
        
        NProgress.done()
        return request
    },
    error => {
        console.log(error)
        Message.error({
            message: error.message
        })
        NProgress.done()
        return Promise.reject(error)
    }
)

// 文件处理请求头
export default request
// Vue.prototype.$https = Axios