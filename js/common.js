// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

axios.defaults.baseURL = 'http://ajax-api.itheima.net';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //设置请求头,并且携带token通行证
    config.headers.Authorization=localStorage.getItem("token")
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
  // console.dir(error);
    // if(error.response.status===401){
    //   localStorage.clear()
    //   location.href="./login.html"
    // }
    return Promise.reject(error);
  });