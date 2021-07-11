import axios from 'axios'
import { Toast } from 'vant';

const service = axios.create({
  timeout: 100
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    const {ret, data, msg} = res
    if (ret == 200) {
      return res
    } else {
      Toast(msg)
    }
  },
  (error) => {
    Promise.reject(error)
  }
)

export default service
