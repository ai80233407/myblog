export default [
  {
    url: '/article/add',
    type: 'post',
    response: data => {
      return {
        code: 20000,
        data: {
          isok: true,
          result: { id: 5 }
        }
      }
    }
  },
  {
    url: '/article/look',
    type: 'post',
    response: data => {
      return {
        code: 20000,
        data: {
          isok: true,
          result: { title: '欢迎光临', content: '#11111111111111\n##222222222222222' }
        }
      }
    }
  },
  {
    url: '/article/del',
    type: 'post',
    response: data => {
      return {
        code: 20000,
        data: {
          isok: true,
          result: []
        }
      }
    }
  }
]
