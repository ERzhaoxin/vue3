import axios from 'axios'
import Vue from 'vue'
// create an axios instance
const service = axios.create({
        baseURL: '',
        // baseURL: '/api',
        timeout: 30000, // 设为30秒
    })
    // request interceptor
service.interceptors.request.use(
    config => {
        // 如果是上传文件，则设置头部
        if (config.method == 'post') {
            config.data = {
                ...config.data,
                _t: Date.parse(new Date()) / 1000
            }
        } else if (config.method == 'get') {
            config.params = {
                _t: Date.parse(new Date()) / 1000,
                ...config.params
            }
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response
        if (res.status === 200) {
            // 响应拦截器
            return res.data
        } else {
            Message.error(res.statusText);
        }
    },
    error => {
        console.log('请求错误... : ', error) // for debug
        try {
            if (error.message.indexOf('timeout') >= 0) {
                error = '网络连接超时'
            }
        } catch (err) {
            console.log('不是连接超时类型...')
        }

        return Promise.reject(error)
    }
)

export default service