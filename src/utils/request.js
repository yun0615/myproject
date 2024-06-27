/* eslint-disable */
import axios from 'axios';

// create an axios instance
const service = axios.create({
  // baseURL: 'https://scout12.69939.work',
  baseURL: 'https://scout12-backend.69939.work',
  timeout: 300000,
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    if (error.toString() === 'Error: Network Error') {
      window.location.href = BASE_URL
      return
    } else if (error.response) {
      console.error(error.response)
      console.error(error)
      return error.response
    } else {
      return { data: { status_code: 50000, msg: 'No response' } }
    }
  }
)

export default service
