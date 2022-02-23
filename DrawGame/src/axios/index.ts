import axios from 'axios';
// create an axios instance
const service = axios.create({
    baseURL: '',
    timeout: 30000, // 设为30秒
})
// request interceptor
service.interceptors.request.use(
    config => {
        // 如果是上传文件，则设置头部
        const time = new Date().getTime();
        if (config.method == 'post') {
            config.data = {
                ...config.data,
                _t: time
            }
        } else if (config.method == 'get') {
            config.params = {
                _t: time,
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
            console.log(res.statusText);
        }
    },
    error => {
        console.log('请求错误... : ', error) // for debug
        try {
            if (error.message.indexOf('timeout') >= 0) {
                error = '网络连接超时'
            }
        } catch (err) {
            console.log('不是连接超时类型...');
        }
        return {
            result: 0,
            data: []
        }
    }
)

export default service