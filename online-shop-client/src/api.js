import axios from 'axios';

const baseUrl = "http://localhost:4000";

const request = (method, url, configs) => params => {
  return axios[method](`${baseUrl}${url}`, params, configs)
}

export const shop = {
  fetchItems: request('get', '/products', {headers: {'authorization': 'true-token'}})
};

