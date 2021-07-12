import request from './request';


export const getUser = ({_id}) => {
  return {
    "msg":"ok",
      "ret": 200,
      "data": {
        "gender": "male",
        "following": [],
        "messages": [],
        "name": "蔡镇泉",
        "headline": "世上无难事，只要肯放弃~~",
        "avatar_url": "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
        "self_jokes_list": [{
          "content": "从前有座山，山里有个庙。",
          "imgList": [
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg"
          ]
        }],
        "jokes_loved_list": [
          {
            "content": "从前有座山，山里有个庙。",
            "imgList": [
              "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
              "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
              "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg"
            ]
          }
        ]
    }
  }
  request({
    url: `/api/zhihu/users/${_id}`,
    method: 'get',
  })
}

export const login = (params) => {

  return request({
    url: '/api/zhihu/users/login',
    method: 'post',
    data: params
  })
}

export const followingJokesList = () => {
  return {
    "msg":"ok",
      "ret": 200,
      "data": [{
          "name": "Zenquan",
          "avatar_url": "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
          "content": "<p>冰镇可乐矿泉水，<br/>清凉一夏不后悔。</p>",
          "imgList": [
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg"
          ],
          "comments": [
            {name: 'Jomsou', comment: '哎呦，不错哦！'},
            {name: '小红', comment: '不错'},
            {name: '小明', comment: '不错，不错哦！'},
            {name: '小白', comment: '挺好！'},
          ]
        },
        {
          "name": "Jomsou",
          "avatar_url": "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
          "content": "<p>从前有座山，<br>山里有个庙，<br>庙里有个老和尚</p>",
          "imgList": [
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg",
            "https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg"
          ]
        }]
  }
}
