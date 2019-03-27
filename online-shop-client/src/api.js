const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:3010',
  headers: {
    'Content-Type': 'application/json',
    
  }
})
instance.interceptors.request.use(function (config) {
  console.log('Make request to BE', config.url)
  return config
})
instance.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('response from server')
  return response
})
const request = (method, url) => (params = {}) => {
  if (params.token && method === 'get') {
    instance.defaults.headers.common.Authorization = `Bearer ${params.token}`
  }

  return instance[ method ](url, params)
}
export const shop = {
    fetchItems: request('get', '/products'),
    sendOrder: request('post', '/orders')
  };

