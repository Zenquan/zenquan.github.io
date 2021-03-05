import request from './request';


export const getUsers = (params) =>
  request({
    url: '/api/zhihu/users',
    method: 'get',
    params
  })

  export const login= (params) => {
    console.log('>>>', params);
    return request({
      url: '/api/zhihu/users/login',
      method: 'post',
      data: params
    })
  }
