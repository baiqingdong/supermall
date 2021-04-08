import axios from "axios";

export function request(config) {
  // 创建axios实例
  const axiosInstance = axios.create({
    // 设置全局的Url, 为了以后填写请求地址不需要填写全部的地址
    baseURL: "https://a1.cnblogs.com/",
    // 设置请求超时时间 单位毫秒
    timeout: 5000,
  });

  // 设置axios拦截器 请求拦截器
  axiosInstance.interceptors.request.use(
    (config) => {
      //config 是传过来的axios中的config

      //这里可以处理一些请求校验

      //处理完之后必须返回去
      return config;
    },
    (error) => {
      // 请求错误会到这里面
      console.log(error);
    }
  );

  // 设置响应拦截器
  axiosInstance.interceptors.response.use(
    (res) => {
      // res 是服务器响应回来的信息

      // 同样也需要把返回的数据继续return res.data是服务端真是返回的数据
      return res.data;
    },
    (erroe) => {
      // 请求错误会到这里面
      console.log(error);
    }
  );

  return axiosInstance(config);
}
