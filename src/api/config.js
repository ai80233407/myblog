import request from '@/utils/request'
export function GetHeaderNav() {
  return request({
    url: '/config/GetHeaderNav',
    method: 'post',
    params: []
  })
}
