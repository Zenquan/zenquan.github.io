import request from './request';


export const searchJson = (params) =>
  request({
    url: '/api/splider/emoji/searchJson',
    method: 'get',
    params
  })
