import request from './request';


export const getUsers = (params) =>
  request({
    url: '/api/zhihu/users',
    method: 'get',
    params
  })
