import request from './request';


export const searchJson = (params) =>
  request({
    url: '/api/emoji/emoji/searchJson',
    method: 'get',
    params
  })
