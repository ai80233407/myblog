import request from '@/utils/request'
export function ArticleAdd(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}
