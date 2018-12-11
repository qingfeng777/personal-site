// 根据config中mock设置开发API
// const dev = window.CONFIG.mock
// let api = window.CONFIG.api
// if (dev) { api = window.CONFIG.mockApi }
//import config from '../../app-config'
import config from '../config'

export const api = {
  paas: "http://localhost:7878/ming"
} //config.api //window.CONFIG.mock ? window.CONFIG.mockApi : window.CONFIG.api

import axios from 'axios'
// axios.defaults.baseURL = config.loginApi
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// 公用请求方法
// -- url：请求地址
// --method：请求方式 如：post、get等
// --params：url参数
// --data：发送数据对象
export function fetch(url, method, data, params) {
  return new Promise((resolve, reject) => {
    axios({
        method: method || 'get',
        url: url,
        params: params || {},
        data: data || {},
        // responseType: 'json',
        headers: {
          // 序列化后的 JSON 字符串
          'Content-Type': 'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true,
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          ret = JSON.stringify(data)
          // for (const it in data) {
          //   ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          // }
          return ret
        }]
      })
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        if (error.response.data.code === 401) {
          window.location.href = '/auth'
        } else {
          reject(error)
        }
        console.log(error)
      })
  })
}
