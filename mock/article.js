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
  }
]
