import request from '@/utils/request'
export function ArticleAdd(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}
export function ArticleLook(data) {
  return request({
    url: '/article/look',
    method: 'post',
    data
  })
}
export function ArticleDel(data) {
  return request({
    url: '/article/del',
    method: 'post',
    data
  })
}
